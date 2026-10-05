"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

import { systems } from "@/app/config/systems";

const projectCategories: Record<string, readonly string[]> = {
  nitpick: ["AI", "Full Stack"],
  kidsportal: ["Full Stack", "Frontend"],
  portfolio: ["Frontend"],
};

const filters = ["All", "Frontend", "Full Stack", "AI"] as const;

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");
  const projects = useMemo(
    () => systems.filter((project) =>
      activeFilter === "All" || projectCategories[project.id]?.includes(activeFilter),
    ),
    [activeFilter],
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
        {filters.map((filter) => {
          const selected = filter === activeFilter;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${selected ? "border-brand-primary/60 bg-brand-primary/10 text-brand-primary" : "border-border-default text-text-secondary hover:border-brand-primary/40 hover:text-text-primary"}`}
            >
              {filter}
            </button>
          );
        })}
        <p className="ml-auto self-center text-sm text-text-muted" aria-live="polite">
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const categories = projectCategories[project.id] ?? [];
          const repo = project.github ?? project.gitlab;
          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="os-panel os-panel-interactive group overflow-hidden rounded-[1.75rem]"
            >
              <div className="os-window-bar">
                <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
                <span>project / {project.id}</span>
                <span className="ml-auto text-text-muted">preview</span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border-subtle bg-bg-secondary">
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/65 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category} className="rounded-full border border-brand-primary/20 bg-brand-primary/[0.06] px-2.5 py-1 text-[11px] font-medium text-brand-primary">
                      {category}
                    </span>
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-text-muted">{project.category}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-text-primary">{project.name}</h2>
                <p className="mt-3 min-h-[5.5rem] text-sm leading-6 text-text-secondary">{project.overview}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li key={technology} className="rounded-md bg-bg-elevated px-2 py-1 font-mono text-[11px] text-text-secondary">{technology}</li>
                  ))}
                  {project.technologies.length > 4 && (
                    <li className="rounded-md bg-bg-elevated px-2 py-1 font-mono text-[11px] text-text-muted">+{project.technologies.length - 4}</li>
                  )}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border-subtle pt-5">
                  <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-3 py-2 text-sm font-semibold text-brand-foreground transition hover:-translate-y-0.5 hover:bg-brand-soft">
                    Case study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  {repo && (
                    <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border-default px-3 py-2 text-sm text-text-secondary transition hover:border-brand-primary/40 hover:text-text-primary">
                      <Code2 className="h-4 w-4" /> Source
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border-default px-3 py-2 text-sm font-medium text-text-secondary transition hover:border-brand-primary/40 hover:text-text-primary">
                      Live preview <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
