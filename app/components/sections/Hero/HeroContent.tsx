"use client"

import { person } from "@/app/config/person"
import { Heading, Text } from "@/app/components/ui/Typography";
import { RotatingText } from "./RotatingText";
import { HeroActions } from "./HeroActions";
import {motion, type Variants} from "framer-motion"


// this controls timing
const containerVariants: Variants  = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2, //animate my children one after another
    },
  },
}

// this controls how each child appears
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
      className="flex flex-col gap-6"
    >
      <motion.div variants={itemVariants}>
        <Heading>{person.name}</Heading>
      </motion.div>

      <motion.div variants={itemVariants}>
        <RotatingText messages={person.heroMessages} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Text className="max-w-2xl">{person.shortBio}</Text>
      </motion.div>

      <motion.div variants={itemVariants}>
        <HeroActions />
      </motion.div>
    </motion.div>
  );
}

 