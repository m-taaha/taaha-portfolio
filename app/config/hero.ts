export interface CurrentFocus {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;

  readonly stage: string;

  readonly focus: string;

  readonly technologies: readonly string[];
}

export const currentFocus: CurrentFocus = {
  title: "Current Focus",
  subtitle: "NitPick",
  description:
    "Building an AI-powered code review platform that analyzes code and GitHub pull requests through an asynchronous review pipeline powered by FastAPI, Celery, Redis, and Gemini.",
  stage: "Building MVP",
  focus: "AI Developer Tools",
  technologies: ["FastAPI", "Celery", "Redis", "Gemini", "PostgreSQL"],
} as const;