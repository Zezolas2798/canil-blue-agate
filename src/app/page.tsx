"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
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
