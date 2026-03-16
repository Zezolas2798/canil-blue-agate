import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function AdminFinanceiro() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { date: "desc" },
    take: 50,
    include: { client: { select: { name: true } } }
  });

  const entradas = transactions.filter(t => t.type === "ENTRADA").reduce((s, t) => s + t.amount, 0);
  const saidas = transactions.filter(t => t.type === "SAIDA").reduce((s, t) => s + t.amount, 0);
  const saldo = entradas - saidas;

  async function addTransaction(formData: FormData) {
    "use server";
    const type = formData.get("type") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const date = formData.get("date") as string;

    await prisma.transaction.create({
      data: { type, category, description, amount, date: new Date(date) }
    });
    revalidatePath("/admin/financeiro");
  }

  const fmt = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="font-serif text-3xl font-bold text-white mb-8">Fluxo de Caixa</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl">
          <p className="text-green-400 text-sm font-medium mb-1">Total de Entradas</p>
          <p className="text-3xl font-bold text-green-300">{fmt(entradas)}</p>
        </div>
        <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl">
          <p className="text-red-400 text-sm font-medium mb-1">Total de Saídas</p>
          <p className="text-3xl font-bold text-red-300">{fmt(saidas)}</p>
        </div>
        <div className={`border p-6 rounded-2xl ${saldo >= 0 ? "bg-amber-500/10 border-amber-500/20" : "bg-red-900/20 border-red-500/20"}`}>
          <p className={`text-sm font-medium mb-1 ${saldo >= 0 ? "text-amber-400" : "text-red-400"}`}>Saldo Atual</p>
          <p className={`text-3xl font-bold ${saldo >= 0 ? "text-amber-300" : "text-red-300"}`}>{fmt(saldo)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Form */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl h-fit">
          <h2 className="text-lg font-medium text-white mb-5">Nova Transação</h2>
          <form action={addTransaction} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Tipo *</label>
              <select name="type" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
                <option value="ENTRADA">Entrada (+)</option>
                <option value="SAIDA">Saída (−)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Categoria *</label>
              <select name="category" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
                <option value="VENDA">Venda de Filhote</option>
                <option value="VETERINARIO">Veterinário</option>
                <option value="RACAO">Ração e Suprimentos</option>
                <option value="MARKETING">Marketing</option>
                <option value="EXAMES">Exames e Laudos</option>
                <option value="OUTRO">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Descrição *</label>
              <input name="description" required placeholder="Ex: Venda filhote Ninhada Verão" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Valor (R$) *</label>
              <input name="amount" required type="number" step="0.01" min="0" placeholder="0,00" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm font-mono" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Data *</label>
              <input name="date" type="date" required className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <button type="submit" className="w-full py-2.5 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-500 transition-colors text-sm mt-1">
              Registrar
            </button>
          </form>
        </div>

        {/* Transaction List */}
        <div className="lg:col-span-2 bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h2 className="text-lg font-medium text-white">Últimos Lançamentos</h2>
          </div>
          <div className="divide-y divide-white/5">
            {transactions.length === 0 && (
              <div className="py-12 text-center text-zinc-500 text-sm">Nenhum lançamento registrado.</div>
            )}
            {transactions.map(t => (
              <div key={t.id} className="px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{t.description}</p>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {t.category} · {new Date(t.date).toLocaleDateString("pt-BR")}
                    {t.client && ` · ${t.client.name}`}
                  </p>
                </div>
                <span className={`text-sm font-bold font-mono whitespace-nowrap ${t.type === "ENTRADA" ? "text-green-400" : "text-red-400"}`}>
                  {t.type === "ENTRADA" ? "+" : "−"}{fmt(t.amount)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
