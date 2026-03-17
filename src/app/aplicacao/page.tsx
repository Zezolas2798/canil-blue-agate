"use client";

import { useState } from "react";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    lifestyle: "",
    experience: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) return;
    if (step === 2 && !formData.interest) return;
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Ocorreu um erro ao enviar sua aplicação.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center min-h-screen flex flex-col items-center justify-center">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 mx-auto">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h1 className="font-serif text-4xl text-white mb-4">Aplicação Recebida com Sucesso!</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Agradecemos o seu interesse no Canil Blue Agate. Avaliaremos sua aplicação detalhadamente e entraremos em contato em breve via WhatsApp ou Email.
        </p>
        <button onClick={() => window.location.href = '/'} className="px-8 py-3 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition">
          Voltar a Início
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-white mb-4">Aplicação para Filhotes</h1>
        <p className="text-zinc-400">
          Nosso processo de seleção garante que os filhotes encontrem os lares certos. Por favor, preencha este formulário com atenção.
        </p>
      </div>

      <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
          <div 
            className="h-full bg-gradient-to-r from-brand-bronze to-brand-gold transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between mb-8 text-sm font-medium">
          <span className={step >= 1 ? "text-brand-gold" : "text-zinc-600"}>1. Contato</span>
          <span className={step >= 2 ? "text-brand-gold" : "text-zinc-600"}>2. Interesse</span>
          <span className={step >= 3 ? "text-brand-gold" : "text-zinc-600"}>3. Estilo de Vida</span>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl text-white mb-6">Informações de Contato</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-bronze transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-bronze transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">WhatsApp / Telefone</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-bronze transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="px-6 py-3 bg-brand-bronze text-white rounded-lg font-medium hover:bg-brand-gold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Próximo Passo
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl text-white mb-6">Qual o seu interesse?</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-1">Raça ou Ninhada Específica</label>
                <input 
                  type="text" 
                  value={formData.interest}
                  onChange={(e) => updateForm('interest', e.target.value)}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-bronze transition-colors"
                  placeholder="Ex: Dachshund Pelo Longo, Macho"
                />
                <p className="text-xs text-zinc-500 mt-2">Você pode mencionar especificamente algum filhote que viu disponível.</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between">
              <button 
                onClick={prevStep}
                className="px-6 py-3 text-zinc-400 hover:text-white transition-colors"
              >
                Voltar
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.interest}
                className="px-6 py-3 bg-brand-bronze text-white rounded-lg font-medium hover:bg-brand-gold disabled:opacity-50 transition-colors"
              >
                Próximo Passo
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl text-white mb-6">Sobre o Lar do Filhote</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Descreva um pouco da sua rotina e da sua casa.</label>
                <textarea 
                  value={formData.lifestyle}
                  onChange={(e) => updateForm('lifestyle', e.target.value)}
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-bronze transition-colors resize-none"
                  placeholder="Moro em apartamento onde tem gramado..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">Você já teve experiência com cães?</label>
                <textarea 
                  value={formData.experience}
                  onChange={(e) => updateForm('experience', e.target.value)}
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-bronze transition-colors resize-none"
                  placeholder="Sim, já tive dois cães da mesma raça..."
                />
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <button 
                onClick={prevStep}
                disabled={isSubmitting}
                className="px-6 py-3 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
              >
                Voltar
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!formData.lifestyle || isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-brand-bronze to-brand-gold text-white rounded-lg font-bold hover:shadow-[0_0_15px_rgba(158,122,44,0.3)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Aplicação"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
