import React, { useEffect } from 'react';
import { Architecture } from './components/Architecture';
import { VasukiSection } from './components/VasukiSection';
import { Projects } from './components/Projects';
import { Evidence } from './components/Evidence';
import { Timeline } from './components/Timeline';
import { Explorer } from './components/Explorer';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { EngineeringPrinciples } from './components/EngineeringPrinciples';
import { Resume } from './components/Resume';
import { Mail, Cpu, Menu, X, ArrowRight, Download } from 'lucide-react';
import { MANIDHAR_PROFILE } from './data/profile';
import { PORTFOLIO } from './data/portfolio';
import { Hero } from './components/Hero';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    document.title = `${PORTFOLIO.person.name} | Founder & AI Systems Engineer`;
  }, []);

  const navLinks = [
    { label: 'About', href: '#about-me' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-theme-bg text-theme-text-bright font-sans scroll-smooth">
      <header className="fixed top-0 left-0 w-full bg-theme-bg/85 backdrop-blur-md border-b border-theme-border/60 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2.5 group text-left">
            <div className="w-8 h-8 rounded bg-theme-bg border border-theme-border flex items-center justify-center text-theme-accent group-hover:border-theme-accent transition-all duration-200">
              <Cpu size={14} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs tracking-wider text-theme-text-bright">{PORTFOLIO.person.name.toUpperCase()}</span>
              <span className="font-mono text-[8px] text-theme-accent tracking-widest uppercase">FOUNDER • AI SYSTEMS ENGINEER</span>
            </div>
          </a>

          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map(link => <a key={link.label} href={link.href} className="text-theme-text-muted hover:text-theme-text-bright text-[10px] font-mono uppercase tracking-wider transition-colors">{link.label}</a>)}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <a href="/resume.pdf" download className="inline-flex items-center gap-1.5 border border-theme-border text-theme-text-bright text-[10px] font-mono uppercase tracking-wider px-3.5 py-2 rounded hover:border-theme-accent transition-colors"><Download size={11} /> Resume</a>
            <a href={`mailto:${MANIDHAR_PROFILE.email}`} className="flex items-center gap-1.5 bg-theme-text-bright text-theme-bg text-[10px] font-mono font-semibold uppercase tracking-wider px-4 py-2 rounded border border-theme-border hover:opacity-90 transition-all"><Mail size={12} /> Contact</a>
          </div>

          <div className="flex lg:hidden items-center"><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-theme-text-muted hover:text-theme-text-bright p-1" id="mobile-menu-toggle" aria-label="Toggle Navigation Menu">{mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}</button></div>
        </div>
        {mobileMenuOpen && <nav className="lg:hidden absolute top-full left-0 w-full bg-theme-bg border-b border-theme-border px-6 py-5 space-y-1 flex flex-col z-50 backdrop-blur-lg">
          {navLinks.map(link => <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-theme-text-muted hover:text-theme-text-bright text-xs font-mono uppercase tracking-wider py-2.5 border-b border-theme-border/50">{link.label}</a>)}
          <a href="/resume.pdf" download className="flex items-center justify-center gap-2 bg-theme-text-bright text-theme-bg font-mono text-xs font-semibold uppercase tracking-wider py-2.5 rounded mt-2"><Download size={13}/> Resume</a>
        </nav>}
      </header>

      <main className="w-full">
        <Hero />
        <About />

        <section id="proof" className="py-12 px-6 border-t border-theme-border bg-theme-bg">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
            {PORTFOLIO.metrics.map(metric => <div key={metric.label} className="bg-theme-card border border-theme-border rounded-xl p-5 text-center"><div className="text-2xl sm:text-3xl font-semibold text-theme-text-bright">{metric.value}</div><div className="mt-1 text-[9px] font-mono uppercase tracking-widest text-theme-accent">{metric.label}</div><p className="mt-2 text-[11px] text-theme-text-muted leading-relaxed">{metric.note}</p></div>)}
          </div>
        </section>

        <VasukiSection />
        <Architecture />
        <Projects />
        <CaseStudies />
        <Evidence />
        <Timeline />

        <section id="skills" className="relative py-24 px-6 bg-theme-bg border-t border-theme-border">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="text-center"><span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Technical Skills</span><h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-theme-text-bright">The stack behind the systems.</h2></div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(PORTFOLIO.skills).map(([category, skills]) => <div key={category} className="bg-theme-card border border-theme-border rounded-xl p-6"><span className="font-mono text-theme-accent text-[9px] uppercase tracking-widest">{category}</span><div className="mt-4 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="px-2.5 py-1.5 border border-theme-border rounded-lg text-xs text-theme-text-muted">{skill}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <EngineeringPrinciples />
        <Explorer />
        <Resume />

        <section id="contact" className="relative py-24 px-6 bg-theme-bg border-t border-theme-border text-center">
          <div className="relative max-w-2xl mx-auto space-y-6 z-10">
            <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">Direct Connection</span>
            <h2 className="text-4xl sm:text-5xl font-semibold text-theme-text-bright tracking-tight">Let's build the next system.</h2>
            <p className="text-sm text-theme-text-muted leading-relaxed">{PORTFOLIO.person.positioning}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a href={`mailto:${PORTFOLIO.person.email}`} className="inline-flex items-center gap-2 bg-theme-text-bright text-theme-bg px-5 py-2.5 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-widest hover:opacity-90"><Mail size={13}/> Email</a>
              <a href={PORTFOLIO.person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-theme-border text-theme-text-bright px-5 py-2.5 rounded-lg text-[10px] font-mono uppercase tracking-widest hover:border-theme-accent"><ArrowRight size={12}/> LinkedIn</a>
              <a href={PORTFOLIO.person.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-theme-border text-theme-text-bright px-5 py-2.5 rounded-lg text-[10px] font-mono uppercase tracking-widest hover:border-theme-accent"><ArrowRight size={12}/> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative w-full py-10 px-6 bg-theme-bg border-t border-theme-border text-center space-y-3 text-theme-text-muted text-[10px] sm:text-xs font-mono">
        <p>© {new Date().getFullYear()} {PORTFOLIO.person.name}. Founder & AI Systems Engineer.</p>
        <p className="text-[9px] uppercase tracking-widest">Vasuki • AI Systems • Local-first Intelligence • Automation</p>
      </footer>
    </div>
  );
}
