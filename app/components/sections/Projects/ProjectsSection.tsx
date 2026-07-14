import { ProjectsGrid } from "./ProjectsGrid";
import { SectionHeading } from "../../ui/SecionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      <SectionHeading
        eyebrow="Featured Work"
        title="Projects I've Built"
        description="A selection of products I've designed and developed, focusing on scalable architecture, AI integration, and delightful user experiences.
"
      />

      <div className="mt-20">
        <ProjectsGrid />
      </div>
    </section>
  );
}
