import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsGrid } from "./ProjectsGrid";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      <ProjectsHeader />

      <ProjectsGrid />
    </section>
  );
}
