import type { SocialLinks } from "@/content/siteContent";

type HeroProps = {
  name: string;
  eyebrow: string;
  tagline: string;
  highlights: string[];
  statusLine: string;
  email: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  social: SocialLinks;
};

export function Hero({
  name,
  eyebrow,
  tagline,
  highlights,
  statusLine,
  email,
  primaryCtaLabel,
  secondaryCtaLabel,
  social
}: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="hero-heading" className="hero-title">
          {name}
        </h1>
        <p className="hero-subtitle">{tagline}</p>

        <ul className="highlight-list" aria-label="Core highlights">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#projects">
            {primaryCtaLabel}
          </a>
          <a className="btn btn-outline" href={`mailto:${email}`}>
            {secondaryCtaLabel}
          </a>
          {social.linkedin ? (
            <a className="text-link" href={social.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : null}
          {social.github ? (
            <a className="text-link" href={social.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>

        <p className="status-line">{statusLine}</p>
      </div>
    </section>
  );
}
