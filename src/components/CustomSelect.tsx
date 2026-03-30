import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Option {
  value: string;
  label: string;
  subLabel?: string;
  image?: string | null;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export default function CustomSelect({ options, value, onChange, placeholder }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-brand-bronze transition-colors text-sm flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          {selectedOption?.image && (
            <div className="relative w-8 h-8 rounded-sm overflow-hidden border border-zinc-800 shrink-0">
              <Image src={selectedOption.image} fill className="object-cover" alt={selectedOption.label} />
            </div>
          )}
          <div className="flex flex-col">
            <span className={selectedOption ? "text-white" : "text-zinc-500"}>
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            {selectedOption?.subLabel && (
              <span className="text-[10px] text-zinc-500 tracking-wider">
                {selectedOption.subLabel}
              </span>
            )}
          </div>
        </div>

        <svg
          className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-zinc-950 border border-white/10 rounded-lg shadow-2xl max-h-60 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
          <ul className="py-2">
            <li
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className="px-4 py-3 hover:bg-zinc-900 cursor-pointer text-zinc-500 text-sm flex items-center gap-3 transition-colors"
            >
              <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-sm bg-zinc-900 text-xs text-zinc-600">
                -
              </div>
              {placeholder}
            </li>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`px-4 py-3 hover:bg-zinc-900 cursor-pointer text-sm flex items-center gap-3 transition-colors ${
                  value === option.value ? "bg-zinc-900 text-brand-gold" : "text-white"
                }`}
              >
                {option.image ? (
                  <div className="relative w-8 h-8 rounded-sm overflow-hidden border border-zinc-800 shrink-0 flex items-center justify-center">
                    <Image src={option.image} fill className="object-cover" alt={option.label} />
                  </div>
                ) : (
                  <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-sm bg-zinc-900 text-[10px] text-zinc-600 font-serif">
                    BA
                  </div>
                )}
                
                <div className="flex flex-col">
                  <span>{option.label}</span>
                  {option.subLabel && (
                    <span className="text-[10px] text-zinc-500 tracking-wider">
                      {option.subLabel}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
