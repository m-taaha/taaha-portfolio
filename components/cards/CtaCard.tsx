"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";

export function CtaCard() {
  return (
    <BentoCard
      delay={0.42}
      style={{
        gridColumn: "span 4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* heading */}
      <h2
        style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 21,
          fontWeight: 500,
          color: "var(--t1)",
          letterSpacing: "-0.025em",
          lineHeight: 1.25,
          marginBottom: 20,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Have a project
        <br />
        in mind?
      </h2>

      {/* button */}
      <motion.a
        href="mailto:your@email.com"
        whileHover={{
          y: -1,
          transition: { duration: 0.18 },
        }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--pill)",
          border: "1px solid var(--border-h)",
          color: "var(--t2)",
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          fontWeight: 400,
          padding: "10px 18px",
          borderRadius: 30,
          cursor: "pointer",
          width: "fit-content",
          textDecoration: "none",
          transition:
            "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1), color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Get in touch →
      </motion.a>
    </BentoCard>
  );
}
