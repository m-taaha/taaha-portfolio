"use client";

import { motion } from "framer-motion";

import { BlueprintConnection } from "./BlueprintConnection";
import { BlueprintNode } from "./BlueprintNode";
import { BlueprintPacket } from "./BlueprintPacket";
import { BlueprintData } from "./blueprint";

interface Props {
  blueprint: BlueprintData;
}

export function BlueprintCanvas({ blueprint }: Props) {
  const packets = [
    { x: 245, y: 200, delay: 0 },
    { x: 520, y: 200, delay: 0.8 },
    { x: 560, y: 300, delay: 1.6 },
    { x: 760, y: 300, delay: 2.2 },
  ];

  return (
    <motion.div
      className="
        absolute
        inset-0
        pointer-events-none
      "
      variants={{
        idle: {
          opacity: 0,
          y: -70,
        },

        hover: {
          opacity: 1,
          y: 20,
        },
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Header */}

      <motion.div
        className="
          absolute
          left-10
          right-10
          top-10
          z-20
          flex
          items-start
          justify-between
        "
        initial={{
          opacity: 0,
          y: -12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.45,
        }}
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-brand-primary">
            System Architecture
          </p>

          <h3 className="mt-2 text-xl font-semibold text-white">
            {blueprint.title}
          </h3>

          <p className="mt-1 text-sm text-white/45">{blueprint.subtitle}</p>
        </div>

        <div
          className={`
    flex
    items-center
    gap-2
    rounded-full
    px-4
    py-2
    border
    ${
      blueprint.status === "Live"
        ? "border-green-500/20 bg-green-500/10"
        : "border-brand-primary/20 bg-brand-primary/10"
    }
  `}
        >
          <motion.div
            className={`h-2 w-2 rounded-full ${
              blueprint.status === "Live" ? "bg-green-500" : "bg-brand-primary"
            }`}
            animate={{
              opacity: [1, 0.35, 1],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
          />

          <span
            className={`
      text-[11px]
      font-medium
      uppercase
      tracking-[0.22em]
      ${blueprint.status === "Live" ? "text-green-500" : "text-brand-primary"}
    `}
          >
            {blueprint.status}
          </span>
        </div>
      </motion.div>

      {/* Blueprint */}

      <motion.svg
        viewBox="40 90 900 430"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {blueprint.connections.map((connection, index) => {
          const from = blueprint.nodes.find(
            (node) => node.id === connection.from,
          );

          const to = blueprint.nodes.find((node) => node.id === connection.to);

          if (!from || !to) return null;

          return (
            <BlueprintConnection
              key={index}
              startNode={from}
              endNode={to}
              delay={0.25 + index * 0.18}
            />
          );
        })}

        {blueprint.nodes.map((node) => (
          <BlueprintNode key={node.id} node={node} />
        ))}

        {packets.map((packet, index) => (
          <BlueprintPacket
            key={index}
            x={packet.x}
            y={packet.y}
            delay={packet.delay}
          />
        ))}
      </motion.svg>

      {/* Ambient Glow */}

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
    </motion.div>
  );
}
