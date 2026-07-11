"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { BREEDS, getBreedDisplayLabel } from "@/lib/breed-config";

interface Dog {
  id: string;
  name: string;
  nickname: string | null;
  breed: string;
  variety: string | null;
  sex: string;
  color: string;
  status: string;
  profilePhoto: string | null;
  media: string | null;
  registro: string | null;
}

interface DogsListClientProps {
  initialDogs: Dog[];
}

const statusFilters = [
  { label: "Todos", value: "ALL" },
  { label: "Ativos", value: "ATIVO" },
  { label: "Aposentados", value: "APOSENTADO" },
  { label: "Vendidos", value: "VENDIDO" },
  { label: "Falecidos", value: "OBITO" },
];

export default function DogsListClient({ initialDogs }: DogsListClientProps) {
  const searchParams = useSearchParams();
  const initialBreed = searchParams?.get("breed") || "TODOS";

  const [statusFilter, setStatusFilter] = useState("ALL");
  const [breedFilter, setBreedFilter] = useState(initialBreed);

  useEffect(() => {
    if (searchParams) {
      setBreedFilter(searchParams.get("breed") || "TODOS");
    }
  }, [searchParams]);

  const filteredDogs = initialDogs.filter(dog => {
    const matchStatus = statusFilter === "ALL" || dog.status === statusFilter;
    const matchBreed = breedFilter === "TODOS" || dog.breed === breedFilter;
    return matchStatus && matchBreed;
  });

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-100">
        
        {/* Breed Filters */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setBreedFilter("TODOS")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
              breedFilter === "TODOS"
                ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
                : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
            }`}
          >
            Todas as Raças
          </button>
          {BREEDS.map((b) => (
            <button
              key={b.slug}
              onClick={() => setBreedFilter(b.slug)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                breedFilter === b.slug
                  ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
                  : "bg-zinc-50 text-zinc-500 hover:bg-zinc-100"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          {statusFilters.map((s) => (
            <button
              key={s.value}
              onClick={() => setStatusFilter(s.value)}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 relative pb-2 ${
                statusFilter === s.value 
                  ? "text-brand-bronze" 
                  : "text-zinc-400 hover:text-brand-blue"
              }`}
            >
              {s.label}
              {statusFilter === s.value && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-bronze animate-in fade-in slide-in-from-left-2 duration-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredDogs.length === 0 ? (
        <div className="text-center py-40 border border-zinc-100 rounded-sm bg-zinc-50/30">
          <p className="text-zinc-400 font-light italic">Nenhum cão encontrado com este status.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredDogs.map((dog) => (
            <Link href={`/caes/${dog.id}`} key={dog.id} className="group flex flex-col">
              <div className="relative aspect-square overflow-hidden bg-zinc-50 rounded-sm mb-4 transition-all duration-700 group-hover:shadow-2xl">
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-500 z-10" />
                
                {(dog.profilePhoto || dog.media) ? (
                  <Image 
                    src={dog.profilePhoto || (() => { try { return JSON.parse(dog.media!)[0]; } catch { return dog.media!.split(',')[0]; } })()} 
                    alt={dog.name}
                    fill
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-200 font-serif">
                    <span className="text-4xl font-bold opacity-20">BA</span>
                  </div>
                )}
                
                {/* Status Badge: Minimalist */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`bg-white/90 backdrop-blur-sm text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-sm shadow-sm ${
                    dog.status === "ATIVO" ? "text-brand-blue" :
                    dog.status === "OBITO" ? "text-red-500" :
                    dog.status === "APOSENTADO" ? "text-zinc-500" :
                    "text-brand-bronze"
                  }`}>
                    {dog.status === "OBITO" ? "FALECIDO" : dog.status}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-brand-bronze" />
                  <span className="text-brand-bronze text-[8px] tracking-[0.15em] uppercase font-bold truncate">
                    {getBreedDisplayLabel(dog.breed, dog.variety)}
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-brand-blue group-hover:text-brand-bronze transition-colors duration-300 truncate">
                  {dog.nickname || dog.name}
                </h2>
                {dog.registro && (
                  <p className="text-zinc-400 text-[10px] font-mono tracking-wider">{dog.registro}</p>
                )}
                <div className="flex items-center gap-3 text-[9px] text-[#333F48]/60 uppercase tracking-widest font-light">
                  <span>{dog.sex === "M" ? "Macho" : "Fêmea"}</span>
                  <span className="w-1 h-1 bg-brand-bronze rounded-full" />
                  <span className="truncate">{dog.color}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
