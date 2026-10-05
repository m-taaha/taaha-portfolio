"use client"
import { motion } from "framer-motion";
import { currentFocus } from "@/app/config/hero";
import { SkillChip } from "../Skills/SkillChip";

export function HeroOverview() {
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
        rounded-[1.75rem]
p-6
      "
    >
      <div className="os-window-bar -mx-6 -mt-6 mb-6">
        <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
        <span>now / building</span>
        <span className="ml-auto text-brand-primary">active</span>
      </div>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-brand-primary">
            {currentFocus.title}
          </p>

          <h3 className="mt-2 text-2xl font-bold">{currentFocus.subtitle}</h3>

          <p className="mt-3 max-w-xl leading-7 text-text-secondary">
            {currentFocus.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border-default" />

        {/* Status */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
              Stage
            </p>

            <p className="mt-2 font-semibold">{currentFocus.stage}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
              Focus
            </p>

            <p className="mt-2 font-semibold">{currentFocus.focus}</p>
          </div>
        </div>

        {/* Stack */}
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.18em] text-text-muted">
            Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {currentFocus.technologies.map((technology) => (
              <SkillChip key={technology} technology={technology} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
