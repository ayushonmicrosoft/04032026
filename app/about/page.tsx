import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/home/Hero";
import { ClientBadge } from "@/components/ClientBadge";
import { Newsletter } from "@/components/shared/Newsletter";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { TRUSTED_BY_CLIENTS, TRUSTED_BY_STATS } from "@/lib/trustedBy";
export const metadata: Metadata = {
  title: "About Us | One and Only Furniture",
  description: "Learn about One and Only Furniture, Patna's most trusted office fit-out partner since 2011. Serving corporate, government, and institutional projects across India.",
};

export default function AboutPage() {
  const featuredClients = TRUSTED_BY_CLIENTS.slice(0, 8);

  return (
    <section className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="About us"
        subtitle="At One and Only Furniture, we believe a well-designed workspace is the foundation of productivity, collaboration, and success."
        showButton={false}
        backgroundImage="/images/hero/hero-1.webp"
      />

      <section className="container px-6 py-20 2xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-neutral-200">
            <Image
              src="/images/hero/hero-2.webp"
              alt="Workspace by One and Only Furniture"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-5">
            <h2 className="typ-h2 text-neutral-900">Built for modern workspaces</h2>
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              With over a decade of experience in modular office furniture, we design and deliver
              functional, adaptable workspaces that grow with business needs.
            </p>
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              From workstations and executive cabins to collaborative meeting spaces and ergonomic
              seating, our collections are made to improve day-to-day work and reflect your brand.
            </p>
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              We are trusted across government, manufacturing, automobile, IT, banking, oil and
              gas, and other sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 py-16">
        <div className="container px-6 2xl:px-0">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {TRUSTED_BY_STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
              >
                <p className="text-3xl text-primary md:text-4xl">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.12em] text-neutral-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-6 py-20 2xl:px-0">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="typ-h2 text-neutral-900">Trusted by industry leaders</h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Long-term delivery relationships across India with enterprise, government, and
              institutional teams.
            </p>
          </div>
          <Link href="/trusted-by" className="btn-ghost typ-cta whitespace-nowrap">
            View all clients
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredClients.map((client) => (
            <ClientBadge key={client.name} {...client} />
          ))}
        </div>
      </section>

      <Newsletter />
      <ContactTeaser />
    </section>
  );
}
