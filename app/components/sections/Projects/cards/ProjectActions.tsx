import { Project } from "@/app/config/projects";

import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";

import { SiGitlab } from "react-icons/si";

import { ProjectLink } from "./ProjectLink";

interface ProjectActionsProps {
  project: Project;
}

export function ProjectActions({ project }: ProjectActionsProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        pt-2
      "
    >
      <div className="flex gap-3">
        <ProjectLink href={project.github} icon={<FiGithub />}>
          GitHub
        </ProjectLink>

        <ProjectLink href={project.gitlab} icon={<SiGitlab />}>
          GitLab
        </ProjectLink>

        <ProjectLink href={project.live} icon={<FiExternalLink />}>
          Live
        </ProjectLink>
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
        View Project
        <FiArrowRight />
      </button>
    </div>
  );
}
