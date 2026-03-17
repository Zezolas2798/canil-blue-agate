import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Nosso Plantel | Curadoria Blue Agate",
  description: "Conheça nossos reprodutores e matrizes excepcionais. Padrão genético de elite e beleza estrutural.",
};

export default async function DogsPage() {
  const dogs: any[] = await prisma.dog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-blue py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,122,44,0.05)_0%,transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4 mb-6">
             <div className="w-10 h-[1px] bg-brand-bronze" />
             <span className="text-brand-bronze text-[10px] tracking-[0.4em] uppercase font-medium">Linhagem de Elite</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-8">Nosso Plantel</h1>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg font-light tracking-wide italic">
            "A base da nossa excelência reside na seleção rigorosa de cada exemplar."
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        {dogs.length === 0 ? (
          <div className="text-center py-40 border border-zinc-100 rounded-sm">
            <p className="text-zinc-400 font-light italic">Aguardando novos registros fotográficos do plantel.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dogs.map((dog) => (
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
                    <span className="bg-white/90 backdrop-blur-sm text-brand-blue text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-sm shadow-sm">
                      {dog.status}
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
      </section>
    </div>
  );
}
