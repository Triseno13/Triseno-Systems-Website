"use client";

import { useRef } from "react";
import { useGSAP, gsap } from "@/hooks/useGSAPSetup";
import { useReducedMotion } from "framer-motion";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  trigger?: "mount" | "scroll";
}

export default function TextReveal({
  text,
  as: Tag = "h1",
  className = "",
  delay = 0,
  stagger = 0.08,
  trigger = "scroll",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion || !containerRef.current) return;

      const words = containerRef.current.querySelectorAll(".word-inner");

      if (trigger === "scroll") {
        gsap.from(words, {
          y: "100%",
          opacity: 0,
          duration: 0.6,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      } else {
        gsap.from(words, {
          y: "100%",
          opacity: 0,
          duration: 0.6,
          stagger,
          delay,
          ease: "power3.out",
        });
      }
    },
    { scope: containerRef, dependencies: [shouldReduceMotion, trigger, delay] }
  );

  const words = text.split(" ");

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ marginRight: "0.3em" }}
          >
            <span className="word-inner inline-block">{word}</span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
