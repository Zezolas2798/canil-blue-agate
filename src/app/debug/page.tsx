import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function DebugPage() {
  let diagnostics: any = {
    env: {
      has_supabase_url: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabase_url: process.env.NEXT_PUBLIC_SUPABASE_URL || 'N/A',
      has_prisma_url: !!process.env.POSTGRES_PRISMA_URL,
      prisma_host: process.env.POSTGRES_PRISMA_URL?.split('@')[1]?.split(':')[0] || 'N/A',
    },
    database: {
      status: 'Iniciando...',
      dogs: 0,
      litters: 0,
      error: null
    }
  };

  try {
    const dogs = await prisma.dog.count();
    const litters = await prisma.litter.count();
    diagnostics.database.status = 'Conectado';
    diagnostics.database.dogs = dogs;
    diagnostics.database.litters = litters;
  } catch (e: any) {
    diagnostics.database.status = 'Erro';
    diagnostics.database.error = e.message;
  }

  return (
    <div className="p-10 bg-black text-green-500 font-mono min-h-screen">
      <h1 className="text-2xl mb-6 border-b border-green-800 pb-2">Ambiente de Diagnóstico Blue Agate</h1>
      
      <section className="mb-8">
        <h2 className="text-xl text-white mb-2 underline">Variáveis de Ambiente</h2>
        <pre className="bg-zinc-900 p-4 rounded text-sm">
          {JSON.stringify(diagnostics.env, null, 2)}
        </pre>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2 underline">Status do Banco de Dados (Supabase/Prisma)</h2>
        <div className={`p-4 rounded border ${diagnostics.database.status === 'Conectado' ? 'border-green-500' : 'border-red-500'}`}>
          <p>Status: <span className="font-bold uppercase">{diagnostics.database.status}</span></p>
          <p>Cães: {diagnostics.database.dogs}</p>
          <p>Ninhadas: {diagnostics.database.litters}</p>
          {diagnostics.database.error && (
            <div className="mt-4 p-2 bg-red-900/30 text-red-300 rounded overflow-auto max-w-full">
              <strong>Erro Técnico:</strong> {diagnostics.database.error}
            </div>
          )}
        </div>
      </section>

      <div className="mt-10 text-xs text-zinc-600">
        Gerado em: {new Date().toISOString()}
      </div>
    </div>
  );
}
