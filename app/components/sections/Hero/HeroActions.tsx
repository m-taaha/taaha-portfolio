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
        <Button href="#systems">
          <motion.span
            className="flex items-center gap-2"
            variants={{
              hover: {
                x: 2,
              },
            }}
          >
            Explore Systems
            <motion.span
              initial={{
                x: -6,
                opacity: 0,
              }}
              variants={{
                hover: {
                  x: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </motion.span>
        </Button>
      </motion.div>

      <motion.div whileHover="hover" whileTap={{ scale: 0.98 }}>
        <Button
          variant="secondary"
          href={person.resumeUrl!}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span
            className="flex items-center gap-2"
            variants={{
              hover: {
                x: 2,
              },
            }}
          >
            Resume
            <motion.span
              initial={{
                x: -6,
                opacity: 0,
              }}
              variants={{
                hover: {
                  x: 0,
                  opacity: 1,
                },
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </motion.span>
        </Button>
      </motion.div>
    </div>
  );
}
