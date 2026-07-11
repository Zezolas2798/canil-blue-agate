"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { BREEDS, getBreedDisplayLabel } from "@/lib/breed-config";

export default function AdminDogsClient({ initialDogs }: { initialDogs: any[] }) {
  const searchParams = useSearchParams();
  const initialTab = searchParams?.get("tab") || "internos";
  const initialStatus = searchParams?.get("status") || "TODOS";
  const initialBreed = searchParams?.get("breed") || "TODOS";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeStatus, setActiveStatus] = useState(initialStatus);
  const [activeBreed, setActiveBreed] = useState(initialBreed);

  // Sync state with URL params if they change (e.g. back button)
  useEffect(() => {
    if (searchParams) {
      setActiveTab(searchParams.get("tab") || "internos");
      setActiveStatus(searchParams.get("status") || "TODOS");
      setActiveBreed(searchParams.get("breed") || "TODOS");
    }
  }, [searchParams]);

  // Client-side filtering
  const tabDogs = activeTab === "externos" 
    ? initialDogs.filter(d => d.status === "EXTERNO")
    : initialDogs.filter(d => d.status !== "EXTERNO");

  let dogs = activeStatus === "TODOS" 
    ? tabDogs 
    : tabDogs.filter(d => d.status === activeStatus);
    
  if (activeBreed !== "TODOS") {
    dogs = dogs.filter(d => d.breed === activeBreed);
  }

  // Update URL helper (push state without triggering full reload in app router)
  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set(key, value);
    window.history.pushState(null, "", `?${params.toString()}`);
    
    if (key === "tab") setActiveTab(value);
    if (key === "status") setActiveStatus(value);
    if (key === "breed") setActiveBreed(value);
  };

  return (
    <>
      <div className="flex items-center gap-4 border-b border-white/10 mb-8">
        <button 
          onClick={() => setFilter("tab", "internos")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
            activeTab === "internos" ? "border-brand-bronze text-brand-bronze bg-brand-bronze/5" : "border-transparent text-zinc-400 hover:text-white"
          }`}
        >
          Plantel Principal
        </button>
        <button 
          onClick={() => setFilter("tab", "externos")}
          className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "externos" ? "border-brand-bronze text-brand-bronze bg-brand-bronze/5" : "border-transparent text-zinc-400 hover:text-white"
          }`}
        >
          Cães Externos / Co-propriedade
          {initialDogs.filter((d: any) => d.status === "EXTERNO").length > 0 && (
            <span className="px-2 py-0.5 bg-white/10 rounded-full text-[10px]">{initialDogs.filter((d: any) => d.status === "EXTERNO").length}</span>
          )}
        </button>
      </div>

      {/* Status Filters */}
      {activeTab !== "externos" && (
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: "Todos", value: "TODOS" },
              { label: "Ativos", value: "ATIVO" },
              { label: "Aposentados", value: "APOSENTADO" },
              { label: "Vendidos", value: "VENDIDO" },
              { label: "Óbitos", value: "OBITO" },
            ].map((s) => (
              <button
                key={s.value}
                onClick={() => setFilter("status", s.value)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeStatus === s.value
                    ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
                    : "bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/10 hover:text-white"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("breed", "TODOS")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeBreed === "TODOS"
                  ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
                  : "bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              Todas as Raças
            </button>
            {BREEDS.map((b) => (
              <button
                key={b.slug}
                onClick={() => setFilter("breed", b.slug)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeBreed === b.slug
                    ? "bg-brand-bronze text-white shadow-lg shadow-brand-bronze/20"
                    : "bg-zinc-900 text-zinc-400 border border-white/5 hover:border-white/10 hover:text-white"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Total {activeTab === "internos" ? "Plantel" : "Externos"}</p>
          <p className="text-2xl font-bold text-white mt-1">{tabDogs.length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Filtrados</p>
          <p className="text-2xl font-bold text-brand-gold mt-1">{dogs.length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Machos</p>
          <p className="text-2xl font-bold text-blue-400 mt-1">{tabDogs.filter(d => d.sex === "M").length}</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Fêmeas</p>
          <p className="text-2xl font-bold text-pink-400 mt-1">{tabDogs.filter(d => d.sex === "F").length}</p>
        </div>
      </div>

      {/* Dog Cards Grid */}
      {dogs.length === 0 ? (
        <div className="bg-zinc-900 border border-white/5 rounded-2xl py-20 text-center">
          <svg className="w-12 h-12 text-zinc-700 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-zinc-400 text-sm mb-4">Nenhum cão cadastrado ainda</p>
          <Link href="/admin/caes/novo" className="text-brand-gold hover:text-brand-gold/80 text-sm font-medium">
            Cadastrar o primeiro cão →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {dogs.map((dog) => (
            <Link
              key={dog.id}
              href={`/admin/caes/${dog.id}`}
              className="group bg-zinc-900 border border-white/5 rounded-xl overflow-hidden hover:border-brand-bronze/30 transition-all duration-300"
            >
              {/* Profile Photo */}
              <div className="aspect-square bg-zinc-800 relative overflow-hidden">
                {dog.profilePhoto ? (
                  <Image
                    src={dog.profilePhoto}
                    alt={dog.name}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-8 h-8 text-zinc-700 mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-zinc-600 text-[10px]">Sem foto</p>
                    </div>
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold tracking-wider shadow-lg ${
                    dog.status === "ATIVO" ? "bg-green-500 text-white" :
                    dog.status === "APOSENTADO" ? "bg-zinc-600 text-zinc-200" :
                    dog.status === "OBITO" ? "bg-red-600 text-white" :
                    "bg-brand-bronze text-white"
                  }`}>
                    {dog.status}
                  </span>
                </div>
                {/* Sex icon */}
                <div className="absolute top-2 left-2">
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-lg ${
                    dog.sex === "M" ? "bg-blue-500 text-white" : "bg-pink-500 text-white"
                  }`}>
                    {dog.sex === "M" ? "♂" : "♀"}
                  </span>
                </div>
                {/* Edit overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 bg-brand-bronze text-white text-xs font-medium rounded-lg shadow-lg">
                    Editar Perfil
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="font-semibold text-white group-hover:text-brand-gold transition-colors truncate text-sm">
                  {dog.nickname || dog.name}
                </p>
                {dog.registro && (
                  <p className="text-zinc-500 text-[10px] font-mono mb-1">{dog.registro}</p>
                )}
                {dog.registrationName && (
                  <p className="text-zinc-500 text-[10px] italic truncate mt-0.5">{dog.registrationName}</p>
                )}
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] text-zinc-400 truncate">{getBreedDisplayLabel(dog.breed, dog.variety, dog.coat)}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-1 text-[10px] text-zinc-500">
                  <span className="truncate">{dog.color}</span>
                  {dog.microchip && (
                    <>
                      <span className="text-zinc-700">·</span>
                      <span className="font-mono text-zinc-600 truncate">{dog.microchip.slice(-6)}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
