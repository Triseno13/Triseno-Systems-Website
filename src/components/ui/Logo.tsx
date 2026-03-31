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

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.05, transition: SPRING },
        whileTap: isNavbar ? { scale: 0.97, transition: SPRING } : undefined,
      };

  // Navbar: 52px tall, Footer: 72px tall — both with auto width
  const imgHeight = isNavbar ? 52 : 72;

  const inner = (
    <Image
      src="/images/triseno-logo.png"
      alt="Triseno Systems"
      width={isNavbar ? 180 : 240}
      height={isNavbar ? 90 : 120}
      className="object-contain"
      style={{ height: imgHeight, width: "auto" }}
      priority={isNavbar}
    />
  );

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        className="relative flex-shrink-0 block"
        style={{ background: "none", border: "none", padding: 0, boxShadow: "none" }}
        {...motionProps}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="relative inline-block"
      style={{ background: "none", border: "none", padding: 0, boxShadow: "none" }}
      {...motionProps}
    >
      {inner}
    </motion.div>
  );
}
