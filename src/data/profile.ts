import { MetricItem, PresetQuestion } from '../types';

export const MANIDHAR_PROFILE = {
  name: 'Manidhar Pati',
  title: 'AI Systems Engineer',
  tagline: 'I build deployed AI systems that turn messy digital activity into usable intelligence.',
  bio: 'AI Systems Engineer focused on personal intelligence, FDE-style problem solving, knowledge systems, and applied automation. Builder of Vasuki, a local-first system for indexing files, screenshots, documents, and activity into structured knowledge. Strong interest in product execution, system design, and real-world AI workflows.',
  email: 'patimanidhar23@gmail.com',
  github: 'https://github.com/patimanidhar23',
  linkedin: 'https://linkedin.com/in/patimanidhar23',
};

export const VASUKI_METRICS: MetricItem[] = [
  {
    label: 'Indexed Files',
    value: '172,076+',
    description: 'Local files processed across the system.',
    icon: 'FolderOpen',
  },
  {
    label: 'Entities',
    value: '44,444+',
    description: 'Extracted objects and named references.',
    icon: 'Cpu',
  },
  {
    label: 'Memories',
    value: '21,422+',
    description: 'Curated memory blocks and summaries.',
    icon: 'Brain',
  },
  {
    label: 'Documents',
    value: '595+',
    description: 'PDFs and documents parsed into the knowledge base.',
    icon: 'FileText',
  },
];

export const PRESET_QUESTIONS = [
{
id:"founder",
question:"Who is Manidhar?",
label:"Founder Profile",
icon:"Brain"
},
{
id:"projects",
question:"What has he built?",
label:"Projects",
icon:"Cpu"
},
{
id:"tech",
question:"What technologies does he use?",
label:"Technology Stack",
icon:"Code"
},
{
id:"problems",
question:"What problems has he solved?",
label:"Engineering Impact",
icon:"Zap"
},
{
id:"fde",
question:"Why is he a strong Forward Deployed Engineer?",
label:"FDE Fit",
icon:"Sparkles"
}
];
  

export const STATIC_ANSWERS: Record<string, string> = {
  'fde-fit': `Manidhar is a strong fit for FDE-style work because he builds systems that connect data, workflow, and execution. His work shows three useful traits for forward-deployed roles:

* Comfort with messy, real-world data
* Ability to turn requirements into working systems
* Strong focus on deployed products rather than abstract demos

His portfolio should position him as someone who can move between product, data, and engineering with low friction.`,

  'ship': `Manidhar has built a local-first AI system called Vasuki and a set of related portfolio and knowledge components around it. The strongest story is not just the number of files or tables, but the fact that he has assembled a working system that connects data ingestion, query routing, and founder-facing intelligence.

The portfolio should emphasize:
* What the system does
* What problem it solves
* What parts he built himself
* How it is used in practice`,

  'vasuki': `Vasuki is Manidhar's flagship personal intelligence system. It is meant to index personal data, organize evidence, and support reasoning over files, documents, screenshots, and notes.

For the portfolio, Vasuki should be presented as a deployed product story:
* local-first
* evidence-driven
* personal intelligence layer
* continuously improving over time`,

  'janani': `Janani is the companion product layer in the ecosystem. It should be positioned as a second system or workflow layer that supports the broader AI/product vision.

For now, keep the explanation simple and avoid overloading the page with too many claims.`,

  'stack': `The portfolio should show a practical stack:
* Python
* FastAPI
* SQLite
* React
* TypeScript
* Tailwind
* GitHub

If a technology is not clearly supported by the work shown, do not include it on the landing page.`,
};

export const GENERIC_FALLBACK_ANSWER = `Ask about Manidhar's projects, systems, stack, and FDE-style work.`;
