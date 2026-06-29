"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { links } from "@/lib/data";

export function LinksCard() {
  return (
    <BentoCard delay={0.48} className="col-5c">
      <span
        style={{
          display: "block",
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--t4)",
          marginBottom: 16,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Find me
      </span>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {links.map(({ label, value, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 2, transition: { duration: 0.18 } }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "var(--link-bg)",
              border: "1px solid var(--proj-border)",
              borderRadius: 10,
              textDecoration: "none",
              transition: "background 0.55s, border-color 0.55s",
            }}
          >
            <span
              style={{
                fontSize: 12,
                color: "var(--t2)",
                fontWeight: 400,
                transition: "color 0.55s",
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontSize: 11,
                color: "var(--t3)",
                transition: "color 0.55s",
              }}
            >
              {value}
            </span>
          </motion.a>
        ))}
      </div>
    </BentoCard>
  );
}
