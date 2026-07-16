import { System } from "@/app/config/systems";

import { SystemHeader } from "../components/viewer/SystemHeader";
import { SystemChallenge } from "../components/viewer/SystemChallenge";
import { SystemArchitecture } from "../components/viewer/SystemArchitechture";
import { SystemHighlights } from "../components/viewer/SystemHighlights";
import { SystemPreview } from "../components/preview/InteractivePreview";
import { SystemActions } from "../components/viewer/SystemActions";



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
