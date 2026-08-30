import { PORTFOLIO } from '../data/portfolio';

export function EngineeringPrinciples() {
  return (
    <section id="principles" className="relative py-24 px-6 bg-theme-bg border-t border-theme-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Engineering Principles</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-theme-text-bright">How I think about systems.</h2>
        </div>
        <div className="grid gap-px bg-theme-border border border-theme-border rounded-2xl overflow-hidden sm:grid-cols-2">
          {PORTFOLIO.principles.map((principle, index) => (
            <div key={principle} className="bg-theme-card p-6 flex gap-5 items-start">
              <span className="font-mono text-theme-accent text-xs mt-1">0{index + 1}</span>
              <p className="text-base text-theme-text-bright leading-relaxed">{principle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
