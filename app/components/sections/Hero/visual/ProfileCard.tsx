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
          x: 0,
          scale: 1,
          zIndex: 10,
        },
        hover: {
          y: -6,
          x: -28,
          scale: 1.02,
          zIndex: 30,
        },
      }}
      className="
    w-full
    max-w-[340px]
    rounded-3xl
    os-panel
    os-panel-interactive
    overflow-hidden
    p-6
    sm:p-8
  "
    >
      <div className="os-window-bar -mx-6 -mt-6 mb-6 sm:-mx-8 sm:-mt-8 sm:mb-8">
        <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
        <span>profile / taaha.dev</span>
        <span className="ml-auto text-brand-primary">online</span>
      </div>
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
    ring-2
    ring-brand-primary/20
    ring-offset-4
    ring-offset-bg-primary
    sm:w-[170px]
    sm:h-[170px]
  "
          />
        </motion.div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
            SOFTWARE / AI ENGINEERING
          </p>

          <StatusBadge status={person.status} />

          <div className="my-4 w-full border-t border-border-default" />

          <SkillChips skills={person.skills} />
        </div>
      </div>
    </motion.div>
  );
}
