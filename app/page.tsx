import { About } from "./components/sections/About/About";
import { Hero } from "./components/sections/Hero/Hero";
import { ProjectsSection } from "./components/sections/Projects/ProjectsSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <About />
    </main>
  );
}