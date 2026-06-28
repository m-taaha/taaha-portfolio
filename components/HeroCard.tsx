"use client";

import { BentoCard } from "@/components/ui/BentoCard";

export function HeroCard() {
  return (
    <BentoCard delay={0} style={{ gridColumn: "span 7", padding: 36 }}>
      <p
        style={{
          fontSize: 12,
          color: "var(--t3)",
          fontWeight: 400,
          letterSpacing: "0.02em",
          marginBottom: 14,
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        Full Stack Engineer · AI · Open Source
      </p>

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
    </BentoCard>
  );
}
