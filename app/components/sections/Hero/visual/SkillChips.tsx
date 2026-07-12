interface SkillChipsProps {
  skills: readonly string[];
}




export function SkillChips({skills}: SkillChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-border-subtle bg-bg-primary px-3 py-1 text-sm text-text-secondary"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

