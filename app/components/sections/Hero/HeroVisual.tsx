"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Braces, Database, Layers3, Radio, Sparkles } from "lucide-react";

import { person } from "@/app/config/person";

const domains = [
  {
    id: "interface",
    title: "Product interfaces",
    stack: "Next.js · React · TypeScript",
    description: "Turning product ideas into responsive, interactive web experiences.",
    icon: Layers3,
    x: 14,
    y: 27,
    z: 55,
  },
  {
    id: "backend",
    title: "Backend systems",
    stack: "Express · FastAPI · PostgreSQL",
    description: "Connecting APIs, data, and background work into complete applications.",
    icon: Database,
    x: 86,
    y: 27,
    z: 95,
  },
  {
    id: "realtime",
    title: "Real-time systems",
    stack: "WebSockets · Socket.IO · WebRTC",
    description: "Building live collaboration and communication features with connected clients.",
    icon: Radio,
    x: 14,
    y: 75,
    z: 75,
  },
  {
    id: "ai",
    title: "AI workflows",
    stack: "Python · LangGraph · Gemini",
    description: "Building AI features around models, tools, and application workflows.",
    icon: Sparkles,
    x: 86,
    y: 75,
    z: 135,
  },
] as const;

export function HeroVisual() {
  const [activeDomain, setActiveDomain] = useState<(typeof domains)[number]["id"]>("backend");
  const prefersReducedMotion = useReducedMotion();
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 100, damping: 24 });
  const rotateY = useSpring(tiltY, { stiffness: 100, damping: 24 });
  const active = domains.find((domain) => domain.id === activeDomain) ?? domains[1];
  const ActiveIcon = active.icon;

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltX.set(-y * 3);
    tiltY.set(x * 4);
  }

  function resetTilt() {
    tiltX.set(0);
    tiltY.set(0);
  }

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[650px]"
      style={{ perspective: 1400 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-brand-primary/[0.08] blur-[90px]" aria-hidden="true" />

      <motion.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        style={{ rotateX, rotateY }}
        role="group"
        aria-label="Interactive map of Taaha's engineering focus"
      >
        <svg viewBox="0 0 650 650" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="hero-link" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="var(--brand-primary)" stopOpacity=".12" />
              <stop offset=".5" stopColor="var(--brand-primary)" stopOpacity=".5" />
              <stop offset="1" stopColor="var(--brand-primary)" stopOpacity=".12" />
            </linearGradient>
          </defs>
          <path d="M 152 176 C 192 176, 190 250, 225 258" fill="none" stroke="url(#hero-link)" strokeWidth="1.5" strokeDasharray="3 7" />
          <path d="M 498 176 C 458 176, 460 250, 425 258" fill="none" stroke="url(#hero-link)" strokeWidth="1.5" strokeDasharray="3 7" />
          <path d="M 152 488 C 192 488, 190 410, 225 400" fill="none" stroke="url(#hero-link)" strokeWidth="1.5" strokeDasharray="3 7" />
          <path d="M 498 488 C 456 488, 456 410, 425 400" fill="none" stroke="url(#hero-link)" strokeWidth="1.5" strokeDasharray="3 7" />
          <circle cx="225" cy="258" r="3" fill="var(--brand-primary)" fillOpacity=".7" />
          <circle cx="425" cy="258" r="3" fill="var(--brand-primary)" fillOpacity=".7" />
          <circle cx="225" cy="400" r="3" fill="var(--brand-primary)" fillOpacity=".7" />
          <circle cx="425" cy="400" r="3" fill="var(--brand-primary)" fillOpacity=".7" />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-20 w-[min(60%,320px)]" style={{ transform: "translate(-50%, -50%) translateZ(90px)" }}>
          <div className="os-panel rounded-[1.7rem] p-5 shadow-[0_30px_90px_rgba(0,0,0,.42)] sm:p-6">
            <div className="os-window-bar -mx-5 -mt-5 mb-5 sm:-mx-6 sm:-mt-6">
              <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
              <span>engineering / profile</span>
            </div>

            <div className="flex items-center gap-4">
              <Image
                src={person.avatar}
                alt={person.name}
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl object-cover ring-1 ring-brand-primary/30"
              />
              <div className="min-w-0">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-primary">Full stack · AI</p>
                <h2 className="mt-1 text-lg font-bold leading-tight tracking-tight text-text-primary">Mohammad Taaha Ashraf</h2>
                <p className="mt-1 text-xs text-text-secondary">Software Engineer</p>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-brand-primary/20 bg-brand-primary/[0.06] p-3.5" aria-live="polite">
              <div className="flex items-center gap-2 text-brand-soft">
                <ActiveIcon className="h-4 w-4" />
                <span className="font-mono text-[9px] uppercase tracking-[0.16em]">{active.title}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-text-secondary">{active.description}</p>
            </div>
          </div>
        </div>

        {domains.map((domain) => {
          const Icon = domain.icon;
          const selected = domain.id === activeDomain;
          return (
            <div
              key={domain.id}
              className="absolute z-30 w-[20%] [transform-style:preserve-3d]"
              style={{
                left: `${domain.x}%`,
                top: `${domain.y}%`,
                transform: `translate(-50%, -50%) translateZ(${domain.z}px)`,
              }}
            >
              <motion.button
                type="button"
                aria-pressed={selected}
                aria-label={`${domain.title}: ${domain.stack}`}
                onClick={() => setActiveDomain(domain.id)}
                onFocus={() => setActiveDomain(domain.id)}
                className={`w-full rounded-2xl border p-3 text-left shadow-[0_18px_50px_rgba(0,0,0,.28)] backdrop-blur-xl transition-colors ${selected ? "border-brand-primary/50 bg-surface-secondary/95" : "border-border-subtle bg-surface-primary/90 hover:border-brand-primary/35"}`}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
              >
                <span className={`grid h-8 w-8 place-items-center rounded-lg border ${selected ? "border-brand-primary/30 bg-brand-primary/10 text-brand-soft" : "border-border-subtle bg-bg-primary/70 text-text-muted"}`}>
                  <Icon className="h-4 w-4" />
                </span>
                <span className="mt-3 block text-xs font-semibold text-text-primary">{domain.title}</span>
                <span className="mt-1 block text-[10px] leading-4 text-text-muted">{domain.stack}</span>
              </motion.button>
            </div>
          );
        })}

        <div className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-text-muted">
          <Braces className="h-3.5 w-3.5 text-brand-primary" />
          Select a layer to explore
        </div>
      </motion.div>
    </div>
  );
}
