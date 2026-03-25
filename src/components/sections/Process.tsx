"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP, gsap, ScrollTrigger } from "@/hooks/useGSAPSetup";
import { useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  MagnifyingGlass,
  Blueprint,
  Code,
  Rocket,
  TrendUp,
} from "@phosphor-icons/react";

const steps = [
  {
    number: "01",
    title: "DIAGNOSE",
    icon: MagnifyingGlass,
    description:
      "We map your operational workflows, identify compression opportunities, and quantify the cost of every problem worth solving. No guesswork. No generic audits. A technical assessment built around your actual architecture.",
  },
  {
    number: "02",
    title: "ARCHITECT",
    icon: Blueprint,
    description:
      "Solution blueprints that specify agent roles, data flows, integration points, fallback logic, and success metrics before a single line of code is written. You see the system before it exists.",
  },
  {
    number: "03",
    title: "BUILD",
    icon: Code,
    description:
      "Modular construction with continuous testing. Each agent, each pipeline, each decision node is built to be independently testable, replaceable, and scalable. No monoliths. No black boxes.",
  },
  {
    number: "04",
    title: "DEPLOY",
    icon: Rocket,
    description:
      "Production deployment with monitoring, performance benchmarking, and iterative refinement. Knowledge transfer to your team so the system isn't a black box. Continuous optimization begins immediately.",
  },
  {
    number: "05",
    title: "COMPOUND",
    icon: TrendUp,
    description:
      "Systems get smarter over time. Ongoing optimization, expansion roadmapping, and strategic advisory through infrastructure retainers. Your AI compounds — it doesn't depreciate.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(
    () => {
      if (shouldReduceMotion || isMobile || !trackRef.current || !containerRef.current) return;

      const track = trackRef.current;
      const totalScroll = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      // Animate each step card
      const stepCards = track.querySelectorAll(".process-step");
      stepCards.forEach((card, i) => {
        gsap.from(card, {
          opacity: 0.3,
          scale: 0.95,
          scrollTrigger: {
            trigger: card,
            containerAnimation: gsap.getById?.("processScroll") || undefined,
            start: "left 80%",
            end: "left 20%",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion, isMobile] }
  );

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-0"
    >
      {/* Section heading — always visible */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 lg:pt-40">
        <SectionHeading
          eyebrow="How We Work"
          title="Engineered Delivery"
          description="Every engagement follows a structured methodology designed to minimize risk and maximize measurable outcomes."
        />
      </div>

      {/* Desktop: Horizontal scroll-pinned */}
      {!isMobile && (
        <div ref={containerRef} className="hidden md:block relative">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.06] z-10">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div
            ref={trackRef}
            className="flex items-stretch gap-8 px-8 py-20 will-change-transform"
            style={{ width: "fit-content" }}
          >
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="process-step flex-shrink-0 w-[400px] lg:w-[450px]"
              >
                <div className="h-full p-8 rounded-2xl border border-white/[0.06] bg-navy-800/30 backdrop-blur-sm relative overflow-hidden group">
                  {/* Gradient top accent */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-3xl font-bold text-cyan-400 text-glow-cyan">
                      {step.number}
                    </span>
                    <step.icon
                      size={28}
                      weight="duotone"
                      className="text-cyan-400/60"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-text-primary tracking-wider mb-4">
                    {step.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting line to next step */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile: Vertical timeline */}
      {isMobile && (
        <div className="md:hidden px-6 pb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-white/[0.06]" />

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative pl-16">
                  {/* Node on timeline */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full border-2 border-cyan-400 bg-navy-950" />

                  <span className="font-mono text-sm text-cyan-400 tracking-wider">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary tracking-wider mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
