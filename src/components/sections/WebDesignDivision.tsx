"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import {
  Browser,
  AppWindow,
  Storefront,
  Gauge,
  Rocket,
  ArrowRight,
  Lightning,
  ChartLineUp,
  Globe,
  Code,
  PaintBrush,
  MagnifyingGlass,
  CheckCircle,
} from "@phosphor-icons/react";
import {
  fadeUp,
  staggerContainer,
  DURATIONS,
  EASINGS,
} from "@/lib/animations";

/* ═══════════════════════════════════════════════════════
   DIVISION BREAK — The visual transition into Web Design
   ═══════════════════════════════════════════════════════ */

function DivisionBreak() {
  const breakRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !breakRef.current) return;

      // Animate the horizontal scan line
      gsap.fromTo(
        breakRef.current.querySelector(".scan-line"),
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: breakRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pulse the division badge
      gsap.to(breakRef.current.querySelector(".division-badge"), {
        boxShadow: "0 0 60px rgba(0, 229, 255, 0.15), 0 0 120px rgba(0, 229, 255, 0.05)",
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: breakRef }
  );

  return (
    <div ref={breakRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Full-width scan line */}
      <div className="scan-line absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent -translate-y-1/2" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(0, 229, 255, 0.06) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            {/* Division badge */}
            <div className="division-badge inline-flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-cyan-400 font-medium">
                Division
              </span>
              <span className="w-px h-3 bg-cyan-400/30" />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-text-secondary font-medium">
                Triseno Systems
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary mb-4">
              Web Design &{" "}
              <span className="gradient-text">Development</span>
            </h2>

            <p className="max-w-lg text-text-secondary text-base md:text-lg leading-relaxed">
              A dedicated division building websites engineered for
              intelligence, speed, and conversion.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TICKER — Scrolling marquee strip
   ═══════════════════════════════════════════════════════ */

function Ticker({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.04] bg-navy-900/50 py-4">
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `ticker ${reverse ? 35 : 30}s linear infinite${reverse ? " reverse" : ""}`,
          width: "max-content",
        }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 font-mono text-[11px] tracking-[0.1em] uppercase text-text-tertiary"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-cyan-400/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   WD HERO — Split layout with browser mockup
   ═══════════════════════════════════════════════════════ */

function WDHero() {
  const visualRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !visualRef.current) return;

      // Animate browser mockup lines
      const lines = visualRef.current.querySelectorAll(".wd-mock-line");
      gsap.fromTo(
        lines,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate chart bars
      const bars = visualRef.current.querySelectorAll(".wd-chart-bar");
      gsap.fromTo(
        bars,
        { scaleY: 0, transformOrigin: "bottom center" },
        {
          scaleY: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.06,
          delay: 0.5,
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      // Float the stat cards
      const stats = visualRef.current.querySelectorAll(".wd-float-stat");
      stats.forEach((stat, i) => {
        gsap.to(stat, {
          y: -8 + i * 4,
          duration: 3 + i * 0.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      // Pulse the AI badge
      gsap.to(visualRef.current.querySelector(".wd-ai-badge"), {
        boxShadow: "0 0 40px rgba(0, 180, 216, 0.4)",
        duration: 2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: visualRef }
  );

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-400 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Web Design & Development
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-[clamp(36px,5vw,64px)] font-bold leading-[1.05] tracking-[-0.03em] mb-6">
                We build websites{" "}
                <span className="gradient-text">that actually sell.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-text-secondary leading-relaxed max-w-[480px] mb-8">
                AI-ready architecture. Conversion engineering. Performance that
                scores above 90. From startups to enterprise — no templates, no
                compromises.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="large" href="#wd-pricing">
                  View Pricing
                </Button>
                <Button variant="secondary" size="large" href="#wd-services">
                  See Services
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Browser mockup */}
          <ScrollReveal delay={0.2} direction="right">
            <div ref={visualRef} className="relative hidden lg:block">
              {/* Browser frame */}
              <div className="relative rounded-2xl border border-white/[0.06] bg-navy-800/50 p-4 shadow-[0_60px_120px_rgba(0,0,0,0.4)]">
                {/* Chrome bar */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.04]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  <div className="ml-4 h-6 px-4 flex items-center rounded-md bg-white/[0.03] border border-white/[0.04]">
                    <span className="font-mono text-[10px] text-text-tertiary">
                      client-dashboard.io
                    </span>
                  </div>
                </div>

                {/* Browser content - dashboard mockup */}
                <div className="grid grid-cols-[0.3fr_1fr] gap-3 p-3">
                  {/* Sidebar */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="h-1 w-[80%] rounded bg-cyan-400/30" />
                    <div className="h-1 w-[70%] rounded bg-white/[0.04]" />
                    <div className="h-1 w-[75%] rounded bg-white/[0.04]" />
                    <div className="h-1 w-[60%] rounded bg-white/[0.04]" />
                    <div className="h-1 w-[65%] rounded bg-white/[0.04]" />
                  </div>

                  {/* Main area */}
                  <div className="flex flex-col gap-2.5">
                    {/* Chart */}
                    <div className="flex-1 bg-white/[0.02] rounded-md flex items-end p-3 gap-[3px] min-h-[100px]">
                      {[35, 55, 40, 70, 50, 85, 60, 78, 65, 90].map((h, i) => (
                        <div
                          key={i}
                          className="wd-chart-bar flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            background: "linear-gradient(180deg, #00b4d8, #0077b6)",
                            opacity: 0.5,
                          }}
                        />
                      ))}
                    </div>

                    {/* KPI cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-5 rounded bg-white/[0.02]" />
                      <div className="h-5 rounded bg-white/[0.02]" />
                      <div className="h-5 rounded bg-white/[0.02]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="wd-float-stat absolute -top-2 -right-4 lg:right-[-2rem] px-4 py-3 rounded-xl bg-navy-800/90 border border-white/[0.08] backdrop-blur-sm shadow-[0_16px_40px_rgba(0,0,0,0.5)] z-10">
                <div className="font-mono text-[9px] text-text-tertiary tracking-[0.1em] uppercase mb-1">
                  Conversion
                </div>
                <div className="text-xl font-bold text-cyan-400">+147%</div>
              </div>

              <div className="wd-float-stat absolute -bottom-2 -left-4 lg:left-[-2rem] px-4 py-3 rounded-xl bg-navy-800/90 border border-white/[0.08] backdrop-blur-sm shadow-[0_16px_40px_rgba(0,0,0,0.5)] z-10">
                <div className="font-mono text-[9px] text-text-tertiary tracking-[0.1em] uppercase mb-1">
                  Perf Score
                </div>
                <div className="text-xl font-bold text-cyan-400">98</div>
              </div>

              {/* AI-Ready badge */}
              <div className="wd-ai-badge absolute -bottom-3 right-8 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-cyan-600 text-navy-950 text-[10px] font-bold tracking-[0.12em] uppercase shadow-[0_8px_30px_rgba(0,180,216,0.3)]">
                AI-Ready
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   WD SERVICES — Bento grid layout
   ═══════════════════════════════════════════════════════ */

const services = [
  {
    num: "001",
    icon: Browser,
    title: "Custom Websites",
    desc: "Hand-coded, responsive, and engineered to convert. Every scroll, every CTA, every micro-interaction — intentional.",
    tags: ["Landing Pages", "Corporate", "Portfolios", "Multi-page"],
    price: "$3,500",
    colSpan: "lg:col-span-6",
  },
  {
    num: "002",
    icon: AppWindow,
    title: "Web Applications",
    desc: "Full-stack platforms with real-time data, dashboards, and AI features. Architecture that doesn't crumble when you scale.",
    tags: ["SaaS", "Dashboards", "Portals", "Internal Tools"],
    price: "$15,000",
    colSpan: "lg:col-span-6",
  },
  {
    num: "003",
    icon: Storefront,
    title: "E-Commerce",
    desc: "Storefronts built to sell. AI-powered recommendations, automated flows, and upsell engines that work while you sleep.",
    tags: ["Shopify", "Custom", "AI Upsells"],
    price: "$5,000",
    colSpan: "lg:col-span-4",
  },
  {
    num: "004",
    icon: Rocket,
    title: "Landing Pages",
    desc: "Single-page conversion machines. Perfect for launches, campaigns, and startups that need to move fast.",
    tags: ["Startup", "Campaign", "Launch"],
    price: "$1,500",
    colSpan: "lg:col-span-4",
  },
  {
    num: "005",
    icon: Gauge,
    title: "Redesigns & CRO",
    desc: "Your site's underperforming. We audit and re-engineer for speed, search, and conversion rate optimization.",
    tags: ["UX Audit", "Speed", "SEO"],
    price: "$2,500",
    colSpan: "lg:col-span-4",
  },
];

function WDServices() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !cardsRef.current) return;

      const cards = cardsRef.current.querySelectorAll(".wd-bento-card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", (e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = (card as HTMLElement).getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          (card as HTMLElement).style.setProperty("--mx", `${x}px`);
          (card as HTMLElement).style.setProperty("--my", `${y}px`);
        });
      });
    },
    { scope: cardsRef }
  );

  return (
    <section id="wd-services" className="relative py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="inline-block font-mono text-sm tracking-[0.2em] uppercase text-cyan-400 mb-4">
                What We Build
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight tracking-tight">
                Five ways we grow
                <br />
                <span className="gradient-text">your revenue.</span>
              </h3>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <p className="max-w-sm text-text-secondary leading-relaxed">
              From a single landing page to a full-stack platform. Every project
              ships AI-ready.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          ref={cardsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.num}
              variants={fadeUp}
              className={`wd-bento-card group relative rounded-2xl border border-white/[0.04] bg-navy-800/40 p-7 lg:p-8 overflow-hidden transition-all duration-500 hover:border-cyan-400/15 hover:bg-navy-800/60 ${svc.colSpan}`}
              style={{ transform: "translateZ(0)" }}
            >
              {/* Mouse-follow glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(0, 180, 216, 0.04), transparent 60%)",
                }}
              />

              {/* Top accent line */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-cyan-400 via-cyan-600 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-mono text-[11px] text-text-tertiary tracking-[0.12em]">
                    {svc.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/[0.06] border border-cyan-400/10 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20">
                    <svc.icon size={18} weight="duotone" className="text-cyan-400" />
                  </div>
                </div>

                <h4 className="text-lg lg:text-xl font-bold text-text-primary mb-2 tracking-tight">
                  {svc.title}
                </h4>

                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {svc.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-cyan-400/[0.04] text-text-tertiary border border-white/[0.04] transition-all duration-300 group-hover:border-cyan-400/10 group-hover:text-cyan-400/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.04]">
                  <span className="text-sm text-text-tertiary">From </span>
                  <span className="text-lg font-bold text-cyan-400">{svc.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   WD PORTFOLIO — Horizontal scroll showcase
   ═══════════════════════════════════════════════════════ */

const portfolioItems = [
  {
    type: "E-Commerce / AI",
    name: "Intelligent Product Catalog",
    desc: "AI-powered search and recommendations for a 2,000+ SKU operation.",
    url: "luxecatalog.com",
    metrics: [
      { value: "+147%", label: "Conversions" },
      { value: "+38%", label: "AOV" },
      { value: "98", label: "Perf" },
    ],
    mockup: "ecom",
  },
  {
    type: "SaaS / Dashboard",
    name: "Operations Intelligence",
    desc: "Real-time analytics with AI anomaly detection for enterprise ops.",
    url: "opsvault.io",
    metrics: [
      { value: "-62%", label: "Report Time" },
      { value: "4.9/5", label: "Rating" },
      { value: "99.9%", label: "Uptime" },
    ],
    mockup: "dash",
  },
  {
    type: "Corporate / Lead Gen",
    name: "Enterprise Lead Engine",
    desc: "AI lead qualification chatbot and dynamic content personalization.",
    url: "meridiangroup.co",
    metrics: [
      { value: "+210%", label: "Leads" },
      { value: "-44%", label: "Bounce" },
      { value: "96", label: "Perf" },
    ],
    mockup: "corp",
  },
];

function EcomMockup() {
  return (
    <div className="w-full h-full p-3 flex flex-col gap-2" style={{ background: "linear-gradient(135deg, #0c1424, #162040)" }}>
      <div className="flex justify-between items-center">
        <div className="w-12 h-1.5 rounded bg-white/20" />
        <div className="flex gap-2">
          <div className="w-5 h-1 rounded bg-white/[0.06]" />
          <div className="w-5 h-1 rounded bg-white/[0.06]" />
          <div className="w-5 h-1 rounded bg-white/[0.06]" />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-2 items-center">
        <div className="flex flex-col gap-1.5">
          <div className="w-[80%] h-2 rounded bg-white/20" />
          <div className="w-[60%] h-1 rounded bg-white/[0.08]" />
          <div className="w-[50%] h-1 rounded bg-white/[0.06]" />
          <div className="w-10 h-3 rounded-sm bg-gradient-to-r from-cyan-600 to-cyan-400 mt-2" />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <div className="aspect-square rounded bg-white/[0.03] border border-white/[0.03]" />
          <div className="aspect-square rounded bg-white/[0.03] border border-white/[0.03]" />
          <div className="aspect-square rounded bg-white/[0.03] border border-white/[0.03]" />
          <div className="aspect-square rounded bg-white/[0.03] border border-white/[0.03]" />
        </div>
      </div>
    </div>
  );
}

function DashMockup() {
  return (
    <div className="w-full h-full p-3 grid grid-cols-[0.3fr_1fr] gap-2" style={{ background: "linear-gradient(160deg, #080818, #12082a)" }}>
      <div className="flex flex-col gap-1 pt-1">
        <div className="h-1 w-[80%] rounded bg-cyan-400/30" />
        <div className="h-1 w-[70%] rounded bg-white/[0.03]" />
        <div className="h-1 w-[75%] rounded bg-white/[0.03]" />
        <div className="h-1 w-[60%] rounded bg-white/[0.03]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1 bg-white/[0.02] rounded flex items-end p-2 gap-[2px]">
          {[35, 55, 45, 70, 50, 80].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: "linear-gradient(180deg, #00b4d8, #0077b6)", opacity: 0.4 }} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <div className="h-4 rounded bg-white/[0.02]" />
          <div className="h-4 rounded bg-white/[0.02]" />
          <div className="h-4 rounded bg-white/[0.02]" />
        </div>
      </div>
    </div>
  );
}

function CorpMockup() {
  return (
    <div className="w-full h-full p-3 flex flex-col items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #060c18, #0c1628)" }}>
      <div className="w-[55%] h-2.5 rounded bg-white/20" />
      <div className="w-[35%] h-1.5 rounded bg-white/[0.06]" />
      <div className="flex gap-2 mt-2">
        <div className="w-10 h-3 rounded-sm bg-gradient-to-r from-cyan-600 to-cyan-400" />
        <div className="w-10 h-3 rounded-sm border border-white/[0.08]" />
      </div>
      <div className="flex gap-2 mt-auto w-[75%]">
        <div className="flex-1 h-6 rounded bg-white/[0.02] border border-white/[0.02]" />
        <div className="flex-1 h-6 rounded bg-white/[0.02] border border-white/[0.02]" />
        <div className="flex-1 h-6 rounded bg-white/[0.02] border border-white/[0.02]" />
      </div>
    </div>
  );
}

const mockupMap: Record<string, () => React.ReactElement> = {
  ecom: EcomMockup,
  dash: DashMockup,
  corp: CorpMockup,
};

function WDPortfolio() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mb-10">
        <ScrollReveal>
          <span className="inline-block font-mono text-sm tracking-[0.2em] uppercase text-cyan-400 mb-4">
            Selected Work
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Real builds. <span className="gradient-text">Real numbers.</span>
          </h3>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 lg:px-8 pb-6 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {portfolioItems.map((project, i) => {
          const MockupComponent = mockupMap[project.mockup];
          return (
            <ScrollReveal key={project.name} delay={i * 0.15} direction="right">
              <div className="flex-shrink-0 w-[340px] md:w-[480px] snap-start group rounded-2xl border border-white/[0.04] bg-navy-800/40 overflow-hidden transition-all duration-500 hover:border-cyan-400/15">
                {/* Visual */}
                <div className="aspect-[16/10] bg-navy-900/60 relative overflow-hidden">
                  <div className="w-full h-full p-5 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
                    <div className="w-[85%] rounded-lg overflow-hidden border border-white/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                      {/* Mini browser chrome */}
                      <div className="bg-black/30 px-3 py-2 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
                        <span className="ml-2 font-mono text-[8px] text-text-tertiary/50">
                          {project.url}
                        </span>
                      </div>
                      {/* Mockup body */}
                      <div className="aspect-[16/9]">
                        <MockupComponent />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-cyan-400 mb-2 block">
                    {project.type}
                  </span>
                  <h4 className="text-base font-bold text-text-primary mb-2 tracking-tight">
                    {project.name}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex gap-5">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <span className="text-lg font-bold text-cyan-400 block">
                          {m.value}
                        </span>
                        <span className="font-mono text-[9px] text-text-tertiary tracking-[0.08em] uppercase">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Scroll hint */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 mt-4">
        <div className="flex items-center gap-3 font-mono text-[10px] text-text-tertiary/50 tracking-[0.1em] uppercase">
          <motion.div
            className="h-px bg-text-tertiary/30"
            animate={{ width: ["30px", "50px", "30px"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   WD PRICING — Horizontal tier strip
   ═══════════════════════════════════════════════════════ */

const pricingTiers = [
  {
    label: "Starter",
    price: "$1,500",
    from: "Starting price",
    desc: "Single landing page for startups, launches, and campaigns.",
    features: [
      "1 custom page",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form + analytics",
      "2-week delivery",
    ],
    popular: false,
  },
  {
    label: "Local Business",
    price: "$3,500",
    from: "Starting price",
    desc: "Full site for local businesses ready to look premium and convert online.",
    features: [
      "Up to 5 pages",
      "AI chatbot integration",
      "Google Business optimization",
      "CMS for updates",
      "30 days support",
    ],
    popular: false,
  },
  {
    label: "Growth",
    price: "$8,000",
    from: "Starting price",
    desc: "Full-featured site with AI lead gen, funnels, and e-commerce ready.",
    features: [
      "Up to 12 pages",
      "Advanced AI lead qualification",
      "Conversion funnels",
      "E-commerce or booking",
      "Custom animations",
      "60 days optimization",
    ],
    popular: true,
  },
  {
    label: "Premium",
    price: "$18,000",
    from: "Starting price",
    desc: "Complex builds with full AI stack, custom interactions, and advanced integrations.",
    features: [
      "Unlimited pages",
      "Full AI integration suite",
      "A/B testing & CRO",
      "API integrations",
      "90 days optimization",
      "Dedicated PM",
    ],
    popular: false,
  },
  {
    label: "Enterprise",
    price: "$40k+",
    from: "Custom scope",
    desc: "Web apps, platforms, and multi-agent AI systems for complex operations.",
    features: [
      "Full-stack application",
      "Multi-agent AI systems",
      "Performance SLA",
      "Custom API architecture",
      "12-month retainer",
      "Dedicated team",
    ],
    popular: false,
  },
];

function WDPricing() {
  return (
    <section
      id="wd-pricing"
      className="relative py-20 lg:py-28 border-y border-white/[0.04]"
      style={{ background: "linear-gradient(180deg, rgba(13, 18, 36, 0.6) 0%, rgba(10, 14, 26, 0.8) 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <span className="inline-block font-mono text-sm tracking-[0.2em] uppercase text-cyan-400 mb-4">
            Investment
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h3 className="text-[clamp(32px,5vw,56px)] font-bold leading-[0.95] tracking-[-0.03em] mb-3 text-text-primary">
            Right-sized <span className="gradient-text">pricing.</span>
            <br />
            No hidden fees.
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="max-w-lg text-text-secondary leading-relaxed mb-12">
            From a single landing page to a full platform. Every tier includes
            AI-ready architecture and post-launch support.
          </p>
        </ScrollReveal>

        {/* Pricing grid */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 border border-white/[0.04] rounded-2xl overflow-hidden">
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.label}
                className={`relative p-6 lg:p-7 transition-colors duration-400 ${
                  i < pricingTiers.length - 1 ? "border-b md:border-b xl:border-b-0 xl:border-r border-white/[0.04]" : ""
                } ${
                  // On md (2-col), also remove right border on even items
                  i % 2 === 1 ? "md:border-r-0 xl:border-r" : ""
                } ${
                  tier.popular
                    ? "bg-cyan-400/[0.03]"
                    : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Popular indicator */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-600" />
                )}

                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-text-tertiary mb-5">
                  {tier.label}
                </div>

                <div className="text-3xl lg:text-[2.5rem] font-bold text-text-primary leading-none mb-1">
                  {tier.price}
                </div>
                <div className="text-xs text-text-tertiary mb-5 pb-5 border-b border-white/[0.04]">
                  {tier.from}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-5 min-h-[3.5em]">
                  {tier.desc}
                </p>

                <ul className="flex flex-col gap-2.5 mb-6">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="text-[13px] text-text-secondary flex items-start gap-2.5"
                    >
                      <span className="w-1 h-px bg-cyan-400 mt-2.5 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block w-full text-center py-3 text-[11px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 rounded-lg cursor-pointer ${
                    tier.popular
                      ? "bg-cyan-400 text-navy-950 hover:shadow-[0_6px_24px_rgba(0,180,216,0.2)]"
                      : "border border-white/[0.06] text-text-primary hover:border-cyan-400/30 hover:text-cyan-400"
                  }`}
                >
                  Book a call
                </a>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   WD CTA — Closing call-to-action
   ═══════════════════════════════════════════════════════ */

function WDCTA() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 text-center overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 180, 216, 0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <h3 className="text-[clamp(36px,8vw,80px)] font-bold leading-[0.92] tracking-[-0.04em] mb-6 text-text-primary">
            LET&apos;S BUILD
            <br />
            <span className="gradient-text">something real.</span>
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-text-secondary leading-relaxed max-w-md mx-auto mb-8">
            Free 30-minute strategy session. We&apos;ll audit your site, find
            the revenue gaps, and show you exactly what we&apos;d build.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href="mailto:Tristen@trisenosystems.com?subject=Web%20Strategy%20Session"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-text-primary text-navy-950 font-bold text-sm tracking-wide overflow-hidden transition-colors duration-300 hover:bg-cyan-400"
          >
            <span className="relative z-10">Book Your Strategy Session</span>
            <ArrowRight size={18} weight="bold" className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 font-mono text-[10px] text-text-tertiary/40 tracking-[0.08em] uppercase">
            No commitment &middot; 24hr response &middot; Free competitive
            audit
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT — Composed Web Design Division
   ═══════════════════════════════════════════════════════ */

const tickerItems1 = [
  "Custom Websites",
  "Web Applications",
  "E-Commerce",
  "AI Integration",
  "Landing Pages",
  "SaaS Platforms",
  "Redesigns",
  "CRO",
  "Performance",
  "SEO",
];

const tickerItems2 = [
  "96+ Performance",
  "3.2x Conversion Lift",
  "$4.7M+ Revenue Influenced",
  "Under 4 Week Delivery",
  "AI-Native",
  "Zero Templates",
];

export default function WebDesignDivision() {
  return (
    <div id="web-design" className="relative">
      {/* Top border accent — signals new territory */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Subtle background shift for the entire division */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(0, 229, 255, 0.01) 0%, transparent 20%, transparent 80%, rgba(0, 229, 255, 0.01) 100%)",
        }}
      />

      <div className="relative">
        <DivisionBreak />
        <Ticker items={tickerItems1} />
        <WDHero />

        {/* Divider */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/12 to-transparent" />
        </div>

        <WDServices />

        <Ticker items={tickerItems2} reverse />

        <WDPortfolio />

        {/* Divider */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/12 to-transparent" />
        </div>

        <WDPricing />
        <WDCTA />
      </div>
    </div>
  );
}
