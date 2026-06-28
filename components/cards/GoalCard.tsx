"use client";

import { BentoCard } from "@/components/ui/BentoCard";

export function GoalCard() {
  return (
    <BentoCard
      delay={0.24}
      style={{
        gridColumn: "span 3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* top */}
      <div>
        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 38,
            fontWeight: 600,
            color: "var(--t4)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: 6,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          2027
        </p>
        <p
          style={{
            fontSize: 13,
            color: "var(--t3)",
            fontWeight: 400,
            marginBottom: 4,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          GSoC Target
        </p>
        <p
          style={{
            fontSize: 11,
            color: "var(--t4)",
            lineHeight: 1.5,
            fontWeight: 300,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          Building open source contributions toward Google Summer of Code.
        </p>
      </div>

      {/* bottom */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          fontSize: 11,
          color: "var(--t3)",
          marginTop: 16,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
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
            transition: "background 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
        Open to opportunities
      </div>
    </BentoCard>
  );
}
