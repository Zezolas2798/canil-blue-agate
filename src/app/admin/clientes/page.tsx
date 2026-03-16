import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export default async function AdminClients() {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: "desc" },
    include: { puppiesBought: true }
  });

  async function addClient(formData: FormData) {
    "use server";
    const name = formData.get("name") as string;
    const cpf = formData.get("cpf") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const address = formData.get("address") as string;

    await prisma.client.create({
      data: {
        name,
        cpf: cpf || null,
        phone,
        email: email || null,
        address: address || null,
      }
    });
    revalidatePath("/admin/clientes");
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="font-serif text-3xl font-bold text-white mb-8">Clientes (Compradores)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Form */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl h-fit">
          <h2 className="text-lg font-medium text-white mb-5">Cadastrar Cliente</h2>
          <form action={addClient} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Nome Completo *</label>
              <input name="name" required className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">CPF</label>
              <input name="cpf" placeholder="000.000.000-00" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm font-mono" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">WhatsApp / Telefone *</label>
              <input name="phone" required placeholder="(00) 00000-0000" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Email</label>
              <input name="email" type="email" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Endereço</label>
              <input name="address" placeholder="Rua, Nº – Cidade/UF" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <button type="submit" className="w-full py-2.5 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-500 transition-colors text-sm mt-1">
              Salvar Cliente
            </button>
          </form>
        </div>

        {/* List */}
        <div className="lg:col-span-2 bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-lg font-medium text-white">Clientes Cadastrados ({clients.length})</h2>
          </div>
          <div className="divide-y divide-white/5">
            {clients.length === 0 && (
              <div className="py-12 text-center text-zinc-500 text-sm">Nenhum cliente cadastrado.</div>
            )}
            {clients.map(c => (
              <div key={c.id} className="px-6 py-4 hover:bg-white/5 transition-colors">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-white">{c.name}</p>
                    <p className="text-sm text-zinc-400 mt-0.5">{c.phone} {c.email && `· ${c.email}`}</p>
                    {c.cpf && <p className="text-xs text-zinc-500 font-mono mt-0.5">CPF: {c.cpf}</p>}
                    {c.address && <p className="text-xs text-zinc-600 mt-0.5">{c.address}</p>}
                  </div>
                  {c.puppiesBought.length > 0 && (
                    <span className="text-xs px-2 py-1 bg-amber-500/10 text-amber-400 rounded-full">
                      {c.puppiesBought.length} filhote(s)
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
