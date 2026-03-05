import type { Project } from "@/content/siteContent";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLinks = Boolean(project.github || project.demo);

  return (
    <article className="project-card">
      <div className="project-head">
        {project.favicon ? (
          <img
            src={project.favicon}
            alt={`${project.title} icon`}
            className="project-favicon"
            loading="lazy"
          />
        ) : null}
        <h3 className="project-title">{project.title}</h3>
      </div>

      <p className="project-description">{project.description}</p>

      <ul className="tag-list" aria-label={`${project.title} tech stack`}>
        {project.tags.map((tag) => (
          <li key={tag} className="tag-pill">
            {tag}
          </li>
        ))}
      </ul>

      {hasLinks ? (
        <div className="project-links">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-link">
              GitHub
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="text-link">
              Live Demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
