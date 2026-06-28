"use client";

import { BentoCard } from "@/components/ui/BentoCard";

export function AboutCard() {
  return (
    <BentoCard delay={0.12} style={{ gridColumn: "span 4" }}>
      {/* label */}
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
        About
      </span>

      <p
        style={{
          fontSize: 13,
          color: "var(--t2)",
          lineHeight: 1.75,
          fontWeight: 300,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Passionate about solving real problems through code. I work across the
        full stack — from{" "}
        <strong style={{ color: "var(--t2)", fontWeight: 500 }}>Next.js</strong>{" "}
        frontends to{" "}
        <strong style={{ color: "var(--t2)", fontWeight: 500 }}>FastAPI</strong>{" "}
        backends, database design, and AI integration. Currently targeting{" "}
        <strong style={{ color: "var(--t2)", fontWeight: 500 }}>
          SDE internships
        </strong>{" "}
        and GSoC 2027.
      </p>
    </BentoCard>
  );
}
