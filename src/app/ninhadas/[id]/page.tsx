import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

export const revalidate = 3600;
import Image from "next/image";
import Link from "next/link";
import PedigreeTree from "@/components/PedigreeTree";
import LitterCarousel from "@/components/LitterCarousel";
import { getBreedDisplayLabel } from "@/lib/breed-config";

export default async function LitterDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const litter: any = await prisma.litter.findUnique({
    where: { id },
    include: {
      sire: {
        include: {
          sire: { include: { sire: true, dam: true } },
          dam: { include: { sire: true, dam: true } }
        }
      },
      dam: {
        include: {
          sire: { include: { sire: true, dam: true } },
          dam: { include: { sire: true, dam: true } }
        }
      },
      puppies: true,
    }
  });

  if (!litter) notFound();

  const photos = (() => {
    if (!litter.media) return [];
    try { return JSON.parse(litter.media); } catch { return []; }
  })();

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header: Brand Blue */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,122,44,0.08)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link href="/ninhadas" className="text-white/40 hover:text-brand-bronze transition-colors text-xs tracking-widest uppercase flex items-center gap-3 mb-12">
            <span className="w-8 h-[1px] bg-white/20" />
            Voltar para Ninhadas
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Acompanhamento Exclusivo</span>
              <h1 className="font-serif text-5xl md:text-7xl text-white">
                {litter.title || "Ninhada Selecionada"}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="px-6 py-2 border border-brand-bronze/30 rounded-sm text-brand-bronze text-[10px] font-bold tracking-[0.2em] uppercase">
                {litter.status}
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
            <div className="aspect-video relative overflow-hidden bg-zinc-50 rounded-sm">
              {photos.length > 0 ? (
                <Image src={photos[0]} fill className="object-cover" alt={litter.title || "Ninhada"} />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-zinc-200 font-serif text-4xl opacity-20">BA</div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-6">
              {photos.slice(1, 5).map((url: string, i: number) => (
                <div key={i} className="aspect-square relative overflow-hidden bg-zinc-50 rounded-sm group cursor-pointer">
                  <Image src={url} fill className="object-cover transition-transform duration-500 group-hover:scale-110" alt="Gallery" />
                </div>
              ))}
            </div>
          </div>

          {/* Technical Section */}
          <div className="flex flex-col justify-center gap-12 text-[#333F48]">
            <div className="space-y-6">
              <h3 className="font-serif text-3xl text-brand-blue">Especificações da Ninhada</h3>
              <div className="w-16 h-[1px] bg-brand-bronze" />
            </div>

            <div className="grid grid-cols-2 gap-y-10 items-center border-b border-zinc-100 pb-12">
              <div className="col-span-2">
                <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold mb-1">Raça / Variedade</p>
                <p className="text-brand-blue text-lg font-light tracking-wide">{getBreedDisplayLabel(litter.breed, litter.variety)}</p>
              </div>
              {litter.birthDate && (
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold">Nascimento</p>
                  <p className="text-brand-blue text-lg font-light tracking-wide">{new Date(litter.birthDate).toLocaleDateString("pt-BR")}</p>
                </div>
              )}
              <div className="flex flex-col gap-1">
                <p className="text-[9px] uppercase tracking-[0.3em] text-brand-bronze font-bold">Investimento</p>
                <p className="text-brand-blue text-lg font-light tracking-wide">{litter.price ? `R$ ${litter.price.toLocaleString("pt-BR")}` : "Consultar Curadoria"}</p>
              </div>
            </div>

            <div className="space-y-6 pt-4">
              <div className="grid grid-cols-2 gap-10">
                <Link href={`/caes/${litter.sireId}`} className="group flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-100 group-hover:border-brand-bronze transition-colors relative">
                    <Image src={litter.sire?.profilePhoto || "/placeholder-dog.png"} fill className="object-cover" alt="Sire" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-400 uppercase tracking-widest">Pai</span>
                    <span className="text-brand-blue font-serif text-lg group-hover:text-brand-bronze transition-colors">{litter.sire?.nickname || litter.sire?.name}</span>
                  </div>
                </Link>
                <Link href={`/caes/${litter.damId}`} className="group flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-100 group-hover:border-brand-bronze transition-colors relative">
                    <Image src={litter.dam?.profilePhoto || "/placeholder-dog.png"} fill className="object-cover" alt="Dam" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] text-zinc-400 uppercase tracking-widest">Mãe</span>
                    <span className="text-brand-blue font-serif text-lg group-hover:text-brand-bronze transition-colors">{litter.dam?.nickname || litter.dam?.name}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Puppies Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Destaques da Ninhada</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-blue">Nossos Filhotes</h2>
            <div className="w-12 h-[1px] bg-zinc-100" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {litter.puppies.map((puppy: any, idx: number) => (
              <div key={puppy.id} className="flex flex-col group">
                <div className="relative aspect-square overflow-hidden bg-zinc-50 rounded-sm mb-6 transition-all duration-500 group-hover:shadow-2xl border border-zinc-50">
                  <LitterCarousel media={puppy.media || puppy.photo} title={puppy.name || "Filhote"} />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-blue text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm shadow-sm">
                      {puppy.sex === "M" ? "Macho" : "Fêmea"}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-[1px] bg-brand-bronze" />
                    <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${puppy.status === 'DISPONIVEL' ? 'text-green-600' : 'text-zinc-400'
                      }`}>
                      {puppy.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-blue group-hover:text-brand-bronze transition-colors">
                    {puppy.name || `Filhote #${idx + 1}`}
                  </h3>
                  <p className="text-[#333F48]/60 text-xs tracking-widest font-light">{puppy.color}</p>

                  {puppy.status === 'DISPONIVEL' && (
                    <div className="pt-4">
                      <Link href={`/aplicacao?puppyId=${puppy.id}&litterId=${litter.id}`} className="btn-outline-gold px-8 py-2 block text-center text-[10px]">
                        Tenho Interesse
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pedigree Section */}
        <section className="mb-32">
          <div className="flex flex-col items-center text-center gap-6 mb-16">
            <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Linhagem de Elite</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-blue">Árvore Genealógica</h2>
            <div className="w-12 h-[1px] bg-zinc-100" />
          </div>
          
          <div className="bg-zinc-50/50 rounded-sm p-4 md:p-10 border border-zinc-100">
            <PedigreeTree dog={{
              id: litter.id,
              name: litter.title || "Ninhada",
              sire: litter.sire,
              dam: litter.dam
            } as any} />
          </div>
        </section>

        {/* Footer CTA */}
        <div className="py-32 border-t border-zinc-100 text-center">
          <h3 className="font-serif text-4xl text-brand-blue mb-6 tracking-tight">O Fim da Busca, O Início da Amizade.</h3>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto font-light tracking-wide leading-relaxed italic">"Nossos filhotes não são apenas cães, mas a materialização de um sonho genético."</p>
          <Link href={`/aplicacao?litterId=${litter.id}`} className="btn-gold px-12 py-4 inline-block tracking-[0.3em]">
            Tenho Interesse na Linhagem
          </Link>
        </div>
      </div>
    </div>
  );
}
