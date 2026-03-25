"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import { useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  CurrencyDollar,
  StackSimple,
  ShieldCheck,
} from "@phosphor-icons/react";

const differentiators = [
  {
    icon: CurrencyDollar,
    title: "Outcome-Tied Pricing",
    description:
      "We attach our fees to numbers you already track — revenue recovered, costs reduced, conversion rates increased, cycle times compressed. You see the result before you pay for it. We only win when the system proves itself.",
    accent: "from-cyan-400 to-cyan-300",
  },
  {
    icon: StackSimple,
    title: "Infrastructure, Not Features",
    description:
      "Most AI vendors sell you a tool. We build the layer underneath — the orchestration, the decision logic, the compression architecture that makes every tool on top of it work better. Features deprecate. Infrastructure compounds.",
    accent: "from-cyan-400 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Broadcast-Grade Reliability",
    description:
      "Our systems are architected like broadcast infrastructure — built for environments where downtime isn't an option, decisions happen in real-time, and failure cascades have real consequences. Every agent has fallback logic. Every pipeline has monitoring. Every system is built to not go down.",
    accent: "from-cyan-500 to-cyan-600",
  },
];

export default function WhyTriseno() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !sectionRef.current || !cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".diff-card");

      // Stacked parallax fan-out effect
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            y: i * 30,
            opacity: 0,
            scale: 1 - i * 0.03,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
          }
        );
      });

      // Subtle continuous float animation on the icon containers
      const icons = cardsRef.current.querySelectorAll(".diff-icon-wrap");
      icons.forEach((icon, i) => {
        gsap.to(icon, {
          y: -6,
          duration: 2.5 + i * 0.3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.5,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse, rgba(0, 180, 216, 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Why Triseno"
          title="Engineered to Compound"
          description="We don't just deliver systems — we engineer infrastructure that gets more valuable over time."
        />

        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {differentiators.map((diff, i) => (
            <div
              key={i}
              className="diff-card relative rounded-2xl border border-white/[0.06] bg-navy-800/40 backdrop-blur-sm p-8 lg:p-10 group hover:border-cyan-400/20 transition-all duration-500"
            >
              {/* Top gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${diff.accent} opacity-40 group-hover:opacity-80 transition-opacity duration-500`}
              />

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-400/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                <div className="diff-icon-wrap mb-8">
                  <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-navy-700/60 border border-white/[0.06]">
                    <diff.icon
                      size={28}
                      weight="duotone"
                      className="text-cyan-400"
                    />
                    {/* Icon glow */}
                    <div className="absolute inset-0 rounded-xl bg-cyan-400/5 blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-text-primary mb-4 tracking-tight">
                  {diff.title}
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
