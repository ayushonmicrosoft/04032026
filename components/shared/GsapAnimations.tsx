"use client";

import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function GsapAnimations() {
  const pathname = usePathname();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { overwrite: "auto" } });
      heroTimeline.from(".hero-section", {
        autoAlpha: 0,
        y: -24,
        duration: 0.55,
        ease: "power2.out",
      });
      heroTimeline.from(
        ".hero-section h1, .hero-section h2, .hero-section p, .hero-section a",
        {
          autoAlpha: 0,
          y: 20,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.06,
        },
        "-=0.32",
      );

      gsap.utils.toArray<HTMLElement>(".section").forEach((el) => {
        gsap.from(el, {
          autoAlpha: 0,
          y: 42,
          duration: 0.52,
          ease: "power3.out",
          immediateRender: false,
          overwrite: "auto",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      gsap.from(".footer", {
        autoAlpha: 0,
        y: 24,
        duration: 0.35,
        ease: "power2.out",
        immediateRender: false,
        overwrite: "auto",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [pathname]);

  return null;
}
