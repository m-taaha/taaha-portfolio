"use client";

import { BentoCard } from "@/components/ui/BentoCard";

export function LocationCard() {
  return (
    <BentoCard
      delay={0.54}
      style={{
        gridColumn: "span 3",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* top */}
      <div>
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
          Based in
        </span>

        <p
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 21,
            fontWeight: 500,
            color: "var(--t1)",
            letterSpacing: "-0.02em",
            marginBottom: 4,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          New Delhi
        </p>

        <p
          style={{
            fontSize: 11,
            color: "var(--t4)",
            fontWeight: 300,
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          India · IST (UTC +5:30)
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
        Open to remote work
      </div>
    </BentoCard>
  );
}
