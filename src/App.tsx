import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Evidence } from './components/Evidence';
import { Metrics } from './components/Metrics';
import { Explorer } from './components/Explorer';
import { Mail, Cpu, Brain, Menu, X, ArrowRight } from 'lucide-react';
import { MANIDHAR_PROFILE } from './data/profile';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    document.title = `${MANIDHAR_PROFILE.name} | AI Systems Engineer`;
  }, []);

  const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-theme-bg text-theme-text-bright font-sans scroll-smooth select-none">
      
      {/* Premium Sleek Navigation Header */}
      <header className="fixed top-0 left-0 w-full bg-theme-bg/80 backdrop-blur-md border-b border-theme-border/60 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Brand: Repositioned so Manidhar Pati is primary */}
          <a href="#hero" className="flex items-center gap-2.5 group text-left">
            <div className="w-8 h-8 rounded bg-theme-bg border border-theme-border flex items-center justify-center text-theme-accent group-hover:border-theme-accent transition-all duration-200">
              <Cpu size={14} className="group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-semibold text-xs tracking-wider text-theme-text-bright">
                {MANIDHAR_PROFILE.name.toUpperCase()}
              </span>
              <span className="font-mono text-[8px] text-theme-accent tracking-widest uppercase">
                AI Systems Engineer • Powered by Vasuki Core
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-theme-text-muted hover:text-theme-text-bright text-[11px] font-mono uppercase tracking-wider transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`mailto:${MANIDHAR_PROFILE.email}`}
              className="flex items-center gap-1.5 bg-theme-text-bright text-theme-bg text-[11px] font-mono font-semibold uppercase tracking-wider px-4 py-2 rounded border border-theme-border shadow hover:opacity-90 transition-all duration-200"
              id="header-contact-btn"
            >
              <Mail size={12} />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex lg:hidden items-center">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-theme-text-muted hover:text-theme-text-bright p-1"
              id="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
           <nav className="lg:hidden absolute top-full left-0 w-full bg-theme-bg border-b border-theme-border px-6 py-5 space-y-3.5 flex flex-col z-50 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-theme-text-muted hover:text-theme-text-bright text-xs font-mono uppercase tracking-wider py-2 border-b border-theme-border/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${MANIDHAR_PROFILE.email}`}
              className="flex items-center justify-center gap-2 bg-theme-text-bright text-theme-bg font-mono text-xs font-semibold uppercase tracking-wider py-2.5 rounded border border-theme-border"
            >
              <Mail size={13} />
              <span>Contact</span>
            </a>
          </nav>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="w-full">
  <Hero />

  <Projects />

  <Evidence />

  {/* Explorer coming back after backend deployment */}
  {/* <Explorer /> */}

  {/* Metrics can be restored later */}
  {/* <Metrics /> */}

  <section
    id="skills"
    className="relative py-20 px-6 bg-theme-bg border-t border-theme-border"
  >
    <div className="max-w-5xl mx-auto space-y-10">

      <div className="text-center space-y-2">
        <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-2.5 py-1 rounded border border-theme-accent/20 inline-block">
          Technical Skills
        </span>

        <h2 className="text-3xl font-medium text-theme-text-bright">
          Tools & Technologies
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {[
          'Python',
          'FastAPI',
          'React',
          'TypeScript',
          'SQLite',
          'PostgreSQL',
          'Git',
          'Linux',
          'AI Agents',
          'RAG',
          'Automation',
          'Prompt Engineering',
          'Vector Search',
          'REST APIs',
          'GitHub Actions',
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-2 border border-theme-border rounded-lg text-sm text-theme-text-muted"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  </section>

  <section
    className="relative py-20 px-6 bg-theme-bg border-t border-theme-border text-center"
    id="contact"
  >
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-theme-accent-subtle blur-[100px] pointer-events-none opacity-20" />

    <div className="relative max-w-xl mx-auto space-y-6 z-10">

      <div className="space-y-2">
        <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest block">
          Technical Connections
        </span>

        <h2 className="text-3xl font-medium text-theme-text-bright tracking-tight">
          Establish Connection
        </h2>

        <p className="text-theme-text-muted text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
          Open for systems engineering, AI infrastructure, and local-first retrieval roles.
        </p>
      </div>

      <div className="pt-2">
        <a
          href={`mailto:${MANIDHAR_PROFILE.email}`}
          className="inline-flex items-center gap-2 bg-theme-text-bright hover:opacity-90 text-theme-bg font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-lg border border-theme-border shadow transition-all duration-200 uppercase font-mono tracking-wider"
        >
          <Mail size={14} />
          <span>Initiate Contact (Email)</span>
          <ArrowRight size={14} className="text-theme-bg" />
        </a>
      </div>

      <div className="flex justify-center items-center gap-6 pt-4 text-theme-text-muted font-mono text-[9px] sm:text-[10px] uppercase tracking-wider">
        <a
          href={MANIDHAR_PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-theme-text-bright transition-colors"
        >
          LinkedIn
        </a>

        <span>•</span>

        <a
          href={MANIDHAR_PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-theme-text-bright transition-colors"
        >
          GitHub
        </a>
      </div>

    </div>
  </section>
</main>
<footer className="relative w-full py-10 px-6 bg-theme-bg border-t border-theme-border text-center space-y-3.5 text-theme-text-muted text-[11px] sm:text-xs font-mono">
  <p className="tracking-wide">
    &copy; {new Date().getFullYear()} {MANIDHAR_PROFILE.name}. Local Retrieval and Indexing Systems.
  </p>

  <p className="text-[9px] text-theme-border-subtle uppercase tracking-widest flex items-center justify-center gap-1.5">
    <Brain size={12} className="text-theme-border-subtle" />
    <span>Vasuki Core v1.0.0 • Systems Engineering Portfolio</span>
  </p>
</footer>
    </div>
  );
}





