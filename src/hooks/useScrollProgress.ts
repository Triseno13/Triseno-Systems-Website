"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { type RefObject } from "react";

interface UseScrollProgressOptions {
  target: RefObject<HTMLElement | null>;
}

export function useScrollProgress({
  target,
}: UseScrollProgressOptions): {
  scrollYProgress: MotionValue<number>;
  scrollY: MotionValue<number>;
} {
  const { scrollYProgress, scrollY } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  return { scrollYProgress, scrollY };
}

export function useParallax(
  target: RefObject<HTMLElement | null>,
  speed: number = 0.5
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "end start"],
  });

  return useTransform(scrollYProgress, [0, 1], [-speed * 100, speed * 100]);
}
