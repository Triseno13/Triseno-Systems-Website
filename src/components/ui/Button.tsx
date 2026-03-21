"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-400 to-cyan-600 text-navy-950 font-semibold shadow-[0_0_30px_rgba(0,180,216,0.2)] hover:shadow-[0_0_40px_rgba(0,180,216,0.35)]",
  secondary:
    "border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/60",
  ghost:
    "text-text-secondary hover:text-text-primary",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  large: "px-8 py-4 text-base",
};

export default function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            const el = document.getElementById(href.slice(1));
            el?.scrollIntoView({ behavior: "smooth" });
          }
          onClick?.();
        }}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
