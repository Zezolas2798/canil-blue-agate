import prisma from "@/lib/prisma";
import DogsListClient from "./DogsListClient";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Nosso Plantel | Curadoria Blue Agate",
  description: "Conheça nossos reprodutores e matrizes excepcionais. Padrão genético de elite e beleza estrutural.",
};

export default async function DogsPage() {
  let dogs: any[] = [];
  try {
    dogs = await prisma.dog.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Erro ao buscar cães:", error);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header: Dynamic Video Background */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-brand-blue">
        {/* Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/plantel-bg.mp4" type="video/mp4" />
        </video>

        {/* Brand Blue Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/40 to-brand-blue/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,122,44,0.08)_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 mb-2">
             <div className="w-10 h-[1px] bg-brand-bronze" />
             <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-bold">Linhagem de Elite</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Nosso Plantel</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide italic">
            "A base da nossa excelência reside na seleção rigorosa de cada exemplar."
          </p>
        </div>

        {/* Waves Transition to Content */}
        <div className="shape-divider bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V120H1200V0C1100,60,950,80,800,80C600,80,450,40,300,40C150,40,50,20,0,0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Filterable List Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
         <DogsListClient initialDogs={dogs} />
      </section>
    </div>
  );
}
