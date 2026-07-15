import { Navbar } from "./components/navigation/Navbar";
import { About } from "./components/sections/About/About";
import { Contact } from "./components/sections/Contact/Contact";
import { Experience } from "./components/sections/Experience/Experience";
import { Footer } from "./components/sections/Footer/Footer";
import { Hero } from "./components/sections/Hero/Hero";
import { SystemsSection } from "./components/sections/Systems/SystemsSection";
import { Skills } from "./components/sections/Skills/Skills";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SystemsSection />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}