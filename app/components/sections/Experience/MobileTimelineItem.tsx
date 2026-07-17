"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

import type { ExperienceItem } from "@/app/config/experience";

interface Props {
  experience: ExperienceItem;
  active: boolean;
  onClick: () => void;
  isLast: boolean;
  index: number;
}

export function MobileTimelineItem({
  experience,
  active,
  onClick,
  isLast,
  index,
}: Props) {
  return (
    <div className="relative pl-14">
      {/* Vertical Line */}
      {!isLast && (
        <motion.div
          animate={{
            backgroundColor: active
              ? "rgba(209,139,53,.8)"
              : "rgba(255,255,255,.08)",
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            absolute
            left-3
            top-7
            -bottom-8
            w-px
        "
        />
      )}

      {/* Timeline Node */}
      <div
        className={`
absolute
left-0
top-7
flex
h-6
w-6
items-center
justify-center
rounded-full
border-2
z-10
transition-all
${
  active
    ? "border-brand-primary shadow-[0_0_28px_rgba(209,139,53,.55)]"
    : "border-brand-primary/30"
}
bg-background-primary
`}
      >
        <motion.div
          animate={{
            scale: active ? [1, 1.4, 1] : 1,
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: active ? Infinity : 0,
          }}
          className="h-2.5 w-2.5 rounded-full bg-brand-primary"
        />
      </div>

      {/* Card */}
      <motion.div
        layout
        animate={{
          scale: active ? 1.02 : 1,
          y: active ? -3 : 0,
        }}
        transition={{
          duration: 0.35,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
    rounded-3xl
    overflow-hidden
    mb-8
    border
    transition-all
    ${
      active
        ? "border-brand-primary/40 bg-brand-primary/[0.02] shadow-[0_10px_30px_rgba(209,139,53,.12)]"
        : "border-border-subtle bg-surface-primary"
    }
  `}
      >
        <motion.button
          whileTap={{
            scale: 0.98,
          }}
          onClick={onClick}
          className="
    flex
    w-full
    items-start
    justify-between
    p-6
    text-left
  "
        >
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-brand-primary
              "
            >
              {experience.year}
            </p>

            <h3 className="mt-3 text-xl font-semibold">{experience.title}</h3>

            <p className="mt-2 text-sm text-text-secondary">
              {experience.organization}
            </p>
          </div>

          <motion.div
            animate={{
              rotate: active ? 180 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
          >
            <ChevronDown className="h-5 w-5 text-text-secondary" />
          </motion.div>
        </motion.button>

        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6">
                <p className="leading-8 text-text-secondary">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.25,
                      }}
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-brand-primary/20
                        bg-brand-primary/10
                        px-3
                        py-1
                        text-xs
                      "
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                  }}
                  className="
    mt-8
    rounded-2xl
    border
    border-brand-primary/30
    bg-brand-primary/[0.08]
    p-5
  "
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-primary" />

                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.24em]
                        text-brand-primary
                      "
                    >
                      Lesson Learned
                    </p>
                  </div>

                  <h4 className="mt-4 font-semibold">
                    {experience.artifact.title}
                  </h4>

                  <p className="mt-1 text-sm text-text-secondary">
                    {experience.artifact.subtitle}
                  </p>

                  <div className="mt-5 border-l-2 border-brand-primary pl-4">
                    <p className="italic leading-7 text-text-secondary">
                      "{experience.artifact.lesson}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
