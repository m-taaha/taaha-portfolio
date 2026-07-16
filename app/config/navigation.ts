export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export const navigation: readonly NavigationItem[] = [
  {
    label: "Systems",
    href: "#systems",
  },
  {
    label: "Journey",
    href: "#journey",
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
