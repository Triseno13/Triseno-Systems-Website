import type { Variants, Transition } from "framer-motion";

/* ─── Duration constants ─── */
export const DURATIONS = {
  fast: 0.3,
  medium: 0.6,
  slow: 1.0,
  xslow: 1.5,
} as const;

/* ─── Easing curves ─── */
export const EASINGS = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  snapIn: [0.6, 0, 0.4, 1] as const,
  bounceOut: [0.34, 1.56, 0.64, 1] as const,
  power3Out: [0.33, 1, 0.68, 1] as const,
};

/* ─── Stagger values ─── */
export const STAGGER = {
  tight: 0.05,
  normal: 0.1,
  loose: 0.2,
} as const;

/* ─── Spring transitions ─── */
export const SPRING: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

export const SPRING_SOFT: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

/* ─── Framer Motion Variants ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATIONS.medium, ease: EASINGS.smooth },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATIONS.medium },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATIONS.medium, ease: EASINGS.smooth },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.medium, ease: EASINGS.smooth },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATIONS.medium, ease: EASINGS.smooth },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.tight,
      delayChildren: 0.05,
    },
  },
};

/* ─── GSAP defaults ─── */
export const GSAP_DEFAULTS = {
  scrollTrigger: {
    start: "top 80%",
    toggleActions: "play none none none",
  },
  reveal: {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
  },
  staggerReveal: {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.1,
  },
};
