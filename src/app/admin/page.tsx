import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    const totalDogs = await prisma.dog.count();
    const totalLitters = await prisma.litter.count();
    const totalLeads = await prisma.lead.count();

    return (
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="font-serif text-3xl font-bold text-white mb-8">Visão Geral</h1>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl">
            <p className="text-zinc-500 font-medium mb-1">Total de Cães (Plantel)</p>
            <p className="text-4xl font-bold text-white">{totalDogs}</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl">
            <p className="text-zinc-500 font-medium mb-1">Ninhadas</p>
            <p className="text-4xl font-bold text-white">{totalLitters}</p>
          </div>
          <div className="bg-brand-gold/10 border border-brand-gold/20 p-6 rounded-2xl">
            <p className="text-brand-gold font-medium mb-1">Aplicações Recebidas</p>
            <p className="text-4xl font-bold text-brand-gold">{totalLeads}</p>
          </div>
        </div>

        {/* Latest Leads Table */}
        <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-xl font-medium text-white">Últimas Aplicações (Leads)</h2>
          </div>
          {leads.length === 0 ? (
            <div className="p-8 text-center text-zinc-500 font-medium">Nenhum formulário recebido ainda.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-400">
                <thead className="bg-zinc-800/50 text-xs uppercase text-zinc-500">
                  <tr>
                    <th className="px-6 py-4 font-medium">Nome</th>
                    <th className="px-6 py-4 font-medium">Contato</th>
                    <th className="px-6 py-4 font-medium">Interesse</th>
                    <th className="px-6 py-4 font-medium">Data</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                      <td className="px-6 py-4">
                        {lead.email}<br/>
                        <span className="text-xs text-zinc-500">{lead.phone}</span>
                      </td>
                      <td className="px-6 py-4">{lead.interest}</td>
                      <td className="px-6 py-4">{new Date(lead.createdAt).toLocaleDateString("pt-BR")}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold tracking-wider ${
                          lead.status === "NOVO" ? "bg-brand-gold/20 text-brand-gold" :
                          "bg-zinc-800 text-zinc-400"
                        }`}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Erro ao carregar o dashboard:", error);
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Erro de Conexão</h1>
          <p className="text-zinc-400 mb-6">
            Não foi possível conectar ao banco de dados. Isso geralmente acontece quando o banco de dados no Supabase não está configurado 
            corretamente ou as tabelas ainda não foram criadas.
          </p>
          <div className="bg-black/50 p-4 rounded-lg text-left mb-6 overflow-x-auto">
            <code className="text-xs text-red-400">{error.message}</code>
          </div>
          <p className="text-sm text-zinc-500">
            Dica: Tente rodar <code className="bg-zinc-800 px-2 py-1 rounded">npx prisma db push</code> no seu terminal para sincronizar as tabelas.
          </p>
        </div>
      </div>
    );
  }
}
