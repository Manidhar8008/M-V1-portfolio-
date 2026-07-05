import React from 'react';

export function Projects() {
  const projects = [
    {
      title: 'JAN AI',
      github: 'https://github.com/Manidhar8008/Startup-borardcasting-system',
      description:
        'Creator-intelligence OS that ingests research, scans live signals, ranks topics by business value, and turns them into platform-specific content through a controlled multi-agent pipeline.',
      stack: [
        'Multi-agent orchestration',
        'Gemini',
        'FastAPI',
        'ChromaDB',
        'feedparser',
        'BeautifulSoup',
      ],
    },
    {
      title: 'AIM1000',
      github: 'https://github.com/Manidhar8008/AIM1000',
      description:
        'Application autopilot that scrapes job leads, generates tailored resumes from a master template, and packages each role into a mission-control workflow for faster submission.',
      stack: [
        'pandas',
        'python-docx',
        'Google Generative AI',
        'CSV pipelines',
        'HTML mission tracker',
        'Windows automation',
      ],
    },
    {
      title: 'Vasuki v2',
      github: 'https://github.com/Manidhar8008/vasuki-v2',
      description:
        'Local-first reasoning layer that searches personal memory, routes commands through a service registry, and returns auditable answers from a verified SQLite-backed knowledge base.',
      stack: [
        'SQLite',
        'Memory search',
        'Command router',
        'Audit logging',
        'Response composer',
        'Local file search',
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-theme-bg border-t border-theme-border"
    >
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">
            Flagship Projects
          </span>

          <h2 className="text-3xl font-medium text-theme-text-bright">
            Systems I Have Built
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-theme-card border border-theme-border rounded-xl p-6 space-y-4"
            >
              <h3 className="text-lg font-medium text-theme-text-bright">
                {project.title}
              </h3>

              <p className="text-sm text-theme-text-muted leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[10px] font-mono uppercase tracking-widest text-theme-accent hover:text-theme-text-bright transition-colors"
              >
                View Repository →
              </a>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-[9px] font-mono uppercase tracking-wide rounded border border-theme-border text-theme-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
