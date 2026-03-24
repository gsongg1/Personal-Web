import type { SocialLinks } from "@/content/siteContent";

type FooterProps = {
  name: string;
  social: SocialLinks;
};

export function Footer({ name, social }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="content-container footer-row">
        <p>
          (c) {year} {name}
        </p>
        <div className="footer-socials">
          {social.linkedin ? (
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="text-link">
              LinkedIn
            </a>
          ) : null}
          {social.github ? (
            <a href={social.github} target="_blank" rel="noreferrer" className="text-link">
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}

