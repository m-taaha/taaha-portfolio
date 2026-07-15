export interface CurrentFocus {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export const currentFocus: CurrentFocus = {
  title: "Currently Building",

  subtitle: "NitPick",

  description:
    "An AI-powered code review platform that automates pull request analysis using intelligent workflows.",

  technologies: ["Next.js", "BullMQ", "Redis", "OpenAI"],
} as const;
