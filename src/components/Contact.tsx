import type { SocialLinks } from "@/content/siteContent";

type ContactProps = {
  intro: string;
  emailLabel: string;
  email: string;
  social: SocialLinks;
};

export function Contact({ intro, emailLabel, email, social }: ContactProps) {
  return (
    <div className="contact-card">
      <p className="contact-intro">{intro}</p>
      <div className="contact-actions">
        <a href={`mailto:${email}`} className="btn btn-solid">
          {emailLabel}
        </a>
      </div>
      <div className="contact-socials">
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
  );
}
