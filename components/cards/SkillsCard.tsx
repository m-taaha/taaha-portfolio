"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { stack } from "@/lib/data";

export function SkillsCard() {
  return (
    <BentoCard delay={0.18} style={{ gridColumn: "span 5" }}>
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
        Stack
      </span>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {stack.map(({ label, primary }) => (
          <span
            key={label}
            style={{
              fontSize: 11,
              fontWeight: 400,
              background: "var(--pill)",
              border: "1px solid var(--pill-b)",
              borderRadius: 8,
              padding: "5px 11px",
              color: primary ? "var(--t2)" : "var(--pill-on)",
              letterSpacing: "0.01em",
              transition:
                "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1), color 0.55s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
