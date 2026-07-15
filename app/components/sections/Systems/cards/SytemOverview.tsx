import { System } from "@/app/config/systems";

interface SystemOverviewProps {
  system: System;
}

export function SystemOverview({ system }: SystemOverviewProps) {
  return (
    <div className="space-y-6">
      {/* Category */}

      <p
        className="
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-brand-primary
        "
      >
        {system.category}
      </p>

      {/* Name */}

      <h3 className="text-4xl font-bold tracking-tight">{system.name}</h3>

      {/* Overview */}

      <p
        className="
          max-w-2xl
          leading-8
          text-text-secondary
        "
      >
        {system.overview}
      </p>

      {/* Problem */}

      <div className="space-y-2">
        <h4 className="font-semibold">Problem</h4>

        <p className="leading-7 text-text-secondary">{system.problem}</p>
      </div>

      {/* Solution */}

      <div className="space-y-2">
        <h4 className="font-semibold">Solution</h4>

        <p className="leading-7 text-text-secondary">{system.solution}</p>
      </div>
    </div>
  );
}
