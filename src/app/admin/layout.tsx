import { Metadata } from "next";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export const metadata: Metadata = {
  title: "Painel Admin | Canil Blue Agate",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-zinc-900 border-r border-white/5 flex flex-col h-screen sticky top-0">
        <div className="p-6 border-b border-white/5">
          <Link href="/admin" className="font-serif text-xl font-bold text-brand-bronze">
            BLUE AGATE<br/>
            <span className="text-sm font-sans text-zinc-400 tracking-wider">WORKSPACE</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-1">
          <Link href="/admin" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            📊 Visão Geral
          </Link>
          <Link href="/admin/leads" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            📬 Aplicações (Leads)
          </Link>
          
          <div className="mt-4 mb-1 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Plantel</div>
          <Link href="/admin/caes" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            🐕 Gerenciar Cães
          </Link>
          <Link href="/admin/ninhadas" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            🐾 Gerenciar Ninhadas
          </Link>
          <Link href="/admin/vacinas" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            💉 Controle Sanitário
          </Link>

          <div className="mt-4 mb-1 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Comercial</div>
          <Link href="/admin/clientes" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            👤 Clientes
          </Link>
          <Link href="/admin/financeiro" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            💰 Fluxo de Caixa
          </Link>
          
          <div className="mt-4 mb-1 px-4 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Website</div>
          <Link href="/admin/cms" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-brand-bronze transition-colors text-sm">
            ✏️ Editar Site (CMS)
          </Link>
          <Link href="/" target="_blank" className="px-4 py-2 hover:bg-white/5 rounded-lg text-zinc-300 hover:text-white transition-colors flex items-center justify-between text-sm">
            Acessar Site 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-white/5">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
