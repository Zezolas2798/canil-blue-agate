import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export default async function AdminVaccines() {
  // Get all pending/overdue vaccines
  const pending = await prisma.vaccine.findMany({
    where: { status: { in: ["PENDENTE", "ATRASADA"] } },
    orderBy: { dueDate: "asc" },
    include: {
      dog: { select: { name: true } },
      puppy: { select: { name: true, litter: { select: { title: true } } } },
    }
  });

  // Update overdue vaccines automatically
  const now = new Date();
  await prisma.vaccine.updateMany({
    where: { status: "PENDENTE", dueDate: { lt: now } },
    data: { status: "ATRASADA" }
  });

  // Applied vaccines (last 30 days)
  const recent = await prisma.vaccine.findMany({
    where: { status: "APLICADA" },
    orderBy: { appliedDate: "desc" },
    take: 20,
    include: {
      dog: { select: { name: true } },
      puppy: { select: { name: true } },
    }
  });

  const dogs = await prisma.dog.findMany({ where: { status: "ATIVO" }, select: { id: true, name: true } });

  async function addVaccine(formData: FormData) {
    "use server";
    const name = formData.get("vaccineName") as string;
    const dueDate = formData.get("dueDate") as string;
    const dogId = formData.get("dogId") as string;

    await prisma.vaccine.create({
      data: {
        name,
        dueDate: new Date(dueDate),
        status: "PENDENTE",
        dogId: dogId || null,
      }
    });
    revalidatePath("/admin/vacinas");
  }

  async function markApplied(formData: FormData) {
    "use server";
    const vaccineId = formData.get("vaccineId") as string;
    await prisma.vaccine.update({
      where: { id: vaccineId },
      data: { status: "APLICADA", appliedDate: new Date() }
    });
    revalidatePath("/admin/vacinas");
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-serif text-3xl font-bold text-white">Controle Sanitário & Vacinas</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add Vaccine Form */}
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl h-fit">
          <h2 className="text-lg font-medium text-white mb-5">Agendar Vacina / Vermífugo</h2>
          <form action={addVaccine} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Tipo *</label>
              <select name="vaccineName" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
                <option value="V8">V8</option>
                <option value="V10">V10</option>
                <option value="Antirrábica">Antirrábica</option>
                <option value="Vermífugo">Vermífugo</option>
                <option value="Gripe">Gripe Canina</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Data Prevista *</label>
              <input name="dueDate" type="date" required className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Cão (do Plantel)</label>
              <select name="dogId" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2 text-white text-sm">
                <option value="">Selecionar cão...</option>
                {dogs.map(d => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="w-full py-2.5 bg-brand-bronze text-white rounded-lg font-semibold hover:bg-brand-gold transition-colors text-sm mt-1">
              Agendar
            </button>
          </form>
        </div>

        {/* Pending / Overdue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <h2 className="text-lg font-medium text-white">Pendentes e Atrasadas ({pending.length})</h2>
            </div>
            {pending.length === 0 ? (
              <div className="py-10 text-center text-zinc-500 text-sm">✓ Nada pendente. Tudo em dia!</div>
            ) : (
              <table className="w-full text-sm text-zinc-400">
                <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-500 border-b border-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left">Animal</th>
                    <th className="px-4 py-3 text-left">Vacina</th>
                    <th className="px-4 py-3 text-left">Data Prevista</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {pending.map((v) => (
                    <tr key={v.id} className="border-b border-white/5 hover:bg-white/5">
                      <td className="px-4 py-3 font-medium text-white">
                        {v.dog?.name ?? v.puppy?.name ?? "—"}
                      </td>
                      <td className="px-4 py-3">{v.name}</td>
                      <td className="px-4 py-3">{new Date(v.dueDate).toLocaleDateString("pt-BR")}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider ${
                          v.status === "ATRASADA" ? "bg-red-500/20 text-red-400" : "bg-brand-gold/20 text-brand-gold"
                        }`}>
                          {v.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <form action={markApplied}>
                          <input type="hidden" name="vaccineId" value={v.id} />
                          <button type="submit" className="text-xs px-3 py-1 bg-green-600/20 text-green-400 rounded-lg hover:bg-green-600/40 transition-colors">
                            Marcar Aplicada
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Recent applied */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5">
              <h2 className="text-lg font-medium text-white">Aplicadas Recentemente</h2>
            </div>
            {recent.length === 0 ? (
              <div className="py-8 text-center text-zinc-500 text-sm">Nenhum registro de aplicação ainda.</div>
            ) : (
              <table className="w-full text-sm text-zinc-400">
                <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-500 border-b border-white/5">
                  <tr>
                    <th className="px-4 py-3 text-left">Animal</th>
                    <th className="px-4 py-3 text-left">Vacina</th>
                    <th className="px-4 py-3 text-left">Aplicada em</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((v) => (
                    <tr key={v.id} className="border-b border-white/5">
                      <td className="px-4 py-3 font-medium text-white">
                        {v.dog?.name ?? v.puppy?.name ?? "—"}
                      </td>
                      <td className="px-4 py-3">{v.name}</td>
                      <td className="px-4 py-3 text-green-400">
                        {v.appliedDate ? new Date(v.appliedDate).toLocaleDateString("pt-BR") : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
