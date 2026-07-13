import { projects } from "@/app/config/projects";
import { ProjectCard } from "./cards/ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="space-y-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
