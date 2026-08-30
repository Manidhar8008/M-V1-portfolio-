import { PORTFOLIO } from '../data/portfolio';

export function Timeline() {
  return (
    <section id="experience" className="relative py-24 px-6 border-t border-theme-border bg-theme-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-3 py-1 rounded border border-theme-accent/20">Professional Experience</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-theme-text-bright">From operations to AI systems.</h2>
          <p className="mt-4 text-sm text-theme-text-muted max-w-2xl mx-auto leading-relaxed">A progression across operations, analytics, data engineering, ML, business intelligence, automation, and founder-led AI systems.</p>
        </div>
        <div className="space-y-5">
          {PORTFOLIO.experience.map((item) => (
            <article key={item.year} className="grid md:grid-cols-[90px_1fr] gap-5 bg-theme-card border border-theme-border rounded-xl p-6">
              <span className="font-mono text-theme-accent text-sm">{item.year}</span>
              <div>
                <h3 className="text-lg text-theme-text-bright font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-theme-text-muted leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
