import Link from "next/link";
import { ClientBadge, type ClientBadgeData } from "@/components/ClientBadge";
import { formatTrustedClientsFooter } from "@/lib/kpiFormat";

// Featured 16 clients — sourced from full client list (ClientMarquee)
const FEATURED_CLIENTS: ClientBadgeData[] = [
  { name: "Titan", sector: "Manufacturing", location: "Patna, Bihar" },
  { name: "Usha International", sector: "Manufacturing", location: "Gurgaon" },
  { name: "DMRC", sector: "Government", location: "New Delhi" },
  { name: "Government of Bihar", sector: "Government", location: "Patna" },
  { name: "Tata Steel", sector: "Manufacturing", location: "Jharkhand" },
  { name: "Tata Motors", sector: "Automotive", location: "Pan India" },
  { name: "L&T", sector: "Manufacturing", location: "Pan India" },
  { name: "HDFC", sector: "Finance", location: "Pan India" },
  { name: "State Bank of India", sector: "Finance", location: "Pan India" },
  { name: "NTPC", sector: "Energy", location: "Pan India" },
  { name: "IndianOil", sector: "Energy", location: "Pan India" },
  { name: "Maruti Suzuki", sector: "Automotive", location: "Gurgaon" },
  { name: "Asian Paints", sector: "FMCG", location: "Pan India" },
  { name: "ITC Limited", sector: "FMCG", location: "Pan India" },
  { name: "Indian Army", sector: "Government", location: "Pan India" },
  { name: "BHEL", sector: "Energy", location: "Pan India" },
];

interface OurWorkProps {
  clientCount: number;
}

export function OurWork({ clientCount }: OurWorkProps) {
  return (
    <section className="w-full bg-neutral-50 py-20 md:py-28 border-t border-neutral-200">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 mb-4">
              Trusted Clients
            </p>
            <h2 className="text-3xl md:text-4xl text-neutral-900 tracking-tight leading-tight">
              Trusted by India&apos;s most respected organisations.
            </h2>
          </div>
          <Link
            href="/projects"
            className="shrink-0 text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 hover:text-neutral-900 transition-colors border-b border-neutral-300 hover:border-neutral-900 pb-1"
          >
            View all clients →
          </Link>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {FEATURED_CLIENTS.map((client) => (
            <ClientBadge key={client.name} {...client} />
          ))}
        </div>

        {/* Count footer */}
        <p data-testid="kpi-clients-footer" className="mt-8 text-xs text-neutral-400 font-medium tracking-wide text-center">
          {formatTrustedClientsFooter(clientCount)}
        </p>
      </div>
    </section>
  );
}
