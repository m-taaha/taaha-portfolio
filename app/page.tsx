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
        {/* top bar */}
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 8,
          }}
        >
          {/* row 1 — hero + github */}
          <HeroCard />
          <GitHubCard />

          {/* row 2 — about + skills + goal */}
          <AboutCard />
          <SkillsCard />
          <GoalCard />

          {/* row 3 — open source + (skills overflow) */}
          <OpenSourceCard />

          {/* row 4 — projects */}
          <ProjectsCard />

          {/* row 5 — cta + links + location */}
          <CtaCard />
          <LinksCard />
          <LocationCard />
        </div>
      </div>
    </main>
  );
}
