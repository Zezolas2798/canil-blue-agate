import React from "react";
import Link from "next/link";
import Image from "next/image";

type PedigreeDog = {
  id: string;
  name: string;
  nickname?: string | null;
  registrationName?: string | null;
  breed?: string | null;
  sex?: string | null;
  profilePhoto?: string | null;
  sire?: PedigreeDog | null;
  dam?: PedigreeDog | null;
};

interface PedigreeTreeProps {
  dog: PedigreeDog;
}

export default function PedigreeTree({ dog }: PedigreeTreeProps) {
  return (
    <div className="w-full overflow-x-auto pb-6 scrollbar-hide">
      <div className="min-w-[900px] flex gap-8 p-6 items-center">
        
        {/* Gen 1: Parents */}
        <div className="flex flex-col gap-10 justify-center">
          <RenderNode node={dog.sire} label="Pai" />
          <RenderNode node={dog.dam} label="Mãe" />
        </div>

        {/* Connectors 1-2 */}
        <div className="flex flex-col justify-around h-[300px] py-8">
          <div className="w-6 h-1/2 border-y border-r border-brand-bronze/20 rounded-r-sm" />
          <div className="w-6 h-1/2 border-y border-r border-brand-bronze/20 rounded-r-sm" />
        </div>

        {/* Gen 2: Grandparents */}
        <div className="flex flex-col gap-6 justify-center">
          <RenderNode node={dog.sire?.sire} label="Avô Paterno" />
          <RenderNode node={dog.sire?.dam} label="Avó Paterna" />
          <RenderNode node={dog.dam?.sire} label="Avô Materno" />
          <RenderNode node={dog.dam?.dam} label="Avó Materna" />
        </div>

        {/* Connectors 2-3 */}
        <div className="flex flex-col justify-around h-[400px] py-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-6 h-[10%] border-y border-r border-brand-bronze/20 rounded-r-sm" />
          ))}
        </div>

        {/* Gen 3: Great Grandparents */}
        <div className="flex flex-col gap-3 justify-center">
          <RenderNode node={dog.sire?.sire?.sire} label="Bisavô" />
          <RenderNode node={dog.sire?.sire?.dam} label="Bisavó" />
          <RenderNode node={dog.sire?.dam?.sire} label="Bisavô" />
          <RenderNode node={dog.sire?.dam?.dam} label="Bisavó" />
          <RenderNode node={dog.dam?.sire?.sire} label="Bisavô" />
          <RenderNode node={dog.dam?.sire?.dam} label="Bisavó" />
          <RenderNode node={dog.dam?.dam?.sire} label="Bisavô" />
          <RenderNode node={dog.dam?.dam?.dam} label="Bisavó" />
        </div>

      </div>
    </div>
  );
}

// Render a generation node
function RenderNode({ node, label }: { node?: PedigreeDog | null; label: string }) {
  const content = (
    <div className={`flex-1 min-w-[150px] p-4 rounded-sm bg-white border border-brand-bronze/10 shadow-sm transition-all duration-500 ${node ? "group hover:border-brand-bronze hover:shadow-lg cursor-pointer" : ""}`}>
      <p className="text-[8px] font-bold text-brand-bronze uppercase tracking-[0.3em] mb-3 border-b border-zinc-50 pb-2 flex justify-between items-center">
        {label}
        {node?.sex && (
          <span className="text-brand-blue opacity-30">
            {node.sex === "M" ? "♂" : "♀"}
          </span>
        )}
      </p>
      {node ? (
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-50 border border-zinc-100 flex-shrink-0 relative">
            {node.profilePhoto ? (
              <Image src={node.profilePhoto} alt={node.name} fill sizes="100px" className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-300 font-bold font-serif">
                BA
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-brand-blue truncate group-hover:text-brand-bronze transition-colors leading-tight">
              {node.nickname || node.name}
            </p>
            {node.registrationName && (
              <p className="text-[8px] text-zinc-400 italic truncate mt-1">
                {node.registrationName}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="py-2 text-center">
          <p className="text-[9px] text-zinc-300 italic tracking-wide">Ancestral não registrado</p>
        </div>
      )}
    </div>
  );

  if (node?.id) {
    return (
      <Link href={`/admin/caes/${node.id}`} className="flex-1 flex flex-col no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
