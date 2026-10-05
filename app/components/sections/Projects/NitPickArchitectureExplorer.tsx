"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Database,
  GitBranch,
  Pause,
  Play,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";

const nodes = [
  {
    id: "github",
    label: "GitHub",
    layer: "Event source",
    detail: "A pull request or review event starts the code-review workflow.",
    x: 8,
    y: 50,
    z: 30,
    icon: GitBranch,
  },
  {
    id: "api",
    label: "FastAPI",
    layer: "API layer",
    detail: "Receives the integration event and coordinates persistence and background review work.",
    x: 28,
    y: 50,
    z: 65,
    icon: Server,
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    layer: "Persistence",
    detail: "Stores review records so the generated findings can be retrieved after processing.",
    x: 48,
    y: 23,
    z: 55,
    icon: Database,
  },
  {
    id: "celery",
    label: "Celery",
    layer: "Task orchestration",
    detail: "Schedules review analysis as asynchronous background work.",
    x: 48,
    y: 76,
    z: 85,
    icon: Workflow,
  },
  {
    id: "redis",
    label: "Redis",
    layer: "Message broker",
    detail: "Carries queued work between Celery and the Python worker.",
    x: 67,
    y: 76,
    z: 125,
    icon: Boxes,
  },
  {
    id: "worker",
    label: "Python worker",
    layer: "Background execution",
    detail: "Processes the queued review and validates structured findings before storage.",
    x: 78,
    y: 50,
    z: 165,
    icon: Server,
  },
  {
    id: "gemini",
    label: "Gemini",
    layer: "LLM analysis",
    detail: "Analyzes submitted code context and returns candidate review findings to the pipeline.",
    x: 92,
    y: 23,
    z: 205,
    icon: Sparkles,
  },
] as const;

const connections = [
  { from: "github", to: "api", d: "M 80 250 C 145 250, 210 250, 280 250" },
  { from: "api", to: "postgres", d: "M 280 250 C 350 250, 375 125, 480 115" },
  { from: "api", to: "celery", d: "M 280 250 C 350 250, 375 380, 480 380" },
  { from: "celery", to: "redis", d: "M 480 380 C 530 380, 590 380, 670 380" },
  { from: "redis", to: "worker", d: "M 670 380 C 735 380, 730 250, 780 250" },
  { from: "worker", to: "gemini", d: "M 780 250 C 840 250, 845 115, 920 115" },
] as const;

const reviewFlow = ["github", "api", "celery", "redis", "worker", "gemini"];

export function NitPickArchitectureExplorer() {
  const [selectedNode, setSelectedNode] = useState<string>("github");
  const [isRunning, setIsRunning] = useState(false);
  const [flowIndex, setFlowIndex] = useState(-1);
  const isPlaying = isRunning && flowIndex < reviewFlow.length - 1;
  const prefersReducedMotion = useReducedMotion();
  const rotateXValue = useMotionValue(-4);
  const rotateYValue = useMotionValue(7);
  const rotateX = useSpring(rotateXValue, { stiffness: 120, damping: 22 });
  const rotateY = useSpring(rotateYValue, { stiffness: 120, damping: 22 });
  const active = nodes.find((node) => node.id === selectedNode) ?? nodes[0];

  useEffect(() => {
    if (!isRunning || flowIndex >= reviewFlow.length - 1) return;

    const timeout = window.setTimeout(() => {
      const nextIndex = flowIndex + 1;
      setFlowIndex(nextIndex);
      setSelectedNode(reviewFlow[nextIndex]);
    }, 850);

    return () => window.clearTimeout(timeout);
  }, [flowIndex, isRunning]);

  function tiltCanvas(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateXValue.set(-4 - y * 7);
    rotateYValue.set(7 + x * 10);
  }

  function resetCanvas() {
    rotateXValue.set(-4);
    rotateYValue.set(7);
  }

  function replayFlow() {
    if (isPlaying) {
      setIsRunning(false);
      return;
    }

    setFlowIndex(0);
      setSelectedNode(reviewFlow[0]);
      setIsRunning(true);
  }

  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-border-subtle bg-bg-primary/55">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-subtle px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_rgba(59,165,93,.55)]" />
          Request flow / illustrative
        </div>
        <button
          type="button"
          onClick={replayFlow}
          aria-pressed={isPlaying}
          className="inline-flex items-center gap-2 rounded-lg border border-brand-primary/25 bg-brand-primary/[0.07] px-3 py-2 text-xs font-medium text-brand-soft transition hover:border-brand-primary/50 hover:bg-brand-primary/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
        >
          {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {isPlaying ? "Pause flow" : "Replay review flow"}
        </button>
      </div>

      <div className="overflow-x-auto overscroll-x-contain px-4 py-6 sm:px-7 sm:py-9">
        <div
          role="group"
          aria-label="Interactive three dimensional NitPick architecture map"
          className="mx-auto w-full min-w-[860px]"
          style={{ perspective: 1300 }}
          onPointerMove={tiltCanvas}
          onPointerLeave={resetCanvas}
        >
          <motion.div
            className="relative h-[500px] overflow-visible rounded-2xl border border-white/[0.07] bg-[radial-gradient(ellipse_at_45%_45%,rgba(117,167,255,.07),transparent_50%),linear-gradient(145deg,#171e29,#0d121a)] [transform-style:preserve-3d]"
            style={{ rotateX, rotateY }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.34] [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:34px_34px]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" aria-hidden="true" />

            <svg
              viewBox="0 0 1000 500"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                <filter id="flow-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              {connections.map((connection, index) => {
                const flowPosition = reviewFlow.indexOf(connection.to);
                const lit = flowIndex >= 0 && flowPosition > 0 && flowPosition <= flowIndex;
                return (
                  <g key={`${connection.from}-${connection.to}`}>
                    <path d={connection.d} fill="none" stroke="rgba(132,157,164,.2)" strokeWidth="2" />
                    <motion.path
                      d={connection.d}
                      fill="none"
                      stroke="var(--brand-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      filter="url(#flow-glow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: lit ? 1 : 0, opacity: lit ? 0.95 : 0 }}
                      transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : index * 0.02 }}
                    />
                  </g>
                );
              })}
            </svg>

              {nodes.map((node) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              const flowActive = flowIndex >= 0 && reviewFlow.slice(0, flowIndex + 1).includes(node.id);

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
                    onClick={() => {
                      setSelectedNode(node.id);
                      setIsRunning(false);
                      setFlowIndex(-1);
                    }}
                    aria-pressed={isSelected}
                    className={`relative flex min-w-[132px] items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left backdrop-blur-xl transition-colors ${isSelected || flowActive ? "border-brand-primary/65 bg-[#1b2a43]/95 text-text-primary shadow-[0_0_28px_rgba(117,167,255,.16)]" : "border-white/[0.1] bg-[#121821]/95 text-text-secondary hover:border-brand-primary/40"}`}
                    whileHover={prefersReducedMotion ? undefined : { scale: 1.06 }}
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                  >
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isSelected || flowActive ? "bg-brand-primary/15 text-brand-soft" : "bg-white/[0.04] text-text-muted"}`}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block whitespace-nowrap text-xs font-semibold">{node.label}</span>
                      <span className="mt-1 block whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.1em] text-text-muted">{node.layer}</span>
                    </span>
                    {isSelected && <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-bg-primary bg-brand-primary" />}
                  </motion.button>
                </div>
              );
            })}

            <div className="pointer-events-none absolute bottom-4 left-4 rounded-lg border border-white/[0.07] bg-black/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted backdrop-blur-md">
              <span className="hidden sm:inline">Move pointer to tilt · Select a node to inspect</span>
              <span className="sm:hidden">Tap a node · Swipe to explore</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div aria-live="polite" className="flex flex-col gap-3 border-t border-border-subtle bg-surface-primary/35 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">{active.layer}</p>
          <h3 className="mt-1 text-base font-semibold text-text-primary">{active.label}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-text-secondary">{active.detail}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border-default px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted sm:self-center">
          Node {String(nodes.findIndex((node) => node.id === active.id) + 1).padStart(2, "0")}
          <ArrowRight className="h-3 w-3" />
          {nodes.length.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
