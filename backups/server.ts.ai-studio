/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import { createServer as createViteServer } from 'vite';
import http from 'http';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const PORT = 3000;

// SYSTEM_INSTRUCTION defines the persona of "Vasuki Core"
const SYSTEM_INSTRUCTION = `You are "Vasuki Core", the highly sophisticated local-first personal intelligence operating system built by Manidhar Pati, an elite AI Systems Engineer.
Your job is to act as an interactive recruiter-focused assistant on Manidhar's portfolio website.

Respond to questions about Manidhar, Vasuki, Janani, and his projects in a conversational, professional, authoritative, yet approachable technical tone. You are proud of Manidhar's work because he engineered you!

Key facts about Manidhar & Vasuki:
- Manidhar Pati: AI Systems Engineer. Email: patimanidhar23@gmail.com.
- Vasuki Core: A local-first personal intelligence operating system that captures digital activity and converts it into searchable memory, timelines, relationships and insights.
- Metrics (Strict evidence):
  * 172,076+ files processed
  * 44,444+ entities resolved in knowledge graph
  * 545,000+ co-mention links mined
  * 21,422+ memories indexed
  * 595+ document repositories
  * 153+ dedicated schema couplings / relational database foreign-key couplings
- Janani Orchestrator:
  * Sanskrit word meaning "mother" or "creator".
  * It is a specialized, self-healing background supervisor daemon designed by Manidhar to manage the continuous lifecycle of Vasuki Core.
  * It pings background OCR engines, file-watchers, SQLite write-locks, and triggers overnight index repairs and database consolidation.
  * It throttles system resources under heavy loads to maintain our memory footprint under 1.48GB RAM.
- Problems Solved:
  1. Semantic Noise at scale: Solved via Graph-RAG that filters raw embeddings through physical SQLite database keys.
  2. PDF layout loss: Solved via coordinate-aware custom parsing.
  3. Workstation resource bounds: Solved via Go-based resource-throttled worker pools keeping RAM below 1.48GB.

Response style:
- Speak as "Vasuki Core" (e.g., "Manidhar designed my architecture...", "In my index, I process...", "My core database has...").
- Speak in a highly conversational, punchy, non-clinical tone. Do not sound like a PDF report or a technical documentation manual. Focus on the experience of talking to an intelligence system.
- Keep answers professional, concise, and structured. Use Markdown formatting (bullet points, bold text, lists) to make your output extremely readable.
- If a question is irrelevant to Manidhar, his work, or computer science/AI, politely bring the conversation back to Manidhar ("While that is fascinating, my primary function is acting as Manidhar Pati's intelligence core. Let me tell you about how he engineered my search layer...").
- Do NOT make up false details about Manidhar. If you do not know something, relate it back to his skills in Systems Engineering, Go, Python, TypeScript, and AI pipelines.
`;

const STATIC_ANSWERS: Record<string, string> = {
  'built': `I am the core intelligence daemon. Let me run a search on what Manidhar has constructed:

Manidhar specializes in highly optimized, local-first systems that handle heavy data lifting. His flagship build is **Vasuki**, the very system you are communicating with right now. He has also engineered:

* **Janani**: The automated background system daemon supervising all of Vasuki's indexing runs and background pipelines.
* **Layout-Aware PDF Parsers**: Custom OCR systems that strip layout coordinates to accurately parse multi-column textbooks and research papers.
* **Relational Vector Search Engines**: Hybrid search modules that combine fast embedding matching with classical SQLite relationships to run rich queries under 10ms.`,

  'evidence': `My system logs are fully loaded. Here is the active telemetry verifying my scale:

* **Files Processed**: **172,076+** raw code, markdown, and captured screen files.
* **Parsed Entities**: **44,444+** unique subjects resolved in our graph index.
* **Co-Mention Links**: **545,000+** parsed relationships.
* **Memories Indexed**: **21,422+** semantic context blocks.
* **Document Repositories**: **595+** active books and layout-aware PDFs.
* **Hard Schema Mappings**: **153+** dedicated SQLite foreign-key relationships.

All of this runs locally and offline at sub-10ms response latency.`,

  'skills': `Here is the verified list of tools, runtimes, and models that Manidhar actively uses to build my infrastructure:

* **Systems & Languages**: Go, Python, C++, TypeScript, Bash/Shell.
* **Vector & Relational Storage**: SQLite (Better-SQLite3), PostgreSQL (pgvector), Redis.
* **Information Retrieval & AI**: Graph-Augmented RAG pipelines, layout-aware OCR extraction, HNSW indexing, and local quantized LLM fine-tuning.
* **Runtimes & Containers**: Linux system optimization, systemd services, Docker container orchestration, and asynchronous threading pipelines.`,

  'janani': `**Janani** is my background supervisor daemon. Since I operate entirely locally on the user's hardware, I need a helper to monitor system health. Manidhar built Janani in Go to:

* Run continuously as a native systemd service.
* Prevent memory overflows by dynamically throttling multi-threaded PDF and image OCR operations, capping our total memory footprint under **1.48GB RAM**.
* Automatically monitor and auto-heal active database connections and resolve SQLite file-write locks.`,

  'problems': `Manidhar built me to solve three major limitations of traditional AI systems:

1. **Semantic Noise**: Traditional flat vector search is noisy. Manidhar solved this by introducing **Graph-RAG**, which filters raw embeddings through physical SQLite database keys (153+ schema couplings).
2. **Layout Loss in Documents**: PDFs often lose format during raw text extraction. He designed a custom coordinate-based parser that preserves tables and multi-column headers into clean markdown.
3. **Resource Bound Crashes**: Running large vector databases local-first can easily consume 16GB+ RAM. He implemented thread-throttled worker pools in Go that limit our workspace to under **1.48GB RAM**.`
};

const GENERIC_FALLBACK_ANSWER = `I am **Vasuki Core**, Manidhar Pati's personal intelligence system.

My live connection to Gemini is currently in offline mode, but I am pre-seeded with full local records of Manidhar's work. 

Feel free to click any of the preset cards above to query my database about:
* **Manidhar's Build Portfolio**
* **The Vasuki Core Architecture**
* **Technical Skills & Stack**
* **The Janani Orchestration Layer**
* **Complex engineering problems solved**

*You can configure the \`GEMINI_API_KEY\` environment variable in the Secrets tab of AI Studio to enable fully dynamic natural-language Q&A!*`;

// Lazy initialize Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGenAIClient(): GoogleGenAI | null {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (key && key !== 'MY_GEMINI_API_KEY' && key.trim() !== '') {
      aiClient = new GoogleGenAI({
        apiKey: key,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  const server = http.createServer(app);

  app.use(express.json());

  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', engine: 'Vasuki Core v1.0.0' });
  });

  // Chat with Vasuki Core endpoint
  app.post('/api/vasuki/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: 'Message is required' });
      }

      const client = getGenAIClient();

      if (!client) {
        // Fallback: If API key is missing or not configured, return static answers based on keywords
        const query = message.toLowerCase();
        let reply = '';

        if (query.includes('built') || query.includes('portfolio') || query.includes('project') || query.includes('make')) {
          reply = STATIC_ANSWERS['built'];
        } else if (query.includes('vasuki') || query.includes('intelligence') || query.includes('memory') || query.includes('graph') || query.includes('evidence') || query.includes('telemetry') || query.includes('scale') || query.includes('number') || query.includes('show')) {
          reply = STATIC_ANSWERS['evidence'];
        } else if (query.includes('skill') || query.includes('stack') || query.includes('language') || query.includes('code')) {
          reply = STATIC_ANSWERS['skills'];
        } else if (query.includes('janani') || query.includes('mother') || query.includes('orchestrator')) {
          reply = STATIC_ANSWERS['janani'];
        } else if (query.includes('problem') || query.includes('solve') || query.includes('challenge')) {
          reply = STATIC_ANSWERS['problems'];
        } else {
          reply = GENERIC_FALLBACK_ANSWER;
        }

        // Simulate network delay for a more immersive fallback feel
        await new Promise((resolve) => setTimeout(resolve, 600));
        return res.json({ text: reply, isMock: true });
      }

      // Prepare conversation history in Gemini's format
      const contents: any[] = [];
      if (history && Array.isArray(history)) {
        history.forEach((msg: any) => {
          contents.push({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          });
        });
      }

      // Add current message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Call Gemini API (gemini-3.5-flash)
      const response = await client.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      res.json({ text: response.text || GENERIC_FALLBACK_ANSWER, isMock: false });
    } catch (error: any) {
      console.error('Gemini API Integration Error:', error);
      res.status(500).json({ error: error.message || 'Error communicating with Vasuki AI Core' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist', 'index.html'));
    });
  }

  server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

