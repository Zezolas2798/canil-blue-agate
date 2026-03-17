'use client';

import { useEffect } from 'react';

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Admin Error Boundary:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-zinc-900 border border-white/5 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Ops! Algo deu errado</h2>
        <p className="text-zinc-400 mb-8">
          Ocorreu um erro inesperado no Painel Admin. Isso pode ser um problema de conexão temporário.
        </p>

        {error.digest && (
          <div className="bg-black/40 rounded-lg p-3 mb-8 text-left">
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">ID do Erro (Digest)</p>
            <code className="text-xs text-brand-gold">{error.digest}</code>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full bg-brand-gold text-black font-bold py-3 rounded-xl hover:bg-brand-gold/90 transition-colors"
          >
            Tentar Novamente
          </button>
          <a
            href="/"
            className="w-full bg-zinc-800 text-white font-bold py-3 rounded-xl hover:bg-zinc-700 transition-colors"
          >
            Voltar para o Início
          </a>
        </div>
      </div>
    </div>
  );
}
