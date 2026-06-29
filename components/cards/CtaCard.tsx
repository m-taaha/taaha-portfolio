"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";

export function CtaCard() {
  return (
    <BentoCard
      delay={0.42}
      className="col-4c"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontSize: 10,
            fontWeight: 500,
            color: "var(--t3)",
            background: "var(--pill)",
            border: "1px solid var(--pill-b)",
            borderRadius: 20,
            padding: "4px 10px",
            marginBottom: 20,
            letterSpacing: "0.04em",
            transition: "background 0.55s, border-color 0.55s, color 0.55s",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--avail)",
              display: "inline-block",
              animation: "pulse-dot 2.4s ease-in-out infinite",
              transition: "background 0.55s",
            }}
          />
          Available for work
        </div>

        <h2
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 21,
            fontWeight: 500,
            color: "var(--t1)",
            letterSpacing: "-0.025em",
            lineHeight: 1.25,
            marginBottom: 10,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          Have a project
          <br />
          in mind?
        </h2>

        <p
          style={{
            fontSize: 12,
            color: "var(--t3)",
            lineHeight: 1.65,
            fontWeight: 300,
            marginBottom: 24,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          Open to freelance projects, SDE internships, and open source
          collaborations.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <p
          style={{
            fontSize: 11,
            color: "var(--t3)",
            fontFamily: "'Inter', sans-serif",
            transition: "color 0.55s",
          }}
        >
          mtaahaashraf@gmail.com
        </p>
        <motion.a
          href="mailto:mtaahaashraf@gmail.com"
          whileHover={{ y: -1, transition: { duration: 0.18 } }}
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
            transition: "background 0.55s, border-color 0.55s, color 0.55s",
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Get in touch →
        </motion.a>
      </div>
    </BentoCard>
  );
}
