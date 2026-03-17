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
            className="hover:text-brand-bronze transition-colors duration-300"
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
          <span className={`w-full h-[1px] bg-brand-bronze transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`w-full h-[1px] bg-brand-bronze transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`w-full h-[1px] bg-brand-bronze transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[10px]' : ''}`} />
        </div>
      </button>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-brand-blue/98 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 px-6">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-3xl font-serif text-white transition-all duration-300 hover:text-brand-bronze transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${links.indexOf(link) * 100}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="w-16 h-[1px] bg-brand-bronze/40 mt-6" />
          <p className="text-[10px] text-white/40 uppercase tracking-[0.5em] font-light">Canil Blue Agate</p>
        </div>
      </div>
    </nav>
  );
}
