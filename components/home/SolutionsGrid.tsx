import Link from "next/link";
import {
  ArrowRight,
  Armchair,
  Boxes,
  LayoutDashboard,
  Users,
} from "lucide-react";

const CAPABILITIES = [
  {
    icon: Armchair,
    title: "Ergonomic Seating",
    outcome: "Comfort-focused seating standards with dependable warranty and service support.",
    href: "/products/seating",
  },
  {
    icon: LayoutDashboard,
    title: "Scalable Workstations",
    outcome: "Workstation systems that scale floor by floor without rework.",
    href: "/products/workstations",
  },
  {
    icon: Boxes,
    title: "Secure Storage Systems",
    outcome: "Secure storage for everyday use with durable hardware and practical layouts.",
    href: "/products/storages",
  },
  {
    icon: Users,
    title: "Collaboration Zones",
    outcome: "Collaboration setups for huddles, client meetings and hybrid workdays.",
    href: "/products/soft-seating",
  },
] as const;

export function SolutionsGrid() {
  return (
    <section className="w-full bg-[#040C18] py-20 md:py-24">
      <div className="container px-6 2xl:px-0">
        <div className="mb-10 md:mb-14">
          <p className="typ-eyebrow mb-3 text-cyan-300/70">Workspace Solutions</p>
          <h2 className="typ-h2 text-white">Built for how teams work every day</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map(({ icon: Icon, title, outcome, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative flex min-h-[240px] flex-col rounded-3xl border border-cyan-500/55 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.14),rgba(4,12,24,0.95)_55%)] px-6 py-8 text-white transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <div className="mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/5 text-cyan-300">
                <Icon className="h-9 w-9 stroke-[1.4]" />
              </div>

              <div className="mt-auto flex items-center justify-between gap-3">
                <div className="pr-4">
                  <h3 className="typ-h3 text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cyan-100/70">{outcome}</p>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/80 text-white transition-colors group-hover:border-cyan-200 group-hover:text-cyan-200">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
