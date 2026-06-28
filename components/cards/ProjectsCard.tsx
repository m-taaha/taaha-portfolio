"use client";

import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { projects } from "@/lib/data";

export function ProjectsCard() {
  return (
    <BentoCard delay={0.3} hover={false} style={{ gridColumn: "span 12" }}>
      {/* header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <h2
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 17,
            fontWeight: 500,
            color: "var(--t1)",
            letterSpacing: "-0.02em",
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          Projects
        </h2>
        <span
          style={{
            fontSize: 11,
            color: "var(--t4)",
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          05 featured
        </span>
      </div>

      {/* grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 8,
        }}
      >
        {projects.map((p, i) => (
          <motion.a
            key={p.num}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35 + i * 0.06,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            whileHover={{
              y: -2,
              transition: { duration: 0.2 },
            }}
            style={{
              background: "var(--proj-bg)",
              border: "1px solid var(--proj-border)",
              borderRadius: 14,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              textDecoration: "none",
              cursor: "pointer",
              transition:
                "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* number */}
            <span
              style={{
                fontSize: 10,
                color: "var(--t4)",
                fontWeight: 500,
                letterSpacing: "0.06em",
                transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {p.num}
            </span>

            {/* name */}
            <span
              style={{
                fontFamily: "'Geist', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--t1)",
                letterSpacing: "-0.01em",
                transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {p.name}
            </span>

            {/* desc */}
            <span
              style={{
                fontSize: 11,
                color: "var(--t3)",
                lineHeight: 1.65,
                fontWeight: 300,
                flex: 1,
                transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {p.desc}
            </span>

            {/* tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 4,
                marginTop: 4,
              }}
            >
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 10,
                    background: "var(--pill)",
                    border: "1px solid var(--pill-b)",
                    borderRadius: 5,
                    padding: "2px 7px",
                    color: "var(--t3)",
                    transition:
                      "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1), color 0.55s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </BentoCard>
  );
}
