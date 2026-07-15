"use client";

import { motion } from "framer-motion";

interface Props {
  architecture: readonly string[];
}

const positions = [
  { x: 320, y: 70 },
  { x: 170, y: 190 },
  { x: 470, y: 190 },
  { x: 320, y: 310 },
  { x: 320, y: 430 },
];

export function SystemBlueprint({ architecture }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="
        absolute
        inset-0
        pointer-events-none
      "
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 640 520">
        {/* Connections */}

        <motion.line
          x1="320"
          y1="90"
          x2="170"
          y2="170"
          stroke="#d18b35"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />

        <motion.line
          x1="320"
          y1="90"
          x2="470"
          y2="170"
          stroke="#d18b35"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        />

        <motion.line
          x1="170"
          y1="210"
          x2="320"
          y2="290"
          stroke="#d18b35"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />

        <motion.line
          x1="470"
          y1="210"
          x2="320"
          y2="290"
          stroke="#d18b35"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />

        <motion.line
          x1="320"
          y1="330"
          x2="320"
          y2="410"
          stroke="#d18b35"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileHover={{ pathLength: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        />
      </svg>

      {architecture.slice(0, 5).map((item, i) => (
        <motion.div
          key={item}
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileHover={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: i * 0.08,
          }}
          className="
            absolute
            -translate-x-1/2
            -translate-y-1/2
          "
          style={{
            left: positions[i].x,
            top: positions[i].y,
          }}
        >
          <div
            className="
              rounded-full
              border
              border-brand-primary/40
              bg-[#111114]/90
              px-5
              py-2
              text-xs
              font-medium
              shadow-[0_0_30px_rgba(209,139,53,.15)]
              backdrop-blur-xl
            "
          >
            {item}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
