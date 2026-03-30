import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Max file size: 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    // Auth is already checked by middleware, but we need the Supabase client
    // to upload with the user's auth context
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll() {
            // Not needed for API routes reading cookies
          },
        },
      }
    );

    // Double-check auth (defense in depth)
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: "Não autorizado. Faça login para enviar arquivos." },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 });
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Arquivo muito grande. Máximo permitido: ${MAX_FILE_SIZE / (1024 * 1024)}MB.` },
        { status: 400 }
      );
    }

    // Validate file type (MIME)
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      return NextResponse.json(
        { error: "Tipo de arquivo não permitido. Use JPG, PNG, WebP ou GIF." },
        { status: 400 }
      );
    }

    // Generate unique filename
    const ext = file.name.split(".").pop() || "jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
    const filePath = `uploads/${filename}`;

    // Convert file to ArrayBuffer for Supabase
    const bytes = await file.arrayBuffer();

    // Upload to Supabase Storage using the authenticated client
    const { data, error } = await supabase.storage
      .from("kennel-media")
      .upload(filePath, bytes, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Supabase Storage Error:", error);
      return NextResponse.json(
        { error: `Erro no upload: ${error.message}` },
        { status: 500 }
      );
    }

    // Get Public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from("kennel-media").getPublicUrl(filePath);

    return NextResponse.json({ url: publicUrl });
  } catch (err: any) {
    console.error("Upload API Error:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor de upload" },
      { status: 500 }
    );
  }
}
