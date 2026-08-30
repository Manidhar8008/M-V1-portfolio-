import React, { useEffect, useRef, useState } from 'react';
import { PRESET_QUESTIONS } from '../data/profile';
import { EXPLORER_FALLBACKS } from '../data/portfolio';
import { Message, PresetQuestion } from '../types';
import { Send, Brain, Cpu, Trash2, Terminal, RefreshCw } from 'lucide-react';

const ICON_MAP: Record<string, any> = { Cpu, Brain };

export function Explorer() {
  const [messages, setMessages] = useState<Message[]>([{ id: 'welcome', sender: 'vasuki', text: `🏺 Vasuki Explorer\n\nExplore projects, architecture, engineering experience, business impact, and why to work with Manidhar.\n\nThe console uses a public-safe knowledge fallback when the private local retrieval service is unavailable.`, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'fallback' | 'live'>('fallback');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, isLoading]);

  const fallbackAnswer = (query: string) => {
    const normalized = query.toLowerCase();
    const hit = Object.entries(EXPLORER_FALLBACKS).find(([key]) => normalized.includes(key) || key.includes(normalized));
    if (hit) return hit[1];
    if (normalized.includes('vasuki')) return EXPLORER_FALLBACKS['explain vasuki architecture'];
    if (normalized.includes('project')) return EXPLORER_FALLBACKS['show flagship projects'];
    if (normalized.includes('experience')) return EXPLORER_FALLBACKS['show ai engineering experience'];
    if (normalized.includes('hire')) return EXPLORER_FALLBACKS['why hire manidhar?'];
    return 'Ask about Vasuki, flagship projects, architecture, engineering experience, business impact, or why to hire Manidhar.';
  };

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;
    setMessages(prev => [...prev, { id: `user-${Date.now()}`, sender: 'user', text: trimmed, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/query', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ query: trimmed }) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setMode('live');
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'vasuki', text: data.answer ?? data.message ?? 'No answer available', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch {
      setMode('fallback');
      setMessages(prev => [...prev, { id: `fallback-${Date.now()}`, sender: 'vasuki', text: `PUBLIC FALLBACK\n\n${fallbackAnswer(trimmed)}`, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } finally { setIsLoading(false); }
  };

  const clearChat = () => setMessages([{ id: 'welcome-reset', sender: 'vasuki', text: 'Console cleared. Ask about projects, architecture, experience, impact, or Vasuki.', timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-theme-bg border-t border-theme-border" id="vasuki-explorer">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-theme-accent font-mono text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-2.5 py-1 rounded border border-theme-accent/20"><Terminal size={12}/><span>Portfolio Explorer</span></div>
          <h2 className="text-3xl font-semibold text-theme-text-bright tracking-tight">Ask about my systems.</h2>
          <p className="text-theme-text-muted text-xs sm:text-sm leading-relaxed">Interactive retrieval when available. Deterministic public knowledge when it is not.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {PRESET_QUESTIONS.map((preset: PresetQuestion) => {
            const Icon = ICON_MAP[preset.icon] || Cpu;
            return <button key={preset.id} onClick={() => sendMessage(preset.question)} disabled={isLoading} className="flex flex-col items-start p-3 rounded-lg bg-theme-card border border-theme-border hover:border-theme-accent/50 transition-all text-left disabled:opacity-50"><Icon size={13} className="text-theme-accent mb-2"/><span className="text-theme-text-bright text-[10px] sm:text-[11px] leading-snug">{preset.question}</span></button>;
          })}
        </div>

        <div className="rounded-xl border border-theme-border bg-theme-card overflow-hidden flex flex-col h-[520px] shadow-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-theme-border">
            <div className="flex items-center gap-3"><div className="w-8 h-8 rounded bg-theme-bg flex items-center justify-center text-theme-accent border border-theme-border"><Brain size={14}/></div><div><h3 className="text-theme-text-bright font-medium text-xs">vasuki_core</h3><span className="text-theme-text-muted text-[8px] font-mono">MODE: {mode === 'live' ? 'PUBLIC API' : 'SAFE FALLBACK'}</span></div></div>
            <button onClick={clearChat} className="p-1.5 rounded bg-theme-bg text-theme-text-muted border border-theme-border"><Trash2 size={12}/></button>
          </div>
          <div className="px-4 sm:px-6 py-2 border-b border-theme-border bg-theme-bg/40 font-mono text-[8px] text-theme-text-muted">PUBLIC PORTFOLIO KNOWLEDGE • NO PRIVATE PERSONAL DATA EXPOSED</div>
          <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-4 bg-theme-bg/95">
            {messages.map(msg => <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[90%] rounded-lg px-4 py-3 text-xs sm:text-sm leading-relaxed border ${msg.sender === 'user' ? 'bg-theme-card border-theme-border text-theme-text-bright rounded-tr-none' : 'bg-theme-bg border-theme-border text-theme-text-bright rounded-tl-none'}`}>{msg.sender !== 'user' && <div className="flex items-center gap-1.5 text-theme-accent font-mono text-[8px] uppercase tracking-widest mb-1.5"><Terminal size={10}/><span>VASUKI RESPONSE</span></div>}<div className="whitespace-pre-line text-left text-theme-text-muted">{msg.text}</div><div className="text-[8px] text-theme-text-muted font-mono mt-1.5 text-right">{msg.timestamp}</div></div></div>)}
            {isLoading && <div className="flex justify-start"><div className="bg-theme-bg border border-theme-border rounded-lg px-4 py-3"><div className="flex items-center gap-1.5 text-theme-accent font-mono text-[8px] uppercase tracking-widest"><RefreshCw size={10} className="animate-spin"/> PROCESSING</div></div></div>}
            <div ref={chatEndRef}/>
          </div>
          <div className="p-3 sm:p-4 border-t border-theme-border"><div className="flex gap-2"><input value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={e => { if (e.key === 'Enter') sendMessage(inputValue); }} disabled={isLoading} placeholder="Ask about projects, architecture, experience..." className="flex-grow bg-theme-bg border border-theme-border rounded-lg px-3 py-2.5 text-xs text-theme-text-bright placeholder-theme-text-muted/60 focus:outline-none focus:border-theme-accent/40 font-mono"/><button onClick={() => sendMessage(inputValue)} disabled={isLoading || !inputValue.trim()} className="bg-theme-text-bright text-theme-bg px-4 rounded-lg font-mono text-xs font-semibold disabled:opacity-40"><Send size={12} className="inline mr-1.5"/>QUERY</button></div></div>
        </div>
      </div>
    </section>
  );
}
