"use client";

import { motion } from "framer-motion";

import { systems } from "@/app/config/systems";

interface Props {
  activeId: string;
  onSelect: (id: string) => void;
}

export function SystemSelector({
  activeId,
  onSelect,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {systems.map((system) => {
        const active = system.id === activeId;

        return (
          <motion.button
            key={system.id}
            whileTap={{ scale: 0.96 }}
            whileHover={{ y: -2 }}
            onClick={() => onSelect(system.id)}
            className={`
               relative
  overflow-hidden
  rounded-full
              border
              px-6
              py-3
              text-sm
              transition-all
              duration-300

              ${
                active
                  ? "text-white"
                  : "border-border-subtle text-text-secondary hover:border-brand-primary/40"
              }
            `}
          >
            <>
              {active && (
                <motion.div
                  layoutId="active-system"
                  className="
        absolute
        inset-0
        rounded-full
        bg-brand-primary/10
        border
        border-brand-primary/30
      "
                  transition={{
                    type: "spring",
                    stiffness: 360,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{system.name}</span>
            </>
          </motion.button>
        );
      })}
    </div>
  );
}