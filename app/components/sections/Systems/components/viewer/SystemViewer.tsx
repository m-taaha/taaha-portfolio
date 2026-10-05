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
    os-panel
    os-panel-interactive
    overflow-hidden
    rounded-[32px]
  "
    >
      <div className="os-window-bar">
        <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
        <span>systems / {system.id}</span>
        <span className="ml-auto inline-flex items-center gap-2 text-brand-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-success" /> interactive preview
        </span>
      </div>
      <div className="grid xl:grid-cols-[540px_1fr]">
        {/* LEFT */}

        <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
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
