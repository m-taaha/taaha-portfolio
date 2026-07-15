import { systems } from "@/app/config/systems";

import { SystemCard } from "./cards/SystemCard";

export function SystemsGrid() {
  return (
    <div className="space-y-12">
      {systems.map((system) => (
        <SystemCard key={system.id} system={system} />
      ))}
    </div>
  );
}
