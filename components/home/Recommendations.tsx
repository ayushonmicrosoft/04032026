"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { useRecommendations } from "@/hooks/useRecommendations";

export function Recommendations() {
  const [enabled, setEnabled] = useState(false);
  const { data, isLoading, error } = useRecommendations(enabled);

  if (!enabled) {
    return (
      <section className="border-y border-neutral-100 bg-neutral-50 py-12 md:py-14">
        <div className="container-wide px-6 2xl:px-0">
          <div className="max-w-2xl">
            <h2 className="typ-h2 mb-4 text-neutral-900">Product Suggestions</h2>
            <p className="typ-h3 mb-6 font-normal text-neutral-700">
              Load recommendations based on your recent browsing history.
            </p>
            <button
              type="button"
              onClick={() => setEnabled(true)}
              className="typ-cta inline-flex items-center border border-neutral-900 px-5 py-3 text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Load Recommendations
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center border-y border-neutral-100 bg-neutral-50 py-14">
        <Loader2 className="h-8 w-8 animate-spin text-neutral-300" />
      </div>
    );
  }

  if (error || !data || !data.recommendations?.length) {
    return null;
  }

  const isPersonalized = data.mode === "personalized";

  return (
    <section className="border-y border-neutral-100 bg-neutral-50 py-14 md:py-16">
      <div className="container-wide px-6 2xl:px-0">
        <div className="mb-12 max-w-xl">
          <h2 className="typ-h2 mb-4 text-neutral-900">
            {isPersonalized ? "Recommended for You" : "Popular Products"}
          </h2>
          <p className="typ-h3 font-normal text-neutral-700">{data.summary}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.recommendations.map((rec, idx) => (
            <Link
              key={`${rec.productId}-${idx}`}
              href={rec.href}
              className="group flex h-full flex-col border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  {rec.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">{rec.productName}</h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-500">{rec.why}</p>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-4 text-xs">
                <span className="font-medium text-neutral-900">{rec.budgetEstimate}</span>
                <span className="font-medium text-neutral-400 transition-colors group-hover:text-neutral-900">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
