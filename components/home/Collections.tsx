'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const collections = [
  {
    name: "Seating",
    image: "/products/seating-myel-1.webp",
    href: "/products?category=seating",
  },
  {
    name: "Workstations",
    image: "/products/deskpro-workstation-1.webp",
    href: "/products?category=workstations",
  },
  {
    name: "Conference",
    image: "/products/meeting-table-10pax.webp",
    href: "/products?category=conference",
  },
  {
    name: "Storage",
    image: "/products/cabin electrical render .webp",
    href: "/products?category=storage",
  },
  {
    name: "Reception",
    image: "/products/softseating-solace-1.webp",
    href: "/products?category=reception-lounge",
  },
  {
    name: "Accessories",
    image: "/products/dauble paper tray.webp",
    href: "/products?category=accessories",
  },
];

export function Collections() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 640px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 },
        '(min-width: 1280px)': { slidesToScroll: 4 }
      }
    }, 
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white border-b border-neutral-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl text-neutral-900">
            Our{" "}
            <span className="font-bold border-b-4 border-amber-600/20">
              Collections
            </span>
          </h2>

          <div className="flex gap-4">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-all"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-8">
            {collections.map((item) => (
              <div key={item.name} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%] pl-8">
                <Link
                  href={item.href}
                  className="group block relative aspect-[3/4] overflow-hidden rounded-2xl bg-neutral-100"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:-translate-y-2 transition-transform duration-500">
                      {item.name}
                    </h3>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-neutral-900 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
