You are a senior React + TypeScript engineer.

Rewrite Explorer.tsx completely.

Requirements:

KEEP:
- All imports
- All TypeScript types
- PRESET_QUESTIONS
- sendMessage()
- API endpoint http://127.0.0.1:8000/api/query
- State management
- Chat functionality
- Loading indicator

FIX:
- bot messages must use sender: "vasuki"
- add timestamp to bot messages
- knowledge engine indicator should stay active for 1.5 seconds

UI GOALS:
1. Digital Archaeology theme
2. Founder Snapshot card above preset questions
3. Copy button on AI responses
4. Wider chat bubbles
5. Mobile-first layout
6. Modern recruiter-facing portfolio
7. Replace telemetry numbers with:
   - Projects: 8+
   - AI Systems: 5+
   - Python • FastAPI • React
   - Building Vasuki

CONTENT:
- Welcome message should explain that Vasuki Explorer is an interactive founder intelligence system.
- Emphasize projects:
  - Vasuki
  - Janani AI
  - AIM1000
  - Lime IoT ML Platform

DO NOT:
- Change backend API
- Remove functionality
- Break existing behavior

Return ONLY the complete Explorer.tsx file.
