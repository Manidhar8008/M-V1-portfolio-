import { ArrowRight, Brain, Workflow, Database, Sparkles } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export function About() {
  return (
    <section id="about-me" className="relative py-24 px-6 bg-theme-bg border-t border-theme-border">
      <div className="max-w-5xl mx-auto space-y-14">
        <div className="max-w-3xl">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Founder Story</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-theme-text-bright">From operations to AI systems.</h2>
          <p className="mt-5 text-theme-text-muted leading-relaxed">{PORTFOLIO.person.bio} The through-line is simple: take messy information and repetitive work, turn it into software, then keep improving the system around the workflow.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {[
            ['2022', 'Operations', Workflow],
            ['2023', 'Data & Analytics', Database],
            ['2024', 'Data Engineering + ML', Brain],
            ['2025', 'Business Intelligence', Sparkles],
            ['2026', 'AI Systems + Founder', ArrowRight],
          ].map(([year, label, Icon]) => (
            <div key={year as string} className="bg-theme-card border border-theme-border rounded-xl p-5">
              <span className="font-mono text-theme-accent text-xs">{year as string}</span>
              <Icon className="mt-6 text-theme-accent" size={17} />
              <p className="mt-3 text-sm text-theme-text-bright font-medium">{label as string}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-theme-card border border-theme-border rounded-xl p-6">
            <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Building</span>
            <div className="mt-4 space-y-2 text-sm text-theme-text-muted">{PORTFOLIO.now.building.map(item => <div key={item}>→ {item}</div>)}</div>
          </div>
          <div className="bg-theme-card border border-theme-border rounded-xl p-6">
            <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Exploring</span>
            <div className="mt-4 space-y-2 text-sm text-theme-text-muted">{PORTFOLIO.now.exploring.map(item => <div key={item}>→ {item}</div>)}</div>
          </div>
          <div className="bg-theme-card border border-theme-border rounded-xl p-6">
            <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Open To</span>
            <div className="mt-4 space-y-2 text-sm text-theme-text-muted">{PORTFOLIO.now.lookingFor.map(item => <div key={item}>→ {item}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
