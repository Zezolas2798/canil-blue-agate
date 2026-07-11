import { createSupabaseServerClient } from "./supabase/server";

export async function requireAdminAuth() {
  const supabase = await createSupabaseServerClient();
  const { data: { session }, error } = await supabase.auth.getSession();
  const user = session?.user;

  if (error || !user) {
    throw new Error("Acesso negado. Sessão de administrador inválida ou expirada.");
  }

  return user;
}
