import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

// --- Rate Limiting ---
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // Max 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  return false;
}

// --- Input Validation Schema ---
const leadSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres.")
    .max(100, "Nome deve ter no máximo 100 caracteres.")
    .transform((val) => stripHtml(val)),
  email: z
    .string()
    .email("Email inválido.")
    .max(150, "Email deve ter no máximo 150 caracteres.")
    .transform((val) => stripHtml(val)),
  phone: z
    .string()
    .min(8, "Telefone deve ter pelo menos 8 caracteres.")
    .max(20, "Telefone deve ter no máximo 20 caracteres.")
    .transform((val) => stripHtml(val)),
  interest: z
    .string()
    .min(2, "Interesse deve ter pelo menos 2 caracteres.")
    .max(300, "Interesse deve ter no máximo 300 caracteres.")
    .transform((val) => stripHtml(val)),
  lifestyle: z
    .string()
    .max(1000, "Estilo de vida deve ter no máximo 1000 caracteres.")
    .optional()
    .default("")
    .transform((val) => stripHtml(val)),
  experience: z
    .string()
    .max(1000, "Experiência deve ter no máximo 1000 caracteres.")
    .optional()
    .default("")
    .transform((val) => stripHtml(val)),
});

// --- XSS Sanitization ---
function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

// --- API Handler ---
export async function POST(request: Request) {
  try {
    // Rate Limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          message:
            "Muitas requisições. Por favor, aguarde um momento antes de tentar novamente.",
        },
        { status: 429 }
      );
    }

    // Parse and validate body
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      return NextResponse.json(
        { message: "Dados inválidos.", errors },
        { status: 400 }
      );
    }

    const { name, email, phone, interest, lifestyle, experience } = result.data;

    // Save to database
    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        interest,
        status: "NOVO",
        answers: JSON.stringify({ lifestyle, experience }),
      },
    });

    return NextResponse.json(
      { success: true, leadId: lead.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { message: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
