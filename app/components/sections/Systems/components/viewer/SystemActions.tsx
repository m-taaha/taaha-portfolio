"use client"
import Link from "next/link";
import { System } from "@/app/config/systems";

import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { SiGitlab } from "react-icons/si";
import { SystemLink } from "../../cards/SystemLink";





interface SystemActionsProps {
  system: System;
}

export function SystemActions({ system }: SystemActionsProps) {
  return (
    <div
      className="flex
flex-col
gap-6
sm:flex-row
sm:items-center
sm:justify-between"
    >
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

      <Link
        href={`/projects/${system.id}`}
        className="
          group
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-brand-primary
          transition-colors
          hover:text-brand-soft
        "
      >
        Read case study
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
