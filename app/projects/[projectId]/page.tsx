import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/app/components/ui/Container";
import { Footer } from "@/app/components/sections/Footer/Footer";
import { Navbar } from "@/app/components/navigation/Navbar";
import { NitPickArchitectureExplorer } from "@/app/components/sections/Projects/NitPickArchitectureExplorer";
import { caseStudies } from "@/app/config/caseStudies";
import { systems } from "@/app/config/systems";

interface ProjectPageProps {
  params: Promise<{ projectId: string }>;
}

function getProject(projectId: string) {
  return systems.find((system) => system.id === projectId);
}

export function generateStaticParams() {
  return systems.map((project) => ({ projectId: project.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = await params;
  const project = getProject(projectId);

  if (!project) return { title: "Project not found" };

  return {
    title: project.name,
    description: project.overview,
    alternates: { canonical: `/projects/${project.id}` },
    openGraph: {
      title: `${project.name} case study`,
      description: project.overview,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const project = getProject(projectId);
  const caseStudy = caseStudies[projectId];

  if (!project || !caseStudy) notFound();

  const source = project.github ?? project.gitlab;

  return (
    <main className="min-h-screen">
      <Navbar />
      <Container>
        <div className="pb-20 pt-10 sm:pb-28 sm:pt-14">
          <Link
            href="/projects"
            className="mb-9 inline-flex items-center gap-2 text-sm text-text-secondary transition hover:text-brand-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>

          <header className="mb-10 max-w-4xl sm:mb-14">
            <p className="os-pill">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" aria-hidden="true" />
              {project.category}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.055em] text-balance text-text-primary sm:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-pretty text-text-secondary sm:text-lg sm:leading-8">
              {project.overview}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {source && (
                <a
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border-default bg-surface-primary/70 px-4 py-2.5 text-sm font-medium text-text-primary transition hover:border-brand-primary/40 hover:bg-surface-secondary"
                >
                  <BookOpen className="h-4 w-4" /> Source code <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-soft"
                >
                  Live project <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </header>

          <section aria-label={`${project.name} preview`} className="os-panel overflow-hidden rounded-[1.75rem]">
            <div className="os-window-bar">
              <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
              <span>preview / {project.id}</span>
              <span className="ml-auto text-brand-soft">project snapshot</span>
            </div>
            <div className="relative aspect-[16/8.5] max-h-[680px] min-h-[260px] bg-bg-secondary">
              <Image
                src={project.image}
                alt={`${project.name} interface preview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
            </div>
          </section>

          <section aria-labelledby="project-context" className="mt-16 sm:mt-20">
            <div className="mb-7 max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">Context & approach</p>
              <h2 id="project-context" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-4xl">
                The problem, then the system.
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="os-panel rounded-[1.5rem] p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Challenge</p>
                <p className="mt-4 text-base leading-7 text-text-secondary">{project.problem}</p>
              </article>
              <article className="os-panel rounded-[1.5rem] p-6 sm:p-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">Approach</p>
                <p className="mt-4 text-base leading-7 text-text-secondary">{project.solution}</p>
              </article>
            </div>
          </section>

          <section aria-labelledby="project-architecture" className="mt-16 sm:mt-20">
            <div className="mb-7 max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">System map</p>
              <h2 id="project-architecture" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-4xl">
                How the pieces connect.
              </h2>
              <p className="mt-4 text-base leading-7 text-text-secondary">{caseStudy.architectureIntro}</p>
            </div>

            {project.id === "nitpick" ? (
              <NitPickArchitectureExplorer />
            ) : (
              <div className="os-panel rounded-[1.6rem] p-5 sm:p-7">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {project.architecture.map((layer, index) => (
                    <div key={layer} className="flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-primary/55 p-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-brand-primary/20 bg-brand-primary/[0.07] font-mono text-[10px] text-brand-soft">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-text-primary">{layer}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          <section aria-labelledby="project-notes" className="mt-16 sm:mt-20">
            <div className="mb-7 max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">Engineering notes</p>
              <h2 id="project-notes" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-text-primary sm:text-4xl">
                Decisions that shape the experience.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {caseStudy.notes.map((note, index) => (
                <article key={note.title} className="os-panel os-panel-interactive rounded-[1.4rem] p-5 sm:p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-brand-primary">Note {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight text-text-primary">{note.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">{note.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="project-stack" className="mt-16 border-t border-border-subtle pt-8 sm:mt-20">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary">Built with</p>
                <h2 id="project-stack" className="mt-2 text-xl font-semibold text-text-primary">Technology stack</h2>
              </div>
              <ul className="flex max-w-3xl flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology} className="rounded-full border border-border-default bg-surface-primary/70 px-3 py-1.5 font-mono text-xs text-text-secondary">
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
