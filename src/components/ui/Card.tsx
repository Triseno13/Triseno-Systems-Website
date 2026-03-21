"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  glowOnHover?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = true,
  glowOnHover = true,
}: CardProps) {
  const shouldReduceMotion = useReducedMotion();

  const hoverAnimation =
    hoverable && !shouldReduceMotion
      ? {
          whileHover: {
            y: -4,
            transition: { type: "spring" as const, stiffness: 300, damping: 30 },
          },
        }
      : {};

  return (
    <motion.div
      className={`
        relative rounded-2xl border border-white/[0.06]
        bg-navy-800/50 backdrop-blur-sm
        transition-shadow duration-500
        ${glowOnHover ? "hover:shadow-[0_0_40px_rgba(0,180,216,0.1)] hover:border-cyan-400/20" : ""}
        ${className}
      `}
      {...hoverAnimation}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
