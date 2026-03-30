import { createSupabaseServerClient } from "./supabase/server";

export async function requireAdminAuth() {
  const supabase = await createSupabaseServerClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Acesso negado. Sessão de administrador inválida ou expirada.");
  }

  return user;
}
