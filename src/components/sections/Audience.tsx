"use client";

import {
  Gear,
  TreeStructure,
  MonitorPlay,
  Target,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/animations/ScrollReveal";

const profiles = [
  {
    icon: Gear,
    title: "Complex Product Companies",
    description:
      "You have thousands of SKUs, configurations, or specifications. Your sales team is drowning in technical questions. Your catalog is a liability instead of an asset.",
  },
  {
    icon: TreeStructure,
    title: "Operationally Dense Businesses",
    description:
      "You have workflows that touch 5+ systems and 10+ people. Approvals, handoffs, and data reconciliation eat your margins. You need compression, not more headcount.",
  },
  {
    icon: MonitorPlay,
    title: "Media & Broadcast Operations",
    description:
      "You understand production timelines, control rooms, and the cost of a missed feed. You need AI that operates at broadcast speed.",
  },
  {
    icon: Target,
    title: "Revenue Teams at Scale",
    description:
      "Your pipeline is big but your conversion is inefficient. You have data everywhere but intelligence nowhere. You need systems that qualify, route, and accelerate.",
  },
];

export default function Audience() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-navy-900/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who This Is For"
          title="Built For Operators, Not Experimenters"
          description="We work with companies that have real operational complexity and need AI that performs — not AI that demos well."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative h-full p-8 rounded-2xl border border-white/[0.06] bg-navy-800/20 group hover:border-cyan-400/20 transition-colors duration-500">
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <profile.icon
                  size={28}
                  weight="duotone"
                  className="text-cyan-400 mb-6"
                />
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  {profile.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {profile.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
