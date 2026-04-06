export default function CLI() {
  return (
    <div className="rounded-xl border border-border-subtle bg-bg-surface font-mono overflow-hidden">
      {/* ── Title bar — the three dots ── */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-elevated">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
        <span className="font-mono text-[10px] text-text-muted ml-2">
          taaha@portfolio ~ bash
        </span>
      </div>

      {/* ── Output area ── */}
      <div className="p-5 min-h-[260px] flex flex-col">
        {/* Welcome lines */}
        <p className="text-[12px] text-green mb-1">
          Welcome to taaha.dev v1.0.0
        </p>
        <p className="text-[12px] text-text-secondary mb-4">
          Type <span className="text-accent">help</span> to see available
          commands.
        </p>

        {/* This div will hold output lines — empty for now */}
        <div className="flex-1" />

        {/* ── Input row at the bottom ── */}
        <div className="flex items-center gap-2 pt-3 border-t border-border-subtle mt-3">
          <span className="text-[12px] text-accent">❯</span>
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-[12px] text-text-primary caret-accent font-mono placeholder:text-text-muted"
            placeholder="enter command..."
          />
        </div>
      </div>
    </div>
  );
}
