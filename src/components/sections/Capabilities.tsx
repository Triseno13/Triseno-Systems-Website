"use client";

import {
  CirclesThreePlus,
  Lightning,
  Brain,
  Package,
  Broadcast,
  ChartLineUp,
} from "@phosphor-icons/react";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const capabilities = [
  {
    icon: CirclesThreePlus,
    title: "Multi-Agent Orchestration",
    description:
      "Coordinated AI agent systems that divide complex workflows into parallel execution paths — research, analysis, generation, and validation running simultaneously. Not one bot. An entire operations team.",
    span: "md:col-span-2",
  },
  {
    icon: Lightning,
    title: "Workflow Compression Engines",
    description:
      "We identify the 40-hour processes buried in your operations and engineer them down to minutes. Document processing, approval chains, data reconciliation — compressed, automated, monitored.",
    span: "",
  },
  {
    icon: Brain,
    title: "Decision-Layer Automation",
    description:
      "AI systems that don't just surface data — they make recommendations, flag anomalies, and execute decisions within parameters you define. Your judgment, operating at machine speed.",
    span: "",
  },
  {
    icon: Package,
    title: "Product & Catalog Intelligence",
    description:
      "Transform sprawling product catalogs into intelligent systems that understand specifications, compatibility, and context. Your customers get expert-level guidance. Your team gets freed from repetitive inquiries.",
    span: "",
  },
  {
    icon: Broadcast,
    title: "Broadcast & Media AI",
    description:
      "Production automation built by someone who's lived in the control room. Metadata intelligence, content routing, asset orchestration, and real-time decision systems for media workflows.",
    span: "md:col-span-2",
  },
  {
    icon: ChartLineUp,
    title: "Revenue Operations Intelligence",
    description:
      "Lead qualification, pipeline acceleration, and conversion optimization powered by AI that understands your sales process. Outcome-tied pricing means we only win when you do.",
    span: "",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative py-24 md:py-32 lg:py-40"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Infrastructure That Thinks"
          description="We don't build chatbots. We build the operational intelligence layer underneath — the systems that compress decisions, orchestrate agents, and turn complexity into leverage."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className={cap.span}>
              <Card className="p-8 h-full">
                <cap.icon
                  size={32}
                  weight="duotone"
                  className="text-cyan-400 mb-6"
                />
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {cap.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {cap.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
