"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { name: "Início", href: "/" },
    { name: "Plantel", href: "/caes" },
    { name: "Ninhadas", href: "/ninhadas" },
    { name: "Aplicação", href: "/aplicacao" },
  ];

  const socialLinks = [
    { name: "WhatsApp", href: "#", icon: "💬" },
    { name: "Instagram", href: "https://www.instagram.com/canilblueagate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", icon: "📸" },
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

      {/* Mobile Menu Button - Minimalist */}
      <button 
        className="md:hidden text-white p-2 focus:outline-none z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between items-end">
          <span className={`h-[1px] bg-brand-bronze transition-all duration-300 ${isOpen ? 'w-full rotate-45 translate-y-[9px]' : 'w-full'}`} />
          <span className={`h-[1px] bg-brand-bronze transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'w-2/3 opacity-100'}`} />
          <span className={`h-[1px] bg-brand-bronze transition-all duration-300 ${isOpen ? 'w-full -rotate-45 -translate-y-[10px]' : 'w-1/2'}`} />
        </div>
      </button>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-brand-blue z-50 shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo */}
        <div className="p-8 pb-4 border-b border-white/5">
          <div className="font-serif text-xl font-bold tracking-[0.1em] text-brand-bronze mb-2">
            BLUE AGATE
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-light">Heritage & Curation</p>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-8 py-12 flex flex-col gap-8">
          {links.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-3xl font-serif text-white/90 transition-all duration-300 hover:text-brand-bronze transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100 + 200}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-8 border-t border-white/5 bg-black/10">
          <p className="text-[9px] text-brand-bronze uppercase tracking-[0.4em] font-bold mb-6">Fale Conosco</p>
          <div className="flex flex-col gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name} 
                href={social.href}
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-light tracking-wide"
              >
                <span className="text-lg opacity-50">{social.icon}</span>
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="mt-12 flex items-center gap-4 opacity-20">
             <div className="w-8 h-[1px] bg-white" />
             <p className="text-[8px] text-white uppercase tracking-[0.5em]">Canil Blue Agate</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
