"use client";

import {
  Broadcast,
  Storefront,
  Buildings,
  FilmSlate,
  Code,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const industries = [
  {
    icon: Broadcast,
    title: "Broadcast & Production",
    description:
      "The broadcast control room is one of the most complex operational environments in any industry. We bring domain expertise from inside the broadcast world combined with frontier AI architecture. Real-time decision-making, multi-source routing, metadata management, and workflow compression across pre-production, live, and post.",
    span: "",
  },
  {
    icon: Storefront,
    title: "E-Commerce & Large-Catalog",
    description:
      "Companies with hundreds or thousands of SKUs, complex product relationships, and technical specifications that overwhelm both customers and internal teams. We build intelligent catalog systems that turn static data into revenue-generating infrastructure. If your catalog is big enough to be a problem, it's big enough to be a competitive advantage.",
    span: "",
  },
  {
    icon: Buildings,
    title: "Enterprise Operations",
    description:
      "Complex operational workflows in logistics, supply chain, manufacturing, and large-scale service delivery. Agent systems and workflow compression engines for environments where operational throughput and decision accuracy directly impact revenue.",
    span: "",
  },
  {
    icon: FilmSlate,
    title: "Creative Production & Media Tech",
    description:
      "AI infrastructure for creative teams at scale — asset management intelligence, production pipeline automation, creative deployment engines, and systems that accelerate creative throughput without sacrificing quality.",
    span: "",
  },
  {
    icon: Code,
    title: "Technology & SaaS",
    description:
      "AI-native infrastructure for tech companies looking to embed intelligence deeper into their products and operations. From internal tooling automation to customer onboarding compression to intelligent support architecture — we build the systems that let technology companies operate at the scale their growth demands.",
    span: "sm:col-span-2 lg:col-span-2",
  },
];

export default function Audience() {
  return (
    <section id="industries" className="relative py-24 md:py-32 lg:py-40 bg-navy-900/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="Built for Complex Operations"
          description="We work across industries — anywhere operational complexity, large data sets, or manual workflows are costing you money and time."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className={industry.span}>
              <div className="relative h-full p-8 rounded-2xl border border-white/[0.06] bg-navy-800/20 group hover:border-cyan-400/20 transition-colors duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <industry.icon
                  size={28}
                  weight="duotone"
                  className="text-cyan-400 mb-6"
                />
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {industry.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
