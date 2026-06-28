"use client";

import { BentoCard } from "@/components/ui/BentoCard";
import { CONTRIB_SEED } from "@/lib/data";

const dotColors = [
  "var(--dot-0)",
  "var(--dot-1)",
  "var(--dot-2)",
  "var(--dot-3)",
  "var(--dot-4)",
];

export function GitHubCard() {
  return (
    <BentoCard delay={0.06} style={{ gridColumn: "span 5" }}>
      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        <span
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: "var(--t1)",
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          m-taaha
        </span>
        <span
          style={{
            fontSize: 11,
            color: "var(--t3)",
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          github.com
        </span>
      </div>

      {/* contribution grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(26, 1fr)",
          gap: 3,
          marginBottom: 10,
        }}
      >
        {CONTRIB_SEED.slice(0, 364).map((level, i) => (
          <div
            key={i}
            style={{
              aspectRatio: "1",
              borderRadius: 2,
              background: dotColors[level],
              transition: "background 0.55s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        ))}
      </div>

      {/* footer */}
      <p
        style={{
          fontSize: 11,
          color: "var(--t4)",
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        contributions this year
      </p>
    </BentoCard>
  );
}
