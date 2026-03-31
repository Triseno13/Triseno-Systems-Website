"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { SPRING } from "@/lib/animations";

interface LogoProps {
  variant: "navbar" | "footer";
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function Logo({ variant, href, onClick }: LogoProps) {
  const shouldReduceMotion = useReducedMotion();

  const isNavbar = variant === "navbar";

  const containerClasses = isNavbar
    ? "relative flex-shrink-0 group"
    : "relative group inline-block";

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.05, transition: SPRING },
        whileTap: isNavbar
          ? { scale: 0.97, transition: SPRING }
          : undefined,
      };

  const content = (
    <>
      {/* Ambient glow behind logo — always visible */}
      <span
        className="absolute inset-0 -inset-x-6 -inset-y-4 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 180, 216, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Logo image — large and prominent */}
      <Image
        src="/images/triseno-logo.png"
        alt="Triseno Systems"
        width={isNavbar ? 220 : 260}
        height={isNavbar ? 110 : 130}
        className={`${isNavbar ? "h-16" : "h-20"} w-auto object-contain relative z-10 drop-shadow-[0_0_12px_rgba(0,180,216,0.25)] transition-[filter] duration-500 group-hover:drop-shadow-[0_0_20px_rgba(0,180,216,0.4)]`}
        priority={isNavbar}
      />
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className={containerClasses}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div className={containerClasses} {...motionProps}>
      {content}
    </motion.div>
  );
}
