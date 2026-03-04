import type { SkillsGroup } from "@/content/siteContent";

type SkillsGridProps = {
  groups: SkillsGroup[];
};

export function SkillsGrid({ groups }: SkillsGridProps) {
  return (
    <div className="skills-grid">
      {groups.map((group) => (
        <article key={group.label} className="skill-group">
          <h3>{group.label}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
