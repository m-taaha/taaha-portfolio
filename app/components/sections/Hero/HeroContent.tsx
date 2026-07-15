"use client";

import { motion, type Variants } from "framer-motion";

import { person } from "@/app/config/person";

import { Heading, Text } from "@/app/components/ui/Typography";

import { HeroActions } from "./HeroActions";
import { HeroOverview } from "./HeroOverview";
import { HeroStatus } from "./HeroStatus";

const containerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-8"
    >
      <motion.div variants={itemVariants}>
        <HeroStatus />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Heading className="max-w-2xl">{person.heroHeadline}</Heading>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Text className="max-w-2xl">{person.shortBio}</Text>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroActions />
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroOverview />
      </motion.div>
    </motion.div>
  );
}
