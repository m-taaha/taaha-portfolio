"use client";

import { useEffect, useState } from "react";
import { BentoCard } from "@/components/ui/BentoCard";

const roles = [
  "Full Stack Engineer",
  "AI Integration",
  "Open Source Contributor",
  "SDE Intern Seeker",
];

export function HeroCard() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 55);
      return () => clearTimeout(t);
    }
    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 28);
      return () => clearTimeout(t);
    }
    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
  }, [charIndex, deleting, roleIndex]);

  return (
    <BentoCard
      delay={0}
      className="col-7"
      style={{ padding: 36, position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
          opacity: 0.6,
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          marginBottom: 14,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "var(--t3)",
            fontWeight: 400,
            letterSpacing: "0.02em",
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
            minWidth: 180,
          }}
        >
          {displayed}
        </p>
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: 13,
            background: "var(--t3)",
            borderRadius: 1,
            animation: "pulse-dot 0.9s ease-in-out infinite",
            flexShrink: 0,
          }}
        />
      </div>

      <h1
        style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "var(--t1)",
          marginBottom: 18,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Mohammad
        <br />
        Taaha Ashraf
      </h1>

      <p
        style={{
          fontSize: 13,
          color: "var(--t2)",
          lineHeight: 1.75,
          maxWidth: 340,
          fontWeight: 300,
          marginBottom: 28,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Final year CS student at{" "}
        <strong style={{ color: "var(--t2)", fontWeight: 500 }}>
          Jamia Hamdard
        </strong>
        , New Delhi. Building production-grade web products and AI-powered
        tools. Freelancing, contributing to open source.
      </p>

      {/* FIXED: Added the missing <a tag */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 12,
          fontWeight: 500,
          color: "var(--t1)",
          background: "var(--pill)",
          border: "1px solid var(--border-h)",
          borderRadius: 30,
          padding: "9px 18px",
          textDecoration: "none",
          transition:
            "background 0.55s, border-color 0.25s, color 0.25s, transform 0.2s",
          fontFamily: "'Inter', sans-serif",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "translateY(-1px)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            "var(--t3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLAnchorElement).style.transform =
            "translateY(0)";
          (e.currentTarget as HTMLAnchorElement).style.borderColor =
            "var(--border-h)";
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
      </a>
    </BentoCard>
  );
}
