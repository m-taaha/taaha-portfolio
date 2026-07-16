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
              rounded-full
              border
              px-6
              py-3
              text-sm
              transition-all
              duration-300

              ${
                active
                  ? "border-brand-primary bg-brand-primary/10 text-white"
                  : "border-border-subtle text-text-secondary hover:border-brand-primary/40"
              }
            `}
          >
            {system.name}
          </motion.button>
        );
      })}
    </div>
  );
}