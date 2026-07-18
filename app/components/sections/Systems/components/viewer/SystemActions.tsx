import { System } from "@/app/config/systems";

import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { SiGitlab } from "react-icons/si";
import { SystemLink } from "../../cards/SystemLink.tsx";




interface SystemActionsProps {
  system: System;
}

export function SystemActions({ system }: SystemActionsProps) {
  return (
    <div className="flex items-center justify-between pt-2">
      <div className="flex gap-3">
        <SystemLink href={system.github} icon={<FiGithub />}>
          GitHub
        </SystemLink>

        <SystemLink href={system.gitlab} icon={<SiGitlab />}>
          GitLab
        </SystemLink>

        <SystemLink href={system.live} icon={<FiExternalLink />}>
          Live
        </SystemLink>
      </div>

      <button
        className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-brand-primary
          transition-transform
          group-hover:translate-x-1
        "
      >
        View System
        <FiArrowRight />
      </button>
    </div>
  );
}
