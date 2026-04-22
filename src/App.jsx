import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function SumanPortfolio() {
const stats = [
  { label: "Focus", value: "Backend" },
  { label: "Stack", value: "MERN" },
  { label: "Learning", value: "DevOps" },
  { label: "Goal", value: "Cloud" },
];
  const projects = [
    {
      title: "Interview Talent Q",
      type: "Interview Platform",
      description:
        "A hiring workflow platform focused on structured interviews, candidate flow, and scalable backend logic.",
      link: "https://github.com/SumnRanjan/Interview-Talent-Q",
      tag: "Platform",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Forever Ecom",
      type: "E-commerce",
      description:
        "A modern commerce experience with product flows, user-facing UI, and backend integrations.",
      link: "https://github.com/SumnRanjan/Forever-Ecom",
      tag: "Commerce",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "LamaBlog",
      type: "Blog Platform",
      description:
        "A content-focused application with clean CRUD patterns, auth, and practical full-stack structure.",
      link: "https://github.com/SumnRanjan/LamaBlog",
      tag: "Content",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "PlayIt Backend",
      type: "Streaming Backend",
      description:
        "A backend-oriented streaming project designed around API flows, scalability, and media-friendly architecture.",
      link: "https://github.com/SumnRanjan/PlayIt-Backend",
      tag: "Backend",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "Bash", icon: "https://skillicons.dev/icons?i=bash" },
        { name: "C", icon: "https://skillicons.dev/icons?i=c" },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "React.js", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Vue.js", icon: "https://skillicons.dev/icons?i=vue" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
        { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
        { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
        {
          name: "Kubernetes",
          icon: "https://skillicons.dev/icons?i=kubernetes",
        },
        { name: "Jenkins", icon: "https://skillicons.dev/icons?i=jenkins" },
        {
          name: "GitHub Actions",
          icon: "https://skillicons.dev/icons?i=githubactions",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030712] text-white selection:bg-cyan-400/30">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:88px_88px] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(236,72,153,0.08),transparent_25%)]" />

        <main className="relative mx-auto max-w-7xl overflow-x-hidden px-4 py-6 sm:px-6 md:px-8 lg:px-12">
          <nav className="mb-12 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md sm:mb-16">
            <div className="min-w-0">
              <span className="block truncate text-base font-semibold tracking-tight sm:text-lg">
                Suman Ranjan
              </span>
            </div>

            <div className="hidden items-center gap-6 text-sm text-white/70 md:flex">
              <a href="#about" className="transition hover:text-white">
                About
              </a>
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#skills" className="transition hover:text-white">
                Skills
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </div>

            <a
              href="https://github.com/SumnRanjan"
              target="_blank"
              rel="noreferrer"
              className="ml-3 shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/20"
            >
              GitHub
            </a>
          </nav>

          <section className="grid items-center gap-8  lg:gap-10 lg:grid-cols-[1.3fr_0.8fr]">
            <div className="min-w-1 space-y-8">
              <div className="inline-flex max-w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md sm:text-sm">
                <span className="truncate">
                  code() • eat() • sleep() • repeat()
                </span>
              </div>

              <div className="max-w-5xl space-y-6">
                <p className="max-w-full break-words text-xs uppercase tracking-[0.22em] text-cyan-300/80 sm:text-sm sm:tracking-[0.3em]">
                  Full-Stack Development • DevOps & Cloud Engineering
                </p>

                <h1 className="max-w-full break-words text-4xl font-semibold leading-[1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-8xl">
                  Turning caffeine
                  <span className="block text-white/90">into clean code</span>
                  <span className="block bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
                    with a little DevOps magic.
                  </span>
                </h1>

                <p className="max-w-2xl break-words text-sm leading-7 text-white/65 sm:text-base sm:leading-8 md:text-lg">
                  I’m Suman Ranjan, a developer focused on scalable backend
                  systems, clean full-stack products, DevOps workflows, and
                  problem solving with strong DSA foundations.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Let’s Collaborate
                </a>
              </div>
            </div>

            <div className="w-full min-w-0 rounded-4xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl sm:p-5 lg:scale-105 lg:origin-top">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#050d1d] p-4 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                  <span className="h-3 w-3 rounded-full bg-white/15" />
                  <span className="h-3 w-3 rounded-full bg-white/10" />
                </div>

                <div className="space-y-5 rounded-[1.5rem] border border-cyan-400/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_45%)] p-4 sm:p-6">
                  <div className="flex min-w-0 items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm text-white/50">Developer Card</p>
                      <h2 className="break-words text-2xl font-semibold sm:text-3xl">
                        Suman Ranjan
                      </h2>
                    </div>
                    <span className="shrink-0 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-300">
                      Available
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                          {item.label}
                        </p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#040915] p-5">
                    <p className="mb-3 text-sm text-white/50">
                      Current Direction
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java DSA",
                        "DevOps",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="mt-16 grid gap-6 sm:mt-20 md:mt-24 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-8">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300/75">
                About Me
              </p>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Building systems that scale with clean engineering.
              </h3>
              <p className="mt-5 leading-8 text-white/65">
                I enjoy designing backend-heavy applications, improving
                developer workflows, and turning practical ideas into polished
                products. My learning path combines DSA, modern full-stack
                development, DevOps, and scalable system design.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-[#050c18] p-6 sm:p-8">
                <p className="text-xl font-semibold">What I’m exploring</p>
                <p className="mt-4 leading-8 text-white/65">
                  MERN stack architecture, cloud-native workflows, CI/CD
                  pipelines, Docker, Kubernetes, and production-oriented
                  engineering practices.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-[#050c18] p-6 sm:p-8">
                <p className="text-xl font-semibold">Problem solving</p>
                <p className="mt-4 leading-8 text-white/65">
                  Solved 500+ coding problems across LeetCode, GeeksforGeeks,
                  and CodeChef while strengthening Java-based DSA fundamentals.
                </p>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:mt-20 sm:p-8 md:mt-24 md:p-10"
          >
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Tools I build with
              </h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[#050c18] p-5 sm:p-6"
                >
                  <h4 className="mb-5 text-lg font-semibold text-cyan-300">
                    {group.title}
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05]"
                      >
                        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="h-9 w-9 object-contain"
                          />
                        </div>

                        <h5 className="text-sm font-medium text-white">
                          {skill.name}
                        </h5>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="mt-16 sm:mt-20 md:mt-24">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/75">
                  Featured Work
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                  Projects with strong product and backend thinking
                </h3>
              </div>
              <p className="max-w-xl text-white/60">
                A portfolio section inspired by premium Tailwind-style grids,
                glass surfaces, and strong contrast typography.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.05] sm:p-6"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-cyan-300/80">{project.type}</p>
                      <h4 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                        {project.title}
                      </h4>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                      {project.tag}
                    </span>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
                    />
                  </div>

                  <p className="mb-8 text-sm leading-7 text-white/60">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm text-white/45">GitHub Project</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition group-hover:border-cyan-300/30 group-hover:text-cyan-200"
                    >
                      View Repo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-6 sm:mt-20 md:mt-24 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#050c18] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/75">
                Why this UI
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Inspired by the Tailwind website aesthetic
              </h3>
              <p className="mt-5 leading-8 text-white/65">
                This design uses a dark grid background, oversized hero
                typography, glowing accents, rounded panels, and structured
                content blocks similar to the premium look you shared in the
                screenshots.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/75">
                Fun Fact
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                I debug code like Sherlock solves mysteries.
              </h3>
              <p className="mt-5 leading-8 text-white/65">
                Minus the hat, but with the same obsession for clues, edge
                cases, and clean solutions.
              </p>
            </div>
          </section>

          <section id="contact" className="mt-20 pb-16 sm:mt-24 md:mt-28">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br p-6 sm:p-10 md:p-12 shadow-xl">
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-fuchsia-500/5 pointer-events-none" />

              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/70">
                Contact
              </p>

              <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                {/* LEFT */}
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">
                    Let’s build something amazing 🚀
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-white/60">
                    Open to internships, freelance work, and exciting developer
                    roles. Let’s connect and create impactful solutions
                    together.
                  </p>

                  {/* Contact Info */}
                  <div className="mt-6 space-y-4 text-sm text-white/70">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=sumanranjan17291729@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 hover:text-cyan-300 transition"
                    >
                      <FaEnvelope size={18} />
                      sumanranjan17291729@gmail.com
                    </a>

                    <a
                      href="https://www.linkedin.com/in/suman-ranjan-12719338a/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 hover:text-cyan-300 transition"
                    >
                      <FaLinkedin size={18} />
                      linkedin.com/in/suman-ranjan
                    </a>
                  </div>
                </div>

                {/* RIGHT BUTTONS */}
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://github.com/SumnRanjan"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:scale-105 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/suman-ranjan-12719338a/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
