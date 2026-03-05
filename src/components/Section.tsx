"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, className = "", children }: SectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    if (!sectionNode) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      data-visible={isVisible}
      className={`section-block reveal scroll-mt-24 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <header className="section-header">
        <h2 id={`${id}-heading`} className="section-title">
          {title}
        </h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}

