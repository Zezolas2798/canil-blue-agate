import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Ninhadas | Curadoria Blue Agate",
  description: "Descubra nossas ninhadas atuais e planejadas. Excelência genética e cuidado extraordinário desde o nascimento.",
};

export default async function LittersPage() {
  let litters: any[] = [];
  try {
    litters = await prisma.litter.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        sire: true,
        dam: true,
        puppies: true,
      }
    });
  } catch (error) {
    console.error("Erro ao buscar ninhadas:", error);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-blue py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,122,44,0.08)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4 mb-6">
             <div className="w-10 h-[1px] bg-brand-bronze" />
             <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Futuro da Linhagem</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Nossas Ninhadas</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide italic">
             "Onde cada novo fôlego é o início de um legado de beleza e temperamento."
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {litters.length === 0 ? (
          <div className="text-center py-40 border border-zinc-100 rounded-sm">
            <p className="text-zinc-400 font-light italic">Planejando futuros acasalamentos de elite. Fique atento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {litters.map((litter) => (
              <div key={litter.id} className="group flex flex-col md:flex-row gap-8 items-stretch border-b border-zinc-100 pb-16">
                <div className="relative w-full md:w-1/2 aspect-[4/5] bg-zinc-50 overflow-hidden rounded-sm group-hover:shadow-xl transition-shadow duration-500">
                  {litter.media ? (
                    <Image 
                      src={(() => { try { return JSON.parse(litter.media!)[0]; } catch { return litter.media!.split(',')[0]; } })()} 
                      alt={litter.title || "Ninhada"}
                      fill
                      className="object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-zinc-100 font-serif text-4xl">BA</div>
                  )}
                  
                  {/* Status Overlay */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-bronze text-white text-[9px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-sm">
                      {litter.status}
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
                      <p className="text-[#333F48]/60 text-xs uppercase tracking-widest font-semibold italic">Ascendência Direta</p>
                      <div className="flex gap-8 items-center">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1">Pai (Sire)</span>
                          <span className="text-brand-blue text-sm font-medium">{litter.sire?.nickname || "Pai Selecionado"}</span>
                        </div>
                        <div className="w-[1px] h-8 bg-zinc-100" />
                        <div className="flex flex-col">
                          <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1">Mãe (Dam)</span>
                          <span className="text-brand-blue text-sm font-medium">{litter.dam?.nickname || "Mãe Selecionada"}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                       {litter.puppies.length > 0 ? (
                         litter.puppies.map((p: any, i: number) => (
                           <span key={i} className="px-3 py-1 bg-zinc-50 text-zinc-400 text-[9px] font-bold uppercase tracking-wider rounded-sm border border-zinc-100">
                             {p.sex === 'M' ? 'Macho' : 'Fêmea'}
                           </span>
                         ))
                       ) : (
                         <span className="text-zinc-400 text-[10px] italic">Aguardando nascimento...</span>
                       )}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link href={`/ninhadas/${litter.id}`} className="btn-gold px-10 py-3 block text-center">
                      Detalhes da Ninhada
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
