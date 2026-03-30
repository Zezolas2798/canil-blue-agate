"use client";

import { logout } from "./login/actions";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button 
        type="submit"
        className="w-full px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors flex items-center gap-2"
      >
        Sair do Painel
      </button>
    </form>
  );
}
