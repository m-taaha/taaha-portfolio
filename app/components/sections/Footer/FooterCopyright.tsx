"use client"
import { motion } from "framer-motion";
import { site } from "@/app/config/site";

export function FooterCopyright() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.35,
      }}
    >
      <p>{site.copyright}</p>

      <p>Built with Next.js • TypeScript • Tailwind CSS</p>
    </motion.div>
  );
}
