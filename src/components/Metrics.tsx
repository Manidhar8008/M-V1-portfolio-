import React from 'react';
import { VASUKI_METRICS } from '../data/profile';
import { FolderOpen, Cpu, Network, Brain, FileText, Layers } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  FolderOpen: FolderOpen,
  Cpu: Cpu,
  Network: Network,
  Brain: Brain,
  FileText: FileText,
  Layers: Layers,
};

export function Metrics() {
  return (
    <section className="relative py-20 px-6 bg-theme-bg border-t border-theme-border" id="evidence-section">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Sleek Minimalist Heading */}
        <div className="space-y-1 text-center">
          <span className="font-mono text-theme-accent text-[10px] uppercase tracking-widest">
            Verified Index Telemetry
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-theme-text-bright tracking-tight">
            Evidence, Not Claims
          </h2>
        </div>

        {/* Premium Clean Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" id="evidence-grid">
          {VASUKI_METRICS.map((metric, idx) => {
            const Icon = ICON_MAP[metric.icon] || Cpu;
            return (
              <div
                key={idx}
                className="card-carved relative overflow-hidden p-6 rounded-lg bg-theme-card border border-theme-border flex flex-col justify-between space-y-2 h-[130px] text-center items-center"
              >
                <div className="w-7 h-7 rounded-full bg-theme-bg flex items-center justify-center border border-theme-border text-theme-text-muted">
                  <Icon size={12} className="text-theme-accent" />
                </div>

                <div className="space-y-0.5">
                  <div 
                    className="text-2xl sm:text-3xl font-bold text-theme-text-bright tracking-tight font-sans"
                    id={`metric-value-${idx}`}
                  >
                    {metric.value}
                  </div>
                  <span className="text-[10px] font-mono text-theme-text-muted uppercase tracking-widest block font-medium">
                    {metric.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
