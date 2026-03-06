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
    tagline: "Computer Science student at UBC building scalable web products.",
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
    builtWith: "Built with Next.js",
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
      "I am currently a Computer Science student at the University of British Columbia. I enjoy solving problems in order to build innovative and impactful products. With my background in Biology, I aim to leverage my unique experience into the tech space and contribute in meaningful and innovative ways.",
      "In my free time, I enjoy playing basketball, watching MMA, and video games!"
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

