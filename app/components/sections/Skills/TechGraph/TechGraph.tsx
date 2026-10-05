"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/app/components/motion";

import { techEdges, techNodes } from "@/app/config/techGraphs";

import { TechEdge } from "./TechEdge";
import { TechNode } from "./TechNode";

export function TechGraph() {
  return (
    <FadeUp>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
relative
overflow-hidden
rounded-[1.75rem]
os-panel
"
      >
        <div className="os-window-bar">
          <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
          <span>stack.map / dependency graph</span>
          <span className="ml-auto text-brand-primary">live map</span>
        </div>
        {/* Grid */}

        <div
          className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:36px_36px]
        "
        />

        {/* Glow */}

        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-brand-primary/8
          blur-[140px]
        "
        />

        <div className="relative z-10 overflow-x-auto overscroll-x-contain">
          <svg
            viewBox="0 0 1200 520"
            className="
      relative
      h-[380px]
      min-w-[860px]
      w-full
      lg:h-[450px]
      lg:min-w-0
    "
            preserveAspectRatio="xMidYMid meet"
          >
            {techEdges.map((edge, index) => {
              const start = techNodes.find((node) => node.id === edge.from);
              const end = techNodes.find((node) => node.id === edge.to);

              if (!start || !end) return null;

              return <TechEdge key={index} start={start} end={end} />;
            })}

            {techNodes.map((node) => (
              <TechNode key={node.id} node={node} />
            ))}
          </svg>
        </div>
        <p className="px-4 pb-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-text-muted lg:hidden">
          Scroll sideways to explore the map
        </p>
      </motion.div>
    </FadeUp>
  );
}
