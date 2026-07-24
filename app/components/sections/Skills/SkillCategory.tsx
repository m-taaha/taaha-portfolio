"use client"
import {motion} from "framer-motion";
import { SkillCategory as SkillCategoryType } from "@/app/config/skills";
import { SkillChip } from "./SkillChip";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-border-subtle
        bg-surface-primary
       p-6
sm:p-8
        transition-all
        duration-500
        hover:-translate-y-1.5
        hover:border-brand-primary/30
        hover:shadow-[0_18px_45px_rgba(0,0,0,.35)]
      "
    >
      {/* Top Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-brand-primary/70
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Ambient Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-brand-primary/5
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative space-y-6">
        <div>
          <motion.h3
            whileHover={{
              x: 4,
            }}
            transition={{
              duration: 0.25,
            }}
            className="
text-xl
sm:text-2xl
lg:text-3xl
    font-bold
    tracking-tight
    transition-colors
    duration-300
    group-hover:text-brand-primary
  "
          >
            {category.title}
          </motion.h3>

          <p
            className="
              mt-4
              max-w-[36ch]
              leading-7
              text-text-secondary
            "
          >
            {category.description}
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2.5 sm:gap-3"
        >
          {category.technologies.map((technology) => (
            <SkillChip key={technology} technology={technology} />
          ))}
        </div>
      </div>
    </article>
  );
}
