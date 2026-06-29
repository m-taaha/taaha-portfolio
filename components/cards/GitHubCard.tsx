"use client";

import { useEffect, useState } from "react";
import { BentoCard } from "@/components/ui/BentoCard";

const GITHUB_USERNAME = "m-taaha";

type ContribDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const dotColors = [
  "var(--dot-0)",
  "var(--dot-1)",
  "var(--dot-2)",
  "var(--dot-3)",
  "var(--dot-4)",
];

export function GitHubCard() {
  const [days, setDays] = useState<ContribDay[]>([]);
  const [totalContribs, setTotalContribs] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContribs() {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
        );
        const data = await res.json();

        const contrib: ContribDay[] = data.contributions ?? [];
        setDays(contrib.slice(-364));

        const total = contrib.reduce(
          (sum: number, d: ContribDay) => sum + d.count,
          0,
        );
        setTotalContribs(total);
      } catch {
        setDays([]);
      } finally {
        setLoading(false);
      }
    }

    fetchContribs();
  }, []);

  return (
    <BentoCard delay={0.06} style={{ gridColumn: "span 5" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 18,
        }}
      >
        {/* ADDED MISSING <a TAG BELOW */}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: "var(--t1)",
            textDecoration: "none",
            transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {GITHUB_USERNAME}
        </a>
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

      {loading ? (
        <div
          style={{
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: 60,
              background: "var(--dot-0)",
              borderRadius: 6,
              animation: "pulse-dot 1.5s ease-in-out infinite",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(26, 1fr)",
            gap: 3,
            marginBottom: 10,
          }}
        >
          {days.map((day, i) => (
            <div
              key={i}
              title={`${day.date}: ${day.count} contributions`}
              style={{
                aspectRatio: "1",
                borderRadius: 2,
                background: dotColors[day.level] ?? dotColors[0],
                transition: "background 0.55s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          ))}
        </div>
      )}

      <p
        style={{
          fontSize: 11,
          color: "var(--t4)",
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {totalContribs !== null
          ? `${totalContribs.toLocaleString()} contributions this year`
          : "contributions this year"}
      </p>
    </BentoCard>
  );
}
