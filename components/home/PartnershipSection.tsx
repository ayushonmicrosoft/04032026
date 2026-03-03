"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="w-full border-y border-neutral-200/50 bg-white/80 py-14 md:py-20">
      <div className="container px-6 2xl:px-0">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/catalog-logo-sharp.webp"
              alt="AFC brand mark"
              width={852}
              height={584}
              sizes="(max-width: 768px) 154px, 224px"
              quality={100}
              className="h-auto w-[154px] md:w-[224px]"
              priority={false}
            />
          </div>

          <div className="text-left md:text-right">
            <h2 className="typ-h1 text-neutral-900">Authorized AFC franchise partner</h2>
            <p className="mt-4 typ-h3 font-normal text-neutral-600">
              You get factory-backed products with local planning, delivery and after-sales support from One and Only.
            </p>

            <Link
              href="https://afcindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="typ-cta mt-6 inline-flex items-center gap-2 text-neutral-900 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Visit afcindia.com <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
