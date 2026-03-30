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
    ? "relative flex-shrink-0 group px-4 py-2 rounded-xl border border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.3)] bg-[rgba(13,18,36,0.6)] backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_4px_30px_rgba(0,180,216,0.12)]"
    : "relative group inline-block px-5 py-3 rounded-xl border border-white/[0.06] shadow-[0_2px_16px_rgba(0,0,0,0.2)] bg-[rgba(13,18,36,0.5)] backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/15 hover:shadow-[0_2px_20px_rgba(0,180,216,0.08)]";

  const imageClasses = isNavbar
    ? "h-10 w-auto object-contain relative z-10 brightness-110 contrast-105"
    : "h-14 w-auto object-contain relative z-10 brightness-110 contrast-105";

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: isNavbar
          ? { scale: 1.03, y: -1, transition: SPRING }
          : { scale: 1.01, transition: SPRING },
        whileTap: isNavbar
          ? { scale: 0.98, transition: SPRING }
          : undefined,
      };

  const content = (
    <>
      {/* Gradient overlay — top light shimmer */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

      {/* Inner radial glow — appears on hover */}
      <span className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.06)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Logo image */}
      <Image
        src="/images/triseno-logo.png"
        alt="Triseno Systems"
        width={isNavbar ? 140 : 180}
        height={isNavbar ? 70 : 90}
        className={imageClasses}
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
