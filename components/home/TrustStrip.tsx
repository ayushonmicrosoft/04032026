import Link from "next/link";
import type { BusinessStats } from "@/lib/types/businessStats";
import { formatKpiValuePlus } from "@/lib/kpiFormat";

interface TrustStripProps {
  stats: BusinessStats;
  asOfLabel: string;
}

export function TrustStrip({ stats, asOfLabel }: TrustStripProps) {
  return (
    <section
      className="border-y border-neutral-100 bg-white py-8"
      aria-label="Trust indicators"
    >
      <div className="container px-6 2xl:px-0">
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          <span className="shrink-0 typ-eyebrow">Execution Confidence</span>

          <div className="flex flex-wrap items-center gap-2.5">
            <span
              data-testid="kpi-client-organisations"
              className="rounded-full border border-neutral-200 px-3 py-1 typ-cta text-neutral-700"
            >
              {formatKpiValuePlus(stats.clientOrganisations)}
              {" "}
              Organisations Served
            </span>
            <span
              data-testid="kpi-projects-delivered"
              className="rounded-full border border-neutral-200 px-3 py-1 typ-cta text-neutral-700"
            >
              {formatKpiValuePlus(stats.projectsDelivered)}
              {" "}
              Projects Delivered
            </span>
            <span className="rounded-full border border-neutral-200 px-3 py-1 typ-cta text-neutral-700">
              {formatKpiValuePlus(stats.sectorsServed)}
              {" "}
              Sectors Served
            </span>
          </div>

          <Link
            href="/projects"
            className="ml-auto shrink-0 typ-cta text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded whitespace-nowrap"
          >
            View case studies
          </Link>
        </div>

        <p
          data-testid="kpi-as-of-home"
          className="mt-4 text-xs font-medium tracking-wide text-neutral-500"
        >
          {asOfLabel}
        </p>
      </div>
    </section>
  );
}
