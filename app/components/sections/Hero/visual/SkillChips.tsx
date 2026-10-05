interface SkillChipsProps {
  skills: readonly string[];
}




export function SkillChips({skills}: SkillChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-border-subtle/80 bg-bg-primary/70 px-3 py-1.5 font-mono text-[11px] text-text-secondary"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
