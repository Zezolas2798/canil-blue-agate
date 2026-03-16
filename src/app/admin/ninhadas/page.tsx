import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminLitters() {
  const litters = await prisma.litter.findMany({
    include: {
      sire: true,
      dam: true,
      _count: {
        select: { puppies: true }
      }
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Gerenciar Ninhadas</h1>
          <p className="text-sm text-zinc-400 mt-1">Controle de reprodução e filhotes</p>
        </div>
        <Link
          href="/admin/ninhadas/novo"
          className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-500 transition-colors shadow-lg shadow-amber-500/20 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Nova Ninhada
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Total</p>
          <p className="text-2xl font-bold text-white mt-1">{litters.length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Ativas</p>
          <p className="text-2xl font-bold text-green-400 mt-1">{litters.filter(l => l.status === "NASCIDA" || l.status === "DISPONIVEL").length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Planejadas</p>
          <p className="text-2xl font-bold text-blue-400 mt-1">{litters.filter(l => l.status === "PLANEJADA").length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Filhotes</p>
          <p className="text-2xl font-bold text-amber-500 mt-1">{litters.reduce((acc, l) => acc + l._count.puppies, 0)}</p>
        </div>
      </div>

      {/* Litters Grid */}
      {litters.length === 0 ? (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl py-20 text-center">
          <p className="text-zinc-500 text-sm mb-4">Nenhuma ninhada registrada ainda</p>
          <Link href="/admin/ninhadas/novo" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
            Registrar primeira ninhada →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {litters.map((litter) => (
            <Link
              key={litter.id}
              href={`/admin/ninhadas/${litter.id}`}
              className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                    litter.status === "DISPONIVEL" ? "bg-green-500 text-white" :
                    litter.status === "PLANEJADA" ? "bg-blue-500 text-white" :
                    litter.status === "NASCIDA" ? "bg-amber-500 text-black" :
                    "bg-zinc-600 text-zinc-200"
                  }`}>
                    {litter.status}
                  </span>
                  <p className="text-[11px] text-zinc-500">
                    {litter.birthDate ? new Date(litter.birthDate).toLocaleDateString("pt-BR") : "Data a definir"}
                  </p>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                  {litter.title || "Ninhada s/ Título"}
                </h3>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold border border-blue-500/20">
                      ♂
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs text-zinc-500 uppercase tracking-tighter">Padreador</p>
                      <p className="text-sm text-zinc-200 truncate">{litter.sire?.nickname || litter.sire?.name || "N/A"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-[10px] text-pink-400 font-bold border border-pink-500/20">
                      ♀
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs text-zinc-500 uppercase tracking-tighter">Matriz</p>
                      <p className="text-sm text-zinc-200 truncate">{litter.dam?.nickname || litter.dam?.name || "N/A"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 bg-zinc-950/50 border-t border-white/5 flex items-center justify-between">
                <p className="text-sm text-zinc-400">
                  <span className="text-white font-bold">{litter._count.puppies}</span> Filhotes
                </p>
                <span className="text-amber-500 text-xs font-semibold">Editar →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
