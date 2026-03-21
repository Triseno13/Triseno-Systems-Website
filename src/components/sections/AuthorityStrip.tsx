"use client";

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollReveal from "@/components/animations/ScrollReveal";

const stats = [
  { value: 50, suffix: "+", label: "AI Systems Architected" },
  { value: 3, suffix: "x", label: "Average Workflow Compression" },
  { label: "Autonomous Operations", display: "24/7" },
  { label: "Concept to Deployment", display: "<8 Weeks" },
];

export default function AuthorityStrip() {
  return (
    <section className="relative py-16 bg-navy-900 border-y border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <p className="text-center font-mono text-sm tracking-[0.2em] uppercase text-text-tertiary mb-12">
            AI Infrastructure for Operations, Intelligence &amp; Scale
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={`text-center ${
                  i < stats.length - 1
                    ? "md:border-r md:border-white/[0.06]"
                    : ""
                }`}
              >
                <div className="text-4xl md:text-5xl font-bold text-text-primary text-glow-cyan mb-2">
                  {stat.display ? (
                    stat.display
                  ) : (
                    <AnimatedCounter
                      target={stat.value!}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
