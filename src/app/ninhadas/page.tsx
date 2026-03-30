import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import LitterCarousel from "@/components/LitterCarousel";

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
      {/* Page Header: Dynamic Video Background */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        {/* Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/litters-poster.png"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/litters-bg.mp4" type="video/mp4" />
        </video>

        {/* Brand Blue Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/40 to-brand-blue/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,122,44,0.08)_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 mb-2">
             <div className="w-10 h-[1px] bg-brand-bronze" />
             <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Futuro da Linhagem</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Nossas Ninhadas</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide italic">
             "Onde cada novo fôlego é o início de um legado de beleza e temperamento."
          </p>
        </div>

        {/* Waves Transition to Content */}
        <div className="shape-divider bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V120H1200V0C1100,60,950,80,800,80C600,80,450,40,300,40C150,40,50,20,0,0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        {litters.length === 0 ? (
          <div className="text-center py-40 border border-zinc-100 rounded-sm">
            <p className="text-zinc-400 font-light italic">Planejando futuros acasalamentos de elite. Fique atento.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {litters.map((litter) => (
              <div key={litter.id} className="group flex flex-col md:flex-row gap-8 items-stretch border-b border-zinc-100 pb-10">
                <div className="relative w-full md:w-1/2 aspect-[3/2] bg-zinc-50 overflow-hidden rounded-sm group-hover:shadow-xl transition-shadow duration-500">
                  <LitterCarousel media={litter.media} title={litter.title || "Ninhada"} />
                  
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
                      <div className="flex gap-10 items-center pt-2">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100 relative grayscale-[0.5]">
                            <Image src={litter.sire?.profilePhoto || "/placeholder-dog.png"} fill className="object-cover" alt="Sire" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1">Pai</span>
                            <span className="text-brand-blue text-sm font-medium">{litter.sire?.nickname || litter.sire?.name || "Pai Selecionado"}</span>
                          </div>
                        </div>
                        <div className="w-[1px] h-8 bg-zinc-100" />
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-100 relative grayscale-[0.5]">
                            <Image src={litter.dam?.profilePhoto || "/placeholder-dog.png"} fill className="object-cover" alt="Dam" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] text-zinc-400 uppercase tracking-widest mb-1">Mãe</span>
                            <span className="text-brand-blue text-sm font-medium">{litter.dam?.nickname || litter.dam?.name || "Mãe Selecionada"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-2">
                       {litter.puppies.length > 0 ? (
                         (() => {
                            const counts = litter.puppies.reduce((acc: any, p: any) => {
                              const sex = p.sex === 'M' ? 'Macho' : 'Fêmea';
                              acc[sex] = (acc[sex] || 0) + 1;
                              return acc;
                            }, {});
                            return Object.entries(counts).map(([sex, count]) => (
                               <span key={sex} className="px-4 py-1.5 bg-brand-bronze/5 text-brand-bronze text-[9px] font-bold uppercase tracking-wider rounded-sm border border-brand-bronze/10">
                                 {sex}: {count as number}
                               </span>
                            ));
                         })()
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
