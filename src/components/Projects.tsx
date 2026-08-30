import { Github, ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 bg-theme-bg border-t border-theme-border">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Flagship Projects</span>
          <h2 className="text-3xl font-medium text-theme-text-bright">Systems I Have Built</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PORTFOLIO.projects.map((project) => (
            <article key={project.name} className="bg-theme-card border border-theme-border rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium text-theme-text-bright">{project.name}</h3>
                <span className="text-[8px] font-mono uppercase tracking-widest text-theme-accent border border-theme-border px-2 py-1 rounded">{project.status}</span>
              </div>
              <p className="text-sm text-theme-text-muted leading-relaxed">{project.oneLiner}</p>
              <p className="text-[11px] text-theme-text-muted leading-relaxed"><span className="text-theme-text-bright font-medium">Role:</span> {project.role}</p>
              <div className="flex flex-wrap gap-2 pt-1">{project.stack.map(tech => <span key={tech} className="px-2 py-1 text-[9px] font-mono uppercase tracking-wide rounded border border-theme-border text-theme-accent">{tech}</span>)}</div>
              <div className="flex items-center gap-4 pt-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-theme-accent hover:text-theme-text-bright transition-colors"><Github size={12} /> Repository</a>
                <a href="#case-studies" className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-theme-text-muted hover:text-theme-text-bright transition-colors">Case Study <ArrowRight size={11} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
