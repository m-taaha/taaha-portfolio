"use client"
import { motion } from "framer-motion";
import { System } from "@/app/config/systems";

import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { SiGitlab } from "react-icons/si";
import { SystemLink } from "../../cards/SystemLink";





interface SystemActionsProps {
  system: System;
}

export function SystemActions({ system }: SystemActionsProps) {
  return (
    <div
      className="flex
flex-col
gap-6
sm:flex-row
sm:items-center
sm:justify-between"
    >
      <div className="flex gap-3">
        <SystemLink href={system.github} icon={<FiGithub />}>
          GitHub
        </SystemLink>

        <SystemLink href={system.gitlab} icon={<SiGitlab />}>
          GitLab
        </SystemLink>

        <SystemLink href={system.live} icon={<FiExternalLink />}>
          Live
        </SystemLink>
      </div>

      <motion.button
        whileHover="hover"
        whileTap={{
          scale: 0.98,
        }}
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-brand-primary
          transition-transform
          group-hover:translate-x-1
        "
      >
        View System
        <motion.span
          variants={{
            hover: {
              x: 4,
            },
          }}
          transition={{
            duration: 0.2,
          }}
        >
          <FiArrowRight />
        </motion.span>
      </motion.button>
    </div>
  );
}
