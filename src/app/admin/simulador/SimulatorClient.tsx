"use client";

import { useState } from "react";
import { getSimulatedCOI } from "./actions";
import PedigreeTree from "@/components/PedigreeTree";

export default function SimulatorClient({ dogs }: { dogs: any[] }) {
  const [sireId, setSireId] = useState("");
  const [damId, setDamId] = useState("");
  const [coi, setCoi] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [simulatedDog, setSimulatedDog] = useState<any>(null);

  const sires = dogs.filter(d => d.sex === "M");
  const dams = dogs.filter(d => d.sex === "F");

  async function handleSimulate() {
    if (!sireId || !damId) return;
    setLoading(true);
    try {
      const result = await getSimulatedCOI(sireId, damId);
      setCoi(result.coi);
      
      setSimulatedDog({
        id: "simulated_puppy",
        name: "Filhote Simulado",
        nickname: "Futura Ninhada",
        sireId,
        damId,
        sire: result.sire,
        dam: result.dam
      });
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  const getCOILevel = (val: number) => {
    if (val <= 6.25) return { label: "Baixo", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20", desc: "Nível ideal. Mantém uma excelente diversidade genética na linhagem." };
    if (val <= 12.5) return { label: "Moderado", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20", desc: "Nível aceitável. Comum em linhagens puras selecionadas." };
    if (val <= 25) return { label: "Alto", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", desc: "Nível elevado. Requer atenção redobrada à saúde e vigor dos exemplares." };
    return { label: "Muito Alto", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20", desc: "Nível crítico. Cruzamento com alto risco de anomalias genéticas (Inbreeding Close)." };
  };

  const coiLevel = coi !== null ? getCOILevel(coi) : null;

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-blue-400 mb-2">Pai (Sire)</label>
            <select 
              value={sireId}
              onChange={(e) => setSireId(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors"
            >
              <option value="">-- Selecione o Padreador --</option>
              {sires.map(d => (
                <option key={d.id} value={d.id}>
                  {d.nickname || d.name} {d.status === "EXTERNO" && "(Externo)"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-pink-400 mb-2">Mãe (Dam)</label>
            <select 
              value={damId}
              onChange={(e) => setDamId(e.target.value)}
              className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors"
            >
              <option value="">-- Selecione a Matriz --</option>
              {dams.map(d => (
                <option key={d.id} value={d.id}>
                  {d.nickname || d.name} {d.status === "EXTERNO" && "(Externa)"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button 
            onClick={handleSimulate}
            disabled={!sireId || !damId || loading}
            className="px-8 py-3 bg-brand-bronze text-white rounded-lg font-bold hover:bg-brand-gold transition-all shadow-lg shadow-brand-bronze/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Simulando Cruzamento..." : "Calcular COI & Gerar Pedigree"}
          </button>
        </div>
      </div>

      {/* Results */}
      {simulatedDog && coi !== null && (
        <div className="grid grid-cols-1 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* COI Score Card */}
          <div className={`border rounded-2xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-700 ${coiLevel?.bg} ${coiLevel?.border}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_60%)]" />
            
            <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border ${coiLevel?.color} ${coiLevel?.border}`}>
              Grau de Endogamia: {coiLevel?.label}
            </div>

            <h3 className="text-zinc-400 font-serif mb-2 relative z-10">Coeficiente de Endogamia Previsto (Wright's COI)</h3>
            <div className={`text-7xl font-bold font-serif flex items-baseline gap-2 relative z-10 ${coiLevel?.color}`}>
              {coi} <span className="text-2xl opacity-60">%</span>
            </div>
            
            <div className="mt-6 p-4 bg-black/20 rounded-xl max-w-lg relative z-10 border border-white/5">
              <p className={`text-sm font-medium ${coiLevel?.color} mb-1`}>{coiLevel?.label}</p>
              <p className="text-xs text-zinc-400 leading-relaxed italic">
                "{coiLevel?.desc}"
              </p>
            </div>

            <p className="mt-6 text-[10px] text-zinc-500 max-w-md relative z-10">
              O cálculo de Wright analisa a probabilidade de homozigose por descendência em até 5 gerações.
            </p>
          </div>
          
          {/* Pedigree Tree */}
          <div className="bg-zinc-900 border border-white/5 rounded-2xl p-6">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="text-brand-bronze">🧬</span> Árvore Genealógica (Filhotes)
              </h2>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl relative border">
              
              {/* Background watermark */}
               <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                 <img src="/logo-agata.png" alt="Watermark" className="w-[500px]" loading="lazy" onError={(e) => e.currentTarget.style.display = 'none'} />
               </div>

               <PedigreeTree dog={simulatedDog} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
