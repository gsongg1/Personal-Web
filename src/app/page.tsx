import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description
};

export default function Home() {
  return (
    <>
      <Navbar
        name={siteContent.personal.name}
        navItems={siteContent.navItems}
        resumePath={siteContent.resumePath}
        resumeLabel={siteContent.labels.resume}
        social={siteContent.social}
      />
      <main>
        <div className="content-container">
          <Hero
            name={siteContent.personal.name}
            eyebrow={siteContent.labels.heroEyebrow}
            tagline={siteContent.personal.tagline}
          />

          <Section id="about" title={siteContent.sections.about.title}>
            <div className="about-block">
              {siteContent.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Section>

          <Section
            id="projects"
            title={siteContent.sections.projects.title}
            subtitle={siteContent.sections.projects.subtitle}
          >
            <div className="projects-grid">
              {siteContent.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>

          <Section
            id="experience"
            title={siteContent.sections.experience.title}
            subtitle={siteContent.sections.experience.subtitle}
          >
            <ExperienceTimeline items={siteContent.experience} education={siteContent.education} />
          </Section>

          <Section id="contact" title={siteContent.sections.contact.title}>
            <Contact
              intro={siteContent.labels.contactIntro}
              emailLabel={siteContent.labels.emailMe}
              email={siteContent.personal.email}
              social={siteContent.social}
            />
          </Section>
        </div>
      </main>
      <Footer
        name={siteContent.personal.name}
        builtWithLabel={siteContent.labels.builtWith}
        social={siteContent.social}
      />
    </>
  );
}
