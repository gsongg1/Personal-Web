type HeroProps = {
  name: string;
  eyebrow: string;
  tagline: string;
};

export function Hero({ name, eyebrow, tagline }: HeroProps) {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="hero-heading" className="hero-title">
          {name}
        </h1>
        <p className="hero-subtitle">{tagline}</p>
      </div>
    </section>
  );
}
