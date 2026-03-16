"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Início", href: "/" },
    { name: "Plantel", href: "/caes" },
    { name: "Ninhadas", href: "/ninhadas" },
    { name: "Aplicação", href: "/aplicacao" },
  ];

  return (
    <nav className="relative">
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-[13px] font-medium uppercase tracking-widest text-white/80">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="hover:text-[#C5A059] transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-white p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`w-full h-[1px] bg-[#C5A059] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`w-full h-[1px] bg-[#C5A059] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-full h-[1px] bg-[#C5A059] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} />
        </div>
      </button>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 top-24 bg-[#001F3F] z-40 transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6 pb-24">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-2xl font-serif text-white hover:text-[#C5A059] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-[#C5A059]/30 mt-4" />
          <p className="text-[10px] text-white/40 uppercase tracking-[0.4em]">Canil Blue Agate</p>
        </div>
      </div>
    </nav>
  );
}
