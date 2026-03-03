import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Newsletter } from "@/components/shared/Newsletter";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { ContentBlock } from "@/components/shared/ContentBlock";
import { Reveal } from "@/components/shared/Reveal";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Office Furniture Solutions | One and Only Furniture",
  description: "Explore our complete workspace systems engineered for performance. From small startups to large-scale government projects.",
};

export default function SolutionsPage() {
  const deliveryStats = [
    { value: "14+", label: "Years delivering workspaces" },
    { value: "120+", label: "Projects completed" },
    { value: "251+", label: "Corporate clients" },
    { value: "20+", label: "Locations serviced" },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="Workspace solutions that fit."
        subtitle="From planning to installation, we design practical office environments tailored to your teams, workflows, and growth."
        showButton={false}
        backgroundImage="/images/hero/hero-2.webp"
      />

      <section className="container px-6 2xl:px-0 py-24 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="typ-h1 text-neutral-900 leading-tight">
              Built around your workflow.
            </h2>
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              Focus zones, collaboration areas, client-facing rooms, and training halls—each space
              needs a different balance of ergonomics, acoustics, storage, and power. We plan and
              deliver modular systems that stay adaptable as your teams grow.
            </p>
            <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
              Our team works from brief to handover with clear checkpoints on seating, workstations,
              meeting tables, soft seating, and storage so you get a ready-to-use workspace without
              surprises.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-2xl">
            <Image
              src="/images/hero/hero-1.webp"
              alt="Modern office with collaborative seating"
              width={1400}
              height={900}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      <section className="w-full bg-neutral-50 py-16">
        <div className="container px-6 2xl:px-0">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {deliveryStats.map((item) => (
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

      <section className="w-full bg-neutral-900 py-32">
        <div className="container px-6 2xl:px-0">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-slogan text-white mb-20">
              How we <span className="text-primary italic">Deliver.</span>
            </h2>
          </Reveal>
        </div>

        <ContentBlock
          title="Analysis & Strategy."
          subtitle="Step 01"
          description="We audit your current layout, team patterns, and usage needs to define the right space plan before procurement begins."
          imageSrc="/images/catalog/oando-workstations--deskpro/image-1.webp"
          align="left"
          linkText="Book Consultation"
          linkHref="/contact"
        />

        <ContentBlock
          title="Holistic Planning."
          subtitle="Step 02"
          description="We convert your requirements into practical plans with product mixes, zoning, and finish options aligned to budget and timelines."
          imageSrc="/images/catalog/oando-tables--curvivo-meet/image-1.webp"
          align="right"
          linkText="View Projects"
          linkHref="/projects"
        />

        <ContentBlock
          title="Realization & Service."
          subtitle="Step 03"
          description="Our team executes installation, handover, and after-sales support so your workspace remains reliable as your business evolves."
          imageSrc="/images/catalog/oando-soft-seating--accent/image-1.webp"
          align="left"
          linkText="Contact Service"
          linkHref="/service"
        />
      </section>

      <section className="w-full py-32 bg-white">
        <div className="container px-6 2xl:px-0 text-center space-y-12">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-slogan text-neutral-900 leading-none">
              Plan your next <span className="text-primary italic">workspace.</span>
            </h2>
          </Reveal>
          <p className="text-xl md:text-2xl text-neutral-500 font-light max-w-2xl mx-auto">
            Tell us your scope, seat count, and timeline. We will share a
            practical proposal built for your use case.
          </p>
          <div className="pt-8">
            <a
              href="/contact"
              className="px-12 py-6 bg-neutral-900 text-white hover:bg-primary transition-all uppercase tracking-widest font-bold inline-block"
            >
              Request Proposal
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <ContactTeaser />
    </section>
  );
}

