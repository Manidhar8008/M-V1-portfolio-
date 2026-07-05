import React from 'react';

export function Evidence() {
  const evidence = [
    {
      title: 'Knowledge Infrastructure',
      value: '170K+',
      description:
        'Indexed and organized files into searchable knowledge systems using SQLite, metadata extraction, and retrieval pipelines.',
    },
    {
      title: 'AI Systems Built',
      value: '3',
      description:
        'Designed and shipped production-scale AI applications including Vasuki, AIM1000, and JAN AI.',
    },
    {
      title: 'Documents Processed',
      value: '595+',
      description:
        'Processed PDFs, notes, and research documents into structured information and searchable memory.',
    },
    {
      title: 'Core Stack',
      value: 'React + Python',
      description:
        'Built full-stack systems using React, TypeScript, FastAPI, SQLite, PostgreSQL, and automation workflows.',
    },
  ];

  return (
    <section
      id="evidence"
      className="relative py-20 px-6 bg-theme-bg border-t border-theme-border"
    >
      <div className="max-w-5xl mx-auto space-y-10">

        <div className="text-center space-y-2">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-2.5 py-1 rounded border border-theme-accent/20 inline-block">
            Engineering Evidence
          </span>

          <h2 className="text-3xl font-medium text-theme-text-bright">
            Built From Real Systems
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {evidence.map((item) => (
            <div
              key={item.title}
              className="bg-theme-card border border-theme-border rounded-xl p-6 space-y-4"
            >
              <div className="space-y-1">
                <p className="font-mono text-theme-accent text-xs uppercase tracking-widest">
                  {item.title}
                </p>

                <h3 className="text-3xl font-semibold text-theme-text-bright">
                  {item.value}
                </h3>
              </div>

              <p className="text-sm text-theme-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
