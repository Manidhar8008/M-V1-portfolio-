import { Download, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolio';

export function Resume() {
  return (
    <section id="resume" className="relative py-24 px-6 bg-theme-bg border-t border-theme-border">
      <div className="max-w-4xl mx-auto grid gap-10 lg:grid-cols-[1.3fr_0.7fr] items-center">
        <div>
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Engagement</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-theme-text-bright">Looking for systems worth building.</h2>
          <p className="mt-5 text-sm text-theme-text-muted leading-relaxed max-w-2xl">Open to AI systems engineering, AI infrastructure, applied AI, founding-engineer, and product-building opportunities where software has measurable leverage.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-theme-text-bright text-theme-bg px-5 py-2.5 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"><Download size={13} /> Download Resume</a>
            <a href={`mailto:${PORTFOLIO.person.email}`} className="inline-flex items-center gap-2 border border-theme-border text-theme-text-bright px-5 py-2.5 rounded-lg text-[10px] font-mono uppercase tracking-widest hover:border-theme-accent transition-colors"><Mail size={13} /> Email</a>
          </div>
        </div>

        <div className="bg-theme-card border border-theme-border rounded-2xl p-6">
          <span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">Direct Channels</span>
          <div className="mt-5 space-y-3">
            <a href={PORTFOLIO.person.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-theme-border rounded-lg p-3 text-sm text-theme-text-muted hover:text-theme-text-bright hover:border-theme-accent transition-colors"><span className="flex items-center gap-2"><Linkedin size={14} /> LinkedIn</span><ArrowRight size={13} /></a>
            <a href={PORTFOLIO.person.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border border-theme-border rounded-lg p-3 text-sm text-theme-text-muted hover:text-theme-text-bright hover:border-theme-accent transition-colors"><span className="flex items-center gap-2"><Github size={14} /> GitHub</span><ArrowRight size={13} /></a>
            <a href={`mailto:${PORTFOLIO.person.email}`} className="flex items-center justify-between border border-theme-border rounded-lg p-3 text-sm text-theme-text-muted hover:text-theme-text-bright hover:border-theme-accent transition-colors"><span className="flex items-center gap-2"><Mail size={14} /> {PORTFOLIO.person.email}</span><ArrowRight size={13} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
