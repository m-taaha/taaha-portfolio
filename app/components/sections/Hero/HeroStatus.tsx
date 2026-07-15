export function HeroStatus() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-brand-primary/30
        bg-brand-primary/10
        px-4
        py-2
        text-sm
        text-brand-primary
      "
    >
      <div className="h-2 w-2 rounded-full bg-green-500" />

      <span>Available for Software Engineering Internships</span>
    </div>
  );
}
