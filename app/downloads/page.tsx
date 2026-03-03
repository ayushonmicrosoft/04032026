import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ContactTeaser } from "@/components/shared/ContactTeaser";

export default function DownloadsPage() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Downloads"
        subtitle="Brochures and technical files will be available here shortly."
        showButton={false}
        backgroundImage="/images/hero/hero-3.webp"
      />

      <section className="container px-6 py-24 2xl:px-0">
        <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-neutral-50 p-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Coming soon
          </p>
          <h2 className="typ-h2 mb-4 text-neutral-900">Download center is under preparation</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-neutral-600">
            We are organizing brochures, technical specifications, and product files.
            For immediate requirements, contact our team and we will share the documents directly.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-primary typ-cta">
              Request documents
            </Link>
          </div>
        </div>
      </section>

      <ContactTeaser />
    </section>
  );
}
