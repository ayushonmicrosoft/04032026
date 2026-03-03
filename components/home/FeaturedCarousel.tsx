import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    id: "fluid-x",
    name: "Fluid X",
    category: "Seating",
    image: "/images/catalog/oando-seating--fluid-x/image-1.webp",
    link: "/products/seating/oando-seating--fluid-x",
  },
  {
    id: "deskpro",
    name: "DeskPro",
    category: "Workstations",
    image: "/images/catalog/oando-workstations--deskpro/image-1.webp",
    link: "/products/workstations/oando-workstations--deskpro",
  },
  {
    id: "cocoon",
    name: "Cocoon Pod",
    category: "Collaborative",
    image: "/images/products/imported/cocoon/image-1.webp",
    link: "/products/soft-seating/oando-collaborative--cocoon-pod",
  },
  {
    id: "convene",
    name: "Convene Tables",
    category: "Tables",
    image: "/images/catalog/oando-tables--convene/image-1.webp",
    link: "/products/tables",
  },
  {
    id: "strata",
    name: "Strata Storage",
    category: "Storage",
    image: "/images/catalog/oando-storage--metal-storages/image-1.webp",
    link: "/products/storages",
  },
  {
    id: "edu",
    name: "Edu Systems",
    category: "Education",
    image: "/images/catalog/oando-educational--classcraft/image-1.webp",
    link: "/products/education",
  },
] as const;

export function FeaturedCarousel() {
  return (
    <section className="w-full border-y border-neutral-200/50 bg-white/85 py-16 md:py-20">
      <div className="container px-6 2xl:px-0">
        <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="typ-h2 text-neutral-900">Featured products</h2>
          </div>

          <Link
            href="/products"
            className="typ-cta inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            Explore All Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={product.link}
              className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2 p-6">
                <p className="typ-eyebrow text-primary/70">{product.category}</p>
                <span className="typ-cta inline-flex items-center gap-2 text-primary">
                  See Product <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">for {product.name}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
