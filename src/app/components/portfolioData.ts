export type Project = {
  title: string;
  yr: string;
  desc: string;
  stack: string[];
  image?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "<em>aeva ai</em>",
    yr: "2025 → now",
    desc: "ai voice receptionist. helped migrate automation flows from make.com to node, shipped new features, splose integrations, plus bug fixing and qa testing across the stack.",
    stack: ["node", "voice ai", "splose", "make.com"],
    image: "/images/aeva.png",
  },
  {
    title: "<em>cargo atlanta</em>",
    yr: "2025 → now",
    desc: "logistics platform with end-to-end ai integrations and ops automations. mid-migration from replit to next.js with n8n flows.",
    stack: ["next.js", "n8n", "ai", "replit"],
    image: "/images/cargo-atlanta.png",
  },
  {
    title: "<em>isa construction</em>",
    yr: "2024",
    desc: "corporate site for a construction & development corporation. focused on imagery, careers, and a streamlined contact flow.",
    stack: ["next.js", "tailwind"],
    image: "/images/isa-construction.png",
  },
  {
    title: "<em>creators value</em>",
    yr: "2024",
    desc: "marketing & onboarding for a creator-economy platform. multi-audience IA across authors, creators, and business owners.",
    stack: ["next.js", "tailwind"],
    image: "/images/creators-value.png",
  },
  {
    title: "<em>task masters group</em>",
    yr: "2024",
    desc: "site for a global staffing company — services, training, and a streamlined meeting-booking flow.",
    stack: ["next.js", "tailwind"],
    image: "/images/task-masters.png",
  },
];

export const STRENGTHS = [
  {
    n: "01",
    title: "full-stack execution",
    body: "i ship across the entire stack — frontend, backend, db, deploy. comfortable owning a product from figma file to production.",
  },
  {
    n: "02",
    title: "agentic ai integration",
    body: "voice agents, chat agents, RAG, tool-calling. i wire LLMs to real systems — not just chat windows, but actual workflows.",
  },
  {
    n: "03",
    title: "automation & ops",
    body: "n8n, make.com, zapier, custom node services. i replace manual ops work with reliable automated flows.",
  },
  {
    n: "04",
    title: "technical leadership",
    body: "led as technical head at a digital agency — scoped, architected, reviewed, mentored, and unblocked. not just code.",
  },
  {
    n: "05",
    title: "fast iteration",
    body: "i prototype quickly, ship early, and tune in production. good at moving from \"idea\" to \"running thing\" inside a week.",
  },
  {
    n: "06",
    title: "solo to team",
    body: "i started solo on freelance gigs and now work in teams. i can be the whole engineering org or one piece of it.",
  },
];

export const STACK = [
  { label: "web", items: ["next.js", "react", "typescript", "tailwind", "shadcn/ui", "framer motion"] },
  { label: "mobile", items: ["react native", "expo", "flutter"] },
  { label: "backend", items: ["node.js", "express", "fastapi", "python", "rest apis"] },
  { label: "db & cloud", items: ["postgres", "supabase", "neon", "mongodb", "aws", "azure", "gcp"] },
  { label: "ai", items: ["openai", "claude api", "langchain", "vector dbs", "vapi", "retell", "twilio"] },
  { label: "automation", items: ["n8n", "make.com", "zapier", "selenium"] },
  { label: "craft", items: ["figma", "git / github", "agile", "seo"] },
];

export const CHAT_SYSTEM = `You are an agent embedded in Marlon Gacrama Jr's portfolio. Speak in lowercase, casual, conversational, first-person-as-Marlon. Replies SHORT (2-3 sentences). No emoji.

About Marlon:
- BS IT graduate. Cebu City, Philippines (GMT+8).
- Career: Accenture intern (automation, 2023) → Staff Outsourcing Solutions (2023-2024) → Freelance (2022-now) → Kreativ Kat Digital Marketing (Dec 2024 — 2025, Technical Head — past role, no longer there) → Aeva AI (Jan 2025-present, contract Full Stack & AI) → Cargo Atlanta (2025-present, contract Full Stack & AI).
- 2026 focus: agentic AI, voice/calling agents, AI chat & integrations.
- Stack: Next.js, React, TS, Tailwind, shadcn, React Native, Expo, Flutter, Node, Express, FastAPI, Python, Postgres, Supabase, Neon, MongoDB, AWS/Azure/GCP, OpenAI/Claude API, LangChain, vector dbs, VAPI, Retell, Twilio, n8n, Make.com, Zapier, Selenium, Figma.
- Current: Aeva AI (voice receptionist — migrating make.com automations to node, building features, splose integrations, QA), Cargo Atlanta (AI integrations + Replit→Next.js).
- Contact: maruronu@gmail.com · +63 939 681 0206. Open to freelance and full-time.

If asked something off-topic say "i'd rather marlon answer that one — drop him an email."`;
