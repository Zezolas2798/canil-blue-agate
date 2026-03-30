"use client";

import { useState } from "react";
import { login } from "./actions";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");
    try {
      const response = await login(formData);
      if (response?.error) {
        setError(response.error);
      }
    } catch (e) {
      // redirect throws an error internally in Next.js — this is expected behavior
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/20 to-zinc-950 -z-10" />
      
      <div className="max-w-md w-full glass p-10 rounded-2xl text-center border-brand-bronze/30">
        <h1 className="font-serif text-3xl font-bold text-brand-gold mb-2">BLUE AGATE</h1>
        <p className="text-zinc-500 text-sm mb-8 tracking-widest uppercase">Workspace Restrito</p>
        
        <form action={handleSubmit} className="flex flex-col gap-6 text-left">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              required
              autoComplete="email"
              className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
              placeholder="admin@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Senha de Acesso</label>
            <input 
              type="password" 
              name="password"
              required
              autoComplete="current-password"
              className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          {error && <p className="text-red-400 text-sm">{error}</p>}
          
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-bronze text-white rounded-lg font-medium hover:bg-brand-gold disabled:opacity-50 transition-colors mt-2"
          >
            {loading ? "Autenticando..." : "Entrar no Painel"}
          </button>
        </form>
      </div>
      
      <p className="text-zinc-600 text-xs mt-8">
        &copy; {new Date().getFullYear()} Canil Blue Agate
      </p>
    </div>
  );
}
