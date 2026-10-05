"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  FileText,
  FolderKanban,
  Layers3,
  Search,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const commands = [
  {
    label: "Open Projects",
    detail: "Browse frontend, full stack, and AI work",
    href: "/projects",
    icon: FolderKanban,
    group: "Workspace",
    external: false,
  },
  {
    label: "Explore Systems",
    detail: "Read architecture and engineering decisions",
    href: "/#systems",
    icon: Layers3,
    group: "Navigate",
    external: false,
  },
  {
    label: "View Experience",
    detail: "Open the engineering journey timeline",
    href: "/#journey",
    icon: BriefcaseBusiness,
    group: "Navigate",
    external: false,
  },
  {
    label: "Browse Capabilities",
    detail: "Explore tools and technical domains",
    href: "/#skills",
    icon: Code2,
    group: "Navigate",
    external: false,
  },
  {
    label: "Get in Touch",
    detail: "Contact and collaboration details",
    href: "/#contact",
    icon: Sparkles,
    group: "Navigate",
    external: false,
  },
  {
    label: "Open Resume",
    detail: "View the resume in a new tab",
    href: "/resume.pdf",
    icon: FileText,
    group: "Workspace",
    external: true,
  },
] as const;

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const closePalette = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return commands;
    return commands.filter((command) =>
      `${command.label} ${command.detail} ${command.group}`
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        closePalette();
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) closePalette();
        else setOpen(true);
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, [closePalette, open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  function runCommand(command: (typeof commands)[number]) {
    closePalette();

    if (command.external) {
      window.open(command.href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(command.href);
  }

  function trapDialogFocus(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab") return;

    const dialog = event.currentTarget;
    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % Math.max(filteredCommands.length, 1));
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) =>
        (index - 1 + Math.max(filteredCommands.length, 1)) % Math.max(filteredCommands.length, 1),
      );
    }

    if (event.key === "Enter" && filteredCommands[activeIndex]) {
      event.preventDefault();
      runCommand(filteredCommands[activeIndex]);
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="inline-flex h-11 items-center gap-2 rounded-xl border border-border-default bg-surface-primary/80 px-3 text-sm text-text-secondary transition hover:border-brand-primary/40 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="rounded-md border border-border-subtle bg-bg-primary/70 px-1.5 py-0.5 font-mono text-[10px] text-text-muted">
          ⌘K
        </kbd>
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[1200] flex items-start justify-center bg-black/65 px-4 pt-[12vh] backdrop-blur-md sm:pt-[16vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) closePalette();
              }}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-label="Command palette"
                onKeyDown={trapDialogFocus}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.99 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="os-panel w-full max-w-xl overflow-hidden rounded-[1.6rem] shadow-[0_32px_100px_rgba(0,0,0,.6)]"
              >
                <div className="os-window-bar">
                  <span className="os-window-dots" aria-hidden="true"><span /><span /><span /></span>
                  <span>taaha.dev / command center</span>
                  <button
                    type="button"
                    onClick={closePalette}
                    className="ml-auto rounded-md border border-border-default px-2 py-1 font-sans text-[10px] tracking-normal text-text-secondary transition hover:border-brand-primary/40 hover:text-text-primary"
                  >
                    ESC
                  </button>
                </div>

                <div className="flex items-center gap-3 border-b border-border-subtle px-5 py-4 sm:px-6">
                  <Search className="h-5 w-5 shrink-0 text-brand-primary" />
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setActiveIndex(0);
                    }}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Search pages and actions..."
                    aria-label="Search commands"
                    role="combobox"
                    aria-expanded={open}
                    aria-autocomplete="list"
                    aria-controls="command-results"
                    aria-activedescendant={
                      filteredCommands[activeIndex]
                        ? `command-result-${activeIndex}`
                        : undefined
                    }
                    className="min-w-0 flex-1 bg-transparent text-base text-text-primary outline-none placeholder:text-text-muted sm:text-lg"
                  />
                  <kbd className="hidden rounded-md border border-border-default px-2 py-1 font-mono text-[10px] text-text-muted sm:inline">
                    ENTER
                  </kbd>
                </div>

                <div id="command-results" role="listbox" aria-label="Available commands" className="max-h-[min(52vh,420px)] overflow-y-auto p-2.5">
                  {filteredCommands.length ? filteredCommands.map((command, index) => {
                    const Icon = command.icon;
                    const active = index === activeIndex;

                    return (
                      <button
                        key={command.href}
                        type="button"
                        role="option"
                        aria-selected={active}
                        id={`command-result-${index}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => runCommand(command)}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${active ? "bg-brand-primary/10 text-text-primary" : "text-text-secondary hover:bg-white/[0.035] hover:text-text-primary"}`}
                      >
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${active ? "border-brand-primary/25 bg-brand-primary/10 text-brand-primary" : "border-border-subtle bg-bg-primary/60 text-text-muted"}`}>
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2 text-sm font-medium">
                            {command.label}
                            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">{command.group}</span>
                          </span>
                          <span className="mt-1 block truncate text-xs text-text-muted">{command.detail}</span>
                        </span>
                        <ArrowRight className={`h-4 w-4 transition ${active ? "translate-x-0 opacity-100 text-brand-primary" : "-translate-x-1 opacity-0"}`} />
                      </button>
                    );
                  }) : (
                    <p className="px-4 py-8 text-center text-sm text-text-muted">No matching commands. Try “projects” or “contact”.</p>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-border-subtle px-5 py-3 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted sm:px-6">
                  <span>Navigate your workspace</span>
                  <span><kbd className="rounded border border-border-default px-1.5 py-1">↑</kbd> <kbd className="rounded border border-border-default px-1.5 py-1">↓</kbd> select</span>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
}
