import type { EducationItem, ExperienceItem } from "@/content/siteContent";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
  education: EducationItem[];
};

export function ExperienceTimeline({ items, education }: ExperienceTimelineProps) {
  return (
    <div className="experience-layout">
      <ol className="timeline" aria-label="Work experience timeline">
        {items.map((item) => (
          <li key={`${item.company}-${item.role}`} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <article className="timeline-card">
              <div className="timeline-head">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <p className="timeline-meta">
                {item.dates} - {item.location}
              </p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>

      <aside className="education-card" aria-label="Education">
        <h3>Education</h3>
        <ul>
          {education.map((item) => (
            <li key={`${item.school}-${item.degree}`}>
              <p className="education-degree">{item.degree}</p>
              <p>{item.school}</p>
              <p className="education-date">{item.date}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

