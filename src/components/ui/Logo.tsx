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
    ? "relative flex-shrink-0 group px-5 py-2.5 rounded-xl border border-white/[0.10] shadow-[0_4px_30px_rgba(0,0,0,0.4),0_0_20px_rgba(0,180,216,0.06)] bg-[rgba(13,18,36,0.7)] backdrop-blur-md transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_4px_30px_rgba(0,180,216,0.15),0_0_40px_rgba(0,180,216,0.08)]"
    : "relative group inline-block px-6 py-3.5 rounded-xl border border-white/[0.10] shadow-[0_2px_20px_rgba(0,0,0,0.3),0_0_15px_rgba(0,180,216,0.05)] bg-[rgba(13,18,36,0.6)] backdrop-blur-md transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_2px_24px_rgba(0,180,216,0.12)]";

  const imageClasses = isNavbar
    ? "h-11 w-auto object-contain relative z-10 brightness-125 contrast-110"
    : "h-16 w-auto object-contain relative z-10 brightness-125 contrast-110";

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: isNavbar
          ? { scale: 1.04, y: -1, transition: SPRING }
          : { scale: 1.02, transition: SPRING },
        whileTap: isNavbar
          ? { scale: 0.97, transition: SPRING }
          : undefined,
      };

  const content = (
    <>
      {/* Gradient overlay — top light shimmer */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

      {/* Persistent subtle radial glow */}
      <span className="absolute inset-0 -inset-x-2 -inset-y-1 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Inner radial glow — intensifies on hover */}
      <span className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_center,rgba(0,180,216,0.10)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      {/* Bottom accent line */}
      <span className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none" />

      {/* Logo image */}
      <Image
        src="/images/triseno-logo.png"
        alt="Triseno Systems"
        width={isNavbar ? 150 : 200}
        height={isNavbar ? 75 : 100}
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
