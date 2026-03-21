"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import { useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const projects = [
  {
    title: "Catalog Intelligence System",
    industry: "Industrial Equipment Distribution",
    challenge:
      "47,000 SKU catalog with complex compatibility requirements. Sales team spending 3+ hours per custom quote.",
    solution:
      "AI-powered product intelligence system that understands specifications, cross-references compatibility, and generates accurate quotes in under 2 minutes.",
    metric: "85%",
    metricLabel: "reduction in quote generation time",
    result: "$2.1M attributed revenue in first quarter.",
  },
  {
    title: "Multi-Agent Content Operations",
    industry: "Media & Broadcast",
    challenge:
      "Manual content metadata tagging, routing, and compliance review creating 48-hour bottlenecks in production pipeline.",
    solution:
      "Coordinated agent system — one handles metadata extraction, another manages compliance checks, a third handles routing and scheduling. All orchestrated through a central decision layer.",
    metric: "48h",
    metricLabel: "pipeline compressed to 90 minutes",
    result: "Zero compliance misses in 6 months of operation.",
  },
  {
    title: "Revenue Intelligence Engine",
    industry: "B2B SaaS",
    challenge:
      "Sales team qualifying leads manually, missing high-intent signals buried in CRM data, support tickets, and usage analytics.",
    solution:
      "AI system that scores leads in real-time by synthesizing CRM activity, product usage patterns, and support interactions. Automated outreach triggers for high-probability conversions.",
    metric: "340%",
    metricLabel: "increase in qualified pipeline",
    result:
      "Sales team focused exclusively on high-value conversations.",
  },
];

export default function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !sectionRef.current) return;

      const cards = sectionRef.current.querySelectorAll(".showcase-card");
      cards.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Proof of Work"
          title="Built. Deployed. Performing."
          description="Real systems in production. Not concepts. Not demos."
        />

        <div className="space-y-20 md:space-y-32">
          {projects.map((project, i) => (
            <div
              key={i}
              className="showcase-card relative"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Metric side */}
                <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative p-10 md:p-16 rounded-2xl bg-navy-800/30 border border-white/[0.06] overflow-hidden">
                    {/* Left accent border */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-cyan-600" />

                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] to-transparent pointer-events-none" />

                    <div className="relative">
                      <span className="font-mono text-sm text-cyan-400/60 tracking-wider uppercase">
                        {project.industry}
                      </span>
                      <div className="mt-6 text-6xl md:text-7xl font-bold text-text-primary text-glow-cyan">
                        {project.metric}
                      </div>
                      <p className="mt-2 text-lg text-text-secondary">
                        {project.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content side */}
                <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <ScrollReveal delay={0.1}>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                      {project.title}
                    </h3>
                  </ScrollReveal>

                  <ScrollReveal delay={0.2}>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm font-mono text-cyan-400/80 uppercase tracking-wider">
                          Challenge
                        </span>
                        <p className="mt-1 text-text-secondary leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div>
                        <span className="text-sm font-mono text-cyan-400/80 uppercase tracking-wider">
                          Solution
                        </span>
                        <p className="mt-1 text-text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>

                      <div>
                        <span className="text-sm font-mono text-cyan-400/80 uppercase tracking-wider">
                          Result
                        </span>
                        <p className="mt-1 text-text-primary font-medium">
                          {project.result}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
