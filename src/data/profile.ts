import { MetricItem, PresetQuestion } from '../types';

export const MANIDHAR_PROFILE = {
  name: 'Manidhar Pati',
  title: 'AI Systems Engineer',
  tagline: 'I build systems that transform digital activity into memory, knowledge, and intelligence.',
  bio: 'AI Systems Engineer focused on personal intelligence systems, knowledge retrieval, local-first computing, and automation. Builder of Vasuki, an offline-first system that monitors digital activity, extracts metadata from raw files and multi-modal screen captures, and indexes them into an integrated relational database and high-dimensional vector store.',
  email: 'patimanidhar23@gmail.com',
  github: 'https://github.com/patimanidhar23',
  linkedin: 'https://linkedin.com/in/patimanidhar23',
};

export const VASUKI_METRICS: MetricItem[] = [
  {
    label: 'Processed Files',
    value: '172,076+',
    description: 'Raw code, markdown, and captured screen files processed.',
    icon: 'FolderOpen',
  },
  {
    label: 'Parsed Entities',
    value: '44,444+',
    description: 'Unique subjects resolved in our graph index.',
    icon: 'Cpu',
  },
  {
    label: 'Co-Mention Links',
    value: '545,000+',
    description: 'Relationships mined across parsed records.',
    icon: 'Network',
  },
  {
    label: 'Memories Indexed',
    value: '21,422+',
    description: 'Semantic text block chunks synthesized into vector space.',
    icon: 'Brain',
  },
  {
    label: 'Document Repos',
    value: '595+',
    description: 'Active books and layout-aware PDFs indexed.',
    icon: 'FileText',
  },
  {
    label: 'Schema Mappings',
    value: '153+',
    description: 'Dedicated relational database foreign-key couplings.',
    icon: 'Layers',
  },
];

export const PRESET_QUESTIONS: PresetQuestion[] = [
  {
    id: 'built',
    question: 'What has Manidhar built?',
    label: 'Portfolio & Systems Spec',
    icon: 'Cpu',
  },
  {
    id: 'janani',
    question: 'Tell me about Janani.',
    label: 'Orchestration & Supervisors',
    icon: 'Sparkles',
  },
  {
    id: 'skills',
    question: 'What skills does he actually use?',
    label: 'Technical Capabilities',
    icon: 'Code',
  },
  {
    id: 'problems',
    question: 'What problems has he solved?',
    label: 'Engineering Feats',
    icon: 'Zap',
  },
  {
    id: 'evidence',
    question: 'Show evidence.',
    label: 'Active System Telemetry',
    icon: 'Layers',
  },
];

export const STATIC_ANSWERS: Record<string, string> = {
  'built': `I am the core intelligence daemon. Let me run a search on what Manidhar has constructed:

Manidhar specializes in highly optimized, local-first systems that handle heavy data lifting. His flagship build is **Vasuki**, the very system you are communicating with right now. He has also engineered:

* **Janani**: The automated background system daemon supervising all of Vasuki's indexing runs and background pipelines.
* **Layout-Aware PDF Parsers**: Custom OCR systems that strip layout coordinates to accurately parse multi-column textbooks and research papers.
* **Relational Vector Search Engines**: Hybrid search modules that combine fast embedding matching with classical SQLite relationships to run rich queries under 10ms.`,

  'janani': `**Janani** is my background supervisor daemon. Since I operate entirely locally on the user's hardware, I need a helper to monitor system health. Manidhar built Janani in Go to:

* Run continuously as a native systemd service.
* Prevent memory overflows by dynamically throttling multi-threaded PDF and image OCR operations, capping our total memory footprint under **1.48GB RAM**.
* Automatically monitor and auto-heal active database connections and resolve SQLite file-write locks.`,

  'skills': `Here is the verified list of tools, runtimes, and models that Manidhar actively uses to build my infrastructure:

* **Systems & Languages**: Go, Python, C++, TypeScript, Bash/Shell.
* **Vector & Relational Storage**: SQLite (Better-SQLite3), PostgreSQL (pgvector), Redis.
* **Information Retrieval & AI**: Graph-Augmented RAG pipelines, layout-aware OCR extraction, HNSW indexing, and local quantized LLM fine-tuning.
* **Runtimes & Containers**: Linux system optimization, systemd services, Docker container orchestration, and asynchronous threading pipelines.`,

  'problems': `Manidhar built me to solve three major limitations of traditional AI systems:

1. **Semantic Noise**: Traditional flat vector search is noisy. Manidhar solved this by introducing **Graph-RAG**, which filters raw embeddings through physical SQLite database keys (153+ schema couplings).
2. **Layout Loss in Documents**: PDFs often lose format during raw text extraction. He designed a custom coordinate-based parser that preserves tables and multi-column headers into clean markdown.
3. **Resource Bound Crashes**: Running large vector databases local-first can easily consume 16GB+ RAM. He implemented thread-throttled worker pools in Go that limit our workspace to under **1.48GB RAM**.`,

  'evidence': `My system logs are fully loaded. Here is the active telemetry verifying my scale:

* **Files Processed**: **172,076+** raw code, markdown, and captured screen files.
* **Parsed Entities**: **44,444+** unique subjects resolved in our graph index.
* **Co-Mention Links**: **545,000+** parsed relationships.
* **Memories Indexed**: **21,422+** semantic context blocks.
* **Document Repositories**: **595+** active books and layout-aware PDFs.
* **Hard Schema Mappings**: **153+** dedicated SQLite foreign-key relationships.

All of this runs locally and offline at sub-10ms response latency.`,
};

export const GENERIC_FALLBACK_ANSWER = `I am **Vasuki Core**, Manidhar Pati's personal intelligence system.

My live server-side connection to Gemini is currently in offline mode, but I am pre-seeded with full local records of Manidhar's work. 

Feel free to click any of the preset cards above to query my database about:
* **Manidhar's Build Portfolio**
* **The Vasuki Core Architecture**
* **Technical Skills & Stack**
* **The Janani Orchestration Layer**
* **Complex engineering problems solved**

*You can configure the \`GEMINI_API_KEY\` environment variable in the Secrets tab of AI Studio to enable fully dynamic natural-language Q&A!*`;
