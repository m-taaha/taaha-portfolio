"use client"
import { motion } from "framer-motion";
import { System } from "@/app/config/systems";

import { SystemHeader } from "./SystemHeader";
import { SystemChallenge } from "./SystemChallenge";
import { SystemArchitecture } from "./SystemArchitechture";
import { SystemHighlights } from "./SystemHighlights";
import { SystemTechStack } from "./SystemTechStack";
import { SystemActions } from "./SystemActions";
import { InteractivePreview } from "../preview/InteractivePreview";



interface Props {
  system: System;
}

export function SystemViewer({ system }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
    mt-12
    overflow-hidden
    rounded-[32px]
    border
    border-border-subtle
    bg-surface-primary
    transition-all
    duration-300
    hover:border-brand-primary/30
    hover:shadow-[0_24px_60px_rgba(209,139,53,.10)]
  "
    >
      <div className="grid lg:grid-cols-[540px_1fr]">
        {/* LEFT */}

        <div className="p-12">
          <SystemHeader
            category={system.category}
            name={system.name}
            overview={system.overview}
          />

          <div className="mt-12">
            <SystemChallenge
              problem={system.problem}
              solution={system.solution}
            />
          </div>

          <div className="mt-12">
            <SystemArchitecture architecture={system.architecture} />
          </div>

          <div className="mt-12">
            <SystemHighlights highlights={system.highlights} />
          </div>

          <div className="mt-12">
            <SystemTechStack technologies={system.technologies} />
          </div>

          <div className="mt-12">
            <SystemActions system={system} />
          </div>
        </div>

        {/* RIGHT */}

        <InteractivePreview system={system} />
      </div>
    </motion.div>
  );
}
