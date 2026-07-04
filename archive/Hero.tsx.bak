import React from 'react';
import { Cpu, ArrowRight, User } from 'lucide-react';
import { MANIDHAR_PROFILE } from '../data/profile';

export function Hero() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[65vh] lg:min-h-[75vh] flex flex-col justify-center items-center px-6 pt-24 pb-8 overflow-hidden bg-theme-bg" id="hero">
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#111115_1px,transparent_1px),linear-gradient(to_bottom,#111115_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]" />
      
      {/* Ambient Blur Glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[450px] h-[220px] rounded-full bg-theme-accent-subtle blur-[130px] pointer-events-none" />

      <div className="relative max-w-4xl w-full text-center space-y-6 z-10 flex flex-col items-center">
        
        {/* Subtitle Badge emphasizing powered by Vasuki Core */}
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 bg-theme-bg/85 border border-theme-border rounded-md text-theme-text-muted text-[10px] font-mono tracking-widest uppercase"
          id="hero-badge"
        >
          <Cpu size={11} className="text-theme-accent animate-pulse" />
          <span>System Link Active // Powered by Vasuki Core</span>
        </div>

        {/* Primary Focus: Manidhar Pati, AI Systems Engineer */}
        <div className="space-y-3">
          <h1 
            className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-theme-text-bright leading-[1.1] max-w-3xl mx-auto"
            id="hero-title"
          >
            {MANIDHAR_PROFILE.name}
            <span className="text-theme-accent font-medium text-2xl sm:text-4xl md:text-5xl mt-2 block tracking-tight">
              AI Systems Engineer
            </span>
          </h1>
          
          <p 
            className="text-sm sm:text-base md:text-lg text-theme-text-muted max-w-2xl mx-auto leading-relaxed font-sans font-normal"
            id="hero-desc"
          >
            I built <strong className="text-theme-text-bright font-medium">Vasuki</strong>—a secure, local-first intelligence system that ingests my entire digital footprint (172,076+ files and screens) into an offline knowledge graph. Use the terminal below to ask my core database anything about my skills, system architecture, or background.
          </p>
        </div>

        {/* CTA Group with high-curiosity buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full pt-2 max-w-md"
          id="hero-cta-group"
        >
          <button
            onClick={() => handleScrollToSection('vasuki-explorer')}
            className="group relative flex items-center gap-2 bg-theme-text-bright hover:opacity-90 text-theme-bg font-semibold px-6 py-2.5 rounded-lg border border-theme-border shadow transition-all duration-200 transform active:scale-[0.98] cursor-pointer w-full sm:w-auto justify-center text-xs font-mono uppercase tracking-wider"
            id="cta-explore-vasuki"
          >
            Ask My System
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200 text-theme-bg" />
          </button>
          
          <button
            onClick={() => handleScrollToSection('about-me')}
            className="flex items-center gap-2 bg-theme-bg/60 hover:bg-theme-bg text-theme-text-muted hover:text-theme-text-bright px-6 py-2.5 rounded-lg border border-theme-border transition-all duration-200 cursor-pointer w-full sm:w-auto justify-center text-xs font-mono uppercase tracking-wider"
            id="cta-about-me"
          >
            <User size={13} className="text-theme-accent" />
            <span>About Me</span>
          </button>
        </div>

        {/* Dynamic Telemetry Banner */}
        <div className="pt-6 font-mono text-[9px] text-theme-text-muted tracking-widest uppercase flex flex-wrap items-center justify-center gap-x-5 gap-y-2 select-none">
          <span>HNSW_VEC: ACTIVE (384-DIM)</span>
          <span className="text-theme-border">•</span>
          <span>LATENCY: &lt;5.2ms</span>
          <span className="text-theme-border">•</span>
          <span>RECORDS: 172,076</span>
          <span className="text-theme-border">•</span>
          <span>MEM_BOUND: &lt;1.48GB RAM</span>
        </div>
      </div>

      {/* Subtle line separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-theme-border" />
    </section>
  );
}
