import { System } from "@/app/config/systems";

import { SystemHeader } from "./SystemHeader";
import { SystemChallenge } from "./SystemChallenge";
import { SystemArchitecture } from "./SystemArchitechture";
import { SystemHighlights } from "./SystemHighlights";
import { SystemPreview } from "./preview/SystemPreview";
import { SystemActions } from "./SystemActions";

interface SystemCardProps {
  system: System;
}

export function SystemCard({ system }: SystemCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-border-subtle
        bg-surface-primary
      "
    >
      <div className="grid lg:grid-cols-[500px_1fr]">
        {/* Left Content */}

        <div className="space-y-10 p-12">
          <SystemHeader
            category={system.category}
            name={system.name}
            overview={system.overview}
          />

          <SystemChallenge
            problem={system.problem}
            solution={system.solution}
          />

          <SystemArchitecture architecture={system.architecture} />

          <SystemHighlights highlights={system.highlights} />

          <SystemActions system={system} />
        </div>

        {/* Right Preview */}

        <SystemPreview system={system} />
      </div>
    </article>
  );
}
