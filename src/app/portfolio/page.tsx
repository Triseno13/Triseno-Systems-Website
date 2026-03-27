"use client";

import { useState, useEffect } from "react";

const BRAND = {
  bg: "#050810",
  bgCard: "#0a0e1a",
  cyan: "#00e5ff",
  blue: "#0077ff",
  purple: "#9d5cff",
  white: "#f0f2f5",
  muted: "#7a8ba8",
  border: "rgba(0,229,255,0.08)",
};

const PROJECTS = [
  {
    id: "google",
    company: "Google",
    event: "Google I/O",
    description:
      "Provided AI-driven production systems for Google's annual I/O developer conference — powering real-time content orchestration, automated show sequencing, and intelligent stage production workflows across their flagship keynote and breakout sessions.",
    tags: ["Live Production AI", "Content Orchestration", "Show Automation"],
    accent: "#4285F4",
    vibe: "google",
  },
  {
    id: "meta",
    company: "Meta",
    event: "AI & AR Hardware Reveal",
    description:
      "Deployed intelligent production infrastructure for Meta's AI and AR glasses unveiling — integrating automated demo sequencing, real-time audience engagement systems, and AI-assisted stage management for one of the most anticipated hardware launches in recent years.",
    tags: ["Product Launch AI", "Demo Automation", "Live Systems"],
    accent: "#0668E1",
    vibe: "meta",
  },
  {
    id: "spotify",
    company: "Spotify",
    event: "Upfronts & Artist Showcases",
    description:
      "Built AI-powered production systems for Spotify's annual upfronts — enabling intelligent artist showcase sequencing, automated content delivery, and real-time collaboration tools that brought major artist partnerships to life on stage.",
    tags: ["Event Production AI", "Content Delivery", "Artist Showcases"],
    accent: "#1DB954",
    vibe: "spotify",
  },
  {
    id: "epic",
    company: "Epic Games",
    event: "Unreal Engine Upfronts",
    description:
      "Engineered AI-assisted production pipelines for Epic's annual Unreal Engine showcase — powering real-time demo orchestration, automated rendering workflows, and intelligent stage systems for their flagship developer and creator event.",
    tags: ["Real-Time Production", "Rendering Automation", "Developer Events"],
    accent: "#00D1FF",
    vibe: "epic",
  },
  {
    id: "apple",
    company: "Apple",
    event: "Live Production & Events",
    description:
      "Provided AI-integrated production support for select Apple live experiences — delivering intelligent automation systems, streamlined show operations, and precision-timed content delivery behind the scenes.",
    tags: ["Show Automation", "Production Intelligence"],
    accent: "#A1A1A6",
    vibe: "apple",
  },
  {
    id: "linkedin",
    company: "LinkedIn",
    event: "Corporate Events & Showcases",
    description:
      "Delivered AI-powered event production systems for LinkedIn corporate showcases — enabling automated content sequencing, intelligent audience engagement tools, and seamless live production workflows.",
    tags: ["Corporate Events", "Engagement Systems"],
    accent: "#0A66C2",
    vibe: "linkedin",
  },
];

type VibeType = "google" | "meta" | "spotify" | "epic" | "apple" | "linkedin";

function VibeAccent({ vibe, hovered }: { vibe: VibeType; hovered: boolean }) {
  const o = hovered ? 0.14 : 0.04;
  const styles: Record<VibeType, React.CSSProperties> = {
    google: { background: `radial-gradient(ellipse at 100% 0%, rgba(66,133,244,${o}) 0%, transparent 55%)` },
    meta: { background: `radial-gradient(ellipse at 0% 100%, rgba(6,104,225,${o}) 0%, transparent 55%)` },
    spotify: { background: `radial-gradient(ellipse at 100% 100%, rgba(29,185,84,${o}) 0%, transparent 55%)` },
    epic: { background: `linear-gradient(135deg, rgba(0,209,255,${o * 0.7}) 0%, transparent 35%, rgba(157,92,255,${o * 0.5}) 100%)` },
    apple: { background: `radial-gradient(ellipse at 50% 0%, rgba(161,161,166,${o * 0.6}) 0%, transparent 45%)` },
    linkedin: { background: `radial-gradient(ellipse at 0% 0%, rgba(10,102,194,${o}) 0%, transparent 55%)` },
  };
  return (
    <div style={{ position: "absolute", inset: 0, transition: "all 0.6s ease", ...styles[vibe] }} />
  );
}

interface Project {
  id: string;
  company: string;
  event: string;
  description: string;
  tags: string[];
  accent: string;
  vibe: VibeType;
}

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: BRAND.bgCard,
        border: `1px solid ${hovered ? "rgba(0,229,255,0.14)" : BRAND.border}`,
        borderRadius: "3px",
        padding: "clamp(28px, 5vw, 52px)",
        cursor: "pointer",
        transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 80px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.03)"
          : "0 2px 16px -6px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.02)",
        overflow: "hidden",
      }}
    >
      <VibeAccent vibe={project.vibe} hovered={hovered} />

      <div
        style={{
          position: "relative", zIndex: 1,
          display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)",
        }}
      >
        {/* Top row: company label + arrow */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "6px", height: "6px", borderRadius: "50%",
                background: project.accent,
                boxShadow: `0 0 8px ${project.accent}44`,
                transition: "all 0.4s ease",
                opacity: hovered ? 1 : 0.6,
              }}
            />
            <span
              style={{
                fontSize: "clamp(11px, 1.5vw, 12px)", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: project.accent, opacity: 0.85,
              }}
            >
              {project.company}
            </span>
          </div>
          <div
            style={{
              opacity: hovered ? 0.7 : 0.2,
              transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
              transition: "all 0.4s ease",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke={BRAND.cyan} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Event title */}
        <h3
          style={{
            fontSize: "clamp(24px, 4vw, 32px)", fontWeight: 600,
            color: BRAND.white, lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0,
          }}
        >
          {project.event}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 15px)", lineHeight: 1.75,
            color: `${BRAND.white}99`, margin: 0, maxWidth: "680px",
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "8px" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "clamp(10px, 1.2vw, 11px)", fontWeight: 500,
                letterSpacing: "0.06em", padding: "6px 14px", borderRadius: "1px",
                background: "rgba(0,229,255,0.04)",
                border: "1px solid rgba(0,229,255,0.08)",
                color: `${BRAND.cyan}99`, textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        background: BRAND.bg, color: BRAND.white, minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: ${BRAND.cyan}33; color: ${BRAND.white}; }
        body { background: ${BRAND.bg}; margin: 0; }
      `}</style>

      {/* NAV */}
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "18px clamp(20px, 5vw, 48px)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: `${BRAND.bg}ee`, backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${BRAND.border}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "8px", height: "8px", borderRadius: "50%",
              background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.blue})`,
              boxShadow: `0 0 12px ${BRAND.cyan}44`,
            }}
          />
          <span style={{ fontSize: "15px", fontWeight: 600, color: BRAND.white, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Triseno
          </span>
          <span style={{ fontSize: "15px", fontWeight: 300, color: BRAND.muted, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Systems
          </span>
        </div>
        <div style={{ display: "flex", gap: "clamp(16px, 4vw, 36px)" }}>
          {["Services", "Portfolio", "About", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em",
                textTransform: "uppercase", textDecoration: "none",
                color: l === "Portfolio" ? BRAND.cyan : BRAND.muted,
                borderBottom: l === "Portfolio" ? `1px solid ${BRAND.cyan}44` : "none",
                paddingBottom: "2px", transition: "color 0.3s ease",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          padding: "clamp(120px, 18vw, 180px) clamp(20px, 5vw, 48px) clamp(40px, 6vw, 60px)",
          maxWidth: "1200px", margin: "0 auto",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            fontSize: "clamp(10px, 1.5vw, 11px)", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: BRAND.cyan, marginBottom: "clamp(16px, 3vw, 24px)",
            display: "flex", alignItems: "center", gap: "12px",
          }}
        >
          <div style={{ width: "28px", height: "1px", background: BRAND.cyan }} />
          Portfolio
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 7vw, 64px)", fontWeight: 600,
            lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "clamp(16px, 3vw, 24px)",
          }}
        >
          What We've Built for{" "}
          <span
            style={{
              display: "inline",
              background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.blue}, ${BRAND.purple})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}
          >
            the Industry's Biggest Stages
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 17px)", lineHeight: 1.7,
            color: BRAND.muted, maxWidth: "560px",
          }}
        >
          AI-powered production systems behind flagship launches, developer conferences,
          and live experiences for the world's most recognized brands.
        </p>
      </section>

      {/* CREDIBILITY */}
      <section style={{ padding: "0 clamp(20px, 5vw, 48px)", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: "clamp(16px, 4vw, 40px)", flexWrap: "wrap",
            padding: "clamp(24px, 4vw, 36px) 0",
            borderTop: `1px solid ${BRAND.border}`,
            borderBottom: `1px solid ${BRAND.border}`,
          }}
        >
          {["Apple", "Meta", "Google", "LinkedIn", "Spotify", "Epic Games"].map((name, i, arr) => (
            <span
              key={name}
              style={{
                fontSize: "clamp(10px, 1.5vw, 12px)", fontWeight: 500,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: BRAND.muted, opacity: 0.5,
                display: "flex", alignItems: "center",
                gap: "clamp(16px, 4vw, 40px)",
              }}
            >
              {name}
              {i < arr.length - 1 && (
                <span style={{ color: `${BRAND.cyan}22`, fontSize: "5px" }}>&#9670;</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* PORTFOLIO — SINGLE COLUMN, FULL WIDTH */}
      <section
        style={{
          maxWidth: "1200px", margin: "0 auto",
          padding: "clamp(40px, 7vw, 72px) clamp(20px, 5vw, 48px) clamp(60px, 10vw, 120px)",
          display: "flex", flexDirection: "column",
          gap: "clamp(16px, 3vw, 24px)",
        }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${100 + i * 70}ms`,
            }}
          >
            <PortfolioCard project={project} index={i} />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 48px)",
          borderTop: `1px solid ${BRAND.border}`,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(26px, 5vw, 44px)", fontWeight: 600,
            lineHeight: 1.15, letterSpacing: "-0.02em",
            marginBottom: "clamp(12px, 2vw, 20px)",
          }}
        >
          Ready to Build{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${BRAND.cyan}, ${BRAND.purple})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}
          >
            What&apos;s Next?
          </span>
        </h2>
        <p
          style={{
            fontSize: "clamp(14px, 2vw, 15px)", color: BRAND.muted,
            marginBottom: "clamp(24px, 4vw, 36px)",
          }}
        >
          Limited engagements. Enterprise-grade AI production systems.
        </p>
        <a
          href="mailto:Tristen@trisenosystems.com"
          style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            padding: "14px 36px",
            background: `linear-gradient(135deg, ${BRAND.cyan}11, ${BRAND.blue}11)`,
            border: `1px solid ${BRAND.cyan}33`,
            borderRadius: "2px", color: BRAND.cyan,
            fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em",
            textTransform: "uppercase", textDecoration: "none",
            transition: "all 0.4s ease", cursor: "pointer",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND.cyan}22, ${BRAND.blue}22)`;
            e.currentTarget.style.borderColor = `${BRAND.cyan}66`;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = `linear-gradient(135deg, ${BRAND.cyan}11, ${BRAND.blue}11)`;
            e.currentTarget.style.borderColor = `${BRAND.cyan}33`;
          }}
        >
          Start a Conversation
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      <div style={{ borderTop: `1px solid ${BRAND.border}`, padding: "28px clamp(20px, 5vw, 48px)", textAlign: "center" }}>
        <span style={{ fontSize: "11px", color: `${BRAND.muted}55`, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          &copy; 2026 Triseno Systems
        </span>
      </div>
    </div>
  );
}
