import { Project } from "@/app/config/projects";
import { ProjectImage } from "./ProjectImage";
import { ProjectTechStack } from "./ ProjectTechStack";
import { ProjectActions } from "./ProjectActions";





interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
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
      {/* Image */}
      <ProjectImage image={project.image} title={project.title} />

      {/* Content */}

      <div className="space-y-6 p-8">
        <div>
          <p className="text-sm text-brand-primary">{project.tagline}</p>

          <h3 className="mt-2 text-3xl font-semibold">{project.title}</h3>
        </div>

        <p className="leading-7 text-text-secondary">{project.description}</p>

        <ProjectTechStack technologies={project.technologies} />

        <ProjectActions project={project} />
      </div>
    </article>
  );
}
