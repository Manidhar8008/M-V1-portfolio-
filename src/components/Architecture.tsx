export function Architecture() {
  const layers = [
    "Files & PDFs",
    "Metadata Extraction",
    "SQLite Knowledge Base",
    "Memory & Relationships",
    "FastAPI Search Layer",
    "Vasuki Interface",
  ];

  return (
    <section
      id="architecture"
      className="relative py-20 px-6 bg-theme-bg border-t border-theme-border"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-3 py-1 rounded border border-theme-accent/20">
            System Architecture
          </span>

          <h2 className="mt-4 text-3xl font-medium text-theme-text-bright">
            How Vasuki Works
          </h2>

          <p className="mt-3 text-theme-text-muted max-w-2xl mx-auto text-sm">
            A local-first intelligence system that transforms files,
            documents, notes, and research into searchable memory.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((layer, index) => (
            <div
              key={layer}
              className="bg-theme-card border border-theme-border rounded-xl p-5 text-center"
            >
              <div className="font-mono text-theme-accent text-xs mb-2">
                Layer {index + 1}
              </div>

              <div className="text-theme-text-bright font-medium">
                {layer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
