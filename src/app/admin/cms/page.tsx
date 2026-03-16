import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// Seed default configs if they don't exist yet
async function ensureDefaults() {
  const defaults = [
    { key: "titulo_hero", value: "O Padrão Ouro em Criação Canina", label: "Título da Home", type: "text" },
    { key: "subtitulo_hero", value: "Genética de ponta, estrutura impecável e o temperamento perfeito.", label: "Subtítulo da Home", type: "text" },
    { key: "texto_quem_somos", value: "O Canil Blue Agate é um canil especializado em...", label: "Texto 'Quem Somos'", type: "richtext" },
    { key: "link_instagram", value: "", label: "Link do Instagram", type: "url" },
    { key: "link_whatsapp", value: "", label: "Número do WhatsApp (com DDD)", type: "text" },
    { key: "link_facebook", value: "", label: "Link do Facebook", type: "url" },
  ];

  for (const d of defaults) {
    await prisma.siteConfig.upsert({
      where: { key: d.key },
      update: {},
      create: d,
    });
  }
}

export default async function AdminCMS() {
  await ensureDefaults();

  const configs = await prisma.siteConfig.findMany({
    orderBy: { key: "asc" }
  });

  async function saveConfig(formData: FormData) {
    "use server";
    const entries = Array.from(formData.entries());
    for (const [key, value] of entries) {
      await prisma.siteConfig.update({
        where: { key },
        data: { value: value as string }
      });
    }
    revalidatePath("/admin/cms");
    revalidatePath("/");
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="font-serif text-3xl font-bold text-white mb-3">Configurações do Site</h1>
      <p className="text-zinc-400 text-sm mb-10">
        Edite aqui os textos e links que aparecem na página pública. As alterações são refletidas imediatamente após salvar.
      </p>

      <form action={saveConfig} className="space-y-8">
        
        {/* Texts Section */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
          <h2 className="text-base font-semibold text-amber-500 uppercase tracking-widest mb-6">Textos da Home</h2>
          <div className="space-y-5">
            {configs.filter(c => c.type === "text" && !c.key.startsWith("link_")).map(c => (
              <div key={c.key}>
                <label className="block text-sm font-medium text-zinc-300 mb-1">{c.label}</label>
                <input
                  name={c.key}
                  defaultValue={c.value}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            ))}
            {configs.filter(c => c.type === "richtext").map(c => (
              <div key={c.key}>
                <label className="block text-sm font-medium text-zinc-300 mb-1">{c.label}</label>
                <textarea
                  name={c.key}
                  defaultValue={c.value}
                  rows={5}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl">
          <h2 className="text-base font-semibold text-amber-500 uppercase tracking-widest mb-6">Redes Sociais & Contato</h2>
          <div className="space-y-5">
            {configs.filter(c => c.key.startsWith("link_")).map(c => (
              <div key={c.key}>
                <label className="block text-sm font-medium text-zinc-300 mb-1">{c.label}</label>
                <input
                  name={c.key}
                  defaultValue={c.value}
                  placeholder={c.type === "url" ? "https://..." : "Ex: 15991234567"}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors font-mono"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit"
            className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-500 transition-colors"
          >
            Salvar Configurações
          </button>
        </div>
      </form>
    </div>
  );
}
