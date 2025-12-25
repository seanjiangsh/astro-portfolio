export type Bullet = string | { text: string; children?: string[] };

export type Slide = {
  title: string;
  headline?: string;
  bullets?: Bullet[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
};

export const slides: Slide[] = [
  {
    title: "Who I Am",
    headline:
      "Frontend-focused engineer with strong systems thinking and medical-software rigor",
    bullets: [
      "Build high-performance frontend experiences with strong UX and visual polish",
      "Bring reliability-first habits from years of medical software (DICOM) development",
      "Favor pragmatic, maintainable solutions that scale with real-world constraints",
    ],
  },
  {
    title: "Career Snapshot",
    bullets: [
      {
        text: "Timeline",
        children: [
          "2006-2010: Bachelor's in Information Management",
          "2010-2018: Engine/mechanical industry",
          "2018-2024: Medical software (DICOM)",
          "2024-present: Web gaming frontend",
        ],
      },
      "Different domains, same core strengths: diagnostics, systems thinking, and performance fine tuning",
    ],
  },
  {
    title: "Foundations Outside Software",
    headline: "Bike & engine industry (8 years)",
    bullets: [
      "Engine tuning and ECU optimization using sensor-driven diagnostics",
      "Hands-on debugging with oscilloscopes and real-world signals",
      "Built strong intuition for noisy data, physical constraints, and root-cause analysis",
    ],
  },
  {
    title: "Switching to Software",
    bullets: [
      "Motivation: pursue greater technical leverage and long-term scalability",
      {
        text: "Path:",
        children: [
          "Self-study (C#)",
          "Formal Java training",
          "Medical software role within one year",
        ],
      },
      "Outcome: strong learning discipline, resilience, and confidence under pressure",
    ],
  },
  {
    title: "Medical Software: Reliability Mindset",
    headline: "DICOM imaging systems",
    bullets: [
      "Worked in environments with strict standards and real consequences for failure",
      "Internalized that correctness, observability, and robustness are non-negotiable",
    ],
  },
  {
    title: "Medical Role: E-Web",
    bullets: [
      "Developed and maintained DICOM applications (C++, MSSQL, Web)",
      "Handled installation, maintenance, documentation, and end-user training",
      "Worked directly with hospitals across South-East Asia to deliver stable deployments",
    ],
  },
  {
    title: "Medical Role: Rimage",
    bullets: [
      "Developed DICOM image import/export systems integrated with medical hardware",
      "Diagnosed issues across system boundaries (PACS connectivity, DICOM compliance)",
      "Improved stability and performance through careful analysis and iteration",
    ],
  },
  {
    title: "Medical Role: Hyperdigital",
    bullets: [
      "Built web-based DICOM viewers and supporting Node.js services",
      "Designed authentication, authorization, and role-based access control (RBAC)",
      "Introduced containerized services (Docker) and clearer development workflows",
    ],
  },
  {
    title: "Current Role: Frontend Team Lead",
    headline: "Web gaming",
    bullets: [
      "Lead frontend delivery while remaining hands-on with performance-critical UI",
      "Coordinate tasks, priorities, and collaboration between frontend engineers and designers",
      "Set technical direction for rendering, performance, and maintainable React/Pixi.js architecture",
    ],
  },
  {
    title: "How I Work",
    bullets: [
      "Communicate clearly across roles and cultures; align engineering with product goals",
      "Strong ownership mindset: reduce ambiguity, unblock progress, and deliver reliably",
      "Prefer highly disciplined but sustainable pace over short-term heroics",
    ],
  },
  {
    title: "Consistency & Growth",
    headline: "Learning is a habit, not a spike",
    imageSrc: "/assets/about/gh-commits-2025.png",
    imageAlt: "GitHub commit activity in 2025",
    imageCaption: "GitHub commits (2025)",
    bullets: [
      "Maintain near-daily practice through real projects and continuous iteration",
      "Rebuilding math fundamentals to deepen understanding of graphics and interactive systems",
      "Invest learning time where it directly improves real-world engineering outcomes",
    ],
  },
  {
    title: "What I Am Not",
    bullets: [
      {
        text: "Not a LeetCode grinder",
        children: [
          "Understand data structures & algorithms conceptually",
          "Use them when they solve real product problems",
        ],
      },
      {
        text: "Where I invest instead",
        children: [
          "Mathematics fundamentals",
          "Computer graphics & interactive systems",
          "Pragmatic software architecture and reliable delivery",
        ],
      },
    ],
  },
  {
    title: "What I'm Looking For",
    bullets: [
      "Looking to build impactful products",
      "Opportunities to go deeper into graphics, animation, and interactive systems",
      "Global opportunities to work with diverse teams and users",
    ],
  },
  {
    title: "Thank You",
    headline:
      "Thanks for reading, happy to chat further or share more details.",
  },
];
