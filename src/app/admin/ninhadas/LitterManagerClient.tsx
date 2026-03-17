"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { addLitter, updateLitter } from "./actions";

type Dog = any;
type Puppy = any;
type Litter = any;

export default function LitterManagerClient({
  mode = "create",
  existingLitter,
  dogs = [],
}: {
  mode?: "create" | "edit";
  existingLitter?: Litter;
  dogs: Dog[];
}) {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEdit = mode === "edit" && existingLitter;
  const litter = existingLitter || {};

  // Photos state
  const initialPhotos: string[] = (() => {
    if (!litter.media) return [];
    try { return JSON.parse(litter.media); } catch { return []; }
  })();
  const [photos, setPhotos] = useState<string[]>(initialPhotos);

  // Puppies state
  const [puppies, setPuppies] = useState<Puppy[]>(litter.puppies || []);

  const tabs = [
    { id: 1, name: "Acompanhamento", icon: "🗓️" },
    { id: 2, name: "Filhotes", icon: "🐾" },
    { id: 3, name: "Fotos & Mídia", icon: "📸" },
  ];

  function fmtDate(d: string | Date | null | undefined) {
    if (!d) return "";
    const date = new Date(d);
    return date.toISOString().split("T")[0];
  }

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (data.url) setPhotos(prev => [...prev, data.url]);
      } catch (err) { console.error(err); }
    }
    setUploading(false);
  }

  function addPuppy() {
    setPuppies([...puppies, { id: `new-${Date.now()}`, name: "", sex: "M", color: "", birthWeight: "", status: "DISPONIVEL", photo: "" }]);
  }

  async function handlePuppyPhotoUpload(index: number, files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", files[0]);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) updatePuppy(index, "photo", data.url);
    } catch (err) { console.error(err); }
    setUploading(false);
  }

  function removePuppy(index: number) {
    setPuppies(puppies.filter((_, i) => i !== index));
  }

  function updatePuppy(index: number, field: string, value: any) {
    const newPuppies = [...puppies];
    newPuppies[index] = { ...newPuppies[index], [field]: value };
    setPuppies(newPuppies);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    if (isEdit) {
      await updateLitter(formData);
    } else {
      await addLitter(formData);
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/ninhadas" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar às Ninhadas
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl font-bold text-white">
          {isEdit ? `Editar: ${litter.title || "Ninhada"}` : "Registrar Nova Ninhada"}
        </h1>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-white/5 scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === tab.id 
                  ? "border-brand-bronze text-brand-bronze bg-brand-bronze/5" 
                  : "border-transparent text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
          {isEdit && <input type="hidden" name="litterId" value={litter.id} />}
          <input type="hidden" name="_media" value={JSON.stringify(photos)} />
          <input type="hidden" name="_puppies" value={JSON.stringify(puppies)} />

          {/* TAB 1: Acompanhamento */}
          <div className={activeTab === 1 ? "block space-y-6" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-zinc-400 mb-1">Título da Ninhada *</label>
                <input name="title" required defaultValue={litter.title || ""} placeholder="Ex: Ninhada Alpha - Dachshund Pelo Longo" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-blue-400 mb-1">Pai (Padreador) *</label>
                <select name="sireId" required defaultValue={litter.sireId || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="">Selecione o Pai</option>
                  {dogs.filter(d => d.sex === "M").map(d => (
                    <option key={d.id} value={d.id}>{d.nickname || d.name} ({d.breed})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-pink-400 mb-1">Mãe (Matriz) *</label>
                <select name="damId" required defaultValue={litter.damId || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors">
                  <option value="">Selecione a Mãe</option>
                  {dogs.filter(d => d.sex === "F").map(d => (
                    <option key={d.id} value={d.id}>{d.nickname || d.name} ({d.breed})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Status da Reprodução</label>
                <select name="status" defaultValue={litter.status || "PLANEJADA"} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors">
                  <option value="PLANEJADA">Acasalamento Planejado / Realizado</option>
                  <option value="NASCIDA">Nascida (Acompanhamento)</option>
                  <option value="DISPONIVEL">Disponível para Reserva/Venda</option>
                  <option value="ENCERRADA">Encerrada / Histórico</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Preço Base (R$)</label>
                <input name="price" type="number" step="0.01" defaultValue={litter.price || ""} placeholder="Ex: 3500.00" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 md:col-span-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Data do Acasalamento</label>
                  <input name="matingDate" type="date" defaultValue={fmtDate(litter.matingDate)} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Previsão de Parto</label>
                  <input name="expectedBirthDate" type="date" defaultValue={fmtDate(litter.expectedBirthDate)} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Data Real Nascimento</label>
                  <input name="birthDate" type="date" defaultValue={fmtDate(litter.birthDate)} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* TAB 2: Filhotes */}
          <div className={activeTab === 2 ? "block space-y-6" : "hidden"}>
            <div className="flex justify-between items-center bg-zinc-800/50 p-4 rounded-xl border border-white/5">
              <div>
                <p className="text-white font-medium text-sm">Registro de Filhotes</p>
                <p className="text-xs text-zinc-500">Adicione os filhotes nascidos nesta ninhada.</p>
              </div>
              <button 
                type="button" 
                onClick={addPuppy}
                className="px-4 py-2 bg-brand-bronze/20 text-brand-bronze border border-brand-bronze/20 rounded-lg text-xs font-bold hover:bg-brand-bronze hover:text-white transition-all flex items-center gap-2"
              >
                <span>+</span> Adicionar Filhote
              </button>
            </div>

            <div className="space-y-3">
              {puppies.length === 0 ? (
                <div className="py-10 text-center border border-dashed border-white/10 rounded-xl">
                  <p className="text-zinc-600 text-sm italic">Nenhum filhote registrado ainda.</p>
                </div>
              ) : (
                puppies.map((puppy, index) => (
                  <div key={puppy.id} className="bg-zinc-950 border border-white/5 rounded-xl p-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-1">
                      <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-xs text-zinc-600 font-bold overflow-hidden relative group">
                        {puppy.photo ? (
                          <img src={puppy.photo} className="w-full h-full object-cover" alt="Puppy" />
                        ) : (
                          <span>#{index + 1}</span>
                        )}
                        <input 
                          type="file" 
                          id={`puppy-photo-${index}`}
                          className="hidden" 
                          onChange={(e) => handlePuppyPhotoUpload(index, e.target.files)}
                        />
                        <button 
                          type="button"
                          onClick={() => document.getElementById(`puppy-photo-${index}`)?.click()}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        >
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] text-zinc-500 uppercase mb-1">Sexo</label>
                      <select 
                        value={puppy.sex || "M"} 
                        onChange={(e) => updatePuppy(index, "sex", e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none border-brand-bronze/30"
                      >
                        <option value="M">♂ Macho</option>
                        <option value="F">♀ Fêmea</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] text-zinc-500 uppercase mb-1">Cor / Marcação</label>
                      <input 
                        value={puppy.color || ""} 
                        onChange={(e) => updatePuppy(index, "color", e.target.value)}
                        placeholder="Ex: Arlequim"
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-[10px] text-zinc-500 uppercase mb-1">Peso (g)</label>
                      <input 
                        type="number"
                        value={puppy.birthWeight || ""} 
                        onChange={(e) => updatePuppy(index, "birthWeight", e.target.value)}
                        placeholder="Ex: 180"
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-[10px] text-zinc-500 uppercase mb-1">Status</label>
                      <select 
                        value={puppy.status || "DISPONIVEL"} 
                        onChange={(e) => updatePuppy(index, "status", e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none"
                      >
                        <option value="DISPONIVEL">Disponível</option>
                        <option value="RESERVADO">Reservado</option>
                        <option value="VENDIDO">Vendido</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 flex justify-end">
                      <button 
                        type="button" 
                        onClick={() => removePuppy(index)}
                        className="w-8 h-8 rounded-full bg-red-900/20 text-red-500 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* TAB 3: Fotos */}
          <div className={activeTab === 3 ? "block space-y-5" : "hidden"}>
            <div 
              className="p-8 border-2 border-dashed border-white/15 rounded-xl bg-zinc-950/50 text-center cursor-pointer hover:border-brand-bronze/40"
              onClick={() => fileInputRef.current?.click()}
            >
              <input 
                ref={fileInputRef}
                type="file" 
                multiple 
                className="hidden"
                onChange={(e) => handleUpload(e.target.files)}
              />
              <svg className="w-10 h-10 text-zinc-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-white text-sm font-medium">Galeria da Ninhada</p>
              <p className="text-xs text-zinc-500 mt-1">Fotos que aparecerão na página pública desta ninhada.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {photos.map((url, i) => (
                <div key={i} className="aspect-square relative group rounded-lg overflow-hidden border border-white/5">
                  <img src={url} className="w-full h-full object-cover" />
                  <button 
                    type="button" 
                    onClick={() => setPhotos(photos.filter((_, idx) => idx !== i))}
                    className="absolute top-1 right-1 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-4 border-t border-white/10 flex justify-between items-center">
            <Link href="/admin/ninhadas" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Cancelar
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="px-8 py-3 bg-brand-bronze text-white rounded-lg font-semibold hover:bg-brand-gold transition-colors shadow-lg shadow-brand-bronze/20 disabled:opacity-50"
            >
              {loading ? "Salvando..." : "✓ Salvar Ninhada"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
