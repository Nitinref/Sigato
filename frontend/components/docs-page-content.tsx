"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowUpRight, IconSearch } from "@tabler/icons-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SigatoMark } from "./sigato-mark";

type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

type TopicCard = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  keywords: string[];
};

const topNavLinks = [
  { label: "Docs", href: "#top" },
  { label: "Install", href: "#quick-start" },
  { label: "Features", href: "/#features" },
  { label: "FAQ", href: "/#coming-soon" },
  { label: "GitHub", href: "https://github.com/Nitinref/Sigato", external: true },
  { label: "Feedback", href: "/#feedback", external: true },
] as const;

const sidebarItems: NavItem[] = [
  { label: "Interactive commands", href: "#interactive-commands" },
  { label: "Voice input", href: "#voice-input" },
  { label: "Context compaction", href: "#context-compaction" },
  { label: "Project rules", href: "#project-rules" },
  { label: "Permission presets", href: "#permission-presets" },
  {
    label: "Agent modes",
    href: "#agent-modes",
    children: [
      { label: "Build and Plan", href: "#build-and-plan" },
      { label: "Boss orchestrator (opt-in)", href: "#boss-orchestrator" },
      { label: "Multi-agent orchestrator (opt-in, parallel)", href: "#multi-agent-orchestrator" },
    ],
  },
  {
    label: "Tools",
    href: "#tools",
    children: [
      { label: "Browser automation", href: "#browser-automation" },
      { label: "MCP configuration", href: "#mcp-configuration" },
      { label: "Skills", href: "#skills" },
    ],
  },
  { label: "Configuration", href: "#configuration" },
  { label: "Environment variables", href: "#environment-variables" },
  { label: "Architecture", href: "#architecture" },
  { label: "License", href: "#license" },
];

const topicCards: TopicCard[] = [
  {
    id: "interactive-commands",
    eyebrow: "Interactive commands",
    title: "Use Sigato from the terminal",
    summary: "Start a session, choose a mode, and hand tasks to Sigato with approvals when needed.",
    keywords: ["terminal", "commands", "approval", "session"],
  },
  {
    id: "voice-input",
    eyebrow: "Voice input",
    title: "Speak a task directly",
    summary: "Turn short natural-language requests into concrete terminal work.",
    keywords: ["voice", "speech", "task", "natural language"],
  },
  {
    id: "context-compaction",
    eyebrow: "Context compaction",
    title: "Keep sessions lean",
    summary: "Summarize decisions and preserve only the important state across longer runs.",
    keywords: ["context", "summary", "memory", "long session"],
  },
  {
    id: "project-rules",
    eyebrow: "Project rules",
    title: "Define safe defaults",
    summary: "Set approval boundaries, coding style, and execution rules per project.",
    keywords: ["rules", "defaults", "style", "project"],
  },
  {
    id: "permission-presets",
    eyebrow: "Permission presets",
    title: "Configure guardrails",
    summary: "Build safe defaults for shell, browser, and edit actions across environments.",
    keywords: ["permissions", "guardrails", "shell", "browser"],
  },
  {
    id: "build-and-plan",
    eyebrow: "Build and Plan",
    title: "Sequence the work carefully",
    summary: "Use a step-by-step orchestration flow for scoped terminal work.",
    keywords: ["build", "plan", "sequence", "steps"],
  },
  {
    id: "boss-orchestrator",
    eyebrow: "Boss orchestrator",
    title: "One agent drives the session",
    summary: "Keep a single boss agent in charge when you want direct control.",
    keywords: ["boss", "orchestrator", "single agent"],
  },
  {
    id: "multi-agent-orchestrator",
    eyebrow: "Multi-agent orchestrator",
    title: "Run in parallel when needed",
    summary: "Split work across specialized agents that run side by side.",
    keywords: ["multi-agent", "parallel", "orchestrator", "specialized"],
  },
  {
    id: "browser-automation",
    eyebrow: "Browser automation",
    title: "Drive the web safely",
    summary: "Open pages, click, type, and inspect browser state when a task needs the browser.",
    keywords: ["browser", "automation", "web", "ui"],
  },
  {
    id: "mcp-configuration",
    eyebrow: "MCP configuration",
    title: "Connect external tools",
    summary: "Add MCP servers for services, data, and app-specific workflows.",
    keywords: ["mcp", "tools", "integration", "servers"],
  },
  {
    id: "skills",
    eyebrow: "Skills",
    title: "Load specialized workflows",
    summary: "Reuse skills for repeatable guided tasks across the product.",
    keywords: ["skills", "workflow", "repeatable"],
  },
  {
    id: "configuration",
    eyebrow: "Configuration",
    title: "Tune runtime defaults",
    summary: "Store keys, model refs, and defaults in environment variables or project config.",
    keywords: ["configuration", "defaults", "runtime"],
  },
  {
    id: "environment-variables",
    eyebrow: "Environment variables",
    title: "Keep secrets local",
    summary: "Set API keys and provider preferences in your shell or project environment.",
    keywords: ["env", "keys", "secrets", "variables"],
  },
  {
    id: "architecture",
    eyebrow: "Architecture",
    title: "Terminal first, extensible by design",
    summary: "The UI is built for shell work, browser actions, and orchestration.",
    keywords: ["architecture", "design", "extensible"],
  },
  {
    id: "license",
    eyebrow: "License",
    title: "Open and hackable",
    summary: "Keep Sigato open, scriptable, and easy to modify for your team.",
    keywords: ["license", "open source", "hackable"],
  },
];

const providers = [
  { provider: "OpenAI (ChatGPT)", env: "OPENAI_API_KEY", models: "gpt-4o, gpt-4.1, o4-mini" },
  { provider: "Anthropic (Claude)", env: "ANTHROPIC_API_KEY", models: "claude-sonnet-4-6, claude-opus-4-8, claude-haiku-4-5-20251001" },
  { provider: "Groq", env: "GROQ_API_KEY", models: "llama-3.3-70b-versatile, llama-3.1-8b-instant" },
  { provider: "Google Gemini", env: "GEMINI_API_KEY / GOOGLE_API_KEY", models: "gemini-2.5-pro, gemini-2.5-flash" },
  { provider: "Free (OpenRouter)", env: "OPENROUTER_API_KEY", models: "See free models below" },
];

function normalize(value: string) {
  return value.toLowerCase();
}

function matchesQuery(item: string, query: string) {
  return normalize(item).includes(normalize(query));
}

function filterTree(items: NavItem[], query: string): NavItem[] {
  const q = query.trim();
  if (!q) return items;

  return items
    .map((item) => {
      const matchesSelf = matchesQuery(item.label, q) || matchesQuery(item.href, q);
      const children = item.children ? filterTree(item.children, q) : undefined;

      if (!matchesSelf && (!children || children.length === 0)) {
        return null;
      }

      return {
        ...item,
        children,
      };
    })
    .filter(Boolean) as NavItem[];
}

function isTreeActive(item: NavItem, activeId: string | null) {
  if (!activeId) return false;
  if (item.href === `#${activeId}`) return true;
  return item.children?.some((child) => child.href === `#${activeId}`) ?? false;
}

function SectionDivider() {
  return <div className="border-t border-dashed border-black/12" />;
}

function DocsCard({
  topic,
}: {
  topic: TopicCard;
}) {
  return (
    <article
      id={topic.id}
      className="rounded-[20px] border border-black/10 bg-white/70 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
    >
      <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-black/42">{topic.eyebrow}</p>
      <h3 className="text-[24px] font-semibold tracking-[-0.03em] text-[#1a1a1a]">{topic.title}</h3>
      <p className="mt-3 text-[16px] leading-[1.7] text-black/66">{topic.summary}</p>
    </article>
  );
}

export function DocsPageContent() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState<string | null>("interactive-commands");
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredSidebar = useMemo(() => filterTree(sidebarItems, query), [query]);
  const filteredTopics = useMemo(
    () =>
      query.trim()
        ? topicCards.filter((topic) => {
            const text = `${topic.eyebrow} ${topic.title} ${topic.summary} ${topic.keywords.join(" ")}`;
            return matchesQuery(text, query);
          })
        : topicCards,
    [query],
  );

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  useEffect(() => {
    const ids = topicCards.map((topic) => topic.id).concat([
      "quick-start",
      "providers",
      "terminal-preview",
      "license",
    ]);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#f4f1eb] text-[#151515]">
      <div id="top" className="mx-auto max-w-[1360px] px-4 py-5 md:px-6 md:py-6">
        <header className="rounded-[40px] border border-black/10 bg-white/88 px-5 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)] backdrop-blur-sm md:px-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="flex items-center gap-3 text-[#111]">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111111] text-white">
                <SigatoMark className="h-6 w-6" />
              </span>
              <span className="text-[18px] font-semibold tracking-[-0.02em]">Sigato</span>
            </Link>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-3 text-[13px] uppercase tracking-[0.2em] text-black/62">
              {topNavLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={"external" in item && item.external ? "_blank" : undefined}
                  rel={"external" in item && item.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1 transition hover:text-black"
                >
                  <span>{item.label}</span>
                  {"external" in item && item.external ? (
                    <IconArrowUpRight className="h-3.5 w-3.5" />
                  ) : null}
                </a>
              ))}
            </nav>

            <Link
              href="/#install"
              className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-black hover:text-white"
            >
              Try Sigato
            </Link>
          </div>
        </header>

        <section className="px-2 pt-12 md:px-4">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <aside className="hidden w-full lg:sticky lg:top-6 lg:block lg:w-[320px]">
              <div className="rounded-[18px] border border-black/12 bg-[#f6f2ea] shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                <div className="border-b border-black/10 px-5 py-4 text-[12px] uppercase tracking-[0.18em] text-black/52">
                  On this page
                </div>
                <nav className="max-h-[calc(100vh-180px)] overflow-auto px-2 py-2 text-[15px] text-black/68">
                  {filteredSidebar.length === 0 ? (
                    <div className="px-4 py-3 text-[14px] text-black/45">No matches</div>
                  ) : (
                    filteredSidebar.map((section) => (
                      <div key={section.label}>
                        <a
                          href={section.href}
                          className={[
                            "block rounded-[10px] px-4 py-3 transition",
                            isTreeActive(section, activeId) ? "bg-black/4 text-black" : "hover:bg-black/4",
                          ].join(" ")}
                        >
                          {section.label}
                        </a>
                        {section.children?.length ? (
                          <div className="ml-3 border-l border-black/10 pl-3">
                            {section.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className={[
                                  "block rounded-[10px] px-4 py-2 text-[14px] transition",
                                  activeId && child.href === `#${activeId}` ? "bg-black/4 text-black" : "text-black/56 hover:bg-black/4 hover:text-black",
                                ].join(" ")}
                              >
                                {child.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))
                  )}
                </nav>
              </div>
            </aside>

            <div className="min-w-0 flex-1">
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileTocOpen((value) => !value)}
                  className="flex w-full items-center justify-between rounded-[18px] border border-black/12 bg-white/80 px-4 py-4 text-left shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                >
                  <span className="text-[14px] uppercase tracking-[0.18em] text-black/52">
                    On this page
                  </span>
                  <span className="text-[13px] font-semibold text-black/65">
                    {isMobileTocOpen ? "Hide" : "Show"}
                  </span>
                </button>

                {isMobileTocOpen ? (
                  <div className="mt-3 rounded-[18px] border border-black/12 bg-[#f6f2ea] p-2 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                    <nav className="grid gap-1 text-[15px] text-black/68">
                      {filteredSidebar.length === 0 ? (
                        <div className="px-4 py-3 text-[14px] text-black/45">No matches</div>
                      ) : (
                        filteredSidebar.map((section) => (
                          <div key={section.label}>
                            <a
                              href={section.href}
                              onClick={() => setIsMobileTocOpen(false)}
                              className={[
                                "block rounded-[10px] px-4 py-3 transition",
                                isTreeActive(section, activeId) ? "bg-black/4 text-black" : "hover:bg-black/4",
                              ].join(" ")}
                            >
                              {section.label}
                            </a>
                            {section.children?.length ? (
                              <div className="ml-3 border-l border-black/10 pl-3">
                                {section.children.map((child) => (
                                  <a
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setIsMobileTocOpen(false)}
                                    className={[
                                      "block rounded-[10px] px-4 py-2 text-[14px] transition",
                                      activeId && child.href === `#${activeId}` ? "bg-black/4 text-black" : "text-black/56 hover:bg-black/4 hover:text-black",
                                    ].join(" ")}
                                  >
                                    {child.label}
                                  </a>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))
                      )}
                    </nav>
                  </div>
                ) : null}
              </div>

              <section className="pb-10">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-[900px]">
                    <p className="text-[15px] uppercase tracking-[0.18em] text-black/45">[docs]</p>
                    <h1 className="mt-3 text-[clamp(3rem,4.8vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#111]">
                      documentation
                    </h1>
                    <p className="mt-5 max-w-[920px] text-[18px] leading-[1.7] text-black/66 md:text-[20px]">
                      Full reference for installing, configuring, and using Sigato - synced from the official README.
                    </p>
                  </div>

                  <div className="w-full max-w-[330px]">
                    <div className="flex items-center gap-3 rounded-[14px] border border-black/12 bg-white px-4 py-3 shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
                      <IconSearch className="h-5 w-5 text-black/35" />
                      <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Search docs..."
                        className="w-full bg-transparent text-[16px] text-[#111] outline-none placeholder:text-black/40"
                      />
                      <kbd className="rounded-[8px] border border-black/12 bg-black/3 px-2 py-1 text-[12px] text-black/55">
                        Ctrl+K
                      </kbd>
                    </div>
                  </div>
                </div>
              </section>

              <SectionDivider />

              <section className="grid gap-10 py-10 lg:grid-cols-[1fr_0.98fr]">
                <div className="space-y-10">
                  <article id="interactive-commands">
                    <h2 className="text-[30px] font-semibold tracking-[-0.04em] text-[#111]">
                      Sigato
                    </h2>
                    <p className="mt-5 max-w-[720px] text-[18px] leading-[1.75] text-black/72">
                      A minimal terminal coding agent with an Ink TUI. Chat with an AI that can read and edit code,
                      search the web, run git/shell commands with approval, use MCP servers, load skills, schedule
                      reminders, and orchestrate work through boss or multi-agent workflows.
                    </p>
                  </article>

                  <article id="quick-start" className="space-y-4">
                    <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111]">
                      Quick start
                    </h2>
                    <SectionDivider />
                    <div className="text-[16px] font-semibold text-[#111]">Global install (npm):</div>
                    <div className="overflow-hidden rounded-[16px] bg-[#111111] shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                      <pre className="m-0 whitespace-pre-wrap px-5 py-5 font-mono text-[15px] leading-[1.75] text-[#f5efe8] md:text-[16px]">
{`npm install -g sigato
sigato`}
                      </pre>
                    </div>
                    <div className="text-[16px] font-semibold text-[#111]">From source:</div>
                    <div className="overflow-hidden rounded-[16px] bg-[#111111] shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                      <pre className="m-0 whitespace-pre-wrap px-5 py-5 font-mono text-[15px] leading-[1.75] text-[#f5efe8] md:text-[16px]">
{`git clone https://github.com/Nitinref/Sigato
cd Sigato
npm install
npm run dev`}
                      </pre>
                    </div>
                    <p className="text-[16px] text-black/68">Requires Node.js 20+.</p>
                  </article>

                  <article id="providers" className="space-y-4">
                    <h2 className="text-[28px] font-semibold tracking-[-0.04em] text-[#111]">
                      Providers
                    </h2>
                    <SectionDivider />
                    <div className="hidden overflow-hidden rounded-[16px] border border-black/12 bg-white/70 md:block">
                      <div className="grid grid-cols-[1.1fr_0.8fr_1.2fr] border-b border-black/10 bg-[#f3ede7] px-4 py-4 text-[13px] uppercase tracking-[0.14em] text-black/54">
                        <div>Provider</div>
                        <div>Env var</div>
                        <div>Example models</div>
                      </div>
                      <div className="divide-y divide-black/10">
                        {providers.map((provider) => (
                          <div
                            key={provider.provider}
                            className="grid grid-cols-[1.1fr_0.8fr_1.2fr] gap-4 px-4 py-4 text-[16px] leading-[1.6] text-black/78"
                          >
                            <div>{provider.provider}</div>
                            <div className="font-mono text-[14px] text-black/72">{provider.env}</div>
                            <div className="font-mono text-[14px] text-black/72">{provider.models}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid gap-3 md:hidden">
                      {providers.map((provider) => (
                        <article key={provider.provider} className="rounded-[16px] border border-black/12 bg-white/72 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.04)]">
                          <div className="text-[16px] font-semibold text-[#111]">{provider.provider}</div>
                          <div className="mt-3 grid gap-2 text-[14px] text-black/66">
                            <div className="flex items-start justify-between gap-4">
                              <span className="uppercase tracking-[0.14em] text-black/42">Env</span>
                              <span className="font-mono text-right">{provider.env}</span>
                            </div>
                            <div className="flex items-start justify-between gap-4">
                              <span className="uppercase tracking-[0.14em] text-black/42">Models</span>
                              <span className="font-mono text-right">{provider.models}</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                    <p className="text-[16px] text-black/68">
                      Model refs use <code className="rounded-[6px] border border-black/10 bg-white px-2 py-0.5 font-mono text-[14px]">provider/model-id</code>,
                      for example <code className="rounded-[6px] border border-black/10 bg-white px-2 py-0.5 font-mono text-[14px]">anthropic/claude-sonnet-4-6</code>.
                    </p>
                  </article>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-4">
                    {filteredTopics.map((topic) => (
                      <DocsCard key={topic.id} topic={topic} />
                    ))}
                  </div>

                  <article id="terminal-preview" className="rounded-[20px] border border-black/10 bg-[#111111] p-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
                    <p className="mb-2 text-[12px] uppercase tracking-[0.18em] text-white/45">CLI preview</p>
                    <div className="overflow-hidden rounded-[16px] border border-white/8 bg-[#0c0c0c]">
                      <pre className="m-0 whitespace-pre-wrap px-5 py-5 font-mono text-[15px] leading-[1.75] text-[#f5efe8] md:text-[16px]">
{`$ sigato
$ sigato --help
$ sigato docs`}
                      </pre>
                    </div>
                  </article>
                </div>
              </section>

              <SectionDivider />

              <footer
                id="docs-footer"
                className="mt-10 grid gap-8 rounded-[36px] border border-black/10 bg-white/72 px-5 pb-6 pt-8 shadow-[0_22px_60px_rgba(0,0,0,0.06)] md:px-8 lg:grid-cols-[1.1fr_0.9fr]"
              >
                <div>
                  <div className="inline-flex items-center gap-4 rounded-full bg-transparent px-0 py-0 text-[22px] font-bold text-[#111]">
                    <span className="flex h-10 w-10 items-center justify-center text-[#ff8a3d]" aria-hidden="true">
                      <SigatoMark className="h-10 w-10" />
                    </span>
                    <span>Sigato Docs</span>
                  </div>
                  <p className="mt-5 max-w-[560px] text-[17px] leading-[1.55] text-black/66 md:text-[18px]">
                    Documentation for the terminal-first agent workflow. Use the sidebar to jump through the guide,
                    or search with <kbd className="rounded-[6px] border border-black/10 bg-white px-2 py-0.5 text-[12px]">Ctrl+K</kbd>.
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center rounded-full border border-black/12 bg-[#111111] px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-black/90"
                    >
                      Back to home
                    </Link>
                    <a
                      href="https://github.com/Nitinref/Sigato"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-black hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <h4 className="mb-4 text-[15px] uppercase tracking-[0.14em] text-black/42">Docs</h4>
                    <a className="mb-3 block text-[17px] text-black/66" href="#interactive-commands">
                      Interactive commands
                    </a>
                    <a className="mb-3 block text-[17px] text-black/66" href="#providers">
                      Providers
                    </a>
                    <a className="mb-3 block text-[17px] text-black/66" href="#architecture">
                      Architecture
                    </a>
                  </div>
                  <div>
                    <h4 className="mb-4 text-[15px] uppercase tracking-[0.14em] text-black/42">Community</h4>
                    <a className="mb-3 block text-[17px] text-black/66" href="/#feedback">
                      Feedback
                    </a>
                    <a className="mb-3 block text-[17px] text-black/66" href="/#coming-soon">
                      Roadmap
                    </a>
                    <a className="mb-3 block text-[17px] text-black/66" href="/#install">
                      Install
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
