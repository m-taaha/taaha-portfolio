import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { HeroCard } from "@/components/cards/HeroCard";
import { GitHubCard } from "@/components/cards/GitHubCard";
import { AboutCard } from "@/components/cards/AboutCard";
import { SkillsCard } from "@/components/cards/SkillsCard";
import { GoalCard } from "@/components/cards/GoalCard";
import { OpenSourceCard } from "@/components/cards/OpenSourceCard";
import { ProjectsCard } from "@/components/cards/ProjectsCard";
import { CtaCard } from "@/components/cards/CtaCard";
import { LinksCard } from "@/components/cards/LinksCard";
import { LocationCard } from "@/components/cards/LocationCard";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 16,
        background: "var(--bg)",
        transition: "background 0.55s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {/* topbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingBottom: 4,
          }}
        >
          <ThemeToggle />
        </div>

        {/* bento grid */}
        <div className="bento-grid">
          <HeroCard />
          <GitHubCard />
          <AboutCard />
          <SkillsCard />
          <GoalCard />
          <OpenSourceCard />
          <ProjectsCard />
          <CtaCard />
          <LinksCard />
          <LocationCard />
        </div>
      </div>
    </main>
  );
}
