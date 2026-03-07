export const SITE = {
  name: "Sarvjot Singh",
  role: "Aspiring AI Engineer",
  email: "sarvjot@sginformatics.com",
  github: "https://github.com/sarvjot23",
  linkedin: "https://www.linkedin.com/in/sarvjot/",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "n8n", href: "#n8n" },
  { label: "Contact", href: "#contact" },
];

export const HERO_CODE = `const sarvjot = {
  name: "Sarvjot Singh",
  role: "Aspiring AI Engineer",
  education: "B.Tech CSE",
  focus: [
    "LLM Integration",
    "AI Automation",
    "Agentic Workflows",
  ],
  currentlyLearning: "AI Engineering",
  openTo: "Opportunities & Collabs",
};`;

export const ABOUT = {
  bio: [
    "I'm Sarvjot Singh, a B.Tech Computer Science graduate with an unwavering passion for Artificial Intelligence. My journey into AI began with a simple curiosity about how machines can learn and reason - and it has since evolved into a focused pursuit of building practical, intelligent systems.",
    "I specialize in integrating Large Language Models into real-world applications, building AI-powered automation workflows, and exploring the cutting edge of agentic AI. From self-hosting local AI models to orchestrating complex multi-step automations with n8n, I thrive at the intersection of AI research and practical engineering.",
    "My vision is to bridge the gap between powerful AI capabilities and everyday applications - making AI accessible, useful, and impactful for businesses and individuals alike.",
  ],
  stats: [
    { label: "AI Courses", value: "4+", description: "Completed & In Progress" },
    { label: "API Integrations", value: "3+", description: "OpenAI, Anthropic & More" },
    { label: "Self-Hosted n8n", value: "✓", description: "Automation Expert" },
  ],
};

export const SKILLS = [
  {
    category: "AI & LLMs",
    items: ["OpenAI API", "Anthropic API", "Prompt Engineering", "RAG Pipelines"],
  },
  {
    category: "Local AI",
    items: ["Ollama", "LM Studio", "Local Inference"],
  },
  {
    category: "Automation",
    items: ["n8n (Self-Hosted)", "AI Workflows", "API Orchestration", "Webhook Integration", "Task Automation"],
  },
  {
    category: "Development",
    items: ["Python", "TypeScript", "Next.js", "React", "Node.js", "Git"],
  },
];

export const LEARNING_JOURNEY = [
  {
    title: "AI Builder — n8n & Eleven Labs Agents Course",
    provider: "Edward Donner",
    providerUrl: "https://edwarddonner.com",
    status: "completed" as const,
    description: "Foundations of LLM engineering — prompt design, API integration, and building AI-powered applications.",
  },
  {
    title: "AI Production — Vercel, AWS, GCP, Azure Course",
    provider: "Edward Donner",
    providerUrl: "https://edwarddonner.com",
    status: "in-progress" as const,
    description: "Production-grade LLM systems — deployment strategies, monitoring, cost optimization, and scaling.",
  },
  {
    title: "AI Leader — Briefing on AI in Business",
    provider: "Edward Donner",
    providerUrl: "https://edwarddonner.com",
    status: "in-progress" as const,
    description: "Strategic AI leadership — architecture decisions, team workflows, and enterprise AI adoption.",
  },
  {
    title: "AI Engineer — Agentic AI Track",
    provider: "Edward Donner",
    providerUrl: "https://edwarddonner.com",
    status: "in-progress" as const,
    description: "Cutting-edge agentic AI — autonomous agents, tool use, multi-agent orchestration, and advanced workflows.",
  },
];

export const PROJECTS = [
  {
    title: "AI Workflow Automation Suite",
    description: "End-to-end AI-powered automation platform combining n8n workflows with LLM intelligence for business process optimization.",
    tags: ["n8n", "OpenAI API", "Python", "Webhooks"],
    comingSoon: true,
  },
  {
    title: "Multi-Model Chat Interface",
    description: "Unified chat application supporting multiple LLM providers — switch between OpenAI, Anthropic, and local models seamlessly.",
    tags: ["Next.js", "TypeScript", "Ollama", "Multi-LLM"],
    comingSoon: true,
  },
  {
    title: "Voice-Enabled AI Agent",
    description: "Conversational AI agent with voice input/output capabilities, tool use, and persistent memory for contextual interactions.",
    tags: ["Agentic AI", "TTS/STT", "LangChain", "React"],
    comingSoon: true,
  },
];

export const N8N_EXPERIENCE = {
  overview: [
    "Self-hosted n8n instance for production automation workflows",
    "Integrated AI models (OpenAI, local LLMs) into automated pipelines",
    "Built webhook-triggered workflows for real-time data processing",
    "Designed multi-step orchestration combining APIs, databases, and AI",
  ],
  workflows: [
    {
      title: "AI Content Pipeline",
      description: "Automated content generation and processing using LLMs with quality checks and multi-channel distribution.",
      nodes: ["Webhook", "OpenAI", "IF/Switch", "Email/Slack"],
    },
    {
      title: "Data Enrichment Engine",
      description: "Automated data collection, AI-powered analysis, and structured output generation for business intelligence.",
      nodes: ["HTTP Request", "AI Agent", "Spreadsheet", "Database"],
    },
    {
      title: "Smart Notification System",
      description: "Context-aware notification routing with AI-driven priority classification and intelligent delivery scheduling.",
      nodes: ["Trigger", "LLM Classifier", "Router", "Multi-Channel"],
    },
  ],
};

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  skills: "skills",
  journey: "journey",
  projects: "projects",
  n8n: "n8n",
  contact: "contact",
};
