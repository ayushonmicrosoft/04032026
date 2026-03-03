import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CollaborationSection() {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="container px-6 2xl:px-0">
        <div
          className="relative overflow-hidden rounded-2xl border border-neutral-200/80"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(245,247,251,0.9) 0%, rgba(245,247,251,0.72) 34%, rgba(245,247,251,0.25) 62%, rgba(245,247,251,0.12) 100%), url('/images/hero/hero-2.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-2xl px-6 py-8 md:px-10 md:py-12">
            <h2 className="typ-h1 text-neutral-900">
              Space for <em className="italic">collaboration.</em>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-700 md:mt-5 md:text-xl">
              Plan breakout, meeting and lounge zones that help teams connect,
              discuss and decide faster.
            </p>
            <Link
              href="/solutions"
              className="typ-cta mt-8 inline-flex items-center gap-3 border-b border-neutral-900 pb-2 text-neutral-900 transition-colors hover:text-primary hover:border-primary"
            >
              Explore workspace solutions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
