# Sprint 1 — Architecture

## Goal

Understand how the Next.js App Router project is structured before building UI.

---

## Key Learnings

### app/

Responsible for routing and rendering pages.

### layout.tsx

Provides the common layout shared across every page.

### page.tsx

Represents a route.

Example:

- app/page.tsx → /
- app/journey/page.tsx → /journey

### components/

Reusable UI and portfolio sections.

### config/

Application configuration.

### lib/

Utility/helper functions.

### hooks/

Custom React hooks.

### styles/

Global styling and design tokens.

### types/

Shared TypeScript types.

---

## Rule

Build the system first.

Pages consume components.

Components consume design tokens.

---

## Questions I still have

## Architecture Discoveries

### Discovery 1

Initially, I wanted to put everything inside `siteConfig`.

After discussing responsibilities, I realized that website configuration and personal information are different domains.

Future configuration may be separated into:

- site.ts
- person.ts
- navigation.ts
- theme.ts
- metadata.ts
- socials.ts

Key lesson:

Group data by responsibility, not by convenience.