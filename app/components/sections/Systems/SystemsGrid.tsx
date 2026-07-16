"use client";

import { useState } from "react";

import { systems } from "@/app/config/systems";

import { SystemSelector } from "./components/selector/SystemSelector";
import { SystemViewer } from "./components/viewer/SystemViewer";

export function SystemsGrid() {
  const [activeSystemId, setActiveSystemId] = useState(systems[0].id);

  const activeSystem =
    systems.find((system) => system.id === activeSystemId) ?? systems[0];

  return (
    <div className="space-y-10">
      <SystemSelector activeId={activeSystemId} onSelect={setActiveSystemId} />

      <SystemViewer system={activeSystem} />
    </div>
  );
}
