"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Dog {
  id: string;
  name: string;
  nickname: string | null;
  breed: string;
  sex: string;
  color: string;
  status: string;
  profilePhoto: string | null;
  media: string | null;
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
  const [filter, setFilter] = useState("ALL");

  const filteredDogs = filter === "ALL" 
    ? initialDogs 
    : initialDogs.filter(dog => dog.status === filter);

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 pb-8 border-b border-zinc-100">
        {statusFilters.map((s) => (
          <button
            key={s.value}
            onClick={() => setFilter(s.value)}
            className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 relative pb-2 ${
              filter === s.value 
                ? "text-brand-bronze" 
                : "text-zinc-400 hover:text-brand-blue"
            }`}
          >
            {s.label}
            {filter === s.value && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-bronze animate-in fade-in slide-in-from-left-2 duration-500" />
            )}
          </button>
        ))}
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
                  <span className="text-brand-bronze text-[8px] tracking-[0.2em] uppercase font-bold">
                    {dog.breed}
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-brand-blue group-hover:text-brand-bronze transition-colors duration-300 truncate">
                  {dog.nickname || dog.name}
                </h2>
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
