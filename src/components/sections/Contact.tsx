"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import { useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/animations/MagneticButton";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !sectionRef.current) return;

      // Subtle background animation
      const glow = sectionRef.current.querySelector(".contact-glow");
      if (glow) {
        gsap.to(glow, {
          scale: 1.1,
          opacity: 0.6,
          duration: 4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="contact-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block font-mono text-sm tracking-[0.2em] uppercase text-cyan-400 mb-6">
            Get Started
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-text-primary leading-tight tracking-tight mb-6">
            Let&apos;s Engineer Something
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 max-w-xl mx-auto text-lg md:text-xl text-text-secondary leading-relaxed">
            No pitch decks. No vaporware demos. Tell us what&apos;s broken and
            we&apos;ll show you what&apos;s possible.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <MagneticButton strength={15}>
              <Button
                variant="primary"
                size="large"
                href="mailto:Tristen@trisenosystems.com"
                className="text-lg px-10 py-5"
              >
                Start a Conversation
              </Button>
            </MagneticButton>

            <a
              href="mailto:Tristen@trisenosystems.com"
              className="text-text-secondary hover:text-cyan-400 transition-colors duration-300 font-mono text-sm tracking-wider"
            >
              Tristen@trisenosystems.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
