import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
import Image from "next/image";
import Link from "next/link";
import PedigreeTree from "@/components/PedigreeTree";
import { calculateAge } from "@/lib/dateUtils";

export default async function DogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const dog: any = await prisma.dog.findUnique({
    where: { id },
    include: {
      sireLitters: { include: { puppies: true } },
      damLitters: { include: { puppies: true } },
      sire: {
        include: {
          sire: { include: { sire: true, dam: true } },
          dam: { include: { sire: true, dam: true } },
        }
      },
      dam: {
        include: {
          sire: { include: { sire: true, dam: true } },
          dam: { include: { sire: true, dam: true } },
        }
      },
    }
  });

  if (!dog) notFound();

  const photos = (() => {
    if (!dog.media) return [];
    try { return JSON.parse(dog.media); } catch { return []; }
  })();

  const allLitters = [...(dog.sireLitters || []), ...(dog.damLitters || [])]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header: Brand Blue */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,122,44,0.08)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/caes" className="text-white/40 hover:text-brand-bronze transition-colors text-xs tracking-widest uppercase flex items-center gap-3 mb-12">
            <span className="w-8 h-[1px] bg-white/20" />
            Voltar ao Plantel
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Resumo Genético</span>
              <h1 className="font-serif text-5xl md:text-7xl text-white">{dog.nickname || dog.name}</h1>
              {dog.registrationName && (
                <p className="text-white/40 font-serif text-xl italic tracking-wide">{dog.registrationName}</p>
              )}
            </div>
            
            <div className="flex items-center gap-4">
               <div className="px-6 py-2 border border-brand-bronze/30 rounded-sm text-brand-bronze text-[10px] font-bold tracking-[0.2em] uppercase">
                 {dog.status}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: White */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Gallery - Minimalist */}
          <div className="space-y-6">
            <div className="aspect-[4/5] relative overflow-hidden bg-zinc-50 rounded-sm">
              {dog.profilePhoto || photos.length > 0 ? (
                <Image 
                  src={dog.profilePhoto || photos[0]} 
                  fill 
                  className="object-cover" 
                  alt={dog.name} 
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-200 font-serif text-4xl">BA</div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-6">
              {photos.filter((p: string) => p !== dog.profilePhoto).slice(0, 4).map((url: string, i: number) => (
                <div key={i} className="aspect-square relative overflow-hidden bg-zinc-50 rounded-sm group cursor-pointer">
                  <Image src={url} fill className="object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Info */}
          <div className="flex flex-col justify-center gap-12 text-[#333F48]">
            <div className="space-y-6">
               <h3 className="font-serif text-3xl text-brand-blue">Perfil Técnico</h3>
               <div className="w-16 h-[1px] bg-brand-bronze" />
            </div>

            <div className="grid grid-cols-2 gap-y-10 gap-x-12">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-2">Raça / Variedade</p>
                <p className="text-brand-blue text-lg font-light tracking-wide">{dog.breed} {dog.variety && <span className="text-zinc-400 font-serif italic text-sm">({dog.variety})</span>}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-2">Sexo</p>
                <p className="text-brand-blue text-lg font-light tracking-wide">{dog.sex === "M" ? "Macho" : "Fêmea"}</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-2">Tonalidade</p>
                <p className="text-brand-blue text-lg font-light tracking-wide">{dog.color}</p>
              </div>
              {dog.birthDate && (
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-2">Nascimento</p>
                    <p className="text-brand-blue text-lg font-light tracking-wide">{new Date(dog.birthDate).toLocaleDateString("pt-BR")}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-2">Idade Atual</p>
                    <p className="text-brand-blue text-lg font-light tracking-wide">{calculateAge(dog.birthDate)}</p>
                  </div>
                </div>
              )}
              {dog.pedigreeId && (
                <div className="col-span-2">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-2">Registro Pedigree</p>
                  <p className="text-brand-blue text-lg font-mono tracking-widest">{dog.pedigreeId}</p>
                </div>
              )}
            </div>

            {/* Health Section - Refined */}
            <div className="p-10 border border-zinc-100 rounded-sm bg-zinc-50/50 space-y-8 mt-4">
              <h4 className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.4em]">Certificados de Saúde</h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col border-l border-brand-bronze/20 pl-4">
                  <span className="text-[8px] text-zinc-400 uppercase tracking-widest mb-1">COI Index</span>
                  <span className="text-brand-blue text-sm font-semibold">{dog.coi || "Auditado"}</span>
                </div>
                <div className="flex flex-col border-l border-brand-bronze/20 pl-4">
                  <span className="text-[8px] text-zinc-400 uppercase tracking-widest mb-1">Disf. Coxo-Femural</span>
                  <span className="text-brand-blue text-sm font-semibold">{dog.hipDysplasia || "Normal / Livre"}</span>
                </div>
                <div className="flex flex-col border-l border-brand-bronze/20 pl-4">
                  <span className="text-[8px] text-zinc-400 uppercase tracking-widest mb-1">Disf. Cotovelo</span>
                  <span className="text-brand-blue text-sm font-semibold">{dog.elbowDysplasia || "Normal / Livre"}</span>
                </div>
                <div className="flex flex-col border-l border-brand-bronze/20 pl-4">
                  <span className="text-[8px] text-zinc-400 uppercase tracking-widest mb-1">Luxação Patela</span>
                  <span className="text-brand-blue text-sm font-semibold">{dog.patellaLuxation || "Grau 0"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pedigree Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Linhagem de 3 Gerações</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-blue">Árvore Genealógica</h2>
            <div className="w-12 h-[1px] bg-zinc-100" />
          </div>
          <div className="overflow-hidden rounded-sm border border-zinc-100 p-8 md:p-12 shadow-sm bg-white">
            <PedigreeTree dog={dog} />
          </div>
        </section>

        {/* Descendants Section */}
        {allLitters.length > 0 && (
          <section className="mb-32">
            <div className="flex flex-col items-center text-center gap-6 mb-16">
              <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Legado</span>
              <h2 className="font-serif text-4xl md:text-5xl text-brand-blue">Descendentes</h2>
              <div className="w-12 h-[1px] bg-zinc-100" />
            </div>
            <div className="space-y-4">
              {allLitters.map((litter) => (
                <div key={litter.id} className="group border-b border-zinc-100 py-8 flex flex-col md:flex-row items-center justify-between transition-all hover:px-6 hover:bg-zinc-50">
                  <div className="text-center md:text-left space-y-1">
                    <h3 className="text-brand-blue font-serif text-2xl group-hover:text-brand-bronze transition-colors">{litter.title || `Ninhada ${new Date(litter.createdAt).getFullYear()}`}</h3>
                    <p className="text-zinc-400 text-[10px] tracking-widest uppercase">{litter.birthDate ? new Date(litter.birthDate).toLocaleDateString("pt-BR") : "Data indefinida"}</p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 my-6 md:my-0">
                    {litter.puppies.map((puppy: any) => (
                      <div key={puppy.id} className="px-3 py-1.5 border border-zinc-100 rounded-sm text-[10px] text-zinc-500 font-bold uppercase tracking-wider bg-white">
                         {puppy.name || "Filhote"}
                      </div>
                    ))}
                  </div>
                  <Link href={`/ninhadas/${litter.id}`} className="btn-outline-gold px-8 py-3">
                    Detalhes
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <div className="py-32 border-t border-zinc-100 text-center">
           <h3 className="font-serif text-4xl text-brand-blue mb-6 tracking-tight">Interessado nesta Linhagem?</h3>
           <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light tracking-wide leading-relaxed">Nossas futuras ninhadas são planejadas para herdar a excelência genética de cães como {dog.nickname || dog.name}.</p>
           <Link href="/ninhadas" className="btn-gold px-12 py-4 inline-block">
              Ver Futuras Ninhadas
           </Link>
        </div>
      </div>
    </div>
  );
}
