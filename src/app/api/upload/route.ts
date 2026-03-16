import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
  }

  // Validate file type
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(file.type)) {
    return NextResponse.json({ error: "Tipo de arquivo não permitido. Use JPG, PNG, WebP ou GIF." }, { status: 400 });
  }

  // Create uploads directory if it doesn't exist
  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await mkdir(uploadsDir, { recursive: true });

  // Generate unique filename
  const ext = file.name.split(".").pop() || "jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const filePath = path.join(uploadsDir, filename);

  // Write the file
  const bytes = await file.arrayBuffer();
  await writeFile(filePath, Buffer.from(bytes));

  // Return the public URL
  const url = `/uploads/${filename}`;
  return NextResponse.json({ url });
}
