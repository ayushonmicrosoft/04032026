"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ContactTeaser() {
  return (
    <section className="w-full bg-[#1a2030] py-10 md:py-12">
      <div className="container px-6 2xl:px-0">
        <h2 className="typ-h1 mx-auto mb-4 max-w-4xl text-center leading-[1.05] text-[#f4f7ff]">
          Share your requirement. We will build the plan.
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-lg leading-relaxed font-normal text-[#b1bdd7] md:text-xl">
          Tell us the scope, timeline and site details. Our team will return a
          practical proposal with product options, delivery plan and support terms.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact"
            className="typ-cta flex items-center gap-3 bg-primary px-10 py-4 text-white transition-all hover:bg-primary-hover hover:shadow-xl group"
          >
            Request Proposal{" "}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
          <Link
            href="/support-ivr"
            className="typ-cta flex items-center gap-3 border border-[#36405a] px-10 py-4 text-[#e7ecfb] transition-colors hover:bg-[#1a2237]"
          >
            Open Support <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
