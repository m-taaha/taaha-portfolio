"use client";

import { useState, useRef, useEffect } from "react";

// Each line in the terminal has a type and text
type Line = {
  type: "input" | "output" | "success" | "error";
  text: string;
};

// What each command returns
const commands: Record<string, Line[]> = {
  help: [
    { type: "output", text: "Available commands:" },
    { type: "success", text: "  about      — who I am" },
    { type: "success", text: "  projects   — what I built" },
    { type: "success", text: "  stack      — tech I use" },
    { type: "success", text: "  contact    — how to reach me" },
    { type: "success", text: "  clear      — reset terminal" },
  ],
  about: [
    { type: "output", text: "Mohammad Taaha Ashraf" },
    { type: "output", text: "Full-Stack Engineer — 3rd year CS" },
    { type: "output", text: "Building real-time distributed systems." },
    { type: "output", text: "MERN · FastAPI · C++ · WebSockets" },
  ],
  projects: [
    { type: "success", text: "01 — vidCall      (WebRTC + Socket.io)" },
    { type: "success", text: "02 — Satori Hub   (FastAPI + pgvector)" },
    { type: "success", text: "03 — exac.draw    (Canvas + CRDT)" },
    { type: "output", text: "Scroll down to see full details ↓" },
  ],
  stack: [
    { type: "output", text: "Languages:      C++, TypeScript, Python" },
    { type: "output", text: "Frameworks:     Next.js, FastAPI, Express" },
    { type: "output", text: "Infra:          PostgreSQL, Redis, Docker" },
    { type: "output", text: "Tools:          Turborepo, Git, Vercel" },
  ],
  contact: [
    { type: "output", text: "Email:    taaha@email.com" },
    { type: "success", text: "GitHub:   github.com/taaha" },
    { type: "success", text: "LinkedIn: linkedin.com/in/taaha" },
  ],
};

// Starting lines shown before user types anything
const initialLines: Line[] = [
  { type: "success", text: "Welcome to taaha.dev v1.0.0" },
  { type: "output", text: "Type 'help' to see available commands." },
];

export default function CLI() {
  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom every time lines change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    // Only run when Enter is pressed
    if (e.key !== "Enter") return;
    // Ignore empty input
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();

    // Add what the user typed as an input line
    const inputLine: Line = { type: "input", text: cmd };

    if (cmd === "clear") {
      // clear resets everything back to initial
      setLines(initialLines);
      setInput("");
      return;
    }

    // Look up the command — if not found, show error
    const response = commands[cmd] ?? [
      { type: "error", text: `command not found: ${cmd}` },
      { type: "output", text: "Type 'help' to see available commands." },
    ];

    // Add input line + response lines + blank gap
    setLines((prev) => [
      ...prev,
      inputLine,
      ...response,
      { type: "output", text: "" }, // empty line gap
    ]);

    setInput("");
  }

  return (
    <div
      className="rounded-xl border border-border-subtle bg-bg-surface font-mono overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      {/* ── Title bar ── */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-elevated">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        <span className="text-[10px] text-text-muted ml-2">
          taaha@portfolio ~ bash
        </span>
      </div>

      {/* ── Output area ── */}
      <div className="p-5 h-[280px] flex flex-col overflow-y-auto">
        {/* Render every line */}
        <div className="flex-1 flex flex-col gap-0.5">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`text-[12px] leading-relaxed ${
                line.type === "input"
                  ? 'text-accent before:content-["❯_"]'
                  : line.type === "success"
                    ? "text-green"
                    : line.type === "error"
                      ? "text-red-400"
                      : "text-text-secondary"
              }`}
            >
              {line.text}
            </p>
          ))}
          {/* This div is what we scroll to */}
          <div ref={bottomRef} />
        </div>

        {/* ── Input row ── */}
        <div className="flex items-center gap-2 pt-3 border-t border-border-subtle mt-3">
          <span className="text-[12px] text-accent">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
            className="flex-1 bg-transparent border-none outline-none text-[12px] text-text-primary caret-accent font-mono placeholder:text-text-muted"
            placeholder="enter command..."
          />
        </div>
      </div>
    </div>
  );
}
