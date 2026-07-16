"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { experiences } from "@/app/config/experience";
import { ExperienceCard } from "./ExperienceCard";
import { Sparkles } from "lucide-react";


export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeExperience = experiences[activeIndex];

  const progress = (activeIndex / (experiences.length - 1)) * 100;

  return (
    <div className="space-y-14">
      {/* Timeline */}

      <div className="relative">
        {/* Base Line */}

        <div className="absolute left-0 right-0 top-2.5 h-px bg-border-subtle" />

        {/* Animated Progress */}

        <motion.div
          className="absolute left-0 top-2.5 h-px bg-brand-primary"
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Timeline Nodes */}

        <div className="relative grid grid-cols-7">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title}
              experience={experience}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Detail Card */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeExperience.title}
          initial={{
            opacity: 0,
            y: 28,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -28,
            scale: 0.98,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            rounded-3xl
            border
            border-border-subtle
            bg-surface-primary
            p-10
          "
        >
          <motion.p
            className="text-sm text-brand-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            {activeExperience.year}
          </motion.p>

          <motion.h3
            className="mt-3 text-4xl font-semibold"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.08,
            }}
          >
            {activeExperience.title}
          </motion.h3>

          <motion.p
            className="mt-2 text-text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
          >
            {activeExperience.organization}
          </motion.p>

          <motion.p
            className="mt-8 max-w-3xl leading-8 text-text-secondary"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.18,
            }}
          >
            {activeExperience.description}
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-3">
            {activeExperience.technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25 + index * 0.06,
                }}
                className="
                  rounded-full
                  border
                  border-brand-primary/25
                  bg-brand-primary/10
                  px-4
                  py-2
                  text-sm
                "
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Artifact */}

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
              delay: 0.45,
            }}
            className="
    mt-12
    rounded-2xl
    border
    border-brand-primary/20
    bg-brand-primary/[0.04]
    p-7
  "
          >
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-primary" />

              <p
                className="
        text-xs
        uppercase
        tracking-[0.28em]
        text-brand-primary
      "
              >
                Lesson Learned
              </p>
            </div>

            <h4 className="mt-4 text-xl font-semibold">
              {activeExperience.artifact.title}
            </h4>

            <p className="mt-1 text-text-secondary">
              {activeExperience.artifact.subtitle}
            </p>

            <div
              className="
      mt-6
      border-l-2
      border-brand-primary
      pl-5
    "
            >
              <p
                className="
        italic
        leading-8
        text-text-secondary
        before:content-['“']
        after:content-['”']
      "
              >
                {activeExperience.artifact.lesson}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
