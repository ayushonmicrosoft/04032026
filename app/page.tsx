import { HomepageHero } from "@/components/home/HomepageHero";
import { PartnershipSection } from "@/components/home/PartnershipSection";
import { FeaturedCarousel } from "@/components/home/FeaturedCarousel";
import { WhyUs } from "@/components/home/WhyUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CollaborationSection } from "@/components/home/CollaborationSection";
import { Teaser } from "@/components/home/Teaser";
import { ServiceSection } from "@/components/home/ServiceSection";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { ContactTeaser } from "@/components/shared/ContactTeaser";
import { GsapAnimations } from "@/components/shared/GsapAnimations";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { getBusinessStats } from "@/lib/businessStats";
import { formatKpiAsOf } from "@/lib/kpiFormat";

export default async function Home() {
  const { stats } = await getBusinessStats();
  const asOfLabel = formatKpiAsOf(stats.asOfDate);

  return (
    <div className="min-h-screen bg-white">
      <GsapAnimations />

      {/* 1 - Brand promise */}
      <HomepageHero />

      {/* 2 - Featured products */}
      <SectionReveal>
        <FeaturedCarousel />
      </SectionReveal>

      {/* 3 - Why us */}
      <SectionReveal>
        <WhyUs stats={stats} asOfLabel={asOfLabel} />
      </SectionReveal>

      {/* 4 - Collaboration */}
      <SectionReveal>
        <CollaborationSection />
      </SectionReveal>

      {/* 5 - Process */}
      <SectionReveal>
        <ProcessSection />
      </SectionReveal>

      {/* 6 - Sustainability */}
      <SectionReveal>
        <Teaser
          title="Practical sustainability in every fit-out."
          description="We use recycled wood content and low-emission finishes so your workspace performs well today and stays responsible over time."
          imageSrc="/images/catalog/oando-seating--fluid-x/image-1.webp"
          imageAlt="Sustainable Premium Chair Design"
          reversed={false}
          lightMode={true}
          className="bg-transparent"
          linkText="See our sustainability approach"
          linkUrl="/sustainability"
        />
      </SectionReveal>

      {/* 7 - Projects */}
      <SectionReveal>
        <ServiceSection />
      </SectionReveal>

      {/* 8 - AFC Partnership */}
      <SectionReveal>
        <PartnershipSection />
      </SectionReveal>

      {/* 9 - Client marquee */}
      <SectionReveal>
        <ClientMarquee />
      </SectionReveal>

      {/* 10 - Final CTA */}
      <SectionReveal>
        <ContactTeaser />
      </SectionReveal>
    </div>
  );
}
