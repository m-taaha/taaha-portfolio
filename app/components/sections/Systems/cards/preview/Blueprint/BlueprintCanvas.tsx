"use client";

import { motion } from "framer-motion";
import { BlueprintConnection } from "./BlueprintConnection";
import { BlueprintNode } from "./BlueprintNode";
import { BlueprintPacket } from "./BlueprintPacket"; // <-- NEW
import { BlueprintData } from "./blueprint";

interface Props {
  blueprint: BlueprintData;
}

export function BlueprintCanvas({ blueprint }: Props) {
  // Temporary packet timeline.
  // Later we'll generate these dynamically from the connections.
  const packets = [
    {
      x: 245,
      y: 200,
      delay: 0,
    },

    {
      x: 520,
      y: 200,
      delay: 0.8,
    },

    {
      x: 560,
      y: 300,
      delay: 1.6,
    },

    {
      x: 760,
      y: 300,
      delay: 1.6,
    },
  ];

  return (
    <motion.div
      className="
        absolute
        inset-0
        z-10
        pointer-events-none
      "
      variants={{
        idle: {
          y: -120,
          opacity: 0,
        },

        hover: {
          y: 40,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
    >
      <motion.svg
        viewBox="0 0 1000 600"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connections */}

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
              delay={0.3 + index * 0.28}
            />
          );
        })}

        {/* Nodes */}

        {blueprint.nodes.map((node) => (
          <BlueprintNode key={node.id} node={node} />
        ))}

        {/* Packets */}

        {packets.map((packet, index) => (
          <BlueprintPacket
            key={index}
            x={packet.x}
            y={packet.y}
            delay={packet.delay}
          />
        ))}
      </motion.svg>

      {/* Soft center glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
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
