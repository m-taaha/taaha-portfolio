export interface CaseStudyNote {
  readonly title: string;
  readonly description: string;
}

export interface CaseStudyContent {
  readonly architectureIntro: string;
  readonly notes: readonly CaseStudyNote[];
}

export const caseStudies: Readonly<Record<string, CaseStudyContent>> = {
  nitpick: {
    architectureIntro:
      "Explore the review pipeline. Select a service to inspect its responsibility, or replay a representative request path through the asynchronous AI workflow.",
    notes: [
      {
        title: "Keep review work asynchronous",
        description:
          "Celery and Redis separate code analysis from the incoming request path, with a Python worker handling queued review work.",
      },
      {
        title: "Treat model output as an integration contract",
        description:
          "Structured findings are validated with Pydantic before the review result is stored and returned to developers.",
      },
      {
        title: "Persist the review result",
        description:
          "PostgreSQL provides a durable place for review records after the analysis pipeline completes.",
      },
    ],
  },
  kidsportal: {
    architectureIntro:
      "The platform connects a React learning experience to a FastAPI backend, a branching story engine, educator-managed content, and PostgreSQL.",
    notes: [
      {
        title: "Make stories interactive",
        description:
          "A branching story engine lets learning content respond to the learner’s choices instead of presenting every story as a static page.",
      },
      {
        title: "Support educator workflows",
        description:
          "A custom CMS gives educators a way to manage learning content, while XML imports support existing story material.",
      },
      {
        title: "Keep the learning platform connected",
        description:
          "The React client, FastAPI backend, and PostgreSQL database form the core application architecture.",
      },
    ],
  },
  portfolio: {
    architectureIntro:
      "This portfolio is organized as a small product system: route-level pages, reusable section components, shared motion patterns, and centralized content and design tokens.",
    notes: [
      {
        title: "Keep page sections composable",
        description:
          "The App Router page assembles focused components for navigation, the hero, systems, experience, capabilities, contact, and footer.",
      },
      {
        title: "Keep presentation tokens consistent",
        description:
          "Theme variables and reusable UI primitives give the interface a shared visual language across sections and routes.",
      },
      {
        title: "Treat motion as part of the interface",
        description:
          "Reusable reveal, scale, and stagger patterns provide consistent transitions, with reduced-motion preferences respected globally.",
      },
    ],
  },
};
