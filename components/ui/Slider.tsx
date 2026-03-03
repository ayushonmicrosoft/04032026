'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

interface Slide {
    id: string | number;
    content: React.ReactNode;
}

interface SliderProps {
    slides: Slide[];
    slidesPerView?: number | "auto";
    spaceBetween?: number;
    autoplay?: boolean;
    className?: string;
}

export function Slider({
    slides,
    slidesPerView = 1,
    spaceBetween = 30,
    autoplay = false,
    className = "",
}: SliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
    }, 
    autoplay ? [Autoplay({ delay: 5000, stopOnInteraction: false })] : []
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={clsx("relative group", className)}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full" style={{ marginLeft: `-${spaceBetween}px` }}>
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="flex-[0_0_100%] h-full min-w-0" 
              style={{ paddingLeft: `${spaceBetween}px` }}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Navigation Buttons */}
      <button 
        onClick={scrollPrev}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-12 h-12 bg-white/90 hover:bg-white text-neutral-800 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-12 h-12 bg-white/90 hover:bg-white text-neutral-800 rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Pagination dots could be added here if needed, but Embla requires a bit more setup for it */}
    </div>
  );
}
