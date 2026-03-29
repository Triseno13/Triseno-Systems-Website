"use client";

import { motion } from "framer-motion";
import {
  Browser,
  AppWindow,
  Storefront,
  Gauge,
} from "@phosphor-icons/react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    number: "01",
    icon: Browser,
    title: "Custom Websites",
    description:
      "Hand-crafted, fully responsive websites that feel premium and perform at scale. No templates, no shortcuts.",
    tags: ["Landing Pages", "Corporate Sites", "Portfolios"],
    span: "md:col-span-1 md:row-span-2",
    tall: true,
  },
  {
    number: "02",
    icon: AppWindow,
    title: "Web Applications",
    description:
      "Full-stack applications with modern frameworks, real-time features, and AI-powered functionality baked in.",
    tags: ["Dashboards", "SaaS Platforms", "Portals"],
    span: "md:col-span-1",
    tall: false,
  },
  {
    number: "03",
    icon: Storefront,
    title: "E-Commerce",
    description:
      "Conversion-optimized storefronts with intelligent product recommendations and automated customer engagement.",
    tags: ["Shopify", "Custom Stores", "AI Upsells"],
    span: "md:col-span-1",
    tall: false,
  },
  {
    number: "04",
    icon: Gauge,
    title: "Redesigns & Optimization",
    description:
      "Transform underperforming sites into high-converting machines. We audit, redesign, and re-engineer for results.",
    tags: ["UX Audit", "Performance", "SEO"],
    span: "md:col-span-2",
    tall: false,
  },
];

export default function WebDesignServices() {
  return (
    <section id="wd-services" className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What we build."
          description="From single-page sites to full-scale platforms — all designed with AI integration in mind."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeUp}
              className={`group relative rounded-2xl border border-white/[0.04] bg-navy-800/40 p-8 lg:p-10 transition-all duration-400 hover:border-cyan-400/10 hover:bg-navy-800/60 ${service.span} overflow-hidden`}
              style={{
                transform: "translateZ(0)",
              }}
            >
              {/* Top gradient line on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-cyan-400 via-cyan-600 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[13px] font-bold text-text-tertiary tracking-[0.15em]">
                  {service.number}
                </span>
                <div className="w-10 h-10 rounded-lg bg-cyan-400/[0.06] border border-cyan-400/10 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/20">
                  <service.icon
                    size={20}
                    weight="duotone"
                    className="text-cyan-400"
                  />
                </div>
              </div>

              <h3 className="text-xl lg:text-[22px] font-bold text-text-primary mb-3 tracking-tight">
                {service.title}
              </h3>

              <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              {service.tall && (
                <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
                  Every detail is intentional — from typography to micro-interactions. We create digital presences that command attention and build trust instantly.
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-cyan-400/[0.06] text-cyan-400 border border-cyan-400/[0.08] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
