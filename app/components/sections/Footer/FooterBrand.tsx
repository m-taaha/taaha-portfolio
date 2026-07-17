"use client"
import { motion } from "framer-motion";
import { person } from "@/app/config/person";
import { footer } from "@/app/config/footer";

export function FooterBrand() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -25,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.1,
      }}
      className="space-y-4"
    >
     <motion.h3
whileHover={{
 x:4,
}}

transition={{
 duration:.2,
}}>{person.name}</motion.h3>

      <p className="text-text-secondary">{person.title}</p>

      <p className="max-w-sm text-text-muted">{footer.tagline}</p>
    </motion.div>
  );
}
