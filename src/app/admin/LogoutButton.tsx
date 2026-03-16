"use client";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => {
        document.cookie = "blueagate_admin_auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = "/admin/login";
      }}
      className="w-full px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-colors flex items-center gap-2"
    >
      Sair do Painel
    </button>
  );
}
