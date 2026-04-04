import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-[60px] border-b border-border-subtle flex items-center justify-between px-7">

      {/* 1. logo + name */}
      <div className="flex items-center gap-2.5 flex-1">
        <div className="w-8 h-8 border-[1.5px] border-accent rounded-lg flex items-center justify-center font-mono text-[11px] font-bold text-accent">
          MTA
        </div>

        <span className="font-mono text-[13px] font-bold text-text-primary whitespace-nowrap">
          MohammadTaahaAshraf.dev
        </span>
      </div>

      {/* 2. Center Section (Status) -*/}
      <div className="flex items-center gap-1.5 font-mono text-[10px] text-text-muted">
        {/* Changed 1.75 to 2 for standard Tailwind sizing */}
        <div className="w-2 h-2 rounded-full bg-green animate-[status-pulse_2s_ease-in-out_infinite]" />
        <span className="whitespace-nowrap">
          Status: Latency 24ms // All Systems Operational
        </span>
      </div>

      {/* 3. (Links)  */}
      <div className="flex items-center gap-1 flex-1 justify-end">
        <Link
          href="#projects"
          className="font-mono text-[11px] text-text-secondary px-3.5 py-1.5 rounded-lg hover:text-text-primary hover:bg-bg-elevated transition-colors duration-100"
        >
          Projects
        </Link>

        <Link
          href="#stack"
          className="font-mono text-[11px] text-text-secondary px-3.5 py-1.5 rounded-lg hover:text-text-primary hover:bg-bg-elevated transition-colors duration-100"
        >
          Stack
        </Link>

        <Link
          href="#experience"
          className="font-mono text-[11px] text-text-secondary px-3.5 py-1.5 rounded-lg hover:text-text-primary hover:bg-bg-elevated transition-colors duration-100"
        >
          Experience
        </Link>

        <button
          className="
            ml-2
            font-mono text-[11px]
            px-4 py-1.5
            rounded-lg
            border border-accent text-accent
            hover:bg-accent hover:text-white
            transition-colors duration-100
            cursor-pointer
          "
        >
          Resume
        </button>
      </div>
    </nav>
  );
}
