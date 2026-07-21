"use client";

import { motion } from "framer-motion";

import { ExperienceItem } from "@/app/config/experience";

interface Props {
  experience: ExperienceItem;
  active: boolean;
  onClick: () => void;
  index: number;
}

export function ExperienceCard({ experience, active, onClick, index }: Props) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      className="
    flex
    flex-col
    items-center
    text-center
  "
    >
      {/* Node */}

      <motion.div
        animate={{
          scale: active ? 1.2 : 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          z-10
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border-2
        "
        style={{
          borderColor: active ? "#d18b35" : "rgba(209,139,53,.35)",
        }}
      >
        <motion.div
          animate={{
            scale: active ? [1, 1.5, 1] : 1,
            opacity: active ? [0.5, 1, 0.5] : 0.5,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            h-8
            w-8
            rounded-full
            bg-brand-primary/20
          "
        />

        <div
          className="
            h-2
            w-2
            rounded-full
            bg-brand-primary
          "
        />
      </motion.div>

      <p
        className="
          mt-5
          text-xs
          uppercase
          tracking-[0.24em]
          text-brand-primary
        "
      >
        {experience.year}
      </p>

      <h3
        className="
          mt-2
          text-lg
          font-semibold
        "
      >
        {experience.title}
      </h3>
    </motion.button>
  );
}
