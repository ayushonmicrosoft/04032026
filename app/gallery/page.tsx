import { Hero } from "@/components/home/Hero";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { Newsletter } from "@/components/shared/Newsletter";
import { Masonry, MasonryItem } from "@/components/ui/Masonry";
import Image from "next/image";

export default function ReferencesPage() {
  return (
    <section className="flex min-h-screen flex-col items-center bg-white">
      <Hero
        variant="small"
        title="References"
        subtitle="See how companies around the world use OandO furniture to create inspiring workplaces."
        showButton={false}
        backgroundImage="/projects/titan-gallery.webp"
      />

      <section className="container px-6 2xl:px-0 py-32">
        <div className="max-w-4xl space-y-8 mb-24">
          <h2 className="text-[44px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tighter text-neutral-900">
            Proven in{" "}
            <span className="text-neutral-400 italic font-light">
              Practice.
            </span>
          </h2>
          <p className="text-[17px] font-light text-neutral-500 leading-relaxed max-w-2xl">
            From start-ups to global corporations - we help companies of all
            sizes and industries to design optimal working environments. Be
            inspired by our successful projects.
          </p>
        </div>

        <Masonry columns={2} gap="2.5rem">
          {[
            {
              title: "Titan Workspace",
              location: "Patna",
              image: "/projects/Titan/27-06-2025 Image 05_edited_edited.webp",
              category: "Agile Working",
            },
            {
              title: "TVS Office",
              location: "Patna",
              image: "/projects/TVS/27-06-2025 Image 03.webp",
              category: "Innovation Center",
            },
            {
              title: "DMRC Facility",
              location: "New Delhi",
              image: "/projects/DMRC/IMG_20200612_145931.webp",
              category: "Corporate Office",
            },
            {
              title: "Usha Setup",
              location: "Patna",
              image: "/projects/Usha/DSC_0077_edited.webp",
              category: "Creative Space",
            },
            {
              title: "Government Project",
              location: "Patna",
              image: "/projects/Govenment/20140707_124458_compressed.webp",
              category: "Sustainable Office",
            },
            {
              title: "Franklin Templeton",
              location: "India",
              image:
                "/projects/FranklinTempleton/WhatsApp Image 2020-08-28 at 12.40.51.webp",
              category: "Large Scale Project",
            },
          ].map((project, i) => (
            <MasonryItem key={i}>
              <div className="group relative overflow-hidden bg-neutral-100 mb-8 cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 lg:p-12">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-6 h-[1px] bg-red-600"></div>
                      <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-white/80">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl text-white font-medium mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[15px] font-light text-white/60">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </MasonryItem>
          ))}
        </Masonry>
      </section>

      <Newsletter />
      <ContactTeaser />
    </section>
  );
}

