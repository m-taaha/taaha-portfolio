"use client";

import { Button } from "../../ui/Button";
import { person } from "@/app/config/person";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroActions() {
  return (
    <div
      className="
        flex
        w-full
        max-w-sm
        flex-col
        gap-3
        sm:max-w-none
        sm:flex-row
      "
    >
      <motion.div whileHover="hover" whileTap={{ scale: 0.98 }}>
        <Button 
        href="#systems"
        >
          <span className="flex items-center gap-2">
            Explore Systems
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
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </span>
        </Button>
      </motion.div>

      <motion.div whileHover="hover" whileTap={{ scale: 0.98 }}>
        <Button
          variant="secondary"
          href={person.resumeUrl!}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2">
            Download Resume
            <motion.span
              variants={{
                hover: {
                  x: 3,
                  y: -3,
                },
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </span>
        </Button>
      </motion.div>
    </div>
  );
}
