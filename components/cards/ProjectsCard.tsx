"use client";

import { motion, AnimatePresence, useSpring } from "framer-motion";
import { useState } from "react";
import { BentoCard } from "@/components/ui/BentoCard";
import { projects } from "@/lib/data";

type Project = (typeof projects)[0];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LiveIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const linkStyle: React.CSSProperties = {
  fontSize: 12,
  color: "var(--t1)",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "8px 16px",
  borderRadius: 20,
  border: "1px solid var(--border-h)",
  background: "var(--pill)",
  fontWeight: 500,
};

function getTargetScale(i: number, hoveredIndex: number | null): number {
  if (hoveredIndex === null) return 1;
  const dist = Math.abs(i - hoveredIndex);
  if (dist === 0) return 1.07;
  if (dist === 1) return 1.03;
  return 1;
}

function getTargetY(i: number, hoveredIndex: number | null): number {
  if (hoveredIndex === null) return 0;
  const dist = Math.abs(i - hoveredIndex);
  if (dist === 0) return -8;
  if (dist === 1) return -3;
  return 0;
}

function ProjectCard({
  p,
  i,
  hoveredIndex,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  p: Project;
  i: number;
  hoveredIndex: number | null;
  onClick: (p: Project) => void;
  onMouseEnter: (i: number) => void;
  onMouseLeave: () => void;
}) {
  const isHovered = hoveredIndex === i;

  const scale = useSpring(getTargetScale(i, hoveredIndex), {
    stiffness: 340,
    damping: 24,
    mass: 0.5,
  });

  const y = useSpring(getTargetY(i, hoveredIndex), {
    stiffness: 340,
    damping: 24,
    mass: 0.5,
  });

  scale.set(getTargetScale(i, hoveredIndex));
  y.set(getTargetY(i, hoveredIndex));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35 + i * 0.06,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      onMouseEnter={() => onMouseEnter(i)}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(p)}
      style={{
        scale,
        y,
        background: "var(--proj-bg)",
        border: `1px solid ${isHovered ? "var(--border-h)" : "var(--proj-border)"}`,
        borderRadius: 14,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        cursor: "pointer",
        height: 220,
        position: "relative",
        overflow: "hidden",
        transformOrigin: "bottom center",
        zIndex: isHovered ? 2 : 1,
        boxShadow: isHovered ? "0 16px 48px rgba(0,0,0,0.3)" : "none",
        transition:
          "border-color 0.25s ease, box-shadow 0.25s ease, background 0.55s",
      }}
    >
      {/* top edge glow on hover */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, var(--border-h), transparent)",
        }}
      />

      <span
        style={{
          fontSize: 10,
          color: "var(--t4)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          transition: "color 0.55s",
        }}
      >
        {p.num}
      </span>

      <span
        style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 15,
          fontWeight: 500,
          color: "var(--t1)",
          letterSpacing: "-0.01em",
          transition: "color 0.55s",
        }}
      >
        {p.name}
      </span>

      <span
        style={{
          fontSize: 11,
          color: "var(--t3)",
          lineHeight: 1.65,
          fontWeight: 300,
          flex: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          transition: "color 0.55s",
        }}
      >
        {p.desc}
      </span>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {p.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: 10,
              background: "var(--pill)",
              border: "1px solid var(--pill-b)",
              borderRadius: 5,
              padding: "2px 7px",
              color: "var(--t3)",
              transition: "background 0.55s, border-color 0.55s, color 0.55s",
            }}
          >
            {tag}
          </span>
        ))}
        {p.tags.length > 3 && (
          <span
            style={{ fontSize: 10, color: "var(--t4)", padding: "2px 4px" }}
          >
            +{p.tags.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  );
}

function ProjectExpanded({ p, onClose }: { p: Project; onClose: () => void }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          zIndex: 40,
        }}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 50,
          padding: 24,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.75, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 32 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 26,
            mass: 0.85,
          }}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border-h)",
            borderRadius: 24,
            padding: 40,
            width: "100%",
            maxWidth: 560,
            pointerEvents: "all",
            position: "relative",
            boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
          }}
        >
          {/* macOS traffic lights */}
          <div style={{ display: "flex", gap: 6, marginBottom: 28 }}>
            <button
              onClick={onClose}
              title="Close"
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#ff5f57",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#febc2e",
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "#28c840",
              }}
            />
          </div>

          <span
            style={{
              display: "block",
              fontSize: 11,
              color: "var(--t4)",
              fontWeight: 500,
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            {p.num}
          </span>

          <h3
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: 28,
              fontWeight: 600,
              color: "var(--t1)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            {p.name}
          </h3>

          <p
            style={{
              fontSize: 14,
              color: "var(--t2)",
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: 24,
            }}
          >
            {p.desc}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginBottom: 28,
            }}
          >
            {p.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 12,
                  background: "var(--pill)",
                  border: "1px solid var(--pill-b)",
                  borderRadius: 8,
                  padding: "4px 12px",
                  color: "var(--t2)",
                  transition:
                    "background 0.55s, border-color 0.55s, color 0.55s",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <GitHubIcon /> GitHub
            </a>
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                <LiveIcon /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export function ProjectsCard() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const handleClick = (p: Project) => {
    setHoveredIndex(null);
    setSelected(p);
  };

  return (
    <>
      <BentoCard delay={0.3} hover={false} style={{ gridColumn: "span 12" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <h2
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: 17,
              fontWeight: 500,
              color: "var(--t1)",
              letterSpacing: "-0.02em",
              transition: "color 0.55s",
            }}
          >
            Projects
          </h2>
          <span
            style={{
              fontSize: 11,
              color: "var(--t4)",
              transition: "color 0.55s",
            }}
          >
            05 featured
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 8,
            alignItems: "end",
            paddingBottom: 12,
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.num}
              p={p}
              i={i}
              hoveredIndex={hoveredIndex}
              onClick={handleClick}
              onMouseEnter={setHoveredIndex}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </BentoCard>

      <AnimatePresence mode="wait">
        {selected && (
          <ProjectExpanded
            key={selected.num}
            p={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
