export function VasukiSection() {
  return (
    <section
      id="vasuki"
      className="relative py-20 px-6 border-t border-theme-border bg-theme-bg"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-3 py-1 rounded border border-theme-accent/20">
            Flagship System
          </span>

          <h2 className="mt-4 text-3xl font-medium text-theme-text-bright">
            Vasuki AI
          </h2>

          <p className="mt-4 text-theme-text-muted max-w-3xl mx-auto text-sm">
            A local-first personal intelligence system designed to transform
            files, documents, screenshots, notes, and memories into searchable
            knowledge and actionable insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="bg-theme-card border border-theme-border rounded-xl p-6">
            <h3 className="text-lg font-medium text-theme-text-bright mb-4">
              What Vasuki Does
            </h3>

            <ul className="space-y-3 text-sm text-theme-text-muted">
              <li>✓ Indexes local files and documents</li>
              <li>✓ Extracts metadata and knowledge</li>
              <li>✓ Builds searchable memory</li>
              <li>✓ Creates timelines from activity</li>
              <li>✓ Connects concepts through relationships</li>
              <li>✓ Answers questions using personal context</li>
            </ul>
          </div>

          <div className="bg-theme-card border border-theme-border rounded-xl p-6">
            <h3 className="text-lg font-medium text-theme-text-bright mb-4">
              Current Scale
            </h3>

            <div className="space-y-4">

              <div>
                <div className="text-3xl font-semibold text-theme-text-bright">
                  170K+
                </div>
                <div className="text-sm text-theme-text-muted">
                  Files Indexed
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold text-theme-text-bright">
                  595+
                </div>
                <div className="text-sm text-theme-text-muted">
                  Documents Processed
                </div>
              </div>

              <div>
                <div className="text-3xl font-semibold text-theme-text-bright">
                  SQLite
                </div>
                <div className="text-sm text-theme-text-muted">
                  Local Knowledge Engine
                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="mt-8 bg-theme-card border border-theme-border rounded-xl p-6">
          <h3 className="text-lg font-medium text-theme-text-bright mb-4">
            System Architecture
          </h3>

          <pre className="text-xs sm:text-sm text-theme-text-muted overflow-x-auto">
{`Files / PDFs / Screenshots
            ↓
      File Indexer
            ↓
         SQLite
            ↓
    Knowledge Graph
            ↓
      Memory Engine
            ↓
      Search Layer
            ↓
      AI Reasoning`}
          </pre>
        </div>

      </div>
    </section>
  );
}
