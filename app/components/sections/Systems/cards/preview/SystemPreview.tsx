import { System } from "@/app/config/systems";

import { BrowserFrame } from "./BrowserFrame";
import { SystemBlueprint } from "./SystemBluePrint";





interface Props {
  system: System;
}

export function SystemPreview({ system }: Props) {
  return (
    <div
      className="
         relative
        min-h-[700px]
        overflow-hidden
        bg-gradient-to-br
        from-surface-secondary
        to-[#171717]
      "
    >
      <BrowserFrame image={system.image} title={system.name} />

      <SystemBlueprint architecture={system.architecture} />
    </div>
  );
}