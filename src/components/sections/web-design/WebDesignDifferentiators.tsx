"use client";

import { motion } from "framer-motion";
import {
  Circuitry,
  ChartLineUp,
  Diamond,
} from "@phosphor-icons/react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { fadeUp, staggerContainer } from "@/lib/animations";

const differentiators = [
  {
    icon: Circuitry,
    title: "AI-Ready Architecture",
    description:
      "Every site we build is structured for AI integration — chatbots, lead gen, automation — from the foundation up.",
  },
  {
    icon: ChartLineUp,
    title: "Conversion-Engineered",
    description:
      "Not just beautiful. Every layout, CTA, and flow is built on data-driven conversion principles.",
  },
  {
    icon: Diamond,
    title: "Premium by Default",
    description:
      "No templates. No page builders. Custom code, custom design, custom everything.",
  },
];

export default function WebDesignDifferentiators() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/[0.04]"
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`group relative p-10 lg:p-12 bg-navy-800/40 text-center transition-colors duration-300 hover:bg-navy-800/70 ${
                  i < differentiators.length - 1
                    ? "md:border-r border-b md:border-b-0 border-white/[0.04]"
                    : ""
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-400/[0.08] border border-cyan-400/10 mb-5 transition-all duration-300 group-hover:bg-cyan-400/[0.12] group-hover:border-cyan-400/20">
                  <item.icon
                    size={24}
                    weight="duotone"
                    className="text-cyan-400"
                  />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2.5 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
