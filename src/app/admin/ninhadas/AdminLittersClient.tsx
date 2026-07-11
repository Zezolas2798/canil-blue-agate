"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BREEDS, getBreedDisplayLabel } from "@/lib/breed-config";

export default function AdminLittersClient({ initialLitters }: { initialLitters: any[] }) {
  const searchParams = useSearchParams();
  const initialBreed = searchParams?.get("breed") || "TODOS";
  const [activeBreed, setActiveBreed] = useState(initialBreed);

  useEffect(() => {
    if (searchParams) {
      setActiveBreed(searchParams.get("breed") || "TODOS");
    }
  }, [searchParams]);

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set(key, value);
    window.history.pushState(null, "", `?${params.toString()}`);
    if (key === "breed") setActiveBreed(value);
  };

  let litters = initialLitters;
  if (activeBreed !== "TODOS") {
    litters = litters.filter(l => l.breed === activeBreed);
  }

  return (
    <>
      {/* Breed Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setFilter("breed", "TODOS")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
            activeBreed === "TODOS"
              ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
              : "bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/10 hover:text-white"
          }`}
        >
          Todas as Raças
        </button>
        {BREEDS.map((b) => (
          <button
            key={b.slug}
            onClick={() => setFilter("breed", b.slug)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeBreed === b.slug
                ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
                : "bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/10 hover:text-white"
            }`}
          >
            {b.label}
          </button>
        ))}
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
          <p className="text-2xl font-bold text-brand-gold mt-1">{litters.reduce((acc, l) => acc + (l._count?.puppies || 0), 0)}</p>
        </div>
      </div>

      {/* Litters Grid */}
      {litters.length === 0 ? (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl py-20 text-center">
          <p className="text-zinc-500 text-sm mb-4">Nenhuma ninhada registrada ainda</p>
          <Link href="/admin/ninhadas/novo" className="text-brand-gold hover:text-brand-gold/80 text-sm font-medium">
            Registrar primeira ninhada →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {litters.map((litter) => (
            <Link
              key={litter.id}
              href={`/admin/ninhadas/${litter.id}`}
              className="group bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-bronze/30 transition-all duration-300 flex flex-col"
            >
              <div className="p-5 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider ${
                    litter.status === "DISPONIVEL" ? "bg-green-500 text-white" :
                    litter.status === "PLANEJADA" ? "bg-blue-500 text-white" :
                    litter.status === "NASCIDA" ? "bg-brand-bronze text-white" :
                    "bg-zinc-600 text-zinc-200"
                  }`}>
                    {litter.status}
                  </span>
                  <p className="text-[11px] text-zinc-500">
                    {litter.birthDate ? new Date(litter.birthDate).toLocaleDateString("pt-BR") : "Data a definir"}
                  </p>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                  {litter.title || "Ninhada s/ Título"}
                </h3>
                
                {litter.breed && (
                  <p className="text-xs text-brand-bronze mt-1">
                    {getBreedDisplayLabel(litter.breed, litter.variety)}
                  </p>
                )}

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
                  <span className="text-white font-bold">{litter._count?.puppies || 0}</span> Filhotes
                </p>
                <span className="text-amber-500 text-xs font-semibold">Editar →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
