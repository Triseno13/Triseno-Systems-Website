"use client";

import { useRef, useState } from "react";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import { useReducedMotion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import {
  PaperPlaneTilt,
  CheckCircle,
  ChatDots,
  Handshake,
  FileText,
} from "@phosphor-icons/react";

const howDidYouFindUs = [
  "Select one",
  "Instagram",
  "Referral",
  "Search",
  "LinkedIn",
  "Other",
];

const nextSteps = [
  {
    icon: ChatDots,
    label: "We respond within 24 hours",
  },
  {
    icon: Handshake,
    label: "Discovery call to scope your needs",
  },
  {
    icon: FileText,
    label: "Proposal with architecture & pricing",
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      if (shouldReduceMotion || !sectionRef.current) return;

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  const inputClasses =
    "w-full bg-navy-800/50 border border-white/[0.06] rounded-lg px-4 py-3 text-text-primary placeholder:text-text-tertiary focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 font-sans text-sm";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="contact-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 180, 216, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <span className="inline-block font-mono text-sm tracking-[0.2em] uppercase text-cyan-400 mb-4">
            Get Started
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-6">
            Let&apos;s Talk Architecture
          </h2>
          <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-text-secondary leading-relaxed mb-16">
            Whether you need a diagnostic audit, a full system build, or just want
            to explore what&apos;s possible — start here.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
          {/* Contact Form */}
          <ScrollReveal delay={0.3}>
            <div className="relative rounded-2xl border border-white/[0.06] bg-navy-800/20 backdrop-blur-sm p-8 md:p-10">
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle
                    size={48}
                    weight="duotone"
                    className="text-cyan-400 mb-6"
                  />
                  <h3 className="text-2xl font-bold text-text-primary mb-3">
                    Message Sent
                  </h3>
                  <p className="text-text-secondary max-w-md">
                    We&apos;ll review your message and get back to you within 24
                    hours. Looking forward to the conversation.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClasses}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-2"
                    >
                      Company <span className="text-text-tertiary">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputClasses}
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-2"
                    >
                      What are you looking to build?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project, operational challenges, or what you'd like to explore..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="source"
                      className="block text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-2"
                    >
                      How did you find us?
                    </label>
                    <select
                      id="source"
                      name="source"
                      className={`${inputClasses} appearance-none cursor-pointer`}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {howDidYouFindUs.slice(1).map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-cyan-400 text-navy-950 font-semibold text-sm tracking-wide hover:bg-cyan-300 transition-colors duration-300 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <PaperPlaneTilt
                      size={18}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                    />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Right side — Info */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-10 lg:pt-4">
              {/* Direct contact */}
              <div>
                <h4 className="text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-3">
                  Direct Contact
                </h4>
                <a
                  href="mailto:Tristen@trisenosystems.com"
                  className="text-lg text-text-primary hover:text-cyan-400 transition-colors duration-300"
                >
                  Tristen@trisenosystems.com
                </a>
              </div>

              {/* What happens next */}
              <div>
                <h4 className="text-sm font-mono text-text-secondary/80 uppercase tracking-wider mb-6">
                  What Happens Next
                </h4>
                <div className="space-y-6">
                  {nextSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="relative flex-shrink-0 mt-0.5">
                        {/* Connecting line */}
                        {i < nextSteps.length - 1 && (
                          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-6 bg-white/[0.06]" />
                        )}
                        <div className="w-8 h-8 rounded-lg bg-navy-800/60 border border-white/[0.06] flex items-center justify-center">
                          <step.icon
                            size={16}
                            weight="duotone"
                            className="text-cyan-400"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary pt-1.5">
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA callout */}
              <div className="rounded-xl border border-white/[0.06] bg-navy-800/20 p-6">
                <p className="text-sm text-text-secondary leading-relaxed">
                  The fastest way in is the <span className="text-text-primary font-medium">AI Operations Audit</span> — a focused
                  diagnostic that identifies your highest-leverage opportunities
                  before you commit to a full build.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
