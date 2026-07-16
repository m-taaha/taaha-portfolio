import { System } from "@/app/config/systems";

import { SystemOverview } from "./SytemOverview";
import { SystemArchitecture } from "../components/viewer/SystemArchitechture";
import { SystemHighlights } from "../components/viewer/SystemHighlights";
import { SystemTechStack } from "./SystemTechStack";
import { SystemActions } from "./SystemActions";


interface SystemContentProps {
  system: System;
}

export function SystemContent({ system }: SystemContentProps) {
  return (
    <div className="flex h-full flex-col justify-between space-y-10">
      <div className="space-y-10">
        <SystemOverview system={system} />

        <SystemArchitecture architecture={system.architecture} />

        <SystemHighlights highlights={system.highlights} />

        <SystemTechStack technologies={system.technologies} />
      </div>

      <SystemActions system={system} />
    </div>
  );
}
