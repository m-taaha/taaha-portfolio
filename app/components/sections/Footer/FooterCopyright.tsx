"use client"
import { motion } from "framer-motion";
import { site } from "@/app/config/site";

export function FooterCopyright() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.35 }}
      className="space-y-1 text-text-muted"
    >
      <p>{site.copyright}</p>
    </motion.div>
  );
}
