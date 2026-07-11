"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import CustomSelect from "@/components/CustomSelect";
import { BREEDS } from "@/lib/breed-config";

interface Puppy {
  id: string;
  name: string | null;
  sex: string;
  color: string;
  status: string;
  media?: string | null;
  photo?: string | null;
}

interface Litter {
  id: string;
  title: string | null;
  status: string;
  breed: string | null;
  variety: string | null;
  media?: string | null;
  puppies: Puppy[];
}

interface ApplicationFormClientProps {
  initialLitters: Litter[];
}

function FormContent({ initialLitters }: ApplicationFormClientProps) {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    breedSlug: "",
    name: "",
    email: "",
    phone: "",
    litterId: "",
    puppyId: "",
    interest: "", // This will be a summary like "Ninhada X - Filhote Y"
    lifestyle: "",
    experience: ""
  });

  // Pre-selection logic
  useEffect(() => {
    const pId = searchParams.get("puppyId");
    const lId = searchParams.get("litterId");

    if (lId) {
      setFormData(prev => ({ ...prev, litterId: lId }));
    }
    if (pId) {
      setFormData(prev => ({ ...prev, puppyId: pId }));
    }
  }, [searchParams]);

  const selectedLitter = initialLitters.find(l => l.id === formData.litterId);
  const availablePuppies = selectedLitter?.puppies || [];
  
  const filteredLitters = useMemo(() => {
    if (!formData.breedSlug || formData.breedSlug === "TODOS") return initialLitters;
    return initialLitters.filter(l => l.breed === formData.breedSlug);
  }, [initialLitters, formData.breedSlug]);

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.breedSlug) return;
    if (step === 2 && (!formData.name || !formData.email || !formData.phone)) return;
    if (step === 3 && !formData.litterId) return;
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Construct the "interest" string for the backend (compatibility)
    const breedLabel = BREEDS.find(b => b.slug === formData.breedSlug)?.label || formData.breedSlug;
    const litterName = selectedLitter?.title || "Ninhada não especificada";
    const puppyName = availablePuppies.find(p => p.id === formData.puppyId)?.name || "Qualquer filhote disponível";
    const interestSummary = `Raça/Variedade: ${breedLabel} | Ninhada: ${litterName} | Filhote: ${puppyName}`;

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, interest: interestSummary })
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
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="font-serif text-4xl text-white mb-4">Aplicação Recebida!</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Agradecemos o seu interesse. Entraremos em contato em breve para dar continuidade ao processo de seleção.
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
        <h1 className="font-serif text-4xl font-bold text-white mb-4">Formulário de Interesse</h1>
        <p className="text-zinc-400 text-sm tracking-wide">
          Selecione a linhagem que deseja para sua família e preencha seus dados.
        </p>
      </div>

      <div className="glass p-8 md:p-12 rounded-2xl relative backdrop-blur-xl border border-white/5">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 rounded-t-2xl overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-brand-bronze to-brand-gold transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between mb-10 text-[10px] font-bold uppercase tracking-[0.2em] overflow-x-auto whitespace-nowrap gap-4 pb-2">
          <span className={step >= 1 ? "text-brand-gold" : "text-zinc-600"}>01. Raça</span>
          <span className={step >= 2 ? "text-brand-gold" : "text-zinc-600"}>02. Seus Dados</span>
          <span className={step >= 3 ? "text-brand-gold" : "text-zinc-600"}>03. Ninhada</span>
          <span className={step >= 4 ? "text-brand-gold" : "text-zinc-600"}>04. Perfil</span>
        </div>

        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-serif text-white mb-6">Qual Raça ou Variedade?</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4">Escolha a Raça/Variedade Desejada</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {BREEDS.map(breed => (
                    <button
                      key={breed.slug}
                      onClick={() => updateForm('breedSlug', breed.slug)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        formData.breedSlug === breed.slug
                          ? "bg-brand-bronze/10 border-brand-bronze text-white"
                          : "bg-zinc-950 border-white/10 text-zinc-400 hover:border-white/30 hover:text-zinc-200"
                      }`}
                    >
                      <h3 className="font-serif text-lg mb-1">{breed.label}</h3>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-end">
              <button 
                onClick={nextStep}
                disabled={!formData.breedSlug}
                className="btn-gold px-10 py-4 disabled:opacity-50 transition-all font-bold tracking-widest uppercase text-[10px]"
              >
                Próximo Passo
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-serif text-white mb-6">Informações Pessoais</h2>
            <div className="space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => updateForm('name', e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-bronze transition-colors text-sm"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Seu Melhor Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => updateForm('email', e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-bronze transition-colors text-sm"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">WhatsApp</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => updateForm('phone', e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-bronze transition-colors text-sm"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>
            <div className="mt-10 flex justify-between">
              <button 
                onClick={prevStep}
                className="text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                Voltar
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.phone}
                className="btn-gold px-10 py-4 disabled:opacity-50 transition-all font-bold tracking-widest uppercase text-[10px]"
              >
                Próximo Passo
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-serif text-white mb-6">Qual linhagem você busca?</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Selecione a Ninhada</label>
                <CustomSelect
                  placeholder="-- Escolha uma Ninhada --"
                  value={formData.litterId}
                  onChange={(val) => {
                    updateForm('litterId', val);
                    updateForm('puppyId', "");
                  }}
                  options={filteredLitters.map(l => {
                    const parsedMedia = (() => {
                      if (!l.media) return [];
                      try { return JSON.parse(l.media); } catch { return []; }
                    })();
                    return {
                      value: l.id,
                      label: l.title || "Ninhada sem título",
                      subLabel: `Status: ${l.status}`,
                      image: parsedMedia[0] || null
                    };
                  })}
                />
              </div>

              {formData.litterId && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Selecione o Filhote (Opcional)</label>
                  <CustomSelect
                    placeholder="Qualquer filhote disponível desta ninhada"
                    value={formData.puppyId}
                    onChange={(val) => updateForm('puppyId', val)}
                    options={availablePuppies.map(p => {
                      const parsedMedia = {
                        media: p.media ? (() => { try { return JSON.parse(p.media); } catch { return []; } })() : [],
                        photo: p.photo || null
                      };
                      return {
                        value: p.id,
                        label: p.name || `Filhote da ${selectedLitter?.title || 'Ninhada'}`,
                        subLabel: `${p.sex === 'M' ? 'Macho' : 'Fêmea'} - ${p.color}`,
                        image: parsedMedia.media[0] || parsedMedia.photo || null
                      };
                    })}
                  />
                </div>
              )}
            </div>
            <div className="mt-10 flex justify-between">
              <button 
                onClick={prevStep}
                className="text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                Voltar
              </button>
              <button 
                onClick={nextStep}
                disabled={!formData.litterId}
                className="btn-gold px-10 py-4 disabled:opacity-50 transition-all font-bold tracking-widest uppercase text-[10px]"
              >
                Próximo Passo
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-serif text-white mb-6">Sobre o Futuro Lar</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Descreva sua rotina e espaço para o cão</label>
                <textarea 
                  value={formData.lifestyle}
                  onChange={(e) => updateForm('lifestyle', e.target.value)}
                  rows={4}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-bronze transition-colors resize-none text-sm"
                  placeholder="Ex: Apartamento amplo, passeio diário..."
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Experiência prévia com a raça?</label>
                <textarea 
                  value={formData.experience}
                  onChange={(e) => updateForm('experience', e.target.value)}
                  rows={3}
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-bronze transition-colors resize-none text-sm"
                  placeholder="Já possuo um Dachshund..."
                />
              </div>
            </div>
            <div className="mt-10 flex justify-between items-center">
              <button 
                onClick={prevStep}
                className="text-zinc-500 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
              >
                Voltar
              </button>
              <button 
                onClick={handleSubmit}
                disabled={!formData.lifestyle || isSubmitting}
                className="btn-gold px-12 py-4 disabled:opacity-50 transition-all font-bold tracking-widest uppercase text-[10px]"
              >
                {isSubmitting ? "Enviando..." : "Enviar Interesse"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ApplicationFormClient(props: ApplicationFormClientProps) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white font-serif">Carregando formulário...</div>}>
      <FormContent {...props} />
    </Suspense>
  );
}
