import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-24 px-6 bg-theme-bg border-t border-theme-border">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Engineering Case Studies</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-theme-text-bright">What I built, why, and what changed.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-sm text-theme-text-muted leading-relaxed">Each system is presented as a problem-to-implementation story rather than a technology list.</p>
        </div>

        <div className="space-y-7">
          {PORTFOLIO.projects.map((project, index) => (
            <article key={project.name} className="bg-theme-card border border-theme-border rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-widest">
                    <span className="text-theme-accent">0{index + 1}</span>
                    <span className="text-theme-text-muted">{project.year}</span>
                    <span className="text-theme-border">•</span>
                    <span className="text-theme-text-muted">{project.status}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-theme-text-bright">{project.name}</h3>
                  <p className="text-base text-theme-text-muted leading-relaxed">{project.oneLiner}</p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-theme-border px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest text-theme-text-bright hover:border-theme-accent transition-colors"><Github size={12} /> GitHub</a>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3 mt-8">
                <div className="border border-theme-border/70 rounded-xl p-5">
                  <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Problem</span>
                  <p className="mt-3 text-sm text-theme-text-muted leading-relaxed">{project.problem}</p>
                </div>
                <div className="border border-theme-border/70 rounded-xl p-5">
                  <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Built</span>
                  <p className="mt-3 text-sm text-theme-text-muted leading-relaxed">{project.built}</p>
                </div>
                <div className="border border-theme-border/70 rounded-xl p-5">
                  <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Outcome</span>
                  <p className="mt-3 text-sm text-theme-text-muted leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map(tech => <span key={tech} className="px-2.5 py-1.5 rounded-md border border-theme-border text-[9px] font-mono uppercase tracking-wide text-theme-accent">{tech}</span>)}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center pt-2">
          <a href="#contact" className="inline-flex items-center gap-2 text-theme-accent font-mono text-[10px] uppercase tracking-widest hover:text-theme-text-bright transition-colors">Discuss a system <ArrowRight size={12} /></a>
        </div>
      </div>
    </section>
  );
}
