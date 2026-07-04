import React from 'react';

export function Projects() {
  const projects = [
    {
      title: 'Vasuki',
      description:
        'Personal Intelligence System that transforms files, documents, and digital activity into searchable knowledge.',
      stack: 'Python • FastAPI • SQLite • React • TypeScript',
    },
    {
      title: 'Janani AI',
      description:
        'AI workflow platform focused on automation, content systems, and business intelligence.',
      stack: 'Python • AI Agents • Automation',
    },
    {
      title: 'Knowledge Engine',
      description:
        'Interactive portfolio explorer designed to showcase retrieval and reasoning systems.',
      stack: 'React • TypeScript • FastAPI',
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

              <p className="font-mono text-[10px] uppercase tracking-wider text-theme-accent">
                {project.stack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
