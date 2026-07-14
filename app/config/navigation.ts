export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export const navigation: readonly NavigationItem[] = [
  {
    label: "Systems",
    href: "#projects",
  },
  {
    label: "Journey",
    href: "#about",
  },
  {
    label: "Capabilities",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;
