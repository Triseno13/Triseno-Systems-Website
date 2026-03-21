# CLAUDE.md — Triseno Systems Website

## Project
Building the trisenosystems.com website — a premium single-page site for an AI infrastructure company.

## Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- GSAP + @gsap/react + ScrollTrigger (scroll animations, timelines, pinned sections)
- Framer Motion (component micro-interactions, page transitions)
- @phosphor-icons/react (icons — NO emojis, NO Lucide)
- Geist Sans (headings) + Geist Mono (code/tech accents)

## Design Rules
- Dark navy color scheme (--bg-primary: #0a0e1a, --accent-primary: #00b4d8)
- NO centered hero text (use split-screen or asymmetric layouts)
- NO uniform card grids (use Bento layouts, varied sizes)
- NO Inter, Roboto, Arial, or system fonts
- NO emojis anywhere in code or UI
- NO purple gradients, NO white backgrounds
- Animate only `transform` and `opacity` — never layout properties
- Respect `prefers-reduced-motion`
- Use `min-h-[100dvh]` not `h-screen`
- Use CSS Grid not flexbox percentage math
- Max content width: max-w-[1400px] mx-auto
