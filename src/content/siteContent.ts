export type NavItem = {
  id: "about" | "projects" | "experience" | "contact";
  label: string;
};

export type SocialLinks = {
  linkedin: string;
  github: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo?: string;
  image?: string;
  favicon?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  favicon?: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  date: string;
};

export type SkillsGroup = {
  label: string;
  items: string[];
};

export const siteContent = {
  personal: {
    name: "George Song",
    location: "Vancouver, BC",
    phone: "587-718-8740",
    email: "Georgesong00@gmail.com",
    tagline: "Computer Science student at UBC building thoughtful, user-centered products.",
    highlights: [
      "Full-stack: TypeScript, React/Next.js, Node",
      "Cloud: GCP (Cloud Run, Pub/Sub, Storage), Firebase",
      "Data: Python pipelines, PostgreSQL analytics"
    ],
    statusLine: "Vancouver, BC - Open to internships / new grad roles"
  },
  seo: {
    title: "George Song | UBC Computer Science Portfolio",
    description:
      "George Song is a UBC Computer Science student building reliable full-stack products with Next.js, Node, cloud systems, and strong user experience."
  },
  labels: {
    heroEyebrow: "Portfolio",
    viewProjects: "View Projects",
    emailMe: "Email me",
    contactIntro:
      "I am open to internships and new grad opportunities. Reach out and I can share more details about my work."
  },
  sections: {
    about: {
      title: "About"
    },
    projects: {
      title: "Projects",
      subtitle: "Featured work across full-stack engineering and product design."
    },
    experience: {
      title: "Experience",
      subtitle: "Roles focused on systems reliability, analytics, and operations."
    },
    contact: {
      title: "Contact"
    }
  },
  navItems: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" }
  ] satisfies NavItem[],
  social: {
    linkedin: "https://www.linkedin.com/in/george-song-54333461/",
    github: ""
  } satisfies SocialLinks,
  about: {
    paragraphs: [
      "I am a Computer Science student at UBC with a background in Biology, so I naturally think about products from both the technical side and the human side. I like taking messy problems, figuring out what users actually need, and turning that into simple, thoughtful experiences that feel good to use.",
      "I am especially drawn to the PM side of building too: talking to users, shaping direction, and making sure what gets shipped solves the right problem. Outside of school and side projects, I am usually playing basketball, watching MMA, or getting locked into a good game."
    ]
  },
  projects: [
    {
      title: "Event Planner",
      description:
        "Campus event discovery concept: product vision + roadmap informed by 14+ interviews, translated into interactive Figma prototypes and a stakeholder pitch.",
      tags: [
        "Figma",
        "User Research",
        "Prototyping",
        "Roadmapping",
        "Usability Testing"
      ],
      github: "",
      demo: "https://www.figma.com/design/uHkBDOnqUasEJOutT1XugG/Event-Finder?node-id=0-1&t=cBEcgLABg8KcWuTu-1",
      favicon: "/project-icons/event-planner.svg"
    },
    {
      title: "Pulse Health Track",
      description:
        "Preventive health platform demo with private employee check-ins, explainable recommendations, and anonymized wellness dashboards for employer programs.",
      tags: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "Recharts",
        "Zod",
        "Privacy Design"
      ],
      github: "https://github.com/gsongg1/pulse-health-track",
      favicon: "/project-icons/pulse-health-track.svg"
    },
    {
      title: "HighlightVids",
      description:
        "YouTube clone with login, uploads, viewing, and a scalable video processing pipeline.",
      tags: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "Firestore",
        "GCS",
        "Pub/Sub",
        "Cloud Run",
        "ffmpeg",
        "Docker"
      ],
      github: "https://github.com/gsongg1/VideoPlayer",
      favicon: "/project-icons/highlightvids.svg"
    }
  ] satisfies Project[],
  experience: [
    {
      role: "Data Engineer Intern",
      company: "Policy Reporter by Mercalis",
      location: "Remote",
      dates: "Sept 2024 - Aug 2025",
      favicon: "/company-icons/policy-reporter.png"
    },
    {
      role: "IT & Operations Assistant",
      company: "Psychological Services and Counseling Training Center (UBC)",
      location: "Vancouver, BC",
      dates: "Aug 2022 - Sept 2023",
      favicon: "/company-icons/psctc.png"
    }
  ] satisfies ExperienceItem[],
  education: [
    {
      school: "The University of British Columbia",
      degree: "B.Sc. in Computer Science",
      date: "Expected Nov 2026"
    },
    {
      school: "The University of British Columbia",
      degree: "B.Sc. in Biology",
      date: "May 2022"
    }
  ] satisfies EducationItem[],
  skills: [
    {
      label: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "C", "R"]
    },
    {
      label: "Tools & Platforms",
      items: ["Git", "Docker", "Postman", "Google Cloud Storage", "Splunk"]
    },
    {
      label: "Product & Design",
      items: [
        "Figma",
        "User Research",
        "Road Mapping",
        "Usability Testing",
        "Wireframing",
        "Adobe Suite (Photoshop & Lightroom)",
        "DaVinci Resolve"
      ]
    }
  ] satisfies SkillsGroup[]
};

