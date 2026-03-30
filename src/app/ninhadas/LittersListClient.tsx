"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LitterCarousel from "@/components/LitterCarousel";

interface Litter {
  id: string;
  title: string | null;
  status: string;
  birthDate: string | Date | null;
  media: string | null;
  sire: { id: string; name: string; nickname: string | null; profilePhoto: string | null };
  dam: { id: string; name: string; nickname: string | null; profilePhoto: string | null };
  puppies: any[];
}

interface LittersListClientProps {
  initialLitters: Litter[];
}

const statusFilters = [
  { label: "Todas", value: "ALL" },
  { label: "Disponíveis", value: "DISPONIVEL" },
  { label: "Planejadas", value: "PLANEJADA" },
  { label: "Encerradas", value: "ENCERRADA" },
];

export default function LittersListClient({ initialLitters }: LittersListClientProps) {
  const [filter, setFilter] = useState("ALL");

  const filteredLitters = filter === "ALL" 
    ? initialLitters 
    : initialLitters.filter(litter => litter.status === filter);

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 pb-8 border-b border-zinc-100">
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
      {filteredLitters.length === 0 ? (
        <div className="text-center py-40 border border-zinc-100 rounded-sm bg-zinc-50/30">
          <p className="text-zinc-400 font-light italic">Nenhuma ninhada encontrada com este status.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredLitters.map((litter) => (
            <div key={litter.id} className="group flex flex-col md:flex-row gap-8 items-stretch border-b border-zinc-100 pb-10">
              <div className="relative w-full md:w-1/2 aspect-[3/2] bg-zinc-50 overflow-hidden rounded-sm group-hover:shadow-xl transition-shadow duration-500">
                <LitterCarousel media={litter.media} title={litter.title || "Ninhada"} />
                
                {/* Status Overlay */}
                <div className="absolute top-6 left-6">
                  <span className={`bg-brand-bronze text-white text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-sm shadow-lg ${
                    litter.status === 'PLANEJADA' ? 'bg-brand-blue' :
                    litter.status === 'ENCERRADA' ? 'bg-zinc-500' : 'bg-brand-bronze'
                  }`}>
                    {litter.status === 'ENCERRADA' ? 'ENCERRADA' : litter.status}
                  </span>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-between py-2">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-brand-bronze text-[10px] tracking-[0.3em] uppercase font-bold">
                      {litter.birthDate ? new Date(litter.birthDate!).toLocaleDateString("pt-BR") : "Data Planejada"}
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-brand-blue leading-tight group-hover:text-brand-bronze transition-colors">
                      {litter.title || "Ninhada Exclusiva"}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-6 items-center pt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-100 relative grayscale-[0.5]">
                          <Image src={litter.sire?.profilePhoto || "/placeholder-dog.png"} fill className="object-cover" alt="Sire" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-brand-blue text-[10px] font-medium truncate max-w-[80px]">
                            {litter.sire?.nickname || litter.sire?.name || "Pai"}
                          </span>
                        </div>
                      </div>
                      <div className="text-zinc-200 text-xs">×</div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-100 relative grayscale-[0.5]">
                          <Image src={litter.dam?.profilePhoto || "/placeholder-dog.png"} fill className="object-cover" alt="Dam" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-brand-blue text-[10px] font-medium truncate max-w-[80px]">
                            {litter.dam?.nickname || litter.dam?.name || "Mãe"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-2">
                     {litter.puppies.length > 0 ? (
                       (() => {
                          const counts = (litter.puppies || []).reduce((acc: any, p: any) => {
                            const sex = p.sex === 'M' ? 'Macho' : 'Fêmea';
                            acc[sex] = (acc[sex] || 0) + 1;
                            return acc;
                          }, {});
                          return Object.entries(counts).map(([sex, count]) => (
                             <span key={sex} className="px-3 py-1 bg-brand-bronze/5 text-brand-bronze text-[8px] font-bold uppercase tracking-wider rounded-sm border border-brand-bronze/10">
                               {sex}s: {count as number}
                             </span>
                          ));
                       })()
                     ) : (
                       <span className="text-zinc-400 text-[10px] italic">Aguardando nascimento...</span>
                     )}
                  </div>
                </div>

                <div className="pt-8">
                  <Link href={`/ninhadas/${litter.id}`} className="btn-gold px-10 py-3 block text-center text-xs">
                    Detalhes da Ninhada
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
