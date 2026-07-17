"use client";

import { motion } from "framer-motion";

import { techEdges, techNodes } from "@/app/config/techGraphs";

import { TechEdge } from "./TechEdge";
import { TechNode } from "./TechNode";

export function TechGraph() {
  return (
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
rounded-3xl
border
border-border-subtle
bg-surface-primary
"
    >
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
          bg-brand-primary/5
          blur-[140px]
        "
      />

      <svg
        viewBox="0 0 1200 520"
        className="
      relative
      z-10
      h-[620px]
      w-full
      lg:h-[450px]
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
    </motion.div>
  );
}
