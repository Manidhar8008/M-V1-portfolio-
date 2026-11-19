export interface VasukiKnowledgeRecord {
  id: string;
  title: string;
  category: string;
  keywords: string[];
  answer: string;
}

/**
 * Public, reviewed portfolio knowledge.
 * This index is bundled with the static site so Explorer works on GitHub Pages
 * without depending on a visitor's localhost or exposing private Vasuki data.
 */
export const VASUKI_PUBLIC_KNOWLEDGE: VasukiKnowledgeRecord[] = [
  {
    id: "profile",
    title: "Manidhar — Founder and AI Systems Engineer",
    category: "Profile",
    keywords: ["manidhar", "founder", "engineer", "systems", "portfolio", "experience", "hire", "hiring", "work"],
    answer:
      "Manidhar Pati builds personal intelligence infrastructure, AI agents, retrieval systems, and workflow automation. His focus is turning scattered information into structured knowledge and practical execution systems. His engineering work spans Python, FastAPI, React, TypeScript, SQLite, PostgreSQL, and local-first AI workflows.",
  },
  {
    id: "vasuki",
    title: "Vasuki OS — Personal Intelligence System",
    category: "Flagship system",
    keywords: ["vasuki", "architecture", "personal intelligence", "operating system", "local first", "privacy", "memory", "knowledge graph", "retrieval", "rag", "sqlite", "indexing", "timeline", "documents", "files"],
    answer:
      "Vasuki is a local-first personal intelligence system. It is designed to ingest files, documents, screenshots, notes, and activity; extract metadata and entities; connect information through relationships; and make that knowledge searchable through timelines and retrieval. The design prioritizes local data ownership, structured evidence, and useful answers over a thin chat interface.",
  },
  {
    id: "agents",
    title: "Vasuki — Six-agent architecture",
    category: "Architecture",
    keywords: ["spirit", "eyes", "ears", "brain", "hands", "face", "agents", "multi agent", "orchestration", "vision", "audio", "reasoning", "execution", "interface"],
    answer:
      "The six-agent model separates responsibilities: Spirit orchestrates work; Eyes handles visual inputs; Ears handles audio; Brain performs reasoning; Hands carries out approved actions; and Face provides the user interface. The separation makes the system easier to reason about, test, and extend.",
  },
  {
    id: "projects",
    title: "Flagship projects",
    category: "Projects",
    keywords: ["projects", "flagship", "janani", "janani.ai", "jan ai", "jan.ai", "mw.ai", "mw ai", "aim1000", "ani.ai", "book", "media", "discipline", "job automation"],
    answer:
      "The portfolio includes Vasuki OS for personal intelligence; Janani.ai for personal AI and discipline workflows; Jan.ai for AI media management; MW.AI for practical business data and automation systems; and AIM1000 for job-search workflow automation. Ani.ai explores AI-assisted book writing. Each project applies automation to a defined information or operating problem.",
  },
  {
    id: "mw-upvc",
    title: "MW.AI — UPVC operations workflow",
    category: "Business systems",
    keywords: ["mw.ai", "mw ai", "upvc", "fabrication", "windows", "doors", "quotation", "square footage", "sft", "bom", "cut list", "production", "quality", "inventory", "business", "problems", "solved"],
    answer:
      "The MW.AI UPVC workflow connects customer enquiries and site measurements to square-footage quotations, bill of materials, profile and glass decomposition, hardware schedules, cut lists, production tracking, and quality checks. The intended result is one traceable workflow from enquiry through workshop execution, with human review around measurements and commercial decisions.",
  },
  {
    id: "aim1000",
    title: "AIM1000 — Job-search automation",
    category: "Automation",
    keywords: ["aim1000", "jobs", "job", "career", "resume", "résumé", "ats", "linkedin", "applications", "autofill", "approval", "hiring"],
    answer:
      "AIM1000 is designed to reduce repetitive job-search work. Its workflow includes job discovery, role matching, resume tailoring for each opportunity, and application preparation or autofill. Submission remains behind explicit user approval; the system should not apply to jobs without the user's confirmation.",
  },
  {
    id: "stack",
    title: "Engineering stack and implementation",
    category: "Technical skills",
    keywords: ["skills", "stack", "python", "fastapi", "react", "typescript", "sqlite", "postgresql", "pgvector", "qdrant", "ollama", "linux", "termux", "api", "database", "frontend", "backend"],
    answer:
      "The working stack includes Python and FastAPI for services; React, TypeScript, and Vite for interfaces; SQLite for local-first storage; PostgreSQL and pgvector for hosted relational and vector workloads; and local model tooling such as Ollama. The emphasis is on explicit data models, API boundaries, reliable workflows, and local-first fallbacks.",
  },
  {
    id: "approach",
    title: "Engineering approach and collaboration",
    category: "Working principles",
    keywords: ["approach", "principles", "systems thinking", "automation", "workflow", "privacy", "human approval", "reliability", "business impact", "collaboration", "why hire", "hire"],
    answer:
      "The approach is systems-driven: define the workflow, model the data, make state visible, automate repetitive steps, and keep consequential actions reviewable by a person. The strongest fit is work involving AI infrastructure, retrieval, workflow automation, operational tools, and products that need to function under real constraints.",
  },
];

const STOP_WORDS = new Set([
  "a", "about", "an", "and", "are", "build", "built", "can", "could", "describe",
  "did", "do", "does", "explain", "for", "from", "give", "has", "have", "he",
  "her", "his", "how", "i", "in", "is", "it", "me", "my", "of", "on", "or",
  "please", "show", "tell", "that", "the", "their", "them", "there", "this",
  "to", "was", "what", "when", "where", "which", "who", "why", "with", "would",
]);

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9+#.\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokens(value: string): string[] {
  return normalize(value).split(" ").filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

export function searchVasukiKnowledge(query: string, limit = 3): VasukiKnowledgeRecord[] {
  const normalizedQuery = normalize(query);
  const queryTokens = [...new Set(tokens(query))];

  if (queryTokens.length === 0) return [];

  return VASUKI_PUBLIC_KNOWLEDGE
    .map((record) => {
      const title = normalize(record.title);
      const category = normalize(record.category);
      const keywords = normalize(record.keywords.join(" "));
      const answer = normalize(record.answer);
      let score = 0;

      for (const token of queryTokens) {
        if (keywords.split(" ").includes(token)) score += 6;
        if (title.split(" ").includes(token)) score += 5;
        else if (title.includes(token)) score += 2;
        if (category.split(" ").includes(token)) score += 3;
        if (answer.includes(token)) score += 1;
      }

      if (title && normalizedQuery.includes(title)) score += 8;
      return { record, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.record);
}
