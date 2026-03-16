import prisma from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDogs() {
  const dogs = await prisma.dog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-white">Gerenciar Cães</h1>
          <p className="text-sm text-zinc-400 mt-1">Plantel completo do canil</p>
        </div>
        <Link
          href="/admin/caes/novo"
          className="px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-500 transition-colors shadow-lg shadow-amber-500/20 flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Cadastrar Cão
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Total</p>
          <p className="text-2xl font-bold text-white mt-1">{dogs.length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Ativos</p>
          <p className="text-2xl font-bold text-green-400 mt-1">{dogs.filter(d => d.status === "ATIVO").length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Machos</p>
          <p className="text-2xl font-bold text-blue-400 mt-1">{dogs.filter(d => d.sex === "M").length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Fêmeas</p>
          <p className="text-2xl font-bold text-pink-400 mt-1">{dogs.filter(d => d.sex === "F").length}</p>
        </div>
      </div>

      {/* Dog Cards Grid */}
      {dogs.length === 0 ? (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl py-20 text-center">
          <svg className="w-12 h-12 text-zinc-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-zinc-400 text-sm mb-4">Nenhum cão cadastrado ainda</p>
          <Link href="/admin/caes/novo" className="text-amber-500 hover:text-amber-400 text-sm font-medium">
            Cadastrar o primeiro cão →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {dogs.map((dog) => (
            <Link
              key={dog.id}
              href={`/admin/caes/${dog.id}`}
              className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
            >
              {/* Profile Photo */}
              <div className="aspect-square bg-zinc-800 relative overflow-hidden">
                {dog.profilePhoto ? (
                  <img
                    src={dog.profilePhoto}
                    alt={dog.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-8 h-8 text-zinc-700 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-zinc-600 text-[10px]">Sem foto</p>
                    </div>
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider shadow-lg ${
                    dog.status === "ATIVO" ? "bg-green-500 text-white" :
                    dog.status === "APOSENTADO" ? "bg-zinc-600 text-zinc-200" :
                    dog.status === "OBITO" ? "bg-red-600 text-white" :
                    "bg-amber-500 text-black"
                  }`}>
                    {dog.status}
                  </span>
                </div>
                {/* Sex icon */}
                <div className="absolute top-2 left-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg ${
                    dog.sex === "M" ? "bg-blue-500 text-white" : "bg-pink-500 text-white"
                  }`}>
                    {dog.sex === "M" ? "♂" : "♀"}
                  </span>
                </div>
                {/* Edit overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-amber-600 text-white text-xs font-medium rounded-lg shadow-lg">
                    Editar Perfil
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="font-semibold text-white group-hover:text-amber-400 transition-colors truncate text-sm">
                  {dog.nickname || dog.name}
                </p>
                {dog.registrationName && (
                  <p className="text-zinc-500 text-[10px] italic truncate mt-0.5">{dog.registrationName}</p>
                )}
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] text-zinc-400 truncate">{dog.breed}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] text-zinc-500">
                  <span className="truncate">{dog.color}</span>
                  {dog.microchip && (
                    <>
                      <span className="text-zinc-700">·</span>
                      <span className="font-mono text-zinc-600 truncate">{dog.microchip.slice(-6)}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
