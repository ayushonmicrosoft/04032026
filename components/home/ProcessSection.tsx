"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Free Site Survey",
    description: "You share your brief, we visit the site and prepare a full scope with zero obligation.",
  },
  {
    id: "02",
    title: "BOQ & Layout in 48 Hours",
    description: "Get 2D/3D layouts and a detailed Bill of Quantities within 48 hours for faster sign-off.",
  },
  {
    id: "03",
    title: "Select & Confirm",
    description: "Choose from our catalog, confirm finishes. We lock production with a confirmed delivery window.",
  },
  {
    id: "04",
    title: "White-glove Installation",
    description: "Our team delivers, installs, and hands over with full warranty documentation.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="border-y border-neutral-200/45 bg-white/80 py-14 md:py-20">
      <div className="container px-6 2xl:px-0">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <div className="lg:pt-1">
            <h2 className="typ-h1 mb-5 text-neutral-900">From brief to handover.</h2>
            <p className="typ-h3 mb-8 font-normal leading-relaxed text-neutral-700">
              One team, clear steps, and on-site execution.
            </p>
            <Link
              href="/contact"
              className="typ-cta inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-white transition-colors hover:bg-primary/90"
            >
              Request Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex gap-8"
              >
                <span aria-hidden="true" className="typ-h1 text-neutral-300 transition-colors duration-300 group-hover:text-primary">
                  {step.id}
                </span>
                <div className="pt-2">
                  <h3 className="typ-h2 mb-3 text-neutral-900">{step.title}</h3>
                  <p className="typ-h3 max-w-lg font-normal leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
