"use client";

import { useState } from "react";
import Image from "next/image";

interface LitterCarouselProps {
  media: string | null;
  title: string;
}

export default function LitterCarousel({ media, title }: LitterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = (() => {
    if (!media) return [];
    try {
      const parsed = JSON.parse(media);
      return Array.isArray(parsed) ? parsed : [media];
    } catch {
      return media.split(",").filter(Boolean);
    }
  })();

  if (photos.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center text-zinc-100 font-serif text-4xl">
        BA
      </div>
    );
  }

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative w-full h-full group/carousel overflow-hidden">
      {/* Sliding Container */}
      <div 
        className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {photos.map((url, i) => (
          <div key={i} className="relative min-w-full h-full overflow-hidden">
            <Image
              src={url}
              alt={`${title} - Foto ${i + 1}`}
              fill
              className="object-cover grayscale-[0.3] group-hover/carousel:grayscale-0 transition-all duration-[1.5s]"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/40 hover:scale-110 z-20"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-black/40 hover:scale-110 z-20"
          >
            →
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-white w-6 shadow-lg" : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
