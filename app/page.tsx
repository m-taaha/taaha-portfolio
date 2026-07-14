import { About } from "./components/sections/About/About";
import { Experience } from "./components/sections/Experience/Experience";
import { Hero } from "./components/sections/Hero/Hero";
import { ProjectsSection } from "./components/sections/Projects/ProjectsSection";
import { Skills } from "./components/sections/Skills/Skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <About />
      <Experience />
      <Skills />
    </main>
  );
}