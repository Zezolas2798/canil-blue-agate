import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canil Blue Agate | Genética e Curadoria de Alto Padrão",
  description: "Canil de excelência focado em curadoria genética e cães de alto padrão. Minimalismo, elegância e autoridade na criação canina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${playfair.variable} bg-[#FFFFFF] text-[#333F48] font-body antialiased selection:bg-brand-bronze/30 selection:text-brand-blue`}
      >
        <div className="relative min-h-screen flex flex-col">
          {/* Header: Brand Royal Blue */}
          <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-brand-blue backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-24 px-6 relative">
              <div className="flex items-center gap-4">
                <div className="font-serif text-2xl font-bold tracking-[0.1em] text-brand-bronze">
                  BLUE AGATE
                </div>
                {/* Gold Dog Heritage Silhouette */}
                <div className="flex items-center ml-2">
                  <div className="logo-dog-img" aria-label="Canil Gold Logo" />
                </div>
              </div>
              <Navbar />
            </div>
          </header>

          <main className="flex-1 pt-24">
            {children}
          </main>

          {/* Footer: Brand Royal Blue */}
          <footer className="bg-brand-blue py-20 text-center relative overflow-hidden mt-0">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className="font-serif text-3xl font-bold tracking-[0.15em] text-brand-bronze mb-10">
                BLUE AGATE
              </div>
              <div className="flex flex-wrap justify-center gap-8 mb-12 text-zinc-400 text-sm font-light">
                <a href="/caes" className="hover:text-brand-bronze transition-colors">Nossos Cães</a>
                <a href="/ninhadas" className="hover:text-brand-bronze transition-colors">Ninhadas</a>
                <a href="https://www.instagram.com/canilblueagate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-brand-bronze transition-colors">Instagram</a>
                <a href="/contato" className="hover:text-brand-bronze transition-colors">Contato</a>
                <a href="/privacidade" className="hover:text-brand-bronze transition-colors">Privacidade</a>
              </div>
              <div className="w-20 h-[1px] bg-brand-bronze/30 mx-auto mb-8" />
              <p className="text-zinc-500 text-xs font-light tracking-widest">
                &copy; {new Date().getFullYear()} CANIL BLUE AGATE. TODOS OS DIREITOS RESERVADOS.
              </p>
            </div>
            {/* Subtle decorative element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-bronze/20 to-transparent" />
          </footer>
        </div>
      </body>
    </html>
  );
}
