export type NavItem = {
  id: "about" | "projects" | "experience" | "skills" | "contact";
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
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
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
    statusLine: "Vancouver, BC · Open to internships / new grad roles"
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
    resume: "Resume",
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
    skills: {
      title: "Skills"
    },
    contact: {
      title: "Contact"
    }
  },
  navItems: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ] satisfies NavItem[],
  social: {
    linkedin: "https://www.linkedin.com/in/george-song-54333461/",
    github: ""
  } satisfies SocialLinks,
  resumePath: "/resume.pdf",
  about: {
    paragraph:
      "I am a Computer Science student at UBC (expected Nov 2026) with a prior Biology degree (May 2022). I enjoy building user-facing applications and the infrastructure behind them, combining product thinking and design work from projects like Event Planner with practical systems engineering experience.",
    quickFacts: [
      "Vancouver, BC",
      "Interests: product design, HCI, scalable infrastructure, video systems"
    ]
  },
  projects: [
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
      github: ""
    },
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
      github: ""
    },
    {
      title: "Meal Planner",
      description:
        "Recipe discovery + saving + reviews + categories, and auto-generated grocery lists.",
      tags: ["React", "TypeScript", "Node.js", "MySQL"],
      github: ""
    }
  ] satisfies Project[],
  experience: [
    {
      role: "Data Engineer Intern",
      company: "Policy Reporter by Mercalis",
      location: "Remote",
      dates: "Sept 2024 – Aug 2025",
      bullets: [
        "Built Python ingestion and validation pipelines that increased throughput by 50%.",
        "Developed PostgreSQL functions powering analytics for 5,000+ daily records and reduced query latency by 35%.",
        "Designed and enforced data quality protocols that sustained 95% accuracy."
      ]
    },
    {
      role: "IT & Operations Assistant",
      company: "Psychological Services and Counseling Training Center (UBC)",
      location: "Vancouver, BC",
      dates: "Aug 2022 – Sept 2023",
      bullets: [
        "Provided endpoint support that reduced downtime by roughly 30% across staff systems.",
        "Installed and maintained security systems while coordinating outside vendors and internal requirements.",
        "Created an inventory tracking workflow for 2,000+ items with around 99% accuracy.",
        "Served as a liaison translating operational pain points into concrete system improvements."
      ]
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
