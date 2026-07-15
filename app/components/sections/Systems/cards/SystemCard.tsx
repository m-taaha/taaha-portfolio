import { System } from "@/app/config/systems";

import { SystemImage } from "./SystemImage";
import { SystemTechStack } from "./SystemTechStack";
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
        rounded-3xl
        border
        border-border-subtle
        bg-surface-primary
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-brand-primary/30
      "
    >
      <SystemImage image={system.image} title={system.title} />

      <div className="space-y-6 p-8">
        <div>
          <p className="text-sm text-brand-primary">{system.tagline}</p>

          <h3 className="mt-2 text-3xl font-semibold">{system.title}</h3>
        </div>

        <p className="leading-7 text-text-secondary">{system.description}</p>

        <SystemTechStack technologies={system.technologies} />

        <SystemActions system={system} />
      </div>
    </article>
  );
}
