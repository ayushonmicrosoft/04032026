"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMAGES = [
  { src: "/images/hero/titan-patna-hq.webp", alt: "" },
  { src: "/images/hero/tvs-patna-hq.webp", alt: "" },
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
    <section
      className="relative min-h-[94vh] w-full overflow-hidden lg:min-h-screen"
      aria-label="Hero"
    >
      {/* Background images — decorative, alt="" is correct */}
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={75}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Gradient overlay — richer depth than flat black */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

      <div className="relative z-10 flex min-h-[94vh] items-center lg:min-h-screen">
        <div className="container px-6 2xl:px-0">
          <div className="max-w-2xl">
            {/* Eyebrow — location + authority signal */}
            <p className="typ-eyebrow mb-4 text-white/60">
              AFC Authorized Partner · Gurugram & Patna
            </p>

            <h1 className="typ-h1 text-white">
              Office spaces made for your team.
            </h1>

            {/* Sub-headline — value prop, proof points */}
            <p className="mt-4 text-lg font-light text-white/80 leading-relaxed max-w-xl">
              500+ fit-outs delivered across India since 2011 — from
              10-seat startups to 2,000-seat government projects.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="typ-cta inline-flex items-center gap-3 bg-primary px-8 py-4 text-white transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="typ-cta inline-flex items-center gap-3 border border-white/40 px-8 py-4 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                View Catalog
              </Link>
            </div>

            {/* Trust bar */}
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Trusted by HDFC · Tata · Indian Army · NTPC · UNICEF & 120+ more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
