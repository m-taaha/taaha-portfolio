"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { skillGroups } from "@/lib/data";

export function SkillsCard() {
  return (
    <BentoCard delay={0.18} style={{ gridColumn: "span 5" }}>
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

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {skillGroups.map(({ label, skills }) => (
          <div key={label}>
            <p
              style={{
                fontSize: 10,
                color: "var(--t3)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: 7,
                transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {label}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: 11,
                    fontWeight: 400,
                    background: "var(--pill)",
                    border: "1px solid var(--pill-b)",
                    borderRadius: 8,
                    padding: "4px 10px",
                    color: "var(--pill-on)",
                    letterSpacing: "0.01em",
                    transition:
                      "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1), color 0.55s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}
