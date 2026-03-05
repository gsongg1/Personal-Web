"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { NavItem, SocialLinks } from "@/content/siteContent";

type NavbarProps = {
  name: string;
  navItems: NavItem[];
  resumePath: string;
  resumeLabel: string;
  social: SocialLinks;
};

export function Navbar({ name, navItems, resumePath, resumeLabel, social }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? "about");

  const externalLinks = useMemo(
    () => [
      {
        href: social.linkedin,
        label: "LinkedIn",
        icon: <LinkedInIcon className="social-icon" />
      },
      {
        href: social.github,
        label: "GitHub",
        icon: <GithubIcon className="social-icon" />
      }
    ].filter((item) => Boolean(item.href)),
    [social.github, social.linkedin]
  );

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((item): item is HTMLElement => Boolean(item));

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (inView?.target.id) {
          setActiveSection(inView.target.id as NavItem["id"]);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.2, 0.5, 0.8]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: NavItem["id"]) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    const y = section.getBoundingClientRect().top + window.scrollY - 76;
    window.scrollTo({ top: y, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="nav-header">
      <div className="content-container nav-frame flex h-14 items-center justify-between gap-3">
        <Link href="/" className="brand-mark" aria-label="Go to top">
          {name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 md:flex">
          <a href={resumePath} target="_blank" rel="noreferrer" className="btn btn-outline">
            {resumeLabel}
          </a>
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="icon-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="icon-link md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <CloseIcon className="menu-icon" /> : <MenuIcon className="menu-icon" />}
        </button>
      </div>

      <div className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <nav aria-label="Mobile" className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-link ${activeSection === item.id ? "is-active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <a
              href={resumePath}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
              onClick={() => setIsMenuOpen(false)}
            >
              {resumeLabel}
            </a>
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="icon-link"
                aria-label={link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

type IconProps = {
  className?: string;
};

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M5.5 3A2.5 2.5 0 1 0 5.5 8a2.5 2.5 0 0 0 0-5ZM4 9h3v12H4zM10 9h2.9v1.7h.1c.4-.8 1.4-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8V21h-3v-5.2c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-3V9Z" />
    </svg>
  );
}

function GithubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.2.8-.6V20c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.5 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <path d="M6 6l12 12M18 6 6 18" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

