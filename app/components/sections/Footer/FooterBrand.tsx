"use client"
import { motion } from "framer-motion";
import { FadeUp } from "@/app/components/motion";
import { person } from "@/app/config/person";
import { footer } from "@/app/config/footer";

export function FooterBrand() {
  return (
    <FadeUp className="space-y-4">
      <motion.h3
        whileHover={{
          x: 4,
          color: "#d18b35",
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {person.name}
      </motion.h3>

      <p className="text-text-secondary">{person.title}</p>

      <p className="max-w-sm text-text-muted">{footer.tagline}</p>
    </FadeUp>
  );
}
