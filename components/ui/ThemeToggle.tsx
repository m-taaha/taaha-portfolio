"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: 30,
        padding: "6px 14px",
        cursor: "pointer",
        transition:
          "background 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.55s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {/* track */}
      <div
        style={{
          width: 34,
          height: 18,
          background: "var(--border-h)",
          borderRadius: 20,
          position: "relative",
          flexShrink: 0,
          transition: "background 0.4s ease",
        }}
      >
        {/* thumb */}
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "var(--t2)",
            position: "absolute",
            top: 3,
            left: 3,
            transform: isLight ? "translateX(16px)" : "translateX(0)",
            transition:
              "transform 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s",
          }}
        />
      </div>

      {/* label */}
      <span
        style={{
          fontSize: 11,
          color: "var(--t3)",
          fontWeight: 400,
          userSelect: "none",
          fontFamily: "'Inter', sans-serif",
          transition: "color 0.55s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {isLight ? "Light" : "Dark"}
      </span>
    </button>
  );
}
