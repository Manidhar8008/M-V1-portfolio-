import React, { useState, useEffect, useRef } from 'react';
import { PRESET_QUESTIONS } from '../data/profile';
import { Message, PresetQuestion } from '../types';
import { Send, Brain, Cpu, Code, Zap, Sparkles, Trash2, Key, Terminal, RefreshCw, Layers, Network } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  Cpu: Cpu,
  Brain: Brain,
  Sparkles: Sparkles,
  Code: Code,
  Zap: Zap,
  Layers: Layers,
  Network: Network,
};

export function Explorer() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'vasuki',
      text: `🏺 Welcome to Vasuki Explorer

This interactive portfolio system lets you explore Manidhar's engineering work, architecture decisions, AI systems, and automation workflows.

Suggested topics:

• Flagship Projects
• Vasuki Architecture
• Engineering Experience
• Business Impact
• Why Hire Manidhar

I maintain a structured knowledge base of his projects and technical philosophy. Click an Explorer Card below to dive into a topic, or type your own question.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isKnowledgeEngineActive, setIsKnowledgeEngineActive] = useState<boolean | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to chat bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handlePresetClick = async (preset: PresetQuestion) => {
    if (isLoading) return;
    sendMessage(preset.question);
  };

  const sendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);
    setIsKnowledgeEngineActive(true);
   
    try {
      const response = await fetch('http://127.0.0.1:8000/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: textToSend }),
      });
      
      // comment fetch temporarily
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      const botMsg: Message = {
        id: Date.now().toString(),
        sender: 'vasuki',
        text: data.answer ?? data.message ?? 'No answer available',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error(err);
      const errorMsg: Message = {
        id: `error-${Date.now()}`,
        sender: 'vasuki',
        text: `⚠️ **Connection Error**: Unable to retrieve information. ${err.message || 'Please try again later.'}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
      setIsKnowledgeEngineActive(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage(inputValue);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'vasuki',
        text: `Console cleared. I am **Vasuki Core**. Ready to explore projects, architecture, engineering decisions, and AI systems. What would you like to know?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-theme-bg" id="vasuki-explorer">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Sleek Minimal Heading */}
        <div className="space-y-2 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-theme-accent font-mono text-[10px] uppercase tracking-widest bg-theme-accent-subtle px-2.5 py-1 rounded border border-theme-accent/20">
            <Terminal size={12} className="animate-pulse" />
            <span>Portfolio Explorer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-medium text-theme-text-bright tracking-tight">
            Vasuki Explorer
          </h2>
          <p className="text-theme-text-muted text-xs sm:text-sm leading-relaxed">
            Discover Manidhar's engineering work and technical decisions through interactive queries.
          </p>
        </div>

        {/* Preset Selector Grid */}
        <div className="space-y-3">
          <h4 className="text-theme-text-muted font-mono text-[9px] uppercase tracking-wider pl-1 select-none">
            Explore Topics
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5" id="preset-questions-grid">
            {PRESET_QUESTIONS.map((preset) => {
              const Icon = ICON_MAP[preset.icon] || Cpu;
              return (
                <button
                  key={preset.id}
                  onClick={() => handlePresetClick(preset)}
                  disabled={isLoading}
                  className="card-carved flex flex-col items-start p-3 rounded-lg bg-theme-card border border-theme-border hover:border-theme-accent/50 transition-all duration-200 text-left cursor-pointer disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] group"
                  id={`preset-card-${preset.id}`}
                >
                  <div className="w-6 h-6 rounded bg-theme-bg flex items-center justify-center text-theme-text-muted group-hover:text-theme-accent border border-theme-border transition-colors mb-2.5">
                    <Icon size={11} />
                  </div>
                  <h3 className="text-theme-text-bright text-[10px] sm:text-[11px] font-medium tracking-tight group-hover:text-theme-text-bright mb-1 line-clamp-2 leading-snug">
                    {preset.question}
                  </h3>
                  <span className="text-theme-text-muted font-mono text-[8px] uppercase tracking-wider group-hover:text-theme-accent transition-colors">
                    Learn More
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chat Console Panel */}
        <div
          className="card-carved rounded-lg border border-theme-border bg-theme-card overflow-hidden flex flex-col h-[480px] sm:h-[520px] shadow-2xl"
          id="explorer-chat-panel"
        >
          {/* Console Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-theme-border bg-theme-card">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded bg-theme-bg flex items-center justify-center text-theme-accent border border-theme-border">
                  <Brain size={14} />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-theme-bg flex items-center justify-center">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      isKnowledgeEngineActive === true
                        ? 'bg-green-500'
                        : isKnowledgeEngineActive === false
                        ? 'bg-amber-500'
                        : 'bg-theme-accent animate-pulse'
                    }`}
                  />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-theme-text-bright font-medium text-xs leading-none">vasuki_core</h3>
                <span className="text-theme-text-muted text-[8px] sm:text-[9px] font-mono tracking-wider">
                  {isKnowledgeEngineActive === true
                    ? 'PROCESSING QUERY...'
                    : isKnowledgeEngineActive === false
                    ? 'ENGINEERING KNOWLEDGE READY'
                    : 'READY FOR EXPLORATION'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={clearChat}
                className="p-1.5 rounded bg-theme-bg hover:bg-theme-bg/80 text-theme-text-muted hover:text-theme-text-bright transition-colors cursor-pointer border border-theme-border"
                title="Clear terminal history"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>

          {/* Technical snapshot strip */}
          <div className="px-4 sm:px-6 py-2 border-b border-theme-border bg-theme-bg/40 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[8px] sm:text-[9px] text-theme-text-muted select-none">
            <span className="text-theme-text-bright font-semibold">TECHNICAL SNAPSHOT</span>
            <span>Systems: 8+</span>
            <span className="text-theme-border-subtle">|</span>
            <span>Architectures: 5+</span>
            <span className="text-theme-border-subtle">|</span>
            <span>Python • FastAPI • React • TypeScript</span>
          </div>

          {/* Messages Stream */}
          <div className="p-4 sm:p-6 overflow-y-auto flex-grow space-y-4 bg-theme-bg/95" id="chat-messages-container">
            {messages.map((msg) => {
              const isUser = msg.sender === 'user';
              return (
                <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] rounded-lg px-4 sm:px-5 py-3 text-xs sm:text-sm leading-relaxed border transition-all ${
                      isUser
                        ? 'bg-theme-card border-theme-border text-theme-text-bright rounded-tr-none'
                        : 'bg-theme-bg border-theme-border text-theme-text-bright rounded-tl-none'
                    }`}
                  >
                    {/* Bot Title Tag */}
                    {!isUser && (
                      <div className="flex items-center gap-1.5 text-theme-accent font-mono text-[8px] sm:text-[9px] uppercase tracking-widest mb-1.5 select-none">
                        <Terminal size={10} />
                        <span>VASUKI RESPONSE</span>
                      </div>
                    )}

                    {/* Message Body */}
                    <div className="whitespace-pre-line text-left leading-relaxed font-sans text-xs sm:text-sm text-theme-text-bright">
                      {msg.text.split('\n').map((paragraph, pIdx) => {
                        // Very simple markdown bold parser
                        let parsedText: React.ReactNode[] = [paragraph];
                        if (paragraph.includes('**')) {
                          const parts = paragraph.split('**');
                          parsedText = parts.map((part, partIdx) =>
                            partIdx % 2 === 1 ? (
                              <strong
                                key={partIdx}
                                className="text-theme-text-bright font-semibold border-b border-theme-accent/20 pb-0.5"
                              >
                                {part}
                              </strong>
                            ) : (
                              part
                            )
                          );
                        }

                        // Parse list items
                        if (paragraph.startsWith('* ') || paragraph.startsWith('- ')) {
                          return (
                            <div key={pIdx} className="pl-4 relative my-1 text-theme-text-muted text-xs sm:text-sm">
                              <span className="absolute left-0 text-theme-accent font-mono">•</span>
                              <span>{paragraph.slice(2)}</span>
                            </div>
                          );
                        }

                        return (
                          <p key={pIdx} className="mb-1.5 last:mb-0 leading-relaxed text-theme-text-muted">
                            {parsedText}
                          </p>
                        );
                      })}
                    </div>

                    <div className="text-[8px] sm:text-[9px] text-theme-text-muted font-mono mt-1.5 text-right select-none">
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-theme-bg border border-theme-border rounded-lg rounded-tl-none px-4 py-3">
                  <div className="flex items-center gap-1.5 text-theme-accent font-mono text-[8px] sm:text-[9px] uppercase tracking-widest mb-1 select-none">
                    <RefreshCw size={10} className="animate-spin" />
                    <span>PROCESSING QUERY...</span>
                  </div>
                  <div className="flex items-center gap-1 py-1">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-theme-accent/80 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-theme-accent/60 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Panel */}
          <div className="p-3 sm:p-4 border-t border-theme-border bg-theme-card">
            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
                placeholder="Ask about projects, architecture, systems, skills..."
                className="flex-grow bg-theme-bg border border-theme-border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-theme-text-bright placeholder-theme-text-muted/60 focus:outline-none focus:border-theme-accent/40 disabled:opacity-50 transition-colors font-mono"
                id="explorer-input-box"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={isLoading || !inputValue.trim()}
                className="bg-theme-text-bright hover:opacity-90 text-theme-bg px-4 sm:px-5 rounded-lg font-mono text-xs font-semibold border border-theme-border transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0 flex items-center justify-center"
                id="explorer-send-btn"
              >
                <Send size={12} className="mr-1.5" />
                <span>QUERY</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 sm:px-6 py-2 bg-theme-card border-t border-theme-border flex flex-col sm:flex-row justify-between items-center text-theme-text-muted text-[8px] sm:text-[9px] font-mono gap-1 select-none">
            <span className="flex items-center gap-1">
              <Key size={10} className="text-theme-border" />
              <span>PERSONAL INTELLIGENCE PLATFORM</span>
            </span>
            <span>MODE: ENGINEERING EXPLORATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
