"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl mb-16 ${alignClasses} ${className}`}>
      {eyebrow && (
        <ScrollReveal>
          <span className="inline-block font-mono text-sm tracking-[0.2em] uppercase text-cyan-400 mb-4">
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight mb-6">
          {title}
        </h2>
        <div className="h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
