import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUp,
  Bot,
  Brain,
  Code,
  Cpu,
  Layers,
  MessageCircle,
  Network,
  RefreshCw,
  Search,
  Send,
  Sparkles,
  Trash2,
  Zap,
} from "lucide-react";
import { PRESET_QUESTIONS } from "../data/profile";
import { searchVasukiKnowledge } from "../data/vasukiKnowledge";
import type { Message, PresetQuestion } from "../types";

const ICON_MAP: Record<string, typeof Cpu> = {
  Cpu,
  Brain,
  Sparkles,
  Code,
  Zap,
  Layers,
  Network,
};

const QUICK_QUESTIONS = [
  "What is Vasuki OS?",
  "Explain the six Vasuki agents",
  "What is AIM1000?",
  "Explain the MW.AI UPVC workflow",
];

function getTimestamp(): string {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function createWelcomeMessage(): Message {
  return {
    id: "welcome",
    sender: "vasuki",
    text:
      "I’m Vasuki Explorer — the public portfolio knowledge interface. Ask about projects, architecture, engineering tools, or how the systems work.\n\nI search a curated public knowledge index bundled with this website, so the Explorer works without a local server. Private files and personal Vasuki memory are not exposed here.",
    timestamp: getTimestamp(),
  };
}

function renderMessage(text: string): React.ReactNode[] {
  return text.split("\n").map((line, index) => {
    if (!line.trim()) return <div key={index} className="h-2" />;

    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const content = parts.map((part, partIndex) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={partIndex} className="font-semibold text-theme-text-bright">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );

    if (line.startsWith("- ") || line.startsWith("• ")) {
      return (
        <div key={index} className="relative my-1 pl-4 text-theme-text-muted">
          <span className="absolute left-0 text-theme-accent">•</span>
          {content}
        </div>
      );
    }

    return (
      <p key={index} className="mb-1.5 leading-relaxed text-theme-text-muted">
        {content}
      </p>
    );
  });
}

export function Explorer() {
  const [messages, setMessages] = useState<Message[]>([createWelcomeMessage()]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isExplorerVisible, setIsExplorerVisible] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 360);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById("vasuki-explorer");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsExplorerVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const sendMessage = (value: string) => {
    const query = value.trim();
    if (!query || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: getTimestamp(),
    };

    setMessages((current) => [...current, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const matches = searchVasukiKnowledge(query, 2);
    const response = matches.length
      ? [
          `Found ${matches.length} relevant record${matches.length === 1 ? "" : "s"} in the public portfolio index.`,
          "",
          ...matches.flatMap((record) => [`**${record.title}**`, record.answer, ""]),
          "Ask a follow-up or choose another topic to continue.",
        ].join("\n")
      : "I couldn’t find a close match in the public portfolio index. Try asking about Vasuki, its six agents, flagship projects, AIM1000, MW.AI, the technical stack, or Manidhar’s engineering approach.";

    const assistantMessage: Message = {
      id: `vasuki-${Date.now()}`,
      sender: "vasuki",
      text: response,
      timestamp: getTimestamp(),
    };

    setMessages((current) => [...current, assistantMessage]);
    setIsLoading(false);
  };

  const handlePresetClick = (preset: PresetQuestion) => sendMessage(preset.question);

  const clearChat = () => {
    setMessages([createWelcomeMessage()]);
    setInputValue("");
  };

  const scrollToExplorer = () => {
    document.getElementById("vasuki-explorer")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <section className="relative scroll-mt-24 bg-theme-bg px-4 py-16 sm:px-6" id="vasuki-explorer">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="mx-auto max-w-xl space-y-2 text-center">
            <div className="inline-flex items-center gap-1.5 rounded border border-theme-accent/20 bg-theme-accent-subtle px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-theme-accent">
              <Bot size={12} />
              <span>Public portfolio knowledge</span>
            </div>
            <h2 className="text-2xl font-medium tracking-tight text-theme-text-bright sm:text-3xl">
              Vasuki Explorer
            </h2>
            <p className="text-xs leading-relaxed text-theme-text-muted sm:text-sm">
              Ask a question. Explore the systems, projects, and engineering decisions behind the work.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h3 className="pl-1 font-mono text-[9px] uppercase tracking-wider text-theme-text-muted">
                Start with a topic
              </h3>
              <span className="font-mono text-[9px] text-theme-text-muted">5 quick paths</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5" id="preset-questions-grid">
              {PRESET_QUESTIONS.map((preset) => {
                const Icon = ICON_MAP[preset.icon] || Cpu;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => handlePresetClick(preset)}
                    disabled={isLoading}
                    className="card-carved group flex min-h-[104px] flex-col items-start rounded-lg border border-theme-border bg-theme-card p-3 text-left transition hover:border-theme-accent/50 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span className="mb-2.5 flex h-6 w-6 items-center justify-center rounded border border-theme-border bg-theme-bg text-theme-text-muted transition-colors group-hover:text-theme-accent">
                      <Icon size={12} />
                    </span>
                    <span className="mb-1 text-[10px] font-medium leading-snug text-theme-text-bright sm:text-[11px]">
                      {preset.label}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-theme-text-muted group-hover:text-theme-accent">
                      Ask Vasuki
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="card-carved flex h-[520px] flex-col overflow-hidden rounded-lg border border-theme-border bg-theme-card shadow-2xl sm:h-[560px]"
            id="explorer-chat-panel"
          >
            <div className="flex items-center justify-between border-b border-theme-border bg-theme-card px-4 py-3.5 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded border border-theme-border bg-theme-bg text-theme-accent">
                  <Brain size={15} />
                </div>
                <div className="text-left">
                  <h3 className="text-xs font-medium leading-none text-theme-text-bright">vasuki_explorer</h3>
                  <span className="font-mono text-[8px] tracking-wider text-theme-text-muted sm:text-[9px]">
                    {isLoading ? "SEARCHING KNOWLEDGE..." : "INDEX READY · BROWSER MODE"}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={clearChat}
                className="rounded border border-theme-border bg-theme-bg p-2 text-theme-text-muted transition hover:text-theme-text-bright"
                title="Clear conversation"
                aria-label="Clear conversation"
              >
                <Trash2 size={13} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-theme-border bg-theme-bg/50 px-4 py-2 font-mono text-[8px] text-theme-text-muted sm:px-6 sm:text-[9px]">
              <span className="font-semibold text-theme-text-bright">PUBLIC INDEX</span>
              <span>8 knowledge records</span>
              <span className="text-theme-border-subtle">·</span>
              <span>Local search</span>
              <span className="text-theme-border-subtle">·</span>
              <span>No private data access</span>
            </div>

            <div
              className="flex-grow space-y-4 overflow-y-auto bg-theme-bg/95 p-4 sm:p-6"
              id="chat-messages-container"
              aria-live="polite"
              aria-relevant="additions"
            >
              {messages.map((message) => {
                const isUser = message.sender === "user";
                return (
                  <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[92%] rounded-lg border px-4 py-3 text-xs leading-relaxed sm:max-w-[85%] sm:text-sm ${
                        isUser
                          ? "rounded-tr-none border-theme-border bg-theme-card text-theme-text-bright"
                          : "rounded-tl-none border-theme-border bg-theme-bg text-theme-text-bright"
                      }`}
                    >
                      {!isUser && (
                        <div className="mb-2 flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-widest text-theme-accent sm:text-[9px]">
                          <Bot size={10} />
                          <span>Vasuki response</span>
                        </div>
                      )}
                      <div className="text-left">{renderMessage(message.text)}</div>
                      <div className="mt-2 text-right font-mono text-[8px] text-theme-text-muted">
                        {message.timestamp}
                      </div>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded border border-theme-border bg-theme-bg px-4 py-3 font-mono text-[9px] text-theme-accent">
                    <RefreshCw size={11} className="mr-2 inline animate-spin" />
                    Searching public knowledge…
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form
              className="border-t border-theme-border bg-theme-card p-3 sm:p-4"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(inputValue);
              }}
            >
              <div className="flex gap-2">
                <label className="sr-only" htmlFor="explorer-input-box">Ask Vasuki Explorer</label>
                <input
                  id="explorer-input-box"
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  disabled={isLoading}
                  placeholder="Ask about Vasuki, projects, agents, or technology…"
                  className="min-w-0 flex-grow rounded-lg border border-theme-border bg-theme-bg px-3 py-3 font-mono text-xs text-theme-text-bright outline-none transition placeholder:text-theme-text-muted/60 focus:border-theme-accent/50 disabled:opacity-50 sm:px-4 sm:text-sm"
                />
                <button
                  id="explorer-send-btn"
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className="flex shrink-0 items-center justify-center gap-1.5 rounded-lg border border-theme-border bg-theme-text-bright px-3 font-mono text-[10px] font-semibold text-theme-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:text-xs"
                >
                  <Send size={12} />
                  <span>ASK</span>
                </button>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[8px] text-theme-text-muted">
                <Search size={10} />
                <span>Press Enter to search the public portfolio knowledge index.</span>
              </div>
            </form>
          </div>

          <div className="space-y-2">
            <h3 className="font-mono text-[9px] uppercase tracking-wider text-theme-text-muted">
              Try asking
            </h3>
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => sendMessage(question)}
                  disabled={isLoading}
                  className="rounded-full border border-theme-border px-3 py-1.5 text-left text-[10px] text-theme-text-muted transition hover:border-theme-accent/50 hover:text-theme-text-bright disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-theme-border bg-theme-card/95 text-theme-text-muted shadow-lg backdrop-blur transition hover:border-theme-accent/60 hover:text-theme-accent"
          >
            <ArrowUp size={16} />
          </button>
        )}
        {!isExplorerVisible && (
          <button
            type="button"
            onClick={scrollToExplorer}
            aria-label="Open Vasuki Explorer"
            title="Open Vasuki Explorer"
            className="flex h-11 items-center gap-2 rounded-full border border-theme-accent/40 bg-theme-card/95 px-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-theme-text-bright shadow-lg backdrop-blur transition hover:border-theme-accent hover:text-theme-accent"
          >
            <MessageCircle size={14} />
            <span>Ask Vasuki</span>
          </button>
        )}
      </div>
    </>
  );
}
