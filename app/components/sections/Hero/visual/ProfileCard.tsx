"use client"
import { motion } from "framer-motion";
import { person } from "@/app/config/person"
import Image from "next/image";
import { StatusBadge } from "./StatusBadge";
import { SkillChips } from "./SkillChips";

export function ProfileCard() {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      variants={{
        rest: {
          y: 0,
          scale: 1,
        },
        hover: {
          y: -6,
          scale: 1.02,
        },
      }}
      className="
    w-full
    max-w-[340px]
    rounded-3xl
    border
    border-border-subtle
    bg-surface-primary
    p-6
    sm:p-8
  "
    >
      <div className="flex flex-col items-center text-center gap-6 ">
        <motion.div
          variants={{
            rest: {
              scale: 1,
            },
            hover: {
              scale: 1.05,
            },
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <Image
            src={person.avatar!}
            alt={person.name}
            width={170}
            height={170}
            priority
            sizes="170px"
            className="
    rounded-full
    object-cover
    ring
    ring-border-default
    sm:w-[170px]
    sm:h-[170px]
  "
          />
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            AI FULL • STACK
          </p>

          <StatusBadge status={person.status} />

          <div className="my-4 w-full border-t border-border-default" />

          <SkillChips skills={person.skills} />
        </div>
      </div>
    </motion.div>
  );
}

