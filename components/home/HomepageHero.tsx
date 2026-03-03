"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [
  {
    src: "/images/hero/titan-patna-hq.webp",
    alt: "Titan Patna workspace project",
  },
  {
    src: "/images/hero/tvs-patna-hq.webp",
    alt: "TVS Patna workspace project",
  },
] as const;

export function HomepageHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[94vh] w-full overflow-hidden lg:min-h-screen" aria-label="Hero">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={95}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-[94vh] items-center lg:min-h-screen">
        <div className="container px-6 2xl:px-0">
          <div className="max-w-2xl">
            <h1 className="typ-h1 text-white">Office spaces made for your team.</h1>
            <div className="mt-8">
              <Link
                href="/products"
                className="typ-cta inline-flex items-center gap-3 bg-primary px-8 py-4 text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View Product Catalog <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
