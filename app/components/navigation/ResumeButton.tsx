import Link from "next/link";

export function ResumeButton() {
  return (
    <Link
      href="/resume.pdf"
      target="_blank"
      className="
        rounded-full
        border
        border-border-subtle
        px-5
        py-2
        text-sm
        transition-all
        duration-300
        hover:border-brand-primary
        hover:text-brand-primary
      "
    >
      Resume
    </Link>
  );
}
