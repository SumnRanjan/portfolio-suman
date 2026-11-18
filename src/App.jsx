import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SumanPortfolio() {
  const stats = [
    { label: "Focus", value: "Backend + AI" },
    { label: "Stack", value: "MERN · TS" },
    { label: "Ops", value: "DevOps" },
    { label: "Goal", value: "Cloud & AI" },
  ];

  const directions = ["AI Engineering", "RAG & LLMs", "DevOps", "System Design", "Java DSA"];

  const projects = [
    {
      title: "AI Resume Parser & AI Portfolio",
      type: "LLM · RAG · Vector Search",
      description:
        "An AI resume parser for HR: an LLM extracts skills and experience into Pydantic-validated JSON, resume embeddings are stored in the Qdrant vector database to rank candidates against job descriptions, and a RAG pipeline powers natural-language candidate search and an AI portfolio assistant.",
      tag: "AI",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Talent IQ",
      type: "Real-Time Interview Platform",
      description:
        "A full-stack MERN interview platform with real-time video interviews, chat and collaborative coding — integrating Clerk, Stream Video & Chat, Monaco Editor and Judge0 for code execution.",
      liveLink: "https://talent-iq-git-main-suman-ranjans-projects.vercel.app/dashboard",
      repoLink: "https://github.com/SumnRanjan/Talent-IQ",
      tag: "Platform",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "ChatSphere — Real-Time Chat",
      type: "DevOps · Docker · Kubernetes",
      description:
        "A 3-tier real-time chat application containerized with multi-stage Docker builds, automated with a Jenkins CI/CD pipeline, and deployed on Kubernetes and AWS EC2 with Ingress routing.",
      liveLink: "https://github.com/SumnRanjan/Real-Time-Chat-Application-3-Tier-Docker-K8s",
      repoLink: "https://github.com/SumnRanjan/Real-Time-Chat-Application-3-Tier-Docker-K8s",
      tag: "DevOps",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "QuizFlow",
      type: "Real-Time Quiz Platform",
      description:
        "A real-time interactive quiz platform built with React, TypeScript, Node.js and Socket.IO. Create quizzes, invite participants with room codes, answer live questions and compete on a real-time leaderboard.",
      tag: "Real-Time",
      image:
        "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "StreamYard-Inspired Streaming",
      type: "Live Streaming Platform",
      description:
        "A real-time live streaming platform inspired by StreamYard, built with Node.js, Express.js, Socket.IO, FFmpeg and Docker — browser capture, FFmpeg encoding and RTMP streaming.",
      tag: "Streaming",
      image:
        "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "TeamTask",
      type: "Team Collaboration Platform",
      description:
        "A MERN team collaboration and task management platform with JWT authentication, role-based access control, task tracking, dashboard analytics and a responsive UI.",
      liveLink: "https://team-task-manager-ttm.up.railway.app/",
      repoLink: "https://github.com/SumnRanjan/team-task-manager",
      tag: "MERN",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "PlayIt Backend",
      type: "Streaming Backend API",
      description:
        "A REST API for a social video platform built with Node.js, Express and MongoDB — video uploads, authentication, playlists, likes, comments, subscriptions and scalable media handling.",
      repoLink: "https://github.com/SumnRanjan/PlayIt-Backend",
      tag: "Backend",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const icon = (id) => `https://skillicons.dev/icons?i=${id}`;
  const skillGroups = [
    {
      title: "Languages",
      code: "01",
      skills: [
        { name: "Java", icon: icon("java") },
        { name: "Python", icon: icon("py") },
        { name: "JavaScript", icon: icon("js") },
        { name: "TypeScript", icon: icon("ts") },
        { name: "C++", icon: icon("cpp") },
        { name: "Bash", icon: icon("bash") },
      ],
    },
    {
      title: "Frontend",
      code: "02",
      skills: [
        { name: "React.js", icon: icon("react") },
        { name: "Tailwind", icon: icon("tailwind") },
        { name: "HTML", icon: icon("html") },
        { name: "CSS", icon: icon("css") },
      ],
    },
    {
      title: "Backend & Databases",
      code: "03",
      skills: [
        { name: "Node.js", icon: icon("nodejs") },
        { name: "Express.js", icon: icon("express") },
        { name: "MongoDB", icon: icon("mongodb") },
        { name: "MySQL", icon: icon("mysql") },
        { name: "Postman", icon: icon("postman") },
      ],
    },
    {
      title: "DevOps & Cloud",
      code: "04",
      skills: [
        { name: "Docker", icon: icon("docker") },
        { name: "Kubernetes", icon: icon("kubernetes") },
        { name: "Jenkins", icon: icon("jenkins") },
        { name: "AWS", icon: icon("aws") },
        { name: "Linux", icon: icon("linux") },
        { name: "GitHub Actions", icon: icon("githubactions") },
        { name: "Prometheus", icon: icon("prometheus") },
        { name: "Grafana", icon: icon("grafana") },
      ],
    },
    {
      title: "AI Engineering",
      code: "05",
      wide: true,
      skills: [
        { name: "LLM APIs" },
        { name: "Prompt Engineering" },
        { name: "RAG" },
        { name: "Embeddings" },
        { name: "Qdrant Vector DB" },
        { name: "Chunking Strategies" },
        { name: "RAG Evaluation" },
        { name: "Pydantic" },
        { name: "ReAct Agents" },
        { name: "Prompt Chaining" },
        { name: "Streaming" },
      ],
    },
  ];

  const timeline = [
    {
      period: "Feb 2024 — May 2024",
      title: "Full Stack Development Intern",
      org: "OctaNet Pvt. Ltd.",
      points: [
        "Built responsive, reusable React.js components with dynamic data rendering.",
        "Integrated REST APIs with Axios — async requests, responses and error handling.",
      ],
    },
    {
      period: "2022 — 2026",
      title: "B.E. Computer Science Engineering",
      org: "Chitkara University · CGPA 8.69",
      points: [
        "Strong CS fundamentals: DSA, OOP, OS, DBMS and Computer Networks.",
        "Certifications: Applied DevOps Engineering, Linux Commands & Shell Scripting (IBM), Linux & SQL (Google).",
      ],
    },
  ];

  const metrics = [
    { value: "500+", label: "DSA problems solved" },
    { value: "7", label: "Projects shipped" },
    { value: "3", label: "Coursera certifications" },
    { value: "8.69", label: "CGPA" },
  ];

  const glass =
    "relative rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] backdrop-blur-xl";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02040a] text-white selection:bg-cyan-400/30">
      <style>{`
        @keyframes gridMove { from { background-position: 0 0, 0 0; } to { background-position: 0 88px, 88px 0; } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        @keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .grid-move { animation: gridMove 6s linear infinite; }
        .scanline { animation: scan 7s linear infinite; }
        .floaty { animation: floaty 6s ease-in-out infinite; }
        .caret { animation: blink 1s step-end infinite; }
        .spin-slow { animation: spinSlow 18s linear infinite; }
        .neon-text { text-shadow: 0 0 18px rgba(34,211,238,.45), 0 0 42px rgba(217,70,239,.25); }
        .shimmer { background: linear-gradient(90deg, #67e8f9, #ffffff, #e879f9, #67e8f9); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: shimmer 6s linear infinite; }
        .neon-border { position: relative; }
        .neon-border::before { content: ""; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
          background: linear-gradient(135deg, rgba(34,211,238,.6), transparent 40%, transparent 60%, rgba(217,70,239,.6));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; opacity: .5; transition: opacity .3s; }
        .neon-border:hover::before { opacity: 1; }
        @media (prefers-reduced-motion: reduce) { .grid-move, .scanline, .floaty, .caret, .spin-slow, .shimmer { animation: none; } }
      `}</style>

      <div className="relative overflow-hidden">
        {/* Background: moving grid, glows, scanline */}
        <div className="grid-move pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.07)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_80%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.10),transparent_30%)]" />
        <div className="scanline pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent via-cyan-300/[0.04] to-transparent" />

        <main className="relative mx-auto max-w-7xl overflow-x-hidden px-4 py-6 sm:px-6 md:px-8 lg:px-12">
          {/* NAV */}
          <nav className="neon-border sticky top-4 z-20 mb-12 flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl sm:mb-16">
            <span className="flex min-w-0 items-center gap-2 truncate font-mono text-sm font-semibold tracking-tight sm:text-base">
              <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
              suman<span className="text-cyan-300">.</span>dev
            </span>
            <div className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.2em] text-white/60 md:flex">
              {["about", "skills", "projects", "journey", "contact"].map((s) => (
                <a key={s} href={`#${s}`} className="transition hover:text-cyan-300">
                  {s}
                </a>
              ))}
            </div>
            <a
              href="https://github.com/SumnRanjan"
              target="_blank"
              rel="noreferrer"
              className="ml-3 flex shrink-0 items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)] transition hover:bg-cyan-400/20"
            >
              <FaGithub /> GitHub
            </a>
          </nav>

          {/* HERO */}
          <section className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.85fr]">
            <div className="min-w-0 space-y-8">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 font-mono text-xs text-cyan-200/80 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
                <span className="truncate">status: online · open to roles</span>
              </div>

              <div className="space-y-6">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/80 sm:text-sm">
                  Full-Stack · DevOps & Cloud · AI Engineering
                </p>
                <h1 className="break-words text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  <span className="neon-text">Engineering the future</span>
                  <span className="block text-white/85">with clean code,</span>
                  <span className="shimmer block">cloud & AI.</span>
                </h1>
                <p className="max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:text-lg">
                  I’m Suman Ranjan — a developer building scalable backend systems, real-time
                  full-stack products, automated DevOps pipelines, and AI applications powered
                  by LLMs, RAG and vector search.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.03]"
                >
                  View Projects →
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold backdrop-blur-md transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  Let’s Collaborate
                </a>
              </div>
            </div>

            {/* HUD developer card */}
            <div className="floaty relative min-w-0">
              <div className="spin-slow pointer-events-none absolute -inset-6 rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(34,211,238,0.25),transparent,rgba(217,70,239,0.25),transparent)] blur-2xl" />
              <div className={`neon-border ${glass} bg-black/50 p-4 shadow-2xl shadow-cyan-950/40 sm:p-5`}>
                <div className="rounded-[1.5rem] border border-white/10 bg-[#030814] p-4 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400/70" />
                      <span className="h-3 w-3 rounded-full bg-amber-300/70" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                      dev_card.sys
                    </span>
                  </div>

                  <div className="mb-5 rounded-xl border border-cyan-300/10 bg-black/60 p-4 font-mono text-xs leading-6 text-white/70 sm:text-sm">
                    <p><span className="text-fuchsia-300">$</span> whoami</p>
                    <p className="text-cyan-200">suman_ranjan</p>
                    <p><span className="text-fuchsia-300">$</span> cat role.txt</p>
                    <p className="text-cyan-200">
                      fullstack · devops · ai_engineer<span className="caret">▋</span>
                    </p>
                  </div>

                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/45">Developer</p>
                      <h2 className="break-words text-2xl font-semibold sm:text-3xl">Suman Ranjan</h2>
                    </div>
                    <span className="shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                      ● Available
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/60">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-base font-semibold sm:text-lg">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-3 font-mono text-xs text-white/50">// current_direction</p>
                    <div className="flex flex-wrap gap-2">
                      {directions.map((item) => (
                        <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* METRICS */}
          <section className="mt-16 grid grid-cols-2 gap-4 sm:mt-20 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className={`neon-border ${glass} p-5 text-center sm:p-6`}>
                <p className="shimmer text-3xl font-semibold sm:text-4xl">{m.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">{m.label}</p>
              </div>
            ))}
          </section>

          {/* ABOUT */}
          <section id="about" className="mt-16 grid gap-6 sm:mt-20 md:mt-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div className={`neon-border ${glass} p-6 sm:p-8`}>
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/75">[ about_me ]</p>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Building systems that scale — and think.
              </h3>
              <p className="mt-5 leading-8 text-white/65">
                I enjoy designing backend-heavy applications, automating delivery with CI/CD, and
                turning ideas into polished products. My path combines DSA, full-stack development,
                DevOps, system design and now AI engineering — LLMs, RAG and vector databases.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  t: "AI Engineering",
                  d: "LLM APIs, prompt engineering, structured output with Pydantic, RAG pipelines, embeddings, Qdrant and ReAct agents.",
                },
                {
                  t: "DevOps & Cloud",
                  d: "Docker, Kubernetes, Jenkins CI/CD, AWS EC2 & VPC, Linux, and monitoring with Prometheus & Grafana.",
                },
                {
                  t: "System Design",
                  d: "Scalable architectures — notification systems, WhatsApp-style chat and TikTok-style video platforms.",
                },
                {
                  t: "Problem Solving",
                  d: "500+ problems solved across LeetCode, GeeksforGeeks and CodeChef with strong Java DSA foundations.",
                },
              ].map((c) => (
                <div key={c.t} className={`neon-border ${glass} bg-[#050c18]/80 p-6`}>
                  <p className="text-lg font-semibold text-cyan-100">{c.t}</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{c.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className={`neon-border ${glass} mt-16 p-5 sm:mt-20 sm:p-8 md:mt-24 md:p-10`}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/75">[ tech_stack ]</p>
            <h3 className="mb-8 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Tools I build with</h3>
            <div className="grid gap-6 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className={`rounded-[1.75rem] border border-white/10 bg-[#050c18]/80 p-5 sm:p-6 ${group.wide ? "lg:col-span-2" : ""}`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-cyan-300">{group.title}</h4>
                    <span className="font-mono text-xs text-white/30">{group.code}</span>
                  </div>
                  {group.wide ? (
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((s) => (
                        <span
                          key={s.name}
                          className="rounded-xl border border-fuchsia-300/20 bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 px-4 py-2 text-sm text-white/90 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:shadow-[0_0_18px_rgba(34,211,238,0.2)]"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {group.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                        >
                          <img src={skill.icon} alt={skill.name} className="h-8 w-8 shrink-0 object-contain" />
                          <span className="truncate text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mt-16 sm:mt-20 md:mt-24">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/75">[ featured_work ]</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Projects across AI, real-time systems & DevOps
                </h3>
              </div>
              <p className="max-w-xl text-white/55">
                From LLM-powered tools to containerized, Kubernetes-deployed platforms.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className={`neon-border group ${glass} p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] sm:p-6`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-mono text-xs text-cyan-300/80">
                        {String(i + 1).padStart(2, "0")} // {project.type}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h4>
                    </div>
                    <span className="shrink-0 rounded-full border border-fuchsia-300/20 bg-fuchsia-400/10 px-3 py-1 text-xs text-fuchsia-200">
                      {project.tag}
                    </span>
                  </div>

                  <div className="relative mb-5 overflow-hidden rounded-[1.5rem] border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-52"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-cyan-500/10" />
                  </div>

                  <p className="mb-6 text-sm leading-7 text-white/60">{project.description}</p>

                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs text-white/40">links://</p>
                    <div className="flex gap-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.repoLink && (
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition hover:border-cyan-300/30 hover:text-cyan-200"
                        >
                          <FaGithub /> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* JOURNEY */}
          <section id="journey" className="mt-16 sm:mt-20 md:mt-24">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/75">[ journey ]</p>
            <h3 className="mb-8 mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Experience & Education</h3>
            <div className="relative space-y-6 border-l border-cyan-300/20 pl-6 sm:pl-8">
              {timeline.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[31px] top-6 h-3.5 w-3.5 rounded-full border-2 border-cyan-300 bg-[#02040a] shadow-[0_0_14px_#67e8f9] sm:-left-[39px]" />
                  <div className={`neon-border ${glass} p-6`}>
                    <p className="font-mono text-xs text-fuchsia-300/80">{item.period}</p>
                    <h4 className="mt-2 text-xl font-semibold">{item.title}</h4>
                    <p className="text-sm text-cyan-200/80">{item.org}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-white/60">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-cyan-300">▹</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FUN FACT */}
          <section className={`neon-border ${glass} mt-16 p-6 sm:mt-20 sm:p-8`}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/75">[ fun_fact ]</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              I debug code like Sherlock solves mysteries.
            </h3>
            <p className="mt-4 leading-8 text-white/65">
              Minus the hat, but with the same obsession for clues, edge cases and clean solutions.
            </p>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mt-20 pb-16 sm:mt-24 md:mt-28">
            <div className={`neon-border ${glass} overflow-hidden p-6 shadow-xl sm:p-10 md:p-12`}>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10" />
              <p className="relative font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">[ contact ]</p>
              <div className="relative mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Let’s build the <span className="shimmer">future</span> together 🚀
                  </h3>
                  <p className="mt-4 max-w-2xl leading-7 text-white/60">
                    Open to Full Stack, DevOps and AI Engineer roles, internships and freelance work.
                  </p>
                  <div className="mt-6 space-y-4 text-sm text-white/70">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sumanranjan17291729@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 transition hover:text-cyan-300"
                    >
                      <FaEnvelope size={18} /> sumanranjan17291729@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/suman-ranjan-12719338a/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 transition hover:text-cyan-300"
                    >
                      <FaLinkedin size={18} /> linkedin.com/in/suman-ranjan
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://github.com/SumnRanjan"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:scale-105"
                  >
                    <FaGithub size={18} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suman-ranjan-12719338a/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                  >
                    <FaLinkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <p className="mt-10 text-center font-mono text-xs text-white/30">
              © {new Date().getFullYear()} Suman Ranjan · built with React & Tailwind
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
