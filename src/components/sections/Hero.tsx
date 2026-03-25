"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import Button from "@/components/ui/Button";

/* ─── Animated SVG Data Visualization ─── */
function DataVisualization() {
  const svgRef = useRef<SVGSVGElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !svgRef.current) return;

      // Animate circuit lines
      const lines = svgRef.current.querySelectorAll(".circuit-line");
      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { strokeDashoffset: 200 },
          {
            strokeDashoffset: 0,
            duration: 2 + i * 0.3,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      });

      // Animate nodes
      const nodes = svgRef.current.querySelectorAll(".node");
      nodes.forEach((node, i) => {
        gsap.to(node, {
          opacity: 0.3,
          duration: 1.5 + i * 0.2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 0.4,
        });
      });

      // Animate particles
      const particles = svgRef.current.querySelectorAll(".particle");
      particles.forEach((particle, i) => {
        gsap.to(particle, {
          y: -20 + Math.random() * 40,
          x: -15 + Math.random() * 30,
          opacity: 0,
          duration: 2 + Math.random() * 2,
          ease: "power1.out",
          repeat: -1,
          delay: i * 0.3,
        });
      });
    },
    { scope: svgRef }
  );

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 500 500"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Grid dots */}
      {Array.from({ length: 12 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <circle
            key={`dot-${row}-${col}`}
            cx={50 + col * 36}
            cy={50 + row * 36}
            r="1"
            fill="rgba(0, 180, 216, 0.15)"
          />
        ))
      )}

      {/* Circuit lines */}
      <path
        className="circuit-line"
        d="M100 250 L200 250 L250 200 L350 200"
        stroke="rgba(0, 180, 216, 0.3)"
        strokeWidth="1.5"
        strokeDasharray="200"
      />
      <path
        className="circuit-line"
        d="M150 300 L250 300 L300 250 L400 250"
        stroke="rgba(0, 180, 216, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="200"
      />
      <path
        className="circuit-line"
        d="M120 180 L220 180 L270 230 L380 230"
        stroke="rgba(0, 180, 216, 0.2)"
        strokeWidth="1.5"
        strokeDasharray="200"
      />
      <path
        className="circuit-line"
        d="M80 350 L180 350 L230 300 L320 300 L370 350"
        stroke="rgba(0, 180, 216, 0.2)"
        strokeWidth="1"
        strokeDasharray="200"
      />
      <path
        className="circuit-line"
        d="M200 150 L300 150 L350 180 L420 180"
        stroke="rgba(0, 180, 216, 0.15)"
        strokeWidth="1"
        strokeDasharray="200"
      />

      {/* Nodes */}
      <circle className="node" cx="200" cy="250" r="4" fill="#00b4d8" opacity="0.8" />
      <circle className="node" cx="250" cy="200" r="3" fill="#00b4d8" opacity="0.6" />
      <circle className="node" cx="350" cy="200" r="5" fill="#00b4d8" opacity="0.7" />
      <circle className="node" cx="300" cy="250" r="3" fill="#00b4d8" opacity="0.5" />
      <circle className="node" cx="250" cy="300" r="4" fill="#00b4d8" opacity="0.6" />
      <circle className="node" cx="400" cy="250" r="4" fill="#00b4d8" opacity="0.7" />
      <circle className="node" cx="180" cy="350" r="3" fill="#00b4d8" opacity="0.5" />
      <circle className="node" cx="320" cy="300" r="5" fill="#00b4d8" opacity="0.8" />
      <circle className="node" cx="300" cy="150" r="3" fill="#00b4d8" opacity="0.4" />

      {/* Glow rings around main nodes */}
      <circle cx="350" cy="200" r="12" stroke="rgba(0, 180, 216, 0.15)" strokeWidth="1" fill="none" />
      <circle cx="320" cy="300" r="14" stroke="rgba(0, 180, 216, 0.12)" strokeWidth="1" fill="none" />
      <circle cx="200" cy="250" r="10" stroke="rgba(0, 180, 216, 0.12)" strokeWidth="1" fill="none" />

      {/* Particles */}
      {[
        [210, 240],
        [260, 210],
        [340, 195],
        [310, 260],
        [255, 290],
        [395, 245],
        [190, 345],
        [330, 305],
        [180, 175],
        [365, 345],
        [290, 155],
        [420, 185],
      ].map(([cx, cy], i) => (
        <circle
          key={`particle-${i}`}
          className="particle"
          cx={cx}
          cy={cy}
          r="1.5"
          fill="#00b4d8"
          opacity="0.6"
        />
      ))}

      {/* Radial gradient overlay */}
      <defs>
        <radialGradient id="heroGlow" cx="60%" cy="45%" r="50%">
          <stop offset="0%" stopColor="rgba(0, 180, 216, 0.06)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="500" height="500" fill="url(#heroGlow)" />
    </svg>
  );
}

/* ─── Hero Section ─── */
export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".hero-word");
      const sub = containerRef.current.querySelector(".hero-sub");
      const ctas = containerRef.current.querySelector(".hero-ctas");

      if (shouldReduceMotion) {
        // Ensure everything is visible even with reduced motion
        gsap.set([words, sub, ctas], { opacity: 1, y: 0, scale: 1 });
        return;
      }

      // Set initial state explicitly so elements are controlled by GSAP
      gsap.set(words, { opacity: 0, y: "100%" });
      gsap.set(sub, { opacity: 0, y: 20 });
      gsap.set(ctas, { opacity: 0, y: 20, scale: 0.95 });

      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(words, {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      })
        .to(
          sub,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .to(
          ctas,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3"
        );
    },
    { scope: containerRef, dependencies: [shouldReduceMotion, mounted] }
  );

  const headlineLine1 = "We Build the Intelligence Layer";
  const headlineLine2 = "Your Business Runs On";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-radial)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full py-32 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left — Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="block">
                {headlineLine1.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden"
                    style={{ marginRight: "0.25em" }}
                  >
                    <span className="hero-word inline-block text-text-primary">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
              <span className="block mt-2">
                {headlineLine2.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className="inline-block overflow-hidden"
                    style={{ marginRight: "0.25em" }}
                  >
                    <span className="hero-word inline-block gradient-text">
                      {word}
                    </span>
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-sub max-w-xl text-lg md:text-xl text-text-secondary leading-relaxed">
              Triseno Systems designs and deploys AI infrastructure — multi-agent
              orchestration, workflow compression engines, and decision-layer
              automation for organizations that need systems, not features.
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="large" href="#capabilities">
                Explore What We Build
              </Button>
              <Button variant="secondary" size="large" href="#contact">
                Start a Conversation
              </Button>
            </div>
          </div>

          {/* Right — Data Visualization */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-[500px] ml-auto">
              <DataVisualization />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-cyan-400/50" />
        <motion.div
          className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
