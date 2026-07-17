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
    "Building an AI-powered code review platform that helps engineering teams review pull requests faster through intelligent automation.",

  stage: "Building MVP",

  focus: "Developer Tools",

  technologies: ["Next.js", "Gemini", "Redis"],
} as const;