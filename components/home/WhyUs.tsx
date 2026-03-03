import type { BusinessStats } from "@/lib/types/businessStats";
import { formatKpiValuePlus } from "@/lib/kpiFormat";

interface WhyUsProps {
  stats: BusinessStats;
  asOfLabel: string;
}

export function WhyUs({ stats, asOfLabel }: WhyUsProps) {
  const pillars = [
    {
      id: "client-organisations",
      number: formatKpiValuePlus(stats.clientOrganisations),
      label: "Organisations served",
      caption: "One team for site survey, BOQ alignment and procurement approvals",
    },
    {
      id: "projects-delivered",
      number: formatKpiValuePlus(stats.projectsDelivered),
      label: "Projects delivered",
      caption: "Planned delivery windows with site-readiness checks and coordinated installation",
    },
    {
      id: "years-experience",
      number: `${stats.yearsExperience}+`,
      label: "Years of expertise",
      caption: "Warranty-backed systems with responsive after-sales support since 2011",
    },
  ] as const;

  return (
    <section className="w-full border-y border-neutral-200/50 bg-neutral-50/75 pb-8 pt-16 md:pb-10 md:pt-20">
      <div className="container px-6 2xl:px-0">
        <div className="mb-12 text-center">
          <h2 className="typ-h1 text-neutral-900">
            Our journey in numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {pillars.map(({ id, number, label, caption }) => (
            <article
              key={label}
              className="rounded-2xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-[0_1px_0_rgba(15,23,42,0.05)] md:px-7 md:py-9"
            >
              <span
                data-testid={id === "projects-delivered" || id === "client-organisations" ? `kpi-${id}` : undefined}
                className="typ-h1 text-primary leading-none"
              >
                {number}
              </span>
              <p className="typ-h3 mt-4 font-bold text-neutral-900">
                {label}
              </p>
              <p className="mx-auto mt-2 max-w-[32ch] text-sm leading-relaxed text-neutral-600">
                {caption}
              </p>
            </article>
          ))}
        </div>

        <p
          data-testid="kpi-as-of-home"
          className="sr-only"
        >
          {asOfLabel}
        </p>
      </div>
    </section>
  );
}
