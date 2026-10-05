"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Database, Laptop, Pause, Play, Radio, Shapes } from "lucide-react";

const nodes = [
  {
    id: "client-a",
    label: "Participant A",
    layer: "Canvas client",
    detail: "A participant creates or edits shapes on the shared whiteboard.",
    x: 10,
    y: 25,
    z: 35,
    icon: Laptop,
  },
  {
    id: "client-b",
    label: "Participant B",
    layer: "Canvas client",
    detail: "Other participants receive live canvas changes for collaborative editing.",
    x: 10,
    y: 75,
    z: 45,
    icon: Laptop,
  },
  {
    id: "sync",
    label: "WebSocket sync",
    layer: "Real-time transport",
    detail: "WebSockets synchronize canvas changes between connected participants.",
    x: 38,
    y: 50,
    z: 75,
    icon: Radio,
  },
  {
    id: "canvas",
    label: "Canvas engine",
    layer: "Rendering",
    detail: "A custom canvas engine renders geometric shapes on the whiteboard.",
    x: 65,
    y: 50,
    z: 105,
    icon: Shapes,
  },
  {
    id: "database",
    label: "PostgreSQL",
    layer: "Persistent state",
    detail: "PostgreSQL stores whiteboard state beyond the live editing session.",
    x: 90,
    y: 50,
    z: 135,
    icon: Database,
  },
] as const;

const connections = [
  { from: "client-a", to: "sync", d: "M 100 125 C 185 125, 220 250, 310 250" },
  { from: "sync", to: "client-b", d: "M 310 250 C 220 250, 185 375, 100 375" },
  { from: "sync", to: "canvas", d: "M 380 250 C 450 250, 540 250, 650 250" },
  { from: "canvas", to: "database", d: "M 650 250 C 720 250, 810 250, 900 250" },
] as const;

const syncFlow = ["client-a", "sync", "client-b", "canvas", "database"];

export function ExacDrawArchitectureExplorer() {
  const [selectedNode, setSelectedNode] = useState<string>("sync");
  const [flowIndex, setFlowIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const isPlaying = isRunning && flowIndex < syncFlow.length - 1;
  const prefersReducedMotion = useReducedMotion();
  const tiltXValue = useMotionValue(-3);
  const tiltYValue = useMotionValue(5);
  const rotateX = useSpring(tiltXValue, { stiffness: 110, damping: 24 });
  const rotateY = useSpring(tiltYValue, { stiffness: 110, damping: 24 });
  const active = nodes.find((node) => node.id === selectedNode) ?? nodes[2];

  useEffect(() => {
    if (!isRunning || flowIndex >= syncFlow.length - 1) return;
    const timeout = window.setTimeout(() => {
      const nextIndex = flowIndex + 1;
      setFlowIndex(nextIndex);
      setSelectedNode(syncFlow[nextIndex]);
    }, 800);
    return () => window.clearTimeout(timeout);
  }, [flowIndex, isRunning]);

  function tiltCanvas(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    tiltXValue.set(-3 - y * 5);
    tiltYValue.set(5 + x * 7);
  }

  function resetCanvas() {
    tiltXValue.set(-3);
    tiltYValue.set(5);
  }

  function replayFlow() {
    if (isPlaying) {
      setIsRunning(false);
      return;
    }
    setFlowIndex(0);
    setSelectedNode(syncFlow[0]);
    setIsRunning(true);
  }

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-border-subtle bg-bg-primary/55">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(117,167,255,.6)]" />
          Illustrative collaboration flow
        </div>
        <button
          type="button"
          onClick={replayFlow}
          aria-pressed={isPlaying}
          className="inline-flex items-center gap-2 rounded-lg border border-brand-primary/25 bg-brand-primary/[0.07] px-3 py-2 text-xs font-medium text-brand-soft transition hover:border-brand-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {isPlaying ? "Pause sync" : "Replay sync"}
        </button>
      </div>

      <div className="overflow-x-auto overscroll-x-contain px-4 py-7 sm:px-7 sm:py-9">
        <div className="mx-auto min-w-[860px] max-w-[1100px]" style={{ perspective: 1500 }}>
          <div onPointerMove={tiltCanvas} onPointerLeave={resetCanvas}>
            <motion.div
              className="relative h-[440px] rounded-2xl border border-white/[0.07] bg-[radial-gradient(ellipse_at_45%_45%,rgba(117,167,255,.08),transparent_48%),linear-gradient(145deg,#171e29,#0d121a)] [transform-style:preserve-3d]"
              style={{ rotateX, rotateY }}
              role="group"
              aria-label="Interactive three dimensional exac.draw collaboration flow"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden="true" />
              <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
                <defs>
                  <filter id="sync-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>
                {connections.map((connection, index) => {
                  const targetIndex = syncFlow.indexOf(connection.to);
                  const lit = flowIndex >= 0 && targetIndex > 0 && targetIndex <= flowIndex;
                  return (
                    <g key={`${connection.from}-${connection.to}`}>
                      <path d={connection.d} fill="none" stroke="rgba(158,181,220,.2)" strokeWidth="2" />
                      <motion.path
                        d={connection.d}
                        fill="none"
                        stroke="var(--brand-primary)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        filter="url(#sync-glow)"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: lit ? 1 : 0, opacity: lit ? 0.95 : 0 }}
                        transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : index * 0.03 }}
                      />
                    </g>
                  );
                })}
              </svg>

              {nodes.map((node) => {
                const Icon = node.icon;
                const selected = selectedNode === node.id;
                const flowing = flowIndex >= 0 && syncFlow.slice(0, flowIndex + 1).includes(node.id);
                return (
                  <div
                    key={node.id}
                    className="absolute"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      zIndex: node.z,
                      transform: `translate(-50%, -50%) translateZ(${node.z}px)`,
                    }}
                  >
                    <motion.button
                      type="button"
                      aria-label={`${node.label}: ${node.layer}`}
                      aria-pressed={selected}
                      onClick={() => {
                        setSelectedNode(node.id);
                        setFlowIndex(-1);
                        setIsRunning(false);
                      }}
                      className={`flex min-w-[146px] items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left backdrop-blur-xl transition-colors ${selected || flowing ? "border-brand-primary/60 bg-[#1b2a43]/95 text-text-primary shadow-[0_0_26px_rgba(117,167,255,.15)]" : "border-white/[0.1] bg-[#121821]/95 text-text-secondary hover:border-brand-primary/40"}`}
                      whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                    >
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${selected || flowing ? "bg-brand-primary/15 text-brand-soft" : "bg-white/[0.04] text-text-muted"}`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block whitespace-nowrap text-xs font-semibold">{node.label}</span>
                        <span className="mt-1 block whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.1em] text-text-muted">{node.layer}</span>
                      </span>
                    </motion.button>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted sm:hidden">Tap a node · Swipe to explore</p>
      </div>

      <div aria-live="polite" className="flex flex-col gap-3 border-t border-border-subtle bg-surface-primary/35 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">{active.layer}</p>
          <h3 className="mt-1 text-base font-semibold text-text-primary">{active.label}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-text-secondary">{active.detail}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border-default px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted sm:self-center">
          Layer {String(nodes.findIndex((node) => node.id === active.id) + 1).padStart(2, "0")} <Shapes className="h-3 w-3" /> {String(nodes.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
