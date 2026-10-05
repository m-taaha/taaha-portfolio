interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="os-pill">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(117,167,255,.55)]" aria-hidden="true" />
        {eyebrow}
      </p>

      <h2
        className="
          mt-5
          text-4xl
          font-bold
          leading-[1.08]
          tracking-[-0.04em]
          text-balance
          sm:text-5xl
          "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            text-base
            leading-7
            text-pretty
            sm:text-lg
            sm:leading-8
            max-w-2xl
            text-text-secondary
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
