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
    { 
      name: "Plantel", 
      href: "/caes",
      dropdown: [
        { name: "Dachshund", href: "/caes?breed=dachshund" },
        { name: "Pastor Belga", href: "/caes?breed=pastor-belga" }
      ]
    },
    { 
      name: "Ninhadas", 
      href: "/ninhadas",
      dropdown: [
        { name: "Dachshund", href: "/ninhadas?breed=dachshund" },
        { name: "Pastor Belga", href: "/ninhadas?breed=pastor-belga" }
      ]
    },
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
          <div key={link.name} className="relative group">
            <Link 
              href={link.href} 
              className="hover:text-brand-bronze transition-colors duration-300 py-4"
            >
              {link.name}
            </Link>
            {link.dropdown && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                <div className="bg-zinc-900 border border-white/10 rounded-lg shadow-2xl p-2 flex flex-col gap-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(158,122,44,0.1)_0%,transparent_100%)]" />
                  {link.dropdown.map(drop => (
                    <Link
                      key={drop.name}
                      href={drop.href}
                      className="relative z-10 px-4 py-2.5 text-xs text-white/70 hover:text-brand-gold hover:bg-white/5 rounded-md transition-all text-center"
                    >
                      {drop.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Content */}
      <div 
        style={{ 
          backgroundColor: '#0647C1', 
          opacity: 1, 
          backdropFilter: 'none', 
          WebkitBackdropFilter: 'none',
          visibility: isOpen ? 'visible' : 'hidden'
        }}
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] z-[9999] shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col drawer-solid-fix ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="p-8 pb-4 border-b border-white/5 flex items-start justify-between">
          <div>
            <div className="font-serif text-xl font-bold tracking-[0.1em] text-brand-bronze mb-1">
              BLUE AGATE
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-light">Heritage & Curation</p>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white p-2 -mr-2 transition-colors"
            aria-label="Fechar menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-8 py-12 flex flex-col gap-8 overflow-y-auto">
          {links.map((link, idx) => (
            <div key={link.name} className={`flex flex-col gap-3 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`} style={{ transitionDelay: `${idx * 100 + 200}ms` }}>
              <Link 
                href={link.href} 
                className="text-2xl font-serif text-white/90 hover:text-brand-bronze"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="flex flex-col gap-2 pl-4 border-l border-white/20 ml-2">
                  {link.dropdown.map(drop => (
                    <Link
                      key={drop.name}
                      href={drop.href}
                      className="text-sm font-medium uppercase tracking-widest text-white/60 hover:text-brand-gold"
                      onClick={() => setIsOpen(false)}
                    >
                      {drop.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-8 border-t border-white/5">
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
