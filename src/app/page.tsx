import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      <ScrollReveal />
      {/* Hero Section: Dynamic Video Background */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-blue">
        {/* Video Element */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/images/hero-poster.png"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Brand Blue Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/40 to-brand-blue/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(222,154,7,0.08)_0%,transparent_70%)]" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center gap-10 reveal">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-[1px] bg-brand-bronze mb-2" />
            <span className="text-brand-bronze font-medium tracking-[0.4em] text-[10px] uppercase">Curadoria Genética de Elite</span>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            Onde a Excelência <br/>
            <span className="italic text-brand-gold">Encontra a Alma</span>
          </h1>
          
          <p className="text-white/60 text-base md:text-lg max-w-2xl font-light tracking-wide leading-relaxed">
            Canil Blue Agate: Uma jornada de perfeição estrutural e temperamento impecável. 
            Dachshunds criados sob a ótica da arte e da ciência genética.
          </p>
          
          <div className="flex justify-center mt-4">
            <Link href="/caes" className="px-14 py-5 btn-gold flex items-center justify-center min-w-[280px] shadow-2xl shadow-black/20 hover:scale-105 transition-transform">
              Conheça nossos Cães
            </Link>
          </div>
        </div>

        {/* Waves Transition to Philosophy (Navy -> White) */}
        <div className="shape-divider bottom">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V120H1200V0C1100,60,950,80,800,80C600,80,450,40,300,40C150,40,50,20,0,0Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Philosophy Section: Pure Clarity (White BG) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative reveal">
              <div className="relative aspect-square md:aspect-[4/5] overflow-visible rounded-sm">
                 <div className="absolute inset-x-0 bottom-0 top-1/4 bg-zinc-50 rounded-3xl -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(158,122,44,0.1)_0%,transparent_70%)]" />
                 <div className="w-full h-full flex items-center justify-center relative">
                    <Image 
                      src="/images/highlight-dog.webp" 
                      alt="Destaque Blue Agate" 
                      width={600} 
                      height={800} 
                      className="object-contain max-h-full drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                 </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-bronze/5 rounded-full blur-3xl" />
            </div>
            
            <div className="space-y-8 reveal" style={{ transitionDelay: "200ms" }}>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-brand-bronze" />
                <span className="text-brand-bronze font-bold text-[10px] tracking-[0.4em] uppercase">Nossa Essência</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl text-brand-blue leading-tight">Uma Abordagem <br/> Minimalista e <br/> Decidida.</h2>
              <p className="text-[#333F48] text-lg leading-relaxed font-light">
                No Blue Agate, não produzimos em massa. Curamos. Cada acasalamento é uma decisão ponderada, visando não apenas o padrão racial, mas a perpetuação de linhagens que transmitem confiança e majestade.
              </p>
              <div className="space-y-6 pt-8">
                {[
                  { label: "GENÉTICA", value: "Linhagens selecionadas das melhores matrizes mundiais." },
                  { label: "ESTRUTURA", value: "Equilíbrio absoluto entre função e beleza estética." },
                  { label: "TEMPERAMENTO", value: "Cães criados para serem companheiros de alma." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 pb-6 border-b border-zinc-100 group hover:border-brand-gold/30 transition-colors">
                    <span className="text-brand-bronze font-bold text-[10px] tracking-[0.2em] pt-1">{item.label}</span>
                    <p className="text-[#333F48] text-sm font-light leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Breeds Section */}
      <section className="py-32 bg-zinc-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-brand-bronze" />
              <span className="text-brand-bronze font-bold text-[10px] tracking-[0.4em] uppercase">Nosso Plantel</span>
              <div className="w-8 h-[1px] bg-brand-bronze" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-blue leading-tight mb-6">Nossas Raças</h2>
            <p className="text-[#333F48] text-lg font-light max-w-2xl mx-auto">
              Cada raça em nosso canil representa o ápice do nosso compromisso com a saúde, estrutura e temperamento, preservando as características originais e a beleza única de cada variedade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                breed: "Dachshund",
                variety: "Miniatura",
                desc: "Pequeno no tamanho, imenso em coragem e lealdade. Ideal para companhia com espírito ativo.",
                image: "/images/breeds/dachshund-mini.webp",
                slug: "dachshund"
              },
              {
                breed: "Dachshund",
                variety: "Kaninchen",
                desc: "A menor variedade da raça, combinando destreza, elegância e um temperamento afetuoso.",
                image: "/images/breeds/dachshund-kaninchen.webp",
                slug: "dachshund"
              },
              {
                breed: "Pastor Belga",
                variety: "Groenendael",
                desc: "Pelagem negra e brilhante, extrema inteligência e devoção. Um cão de guarda e companhia inigualável.",
                image: "/images/breeds/pastor-groenendael.webp",
                slug: "pastor-belga"
              },
              {
                breed: "Pastor Belga",
                variety: "Tervueren",
                desc: "Pelagem fulva, ágil e vibrante. Distingue-se por sua capacidade de aprendizado e energia contagiante.",
                image: "/images/breeds/pastor-tervueren.webp",
                slug: "pastor-belga"
              }
            ].map((item, i) => (
              <Link 
                href={`/caes?breed=${item.slug}`} 
                key={i} 
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="aspect-[4/5] relative bg-zinc-200 overflow-hidden">
                  {/* We use a fallback background color since images might not exist yet */}
                  <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-brand-blue/0 transition-colors z-10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(158,122,44,0.1)_0%,transparent_100%)] z-10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-brand-blue opacity-20 group-hover:opacity-40 transition-opacity">
                    <span className="font-serif text-3xl font-bold">{item.breed}</span>
                  </div>
                  {/* Real Image Placeholder (uncomment or use when files exist)
                  <Image src={item.image} alt={`${item.breed} ${item.variety}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  */}
                </div>
                
                <div className="absolute bottom-0 inset-x-0 bg-white p-6 border-t border-zinc-100 z-20">
                  <span className="text-brand-bronze text-[10px] font-bold tracking-[0.2em] uppercase">{item.breed}</span>
                  <h3 className="font-serif text-2xl text-brand-blue mb-3">{item.variety}</h3>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed mb-4 line-clamp-3">
                    {item.desc}
                  </p>
                  <span className="text-brand-gold text-xs font-semibold uppercase tracking-wider group-hover:text-brand-bronze transition-colors flex items-center gap-2">
                    Ver Plantel
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured CTA: Brand Blue with Top Waves */}
      <section className="relative py-48 bg-brand-blue overflow-hidden text-center">
        <div className="shape-divider top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
             <path d="M0,0V60C150,20,300,10,450,40C600,70,750,90,900,60C1050,30,1200,60,1200,60V0H0Z" className="shape-fill"></path>
          </svg>
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">Faça Parte da <br/> Nossa História.</h2>
          <p className="text-white/50 text-lg mb-12 font-light tracking-wide italic">
            "Para aqueles que buscam mais do que um animal de estimação, mas um legado de elegância."
          </p>
          <Link href="/aplicacao" className="inline-block px-14 py-5 btn-gold hover:scale-105 transition-transform shadow-2xl shadow-black/20">
            Entrar na Lista de Espera
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -ml-64 -mb-64" />
      </section>
    </div>
  );
}
