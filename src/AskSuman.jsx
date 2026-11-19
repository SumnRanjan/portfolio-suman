import { useEffect, useRef, useState } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:8000").replace(/\/$/, "");

const SUGGESTIONS = [
  "What are Suman's main skills?",
  "Tell me about his DevOps experience",
  "What AI projects has he built?",
  "Where did he study?",
];

const WELCOME = {
  role: "assistant",
  content:
    "Hi! I'm Suman's AI assistant 👋 I answer from his resume using an LLM. Ask me about his skills, projects, experience or education.",
};

function RichText({ text }) {
  const pattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s)\]]+)|\*\*([^*]+)\*\*/g;
  const parts = [];
  let last = 0;
  let m;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[4]) {
      parts.push(<strong key={m.index} className="text-[#e6edf3]">{m[4]}</strong>);
    } else {
      const href = (m[2] || m[3]).replace(/[.,;:]+$/, "");
      const label = m[1] || href.replace(/^https?:\/\/(www\.)?/, "");
      parts.push(
        <a key={m.index} href={href} target="_blank" rel="noreferrer"
           className="break-all text-[#58a6ff] underline decoration-[#58a6ff]/40 underline-offset-2 hover:decoration-[#58a6ff]">
          {label}
        </a>
      );
      if (!m[1]) {
        const trailing = (m[3] || "").slice(href.length);
        if (trailing) parts.push(trailing);
      }
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export default function AskSuman() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("open-ask-suman", openChat);
    return () => window.removeEventListener("open-ask-suman", openChat);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function send(text) {
    const question = text.trim();
    if (!question || loading) return;

    const history = messages.filter((m) => m !== WELCOME).slice(-6);
    setMessages((m) => [...m, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, history }),
      });
      if (res.status === 429) throw new Error("Too many questions — please wait a minute and try again.");
      if (!res.ok) throw new Error("The AI assistant is unavailable right now. Please try again later.");
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.answer }]);
    } catch (err) {
      const msg =
        err instanceof TypeError
          ? "Can't reach the AI assistant right now. Please try again later."
          : err.message;
      setMessages((m) => [...m, { role: "assistant", content: msg, error: true }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-10 right-4 z-50 flex items-center gap-2 rounded-full border border-[#3fb950]/50 bg-[#0d1117] px-4 py-2.5 font-mono text-sm text-[#e6edf3] shadow-lg shadow-black/50 transition hover:-translate-y-0.5 hover:border-[#3fb950] sm:right-6"
          aria-label="Ask Suman's AI assistant"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3fb950] opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#3fb950]" />
          </span>
          <FaRobot className="text-[#3fb950]" /> ask_suman.py
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Ask Suman's AI assistant"
          className="fixed inset-x-3 bottom-10 z-50 flex h-[70vh] max-h-[600px] flex-col overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] font-mono shadow-2xl shadow-black/60 sm:inset-x-auto sm:right-6 sm:w-[420px]"
        >
          <div className="flex items-center justify-between border-b border-[#30363d] bg-[#161b22] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <button onClick={() => setOpen(false)} className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-label="Close" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-[#8b949e]">ask_suman.py — RAG assistant</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-[#8b949e] hover:text-[#e6edf3]" aria-label="Close">
              <FaTimes />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4 text-[13px] leading-6">
            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i}>
                  <p className="text-[#8b949e]">
                    <span className="text-[#3fb950]">ask@suman</span>:<span className="text-[#58a6ff]">~</span>$
                  </p>
                  <p className="whitespace-pre-wrap text-[#e6edf3]">{m.content}</p>
                </div>
              ) : (
                <div key={i}>
                  <p className={m.error ? "text-[#ff7b72]" : "text-[#d2a8ff]"}>
                    {m.error ? "✗ error" : "suman-ai ›"}
                  </p>
                  <p className={`whitespace-pre-wrap ${m.error ? "text-[#ffa198]" : "text-[#c9d1d9]"}`}>
                    <RichText text={m.content} />
                  </p>
                </div>
              )
            )}

            {loading && (
              <div>
                <p className="text-[#d2a8ff]">suman-ai ›</p>
                <p className="text-[#8b949e]">
                  retrieving context<span className="animate-pulse">...</span>
                </p>
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="pt-1">
                <p className="mb-2 text-xs text-[#8b949e]"># try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-md border border-[#30363d] bg-[#161b22] px-2.5 py-1 text-left text-xs text-[#a5d6ff] transition hover:border-[#58a6ff]"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-[#30363d] bg-[#010409] px-3 py-3"
          >
            <span className="text-sm text-[#3fb950]">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              placeholder="ask about skills, projects, experience…"
              className="min-w-0 flex-1 bg-transparent text-sm text-[#e6edf3] placeholder-[#484f58] outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="rounded-md bg-[#238636] p-2 text-white transition hover:bg-[#2ea043] disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send"
            >
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
          <p className="border-t border-[#21262d] bg-[#010409] px-3 pb-2 pt-1 text-[10px] text-[#484f58]">
            answers are AI-generated from Suman's resume · may not be perfect
          </p>
        </div>
      )}
    </>
  );
}