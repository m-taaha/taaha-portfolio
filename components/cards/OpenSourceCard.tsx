"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { openSource } from "@/lib/data";

export function OpenSourceCard() {
  return (
    <BentoCard delay={0.2} className="col-4b">
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
        Open Source
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: "var(--t3)",
            background: "var(--pill)",
            border: "1px solid var(--pill-b)",
            borderRadius: 20,
            padding: "3px 10px",
            letterSpacing: "0.04em",
            transition: "background 0.55s, border-color 0.55s, color 0.55s",
          }}
        >
          {openSource.event}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 18,
          fontWeight: 600,
          color: "var(--t1)",
          letterSpacing: "-0.02em",
          marginBottom: 8,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {openSource.name}
      </h3>

      <p
        style={{
          fontSize: 12,
          color: "var(--t2)",
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: 16,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {openSource.desc}
      </p>

      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 18 }}
      >
        {openSource.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              background: "var(--pill)",
              border: "1px solid var(--pill-b)",
              borderRadius: 6,
              padding: "3px 9px",
              color: "var(--t3)",
              transition: "background 0.55s, border-color 0.55s, color 0.55s",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <motion.a
        href={openSource.github}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 2, transition: { duration: 0.18 } }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 11,
          color: "var(--t2)",
          textDecoration: "none",
          fontWeight: 400,
          transition: "color 0.2s",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        View contribution →
      </motion.a>
    </BentoCard>
  );
}
