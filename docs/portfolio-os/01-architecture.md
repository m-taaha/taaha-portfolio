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

- (Leave this empty for now. We'll fill it together as you learn.)