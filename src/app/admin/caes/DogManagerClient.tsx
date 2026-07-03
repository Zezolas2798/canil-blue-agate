"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { addDog, updateDog } from "./actions";
import PedigreeTree from "@/components/PedigreeTree";
import { calculateAge } from "@/lib/dateUtils";

type Dog = any;
type Litter = any;

export default function DogManagerClient({ 
  dogs, 
  mode = "create", 
  existingDog,
  litters = [],
}: { 
  dogs: Dog[]; 
  mode?: "create" | "edit"; 
  existingDog?: Dog;
  litters?: Litter[];
}) {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const profileInputRef = useRef<HTMLInputElement>(null);

  const isEdit = mode === "edit" && existingDog;
  const dog = existingDog || {};

  // Initialize photos from existing dog data
  const initialPhotos: string[] = (() => {
    if (!dog.media) return [];
    try { return JSON.parse(dog.media); } catch { return []; }
  })();
  const [photos, setPhotos] = useState<string[]>(initialPhotos);
  const [profilePhoto, setProfilePhoto] = useState<string>(dog.profilePhoto || "");

  const tabs = [
    { id: 1, name: "Dados Básicos", icon: "📋" },
    { id: 2, name: "Fotos", icon: "📸" },
    { id: 3, name: "Dados Complementares", icon: "🔬" },
    { id: 4, name: "Pedigree", icon: "📜" },
    { id: 5, name: "Descendentes", icon: "🐾" },
    { id: 6, name: "Vídeos", icon: "🎥" },
  ];

  function fmtDate(d: string | Date | null | undefined) {
    if (!d) return "";
    const date = new Date(d);
    return date.toISOString().split("T")[0];
  }

  function parseMedia(json: string | null | undefined): string {
    if (!json) return "";
    try { return JSON.parse(json).join(", "); } catch { return ""; }
  }

  async function handleUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      
      try {
        const res = await fetch("/api/upload", { method: "POST", body: formData });
        const data = await res.json();
        if (data.url) {
          setPhotos(prev => [...prev, data.url]);
        }
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
    
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removePhoto(index: number) {
    const removedUrl = photos[index];
    setPhotos(prev => prev.filter((_, i) => i !== index));
    // If the removed photo was the profile photo, clear it
    if (removedUrl === profilePhoto) setProfilePhoto("");
  }

  async function handleProfileUpload(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploading(true);
    const file = files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) setProfilePhoto(data.url);
    } catch (err) {
      console.error("Profile upload failed:", err);
    }
    setUploading(false);
    if (profileInputRef.current) profileInputRef.current.value = "";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    if (isEdit) {
      await updateDog(formData);
    } else {
      await addDog(formData);
    }
    setLoading(false);
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/caes" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao Plantel
        </Link>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl font-bold text-white flex items-center gap-3">
          {isEdit ? `Editar: ${dog.nickname || dog.name}` : "Cadastrar Novo Cão"}
          {dog.registro && <span className="text-brand-bronze text-sm font-mono tracking-widest bg-brand-bronze/10 px-3 py-1 rounded-sm">{dog.registro}</span>}
        </h1>
      </div>

      {/* Tabbed Form */}
      <div className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-white/5 scrollbar-hide">
          {tabs.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
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

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
          {isEdit && <input type="hidden" name="dogId" value={dog.id} />}
          <input type="hidden" name="_profilePhoto" value={profilePhoto} />

          {/* TAB 1: Dados Básicos */}
          <div className={activeTab === 1 ? "block space-y-5" : "hidden"}>
            {/* Profile photo at top of Tab 1 */}
            <div className="flex items-start gap-6 pb-5 border-b border-white/10">
              <div className="relative flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl overflow-hidden bg-zinc-800 border-2 border-white/10">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Foto de perfil" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <input
                  ref={profileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => handleProfileUpload(e.target.files)}
                />
                <button
                  type="button"
                  onClick={() => profileInputRef.current?.click()}
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-brand-bronze hover:bg-brand-gold text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div className="pt-1">
                <p className="text-white font-medium text-sm">Foto Principal</p>
                <p className="text-zinc-500 text-xs mt-1">Esta é a foto de perfil do cão. Aparece nos cards do admin e na página pública do site.</p>
                {profilePhoto && (
                  <button type="button" onClick={() => setProfilePhoto("")} className="text-xs text-red-400 hover:text-red-300 mt-2 transition-colors">
                    Remover foto de perfil
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Registro (Automático)</label>
                <input name="registro" readOnly defaultValue={dog.registro || "Gerado ao Salvar"} className="w-full bg-zinc-950/50 border border-white/5 rounded-lg px-3 py-2.5 text-zinc-500 text-sm font-mono focus:outline-none" />
              </div>
              <div className="md:col-span-1">
                <label className="block text-xs font-medium text-zinc-400 mb-1">Nome Comum *</label>
                <input name="name" required defaultValue={dog.name || ""} placeholder="Ex: Brisa" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Apelido</label>
                <input name="nickname" defaultValue={dog.nickname || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Nome de Registro (Afixo)</label>
                <input name="registrationName" defaultValue={dog.registrationName || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Sistema Cartorial</label>
                <input name="registrySystem" defaultValue={dog.registrySystem || ""} placeholder="Ex: CBKC, ALKC" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Raça *</label>
                <input name="breed" required defaultValue={dog.breed || "Dachshund"} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Variedade</label>
                <input name="variety" defaultValue={dog.variety || ""} placeholder="Ex: Miniatura Pelo Longo" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Sexo *</label>
                <select name="sex" defaultValue={dog.sex || "M"} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors">
                  <option value="M">♂ Macho</option>
                  <option value="F">♀ Fêmea</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Cor *</label>
                <input name="color" required defaultValue={dog.color || ""} placeholder="Ex: Arlequim" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="flex justify-between items-center text-xs font-medium text-zinc-400 mb-1">
                  <span>Data de Nascimento</span>
                  {dog.birthDate && (
                    <span className="text-brand-bronze font-bold uppercase tracking-widest text-[10px]">
                      {calculateAge(dog.birthDate)}
                    </span>
                  )}
                </label>
                <input name="birthDate" type="date" defaultValue={fmtDate(dog.birthDate)} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Data de Chegada</label>
                <input name="arrivalDate" type="date" defaultValue={fmtDate(dog.arrivalDate)} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Altura (cm)</label>
                <input name="height" type="number" step="0.1" defaultValue={dog.height || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Nacionalidade</label>
                <input name="nationality" defaultValue={dog.nationality || ""} placeholder="Ex: Brasileira" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Temperamento</label>
                <input name="temperament" defaultValue={dog.temperament || ""} placeholder="Ex: Dócil, Ativo" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Mostrar Árvore Genealógica?</label>
                <select name="showGenealogy" defaultValue={dog.showGenealogy !== false ? "true" : "false"} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors">
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-medium text-zinc-400 mb-1">Observações</label>
                <textarea name="notes" rows={3} defaultValue={dog.notes || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm resize-none focus:outline-none focus:border-brand-bronze transition-colors"></textarea>
              </div>
            </div>
          </div>

          {/* TAB 2: Fotos */}
          <div className={activeTab === 2 ? "block space-y-5" : "hidden"}>
            {/* Hidden field that syncs photos state to the form */}
            <input type="hidden" name="_media" value={photos.length > 0 ? JSON.stringify(photos) : ""} />

            {/* Upload Area */}
            <div 
              className="p-8 border-2 border-dashed border-white/15 rounded-xl bg-zinc-950/50 text-center cursor-pointer hover:border-brand-bronze/40 hover:bg-brand-bronze/5 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); e.currentTarget.classList.add("border-brand-bronze", "bg-brand-bronze/10"); }}
              onDragLeave={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-brand-bronze", "bg-brand-bronze/10"); }}
              onDrop={(e) => { e.preventDefault(); e.currentTarget.classList.remove("border-brand-bronze", "bg-brand-bronze/10"); handleUpload(e.dataTransfer.files); }}
            >
              <input 
                ref={fileInputRef}
                type="file" 
                accept="image/jpeg,image/png,image/webp,image/gif" 
                multiple 
                className="hidden"
                onChange={(e) => handleUpload(e.target.files)}
              />
              {uploading ? (
                <>
                  <div className="w-8 h-8 border-2 border-brand-bronze border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                  <p className="text-brand-gold text-sm font-medium">Enviando...</p>
                </>
              ) : (
                <>
                  <svg className="w-10 h-10 text-zinc-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <p className="text-white text-sm font-medium mb-1">Clique para enviar fotos ou arraste aqui</p>
                  <p className="text-xs text-zinc-500">JPG, PNG, WebP ou GIF · Múltiplas imagens permitidas</p>
                </>
              )}
            </div>

            {/* Photo grid preview */}
            {photos.length > 0 && (
              <div>
                <p className="text-xs text-zinc-400 mb-3">{photos.length} foto(s) adicionada(s)</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {photos.map((url, i) => (
                    <div key={i} className="relative group aspect-square rounded-xl overflow-hidden bg-zinc-800 border border-white/5">
                      <img src={url} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button 
                          type="button" 
                          onClick={() => removePhoto(i)} 
                          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      {i === 0 && !profilePhoto && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-brand-bronze text-[10px] font-bold text-white rounded-full">CAPA</span>
                      )}
                      {url === profilePhoto && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 bg-green-500 text-[10px] font-bold text-white rounded-full">PERFIL</span>
                      )}
                      {/* Set as profile button */}
                      {url !== profilePhoto && (
                        <button
                          type="button"
                          onClick={() => setProfilePhoto(url)}
                          className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-white/90 text-[10px] font-bold text-black rounded-lg hover:bg-brand-gold"
                        >
                          Definir Perfil
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* TAB 3: Dados Complementares */}
          <div className={activeTab === 3 ? "block space-y-8" : "hidden"}>
            <div>
              <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Identificação Eletrônica</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Nº Microchip</label>
                  <input name="microchip" defaultValue={dog.microchip || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Data da Microchipagem</label>
                  <input name="microchipDate" type="date" defaultValue={fmtDate(dog.microchipDate)} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Perfil de DNA</label>
                  <input name="dnaProfile" defaultValue={dog.dnaProfile || ""} placeholder="ID Científico do DNA" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Tag / Placa / ID Interno</label>
                  <input name="tagId" defaultValue={dog.tagId || ""} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Exibição / Status</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Status no Plantel *</label>
                  <select name="status" defaultValue={dog.status || "ATIVO"} className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors">
                    <option value="ATIVO">Ativo (Reprodutor/Matriz)</option>
                    <option value="APOSENTADO">Aposentado</option>
                    <option value="EXTERNO">Externo (Outro Canil / Co-propriedade)</option>
                    <option value="VENDIDO">Vendido</option>
                    <option value="OBITO">Falecido / Óbito</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Saúde (Profilaxia)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">COI (Coeficiente de Endogamia)</label>
                  <input name="coi" defaultValue={dog.coi || ""} placeholder="Ex: 5%" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Displasia Coxo-Femural</label>
                  <input name="hipDysplasia" defaultValue={dog.hipDysplasia || ""} placeholder="Ex: HD-A (Livre)" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Displasia de Cotovelo</label>
                  <input name="elbowDysplasia" defaultValue={dog.elbowDysplasia || ""} placeholder="Ex: ED-0 (Livre)" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Luxação de Patela</label>
                  <input name="patellaLuxation" defaultValue={dog.patellaLuxation || ""} placeholder="Ex: Grau 0" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* TAB 4: Pedigree */}
          <div className={activeTab === 4 ? "block space-y-5" : "hidden"}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1">Nº do Pedigree</label>
                <input name="pedigreeId" defaultValue={dog.pedigreeId || ""} placeholder="Ex: FOX12345BR" className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm font-mono focus:outline-none focus:border-brand-bronze transition-colors" />
              </div>
            </div>

            <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mt-4 border-b border-white/10 pb-2">Genealogia Direta (Pais)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-blue-400 mb-1">Pai (Sire)</label>
                <select 
                  name="sireId" 
                  defaultValue={dog.sireId || ""} 
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-bronze transition-colors"
                >
                  <option value="">-- Selecionar Pai --</option>
                  {dogs.filter(d => d.sex === "M" && d.id !== dog.id).map(d => (
                    <option key={d.id} value={d.id}>{d.nickname || d.name} ({d.breed})</option>
                  ))}
                </select>
                <p className="text-[10px] text-zinc-500 mt-1">Apenas cães machos cadastrados aparecem aqui.</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-pink-400 mb-1">Mãe (Dam)</label>
                <select 
                  name="damId" 
                  defaultValue={dog.damId || ""} 
                  className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                >
                  <option value="">-- Selecionar Mãe --</option>
                  {dogs.filter(d => d.sex === "F" && d.id !== dog.id).map(d => (
                    <option key={d.id} value={d.id}>{d.nickname || d.name} ({d.breed})</option>
                  ))}
                </select>
                <p className="text-[10px] text-zinc-500 mt-1">Apenas cães fêmeas cadastradas aparecem aqui.</p>
              </div>
            </div>

            <div className="bg-brand-gold/10 border-brand-gold/20 p-5 rounded-xl mt-4">
              <p className="text-brand-gold text-sm font-medium mb-4">🌳 Árvore Genealógica</p>
              {isEdit && (dog.sire || dog.dam) ? (
                <PedigreeTree dog={dog} />
              ) : (
                <p className="text-brand-gold/70 text-xs mt-1">
                  Ao selecionar o pai e a mãe acima e salvar, o sistema montará automaticamente a árvore de 3 gerações baseada nos registros existentes.
                </p>
              )}
            </div>
          </div>

          {/* TAB 5: Descendentes */}
          <div className={activeTab === 5 ? "block space-y-5" : "hidden"}>
            {isEdit && litters.length > 0 ? (
              <div className="space-y-4">
                {litters.map((litter: Litter) => (
                  <div key={litter.id} className="bg-zinc-800/50 border border-white/5 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-white font-medium">{litter.title || "Ninhada sem título"}</p>
                      <span className="text-xs text-zinc-500">{litter.birthDate ? new Date(litter.birthDate).toLocaleDateString("pt-BR") : "Data indefinida"}</span>
                    </div>
                    {litter.puppies && litter.puppies.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {litter.puppies.map((puppy: any) => (
                          <span key={puppy.id} className="px-3 py-1 bg-zinc-700/50 rounded-full text-xs text-zinc-300">
                            {puppy.name || "Filhote"} ({puppy.sex === "M" ? "♂" : "♀"} · {puppy.color})
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-500">Nenhum filhote registrado nesta ninhada</p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-zinc-800/50 border border-white/5 rounded-xl p-10 text-center">
                <svg className="w-10 h-10 text-zinc-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="text-white font-medium mb-1">Cães Descendentes</p>
                <p className="text-sm text-zinc-400">
                  {isEdit 
                    ? "Este cão ainda não foi atrelado a nenhuma ninhada." 
                    : "Salve o cão primeiro, depois vincule-o a ninhadas em Gerenciar Ninhadas."}
                </p>
              </div>
            )}
          </div>

          {/* TAB 6: Vídeos */}
          <div className={activeTab === 6 ? "block space-y-5" : "hidden"}>
            <div className="p-6 border border-dashed border-white/20 rounded-xl bg-zinc-950/50 text-center">
              <svg className="w-10 h-10 text-zinc-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-zinc-400 mb-3">Cole os links do YouTube ou Instagram Reels separados por vírgula</p>
              <textarea name="videos" rows={2} defaultValue={parseMedia(dog.videos)} placeholder="https://youtube.com/..., https://instagram.com/..." className="w-full bg-zinc-950 border border-white/10 rounded-lg px-3 py-2.5 text-white text-sm font-mono resize-none focus:outline-none focus:border-brand-bronze transition-colors"></textarea>
            </div>
          </div>

          {/* Persistent Footer */}
          <div className="pt-6 mt-2 border-t border-white/10 flex justify-between items-center">
            <Link href="/admin/caes" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Cancelar
            </Link>
            <button 
              type="submit" 
              disabled={loading}
              className="px-8 py-3 bg-brand-bronze text-white rounded-lg font-semibold hover:bg-brand-gold transition-colors shadow-lg shadow-brand-bronze/20 disabled:opacity-50"
            >
              {loading 
                ? "Salvando..." 
                : isEdit 
                  ? "✓ Salvar Alterações" 
                  : "✓ Cadastrar Cão"
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
