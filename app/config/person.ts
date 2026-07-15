export type Title = "Software Engineer";

export interface Person {
  readonly name: string;

  readonly title: Title;

  readonly heroHeadline: string;

  readonly email: string;

  readonly github: string;

  readonly status: string;

  readonly skills: readonly string[];

  readonly avatar: string;

  linkedin?: string;
  twitter?: string;
  location?: string;
  shortBio?: string;
  resumeUrl?: string;
}

export const person: Person = {
  name: "Mohammad Taaha Ashraf",

  title: "Software Engineer",

  heroHeadline: `Building software
that solves
real problems.`,

  email: "mtaahaashraf@gmail.com",

  github: "https://github.com/m-taaha",

  shortBio:
    "I enjoy turning ideas into reliable software—from full-stack applications to AI-powered developer tools—with a strong focus on clean architecture, performance, and maintainability.",

  avatar: "/images/profile-v2.png",

  status: "Available for Software Engineering Internships",

  skills: ["Next.js", "TypeScript", "Node.js", "Python", "C++", "AI"] as const,

  linkedin: "https://linkedin.com/in/mohammad-taaha-ashraf",

  resumeUrl: "/resume.pdf",

  location: "New Delhi, India",
};
