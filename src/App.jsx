import { useEffect, useState } from "react";
import AskSuman from "./AskSuman";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFileCode, FaSearch, FaCodeBranch, FaFolderOpen, FaChevronDown, FaRobot } from "react-icons/fa";

/* ---------- DATA ---------- */
const GITHUB = "https://github.com/SumnRanjan";
const LINKEDIN = "https://www.linkedin.com/in/suman-ranjan-12719338a/";
const EMAIL = "sumanranjan17291729@gmail.com";

const LANG_COLORS = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Dockerfile: "#384d54",
};

const projects = [
  {
    title: "AI Resume Parser & AI Portfolio",
    description:
      "AI resume parser for HR — an LLM extracts skills and experience into Pydantic-validated JSON, resume embeddings in the Qdrant vector database rank candidates against job descriptions, and a RAG pipeline powers natural-language candidate search plus an AI portfolio assistant.",
    repoLink: "https://github.com/SumnRanjan/ai_engineer",
    language: "Python",
    topics: ["llm", "rag", "embeddings", "qdrant", "pydantic"],
    featured: true,
    aiChat: true, // shows a "Try it" button that opens the AI chat
  },
  {
    title: "QuizFlow",
    description:
      "Real-time interactive quiz platform — create quizzes, invite participants with room codes, answer live questions and compete on a real-time leaderboard.",
    repoLink: "https://github.com/SumnRanjan/quizflow",
    language: "TypeScript",
    topics: ["react", "typescript", "nodejs", "socket-io"],
  },
  {
    title: "StreamYard-Inspired Streaming",
    description:
      "Real-time live streaming platform inspired by StreamYard — browser capture, FFmpeg encoding and RTMP streaming, packaged with Docker.",
    repoLink: "https://github.com/SumnRanjan/StreamYard-app",
    language: "JavaScript",
    topics: ["nodejs", "express", "socket-io", "ffmpeg", "docker"],
  },
  {
    title: "Talent IQ",
    description:
      "MERN interview platform with real-time video interviews, chat and collaborative coding — Clerk, Stream Video & Chat, Monaco Editor and Judge0.",
    liveLink: "https://talent-iq-git-main-suman-ranjans-projects.vercel.app/dashboard",
    repoLink: "https://github.com/SumnRanjan/Talent-IQ",
    language: "JavaScript",
    topics: ["mern", "webrtc", "judge0", "vercel"],
  },
  {
    title: "ChatSphere — Real-Time Chat",
    description:
      "3-tier chat app containerized with multi-stage Docker builds, automated with Jenkins CI/CD, and deployed on Kubernetes + AWS EC2 with Ingress routing.",
    repoLink: "https://github.com/SumnRanjan/Real-Time-Chat-Application-3-Tier-Docker-K8s",
    language: "Dockerfile",
    topics: ["docker", "kubernetes", "jenkins", "aws", "devops"],
  },
  {
    title: "TeamTask",
    description:
      "MERN team collaboration and task manager with JWT auth, role-based access control, task tracking and dashboard analytics.",
    liveLink: "https://team-task-manager-ttm.up.railway.app/",
    repoLink: "https://github.com/SumnRanjan/team-task-manager",
    language: "JavaScript",
    topics: ["mern", "jwt", "rbac", "railway"],
  },
  {
    title: "PlayIt Backend",
    description:
      "REST API for a social video platform — uploads, auth, playlists, likes, comments, subscriptions and scalable media handling.",
    repoLink: "https://github.com/SumnRanjan/PlayIt-Backend",
    language: "JavaScript",
    topics: ["nodejs", "express", "mongodb", "rest-api"],
  },
];

const icon = (id) => `https://skillicons.dev/icons?i=${id}`;
const skills = {
  languages: [
    ["Java", "java"], ["Python", "py"], ["JavaScript", "js"],
    ["TypeScript", "ts"], ["C++", "cpp"], ["Bash", "bash"],
  ],
  frontend: [["React.js", "react"], ["Next.js", "nextjs"], ["Tailwind", "tailwind"],["HTML", "html"], ["CSS", "css"]],
  backend: [
    ["Node.js", "nodejs"], ["Express.js", "express"], ["MongoDB", "mongodb"],
    ["MySQL", "mysql"], ["Postman", "postman"],
  ],
  devops: [
    ["Docker", "docker"], ["Kubernetes", "kubernetes"], ["Jenkins", "jenkins"],
    ["AWS", "aws"], ["Linux", "linux"], ["GitHub Actions", "githubactions"],
    ["Prometheus", "prometheus"], ["Grafana", "grafana"],
  ],
  ai_engineering: [
    "LLM APIs", "Prompt Engineering", "RAG", "Embeddings", "Qdrant Vector DB",
    "Chunking", "RAG Evaluation", "Pydantic", "ReAct Agents", "Prompt Chaining", "Streaming",
  ],
};

const commits = [
  {
    hash: "a7f3c21",
    ref: "HEAD -> main",
    date: "2022 — 2026",
    msg: "feat: B.E. Computer Science Engineering @ Chitkara University (CGPA 8.69)",
    body: [
      "DSA, OOP, OS, DBMS, Computer Networks",
      "certs: Applied DevOps Engineering, Linux & Shell Scripting (IBM), Linux & SQL (Google)",
    ],
  },
  {
    hash: "4be19d0",
    date: "Feb 2024 — May 2024",
    msg: "feat: Full Stack Development Intern @ OctaNet Pvt. Ltd.",
    body: [
      "built reusable, responsive React.js components",
      "integrated REST APIs with Axios — async requests and error handling",
    ],
  },
];

const files = [
  { id: "about", name: "about.ts", color: "#3178c6", label: "About" },
  { id: "skills", name: "skills.json", color: "#f1e05a", label: "Skills" },
  { id: "projects", name: "projects.md", color: "#58a6ff", label: "Projects" },
  { id: "journey", name: "journey.log", color: "#8b949e", label: "Journey" },
  { id: "contact", name: "contact.sh", color: "#3fb950", label: "Contact" },
];

const roles = ["Full Stack Developer", "DevOps Engineer", "AI Engineer", "Problem Solver"];

/* ---------- SMALL UI PIECES ---------- */
const K = ({ c }) => <span className="text-[#ff7b72]">{c}</span>; // keyword
const S = ({ c }) => <span className="text-[#a5d6ff]">"{c}"</span>; // string
const P = ({ c }) => <span className="text-[#79c0ff]">{c}</span>; // property
const C = ({ c }) => <span className="text-[#8b949e]">{c}</span>; // comment

function Window({ title, children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-[#30363d] bg-[#0d1117] shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#161b22] px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 truncate text-xs text-[#8b949e]">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Section({ id, cmd, title, children }) {
  const file = files.find((f) => f.id === id);
  return (
    <section id={id} className="scroll-mt-24 border-b border-[#21262d] px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
      <p className="mb-4 flex items-center gap-1.5 text-xs text-[#8b949e]">
        portfolio <span>›</span> src <span>›</span>
        <span className="h-2 w-2 rounded-sm" style={{ background: file.color }} />
        <span className="text-[#c9d1d9]">{file.name}</span>
      </p>
      <p className="text-sm text-[#8b949e]">
        <span className="text-[#3fb950]">suman@dev</span>:<span className="text-[#58a6ff]">~/portfolio</span>$ {cmd}
      </p>
      <h2 className="mb-8 mt-2 text-3xl font-bold tracking-tight text-[#e6edf3] sm:text-4xl">
        <span className="text-[#3fb950]">#</span> {title}
      </h2>
      {children}
    </section>
  );
}

function CodeLines({ lines }) {
  return (
    <div className="flex overflow-x-auto py-4 text-[13px] leading-7 sm:text-sm">
      <div className="select-none border-r border-[#30363d] px-3 text-right text-[#484f58]">
        {lines.map((_, i) => (
          <div key={i}>{i + 1}</div>
        ))}
      </div>
      <div className="min-w-0 px-4">
        {lines.map((l, i) => (
          <div key={i} className="min-h-7 whitespace-pre">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* typewriter that cycles through roles */
function useTypewriter(words) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }
    const word = words[i % words.length];
    const done = !del && text === word;
    const empty = del && text === "";
    const t = setTimeout(
      () => {
        if (done) setDel(true);
        else if (empty) {
          setDel(false);
          setI((n) => n + 1);
        } else setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      done ? 1600 : del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

/* highlights the file of the section currently on screen */
function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    files.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return active;
}

/* ---------- PAGE ---------- */
export default function SumanPortfolio() {
  const role = useTypewriter(roles);
  const active = useActiveSection();
  const repoName = (url) => url.replace("https://github.com/", "");

  const aboutCode = [
    <><C c="// about.ts — who I am" /></>,
    <><K c="const" /> <P c="developer" /> = {"{"}</>,
    <>  <P c="name" />: <S c="Suman Ranjan" />,</>,
    <>  <P c="role" />: [<S c="Full Stack" />, <S c="DevOps" />, <S c="AI Engineer" />],</>,
    <>  <P c="education" />: <S c="B.E. CSE @ Chitkara University · CGPA 8.69" />,</>,
    <>  <P c="stack" />: [<S c="MERN" />, <S c="TypeScript" />, <S c="Python" />],</>,
    <>  <P c="devops" />: [<S c="Docker" />, <S c="Kubernetes" />, <S c="Jenkins" />, <S c="AWS" />],</>,
    <>  <P c="ai" />: [<S c="LLMs" />, <S c="RAG" />, <S c="Embeddings" />, <S c="Qdrant" />],</>,
    <>  <P c="dsaSolved" />: <span className="text-[#79c0ff]">500</span>,</>,
    <>  <P c="openTo" />: <S c="Full Stack · DevOps · AI Engineer roles" />,</>,
    <>{"};"}</>,
    <></>,
    <><K c="export default" /> <P c="developer" />;<span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[#e6edf3]" /></>,
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#010409] font-mono text-[#c9d1d9] selection:bg-[#388bfd]/40">
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes glow { 0%,100% { opacity: .35; } 50% { opacity: .6; } }
        .caret { animation: blink 1s step-end infinite; }
        .glow { animation: glow 6s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: #010409; }
        ::-webkit-scrollbar-thumb { background: #30363d; border-radius: 6px; }
        @media (prefers-reduced-motion: reduce) { .caret, .glow { animation: none; } html { scroll-behavior: auto; } }
      `}</style>

      {/* ---------- TITLE BAR (full width) ---------- */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-10 items-center justify-between gap-3 border-b border-[#30363d] bg-[#161b22] px-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="hidden items-center gap-2 rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-1 text-xs text-[#8b949e] md:flex md:w-[420px]">
          <FaSearch className="shrink-0" /> <span className="truncate">suman-ranjan — portfolio</span>
        </div>
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1 text-xs text-[#e6edf3] transition hover:border-[#8b949e]"
        >
          <FaGithub /> SumnRanjan
        </a>
      </header>

      {/* ---------- ACTIVITY BAR + EXPLORER (desktop) ---------- */}
      <aside className="fixed bottom-7 left-0 top-10 z-30 hidden lg:flex">
        <div className="flex w-12 flex-col items-center gap-5 border-r border-[#30363d] bg-[#0d1117] py-4 text-lg text-[#8b949e]">
          <FaRegFileCode className="text-[#e6edf3]" title="Explorer" />
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-[#e6edf3]" title="GitHub">
            <FaGithub />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-[#e6edf3]" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-[#e6edf3]" title="Email">
            <FaEnvelope />
          </a>
        </div>
        <div className="flex w-60 flex-col border-r border-[#30363d] bg-[#010409]">
          <p className="px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-[#8b949e]">Explorer</p>
          <div className="text-[13px]">
            <p className="flex items-center gap-1.5 px-3 py-1 font-semibold text-[#e6edf3]">
              <FaChevronDown className="text-[10px]" /> PORTFOLIO
            </p>
            <p className="flex items-center gap-1.5 py-1 pl-6 text-[#c9d1d9]">
              <FaFolderOpen className="text-[#8b949e]" /> src
            </p>
            {files.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className={`flex items-center gap-2 border-l-2 py-1.5 pl-10 transition ${
                  active === f.id
                    ? "border-[#f78166] bg-[#1f6feb]/15 text-[#e6edf3]"
                    : "border-transparent text-[#8b949e] hover:bg-[#161b22] hover:text-[#c9d1d9]"
                }`}
              >
                <span className="h-2 w-2 rounded-sm" style={{ background: f.color }} />
                {f.name}
              </a>
            ))}
            <button
              onClick={() => window.dispatchEvent(new Event("open-ask-suman"))}
              className="flex w-full items-center gap-2 border-l-2 border-transparent py-1.5 pl-6 text-left text-[#3fb950] transition hover:bg-[#161b22]"
            >
              <span className="h-2 w-2 rounded-sm bg-[#3572A5]" /> ask_suman.py
              <span className="ml-auto mr-3 rounded bg-[#238636]/30 px-1.5 text-[10px] text-[#3fb950]">AI</span>
            </button>
            <p className="flex items-center gap-2 py-1.5 pl-6 text-[#8b949e]">
              <span className="h-2 w-2 rounded-sm bg-[#8b949e]" /> README.md
            </p>
          </div>

          <div className="mt-auto border-t border-[#30363d] p-4 text-xs">
            <p className="mb-2 uppercase tracking-[0.2em] text-[#8b949e]">Outline</p>
            <p className="text-[#c9d1d9]">
              <span className="text-[#3fb950]">●</span> available for hire
            </p>
            <p className="mt-1 text-[#8b949e]">Full Stack · DevOps · AI</p>
          </div>
        </div>
      </aside>

      {/* ---------- MAIN EDITOR AREA ---------- */}
      <div className="pb-7 pt-10 lg:pl-72">
        {/* open tabs */}
        <nav className="sticky top-10 z-20 flex overflow-x-auto border-b border-[#30363d] bg-[#0d1117]/95 text-xs backdrop-blur sm:text-sm">
          {files.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className={`flex shrink-0 items-center gap-2 border-r border-[#30363d] px-4 py-2.5 transition ${
                active === f.id
                  ? "border-t-2 border-t-[#f78166] bg-[#010409] text-[#e6edf3]"
                  : "text-[#8b949e] hover:text-[#c9d1d9]"
              }`}
            >
              <span className="h-2 w-2 rounded-sm" style={{ background: f.color }} />
              {f.name}
            </a>
          ))}
        </nav>

        {/* ---------- HERO / ABOUT ---------- */}
        <section
          id="about"
          className="relative flex min-h-[calc(100vh-6.5rem)] scroll-mt-24 items-center overflow-hidden border-b border-[#21262d] px-5 py-14 sm:px-8 lg:px-12 xl:px-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#30363d_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
          <div className="glow pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#1f6feb]/20 blur-3xl" />
          <div className="glow pointer-events-none absolute -bottom-48 left-1/3 h-[420px] w-[420px] rounded-full bg-[#3fb950]/10 blur-3xl" />

          <div className="relative grid w-full min-w-0 items-center gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="min-w-0 space-y-7">
              <p className="text-sm text-[#3fb950]">
                <span className="text-[#8b949e]">$</span> echo "hello, world"
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#e6edf3] sm:text-6xl 2xl:text-7xl">
                Hi, I’m <span className="text-[#58a6ff]">Suman Ranjan</span>
              </h1>
              <p className="text-xl text-[#8b949e] sm:text-2xl">
                <span className="text-[#ff7b72]">&gt;</span> <span className="text-[#d2a8ff]">{role}</span>
                <span className="caret ml-1 inline-block h-6 w-2.5 translate-y-1 bg-[#d2a8ff]" />
              </p>
              <p className="max-w-3xl text-sm leading-7 text-[#8b949e] sm:text-base sm:leading-8">
                I build scalable backends, real-time apps, automated CI/CD pipelines and AI tools powered
                by LLMs, RAG and vector search — from code to container to cloud.
              </p>

              <Window title="about.ts" className="max-w-3xl">
                <CodeLines lines={aboutCode} />
              </Window>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-md bg-[#238636] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#2ea043]"
                >
                  $ ls ./projects
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-[#30363d] bg-[#21262d] px-5 py-2.5 text-center text-sm font-semibold text-[#e6edf3] transition hover:border-[#8b949e]"
                >
                  ./contact.sh
                </a>
                <button
                  onClick={() => window.dispatchEvent(new Event("open-ask-suman"))}
                  className="flex items-center justify-center gap-2 rounded-md border border-[#3fb950]/50 bg-[#3fb950]/10 px-5 py-2.5 text-sm font-semibold text-[#3fb950] transition hover:bg-[#3fb950]/20"
                >
                  <FaRobot /> python ask_suman.py
                </button>
              </div>
            </div>

            {/* terminal */}
            <Window title="zsh — suman@dev">
              <div className="space-y-5 p-5 text-[13px] leading-7 sm:p-6 sm:text-sm">
                <div>
                  <p><span className="text-[#3fb950]">➜</span> <span className="text-[#58a6ff]">~</span> whoami</p>
                  <p className="text-[#e6edf3]">suman_ranjan · fullstack · devops · ai_engineer</p>
                </div>
                <div>
                  <p><span className="text-[#3fb950]">➜</span> <span className="text-[#58a6ff]">~</span> neofetch --short</p>
                  <div className="mt-1 grid grid-cols-[auto_1fr] gap-x-4">
                    {[
                      ["status", <span className="text-[#3fb950]">● available for hire</span>],
                      ["focus", "backend + ai"],
                      ["stack", "MERN · TypeScript · Python"],
                      ["ops", "docker · k8s · jenkins · aws"],
                      ["ai", "llm · rag · qdrant · agents"],
                      ["learning", "system design"],
                      ["dsa", "500+ problems solved"],
                    ].map(([k, v]) => (
                      <div key={k} className="contents">
                        <span className="text-[#ffa657]">{k}</span>
                        <span className="text-[#c9d1d9]">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p><span className="text-[#3fb950]">➜</span> <span className="text-[#58a6ff]">~</span> stats --summary</p>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-center sm:grid-cols-4">
                    {[
                      ["500+", "dsa"],
                      ["7", "projects"],
                      ["3", "certs"],
                      ["8.69", "cgpa"],
                    ].map(([v, l]) => (
                      <div key={l} className="rounded-md border border-[#30363d] bg-[#161b22] py-2.5">
                        <p className="text-lg font-bold text-[#58a6ff]">{v}</p>
                        <p className="text-[11px] text-[#8b949e]">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  <span className="text-[#3fb950]">➜</span> <span className="text-[#58a6ff]">~</span>{" "}
                  <span className="caret inline-block h-4 w-2 translate-y-0.5 bg-[#e6edf3]" />
                </p>
              </div>
            </Window>
          </div>
        </section>

        {/* ---------- SKILLS ---------- */}
        <Section id="skills" cmd="cat skills.json" title="Tech Stack">
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {Object.entries(skills).map(([key, list]) => (
              <div
                key={key}
                className={`min-w-0 rounded-xl border border-[#30363d] bg-[#0d1117] p-5 transition hover:border-[#58a6ff]/60 ${
                  key === "ai_engineering" ? "md:col-span-2 2xl:col-span-3" : ""
                }`}
              >
                <p className="mb-4 text-sm">
                  <span className="text-[#79c0ff]">"{key}"</span>
                  <span className="text-[#e6edf3]">: [</span>
                  <span className="ml-2 text-xs text-[#484f58]">// {list.length} items</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {list.map((item) => {
                    const [name, id] = Array.isArray(item) ? item : [item, null];
                    return (
                      <span
                        key={name}
                        className="flex items-center gap-2 rounded-md border border-[#30363d] bg-[#161b22] px-3 py-1.5 text-[13px] text-[#a5d6ff] transition hover:-translate-y-0.5 hover:border-[#58a6ff]"
                      >
                        {id && <img src={icon(id)} alt="" className="h-5 w-5" />}"{name}"
                      </span>
                    );
                  })}
                </div>
                <p className="mt-4 text-sm text-[#e6edf3]">]</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------- PROJECTS ---------- */}
        <Section id="projects" cmd="ls -la ./projects" title="Projects">
          <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`group flex min-w-0 flex-col rounded-xl border bg-[#0d1117] p-5 transition hover:-translate-y-0.5 hover:border-[#58a6ff] hover:shadow-[0_0_0_1px_rgba(88,166,255,0.3)] ${
                  p.featured ? "border-[#3fb950]/60 md:col-span-2 2xl:col-span-3" : "border-[#30363d]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <a
                      href={p.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[13px] text-[#58a6ff] hover:underline"
                    >
                      <FaGithub className="shrink-0 text-[#8b949e]" />
                      <span className="truncate">{repoName(p.repoLink)}</span>
                    </a>
                    <h3 className={`mt-2 font-bold text-[#e6edf3] ${p.featured ? "text-xl sm:text-2xl" : "text-lg"}`}>
                      {p.title}
                    </h3>
                  </div>
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] ${
                      p.featured ? "border-[#3fb950]/50 text-[#3fb950]" : "border-[#30363d] text-[#8b949e]"
                    }`}
                  >
                    {p.featured ? "★ featured" : "public"}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-[13px] leading-6 text-[#8b949e]">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.topics.map((t) => (
                    <span key={t} className="rounded-full bg-[#388bfd]/15 px-2.5 py-0.5 text-[11px] text-[#58a6ff]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#30363d] pt-4">
                  <span className="flex items-center gap-2 text-xs text-[#8b949e]">
                    <span className="h-3 w-3 rounded-full" style={{ background: LANG_COLORS[p.language] }} />
                    {p.language}
                  </span>
                  <div className="flex gap-2">
                    {p.aiChat && (
                      <button
                        onClick={() => window.dispatchEvent(new Event("open-ask-suman"))}
                        className="flex items-center gap-1.5 rounded-md bg-[#238636] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2ea043]"
                      >
                        <FaRobot /> Try it
                      </button>
                    )}
                    {p.liveLink && (
                      <a
                        href={p.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-md bg-[#238636] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2ea043]"
                      >
                        ▶ Live
                      </a>
                    )}
                    <a
                      href={p.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-md border border-[#30363d] bg-[#21262d] px-3 py-1.5 text-xs font-semibold text-[#e6edf3] transition hover:border-[#8b949e]"
                    >
                      <FaGithub /> Code
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* ---------- JOURNEY ---------- */}
        <Section id="journey" cmd="git log --journey" title="Experience & Education">
          <div className="grid gap-4 xl:grid-cols-2">
            {commits.map((c) => (
              <Window key={c.hash} title={`commit ${c.hash}`}>
                <div className="p-5 text-[13px] leading-7 sm:p-6 sm:text-sm">
                  <p>
                    <span className="text-[#ffa657]">commit {c.hash}</span>
                    {c.ref && (
                      <span className="text-[#e6edf3]">
                        {" "}(<span className="text-[#3fb950]">{c.ref}</span>)
                      </span>
                    )}
                  </p>
                  <p className="text-[#8b949e]">Author: Suman Ranjan</p>
                  <p className="text-[#8b949e]">Date:   {c.date}</p>
                  <p className="mt-3 pl-4 text-[#e6edf3] sm:pl-8">{c.msg}</p>
                  {c.body.map((b) => (
                    <p key={b} className="pl-4 text-[#8b949e] sm:pl-8">
                      - {b}
                    </p>
                  ))}
                </div>
              </Window>
            ))}
          </div>
        </Section>

        {/* ---------- CONTACT ---------- */}
        <Section id="contact" cmd="./contact.sh" title="Get in touch">
          <Window title="contact.sh">
            <div className="grid gap-8 p-5 text-[13px] leading-7 sm:p-8 sm:text-sm xl:grid-cols-[1fr_auto] xl:items-end">
              <div>
                <p className="text-[#8b949e]">#!/bin/bash</p>
                <p className="text-[#8b949e]"># open to Full Stack, DevOps & AI Engineer roles, internships and freelance</p>
                <p className="mt-2 text-lg sm:text-2xl">
                  <span className="text-[#ff7b72]">echo</span>{" "}
                  <span className="text-[#a5d6ff]">"Let’s build something great together 🚀"</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#238636] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2ea043]"
                >
                  <FaEnvelope /> Email me
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md border border-[#30363d] bg-[#21262d] px-4 py-2.5 text-sm font-semibold text-[#e6edf3] transition hover:border-[#8b949e]"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md border border-[#30363d] bg-[#21262d] px-4 py-2.5 text-sm font-semibold text-[#e6edf3] transition hover:border-[#8b949e]"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </Window>
          <p className="mt-6 text-xs text-[#8b949e]">
            <span className="text-[#3fb950]">✉</span> {EMAIL}
          </p>
        </Section>
      </div>

      {/* ---------- AI CHAT (talks to the FastAPI /chat endpoint) ---------- */}
      <AskSuman />

      {/* ---------- STATUS BAR (full width) ---------- */}
      <footer className="fixed inset-x-0 bottom-0 z-40 flex h-7 items-center justify-between gap-2 bg-[#1f6feb] px-3 text-[11px] text-white sm:text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <FaCodeBranch /> main
          </span>
          <span>✓ 0 problems</span>
          <span className="hidden sm:inline">● available for hire</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">{files.find((f) => f.id === active)?.name}</span>
          <span className="hidden sm:inline">UTF-8</span>
          <span>© {new Date().getFullYear()} Suman Ranjan</span>
        </div>
      </footer>
    </div>
  );
}
