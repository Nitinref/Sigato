import Link from "next/link";
import { SigatoMark } from "./sigato-mark";
import { SiteHeader } from "./site-header";

const docsNav = [
  "Interactive commands",
  "Voice input",
  "Context compaction",
  "Project rules",
  "Permission presets",
  "Agent modes",
  "Browser automation",
  "Skills",
];

export function DocsPageContent() {
  return (
    <main className="bg-[#f6efe8] text-[#151515]">
      <section className="mx-auto mt-3 w-[calc(100%-24px)] overflow-hidden rounded-b-[44px] shadow-[0_28px_80px_rgba(0,0,0,0.08)]">
        <div className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f0e6_0%,#f1eadf_100%)]">
          <SiteHeader />

          <div className="px-4 pb-6 pt-[130px] md:px-6 lg:px-10">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
              <aside className="rounded-[26px] border border-black/10 bg-white/55 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-4 border-b border-black/10 pb-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#1d1816] text-[#ffb05c] shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                    <SigatoMark className="h-10 w-10" />
                  </span>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.18em] text-black/45">Docs</p>
                    <h1 className="mt-1 text-[22px] font-semibold">Sigato guide</h1>
                  </div>
                </div>

                <nav className="mt-4 grid gap-2 text-[16px] text-black/65">
                  {docsNav.map((item) => (
                    <a key={item} className="rounded-2xl px-3 py-2 hover:bg-black/5" href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                      {item}
                    </a>
                  ))}
                </nav>
              </aside>

              <div className="space-y-6 rounded-[26px] border border-black/10 bg-white/45 p-4 md:p-6">
                <div className="overflow-hidden rounded-[18px] bg-[#111111] shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-white/35">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[13px] uppercase tracking-[0.12em]">Command Prompt - Sigato</span>
                  </div>
                  <div className="px-4 pb-5 pt-5 font-mono text-[15px] leading-[1.75] text-[#f5efe8] md:text-[16px]">
                    <p className="m-0 text-white/75">C:\Users\DELL&gt;sigato wakeup</p>
                    <div className="mt-2 text-[clamp(3.7rem,8vw,7.2rem)] font-black leading-none tracking-[-0.08em] text-[#eadcfb] drop-shadow-[0_0_0_3px_rgba(255,255,255,0.85)]">
                      SIGATO
                    </div>
                    <div className="mt-6 space-y-1 text-white/80">
                      <p className="m-0">What option you want to go further ..... </p>
                      <p className="m-0 text-white/45">CLI</p>
                      <p className="m-0 mt-3">Choose CLI sub-mode</p>
                      <p className="m-0 text-white/45">Agent Mode</p>
                      <p className="m-0 mt-4 text-white">Agent Mode</p>
                      <p className="m-0 mt-5">What would you like the agent to do?</p>
                      <p className="m-0 text-white/35">Concrete task for this codebase...</p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <article id="interactive-commands" className="rounded-[22px] border border-black/10 bg-white/75 p-5">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-black/40">Interactive commands</p>
                    <h2 className="text-[22px] font-semibold text-[#1c1c1c]">Use Sigato from the terminal</h2>
                    <p className="mt-3 text-[16px] leading-[1.6] text-black/65">
                      Start a session, select a mode, and hand tasks to Sigato with approvals when needed.
                    </p>
                  </article>

                  <article id="voice-input" className="rounded-[22px] border border-black/10 bg-white/75 p-5">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-black/40">Voice input</p>
                    <h2 className="text-[22px] font-semibold text-[#1c1c1c]">Speak a task directly</h2>
                    <p className="mt-3 text-[16px] leading-[1.6] text-black/65">
                      Turn short natural-language requests into concrete terminal work.
                    </p>
                  </article>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <article id="context-compaction" className="rounded-[22px] border border-black/10 bg-white/75 p-5">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-black/40">Context compaction</p>
                    <p className="text-[16px] leading-[1.6] text-black/65">
                      Keep long sessions lean by summarizing decisions and preserving only the important state.
                    </p>
                  </article>
                  <article id="project-rules" className="rounded-[22px] border border-black/10 bg-white/75 p-5">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-black/40">Project rules</p>
                    <p className="text-[16px] leading-[1.6] text-black/65">
                      Define approval boundaries, coding style, and safe execution defaults per project.
                    </p>
                  </article>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                  <article id="permission-presets" className="rounded-[22px] border border-black/10 bg-white/75 p-5">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-black/40">Permission presets</p>
                    <p className="text-[16px] leading-[1.6] text-black/65">
                      Configure safe defaults for shell, browser, and edit actions across environments.
                    </p>
                  </article>
                  <article id="agent-modes" className="rounded-[22px] border border-black/10 bg-white/75 p-5">
                    <p className="mb-3 text-[12px] uppercase tracking-[0.16em] text-black/40">Agent modes</p>
                    <p className="text-[16px] leading-[1.6] text-black/65">
                      Move between single-agent and orchestrated workflows depending on the task.
                    </p>
                  </article>
                </div>

                <div className="overflow-hidden rounded-[18px] bg-[#111111] shadow-[0_16px_30px_rgba(0,0,0,0.12)]">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-white/35">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[13px] uppercase tracking-[0.12em]">CLI preview</span>
                  </div>
                  <pre className="m-0 whitespace-pre-wrap px-4 pb-5 pt-4 font-mono text-[15px] leading-[1.75] text-[#f5efe8] md:text-[16px]">
{`$ sigato
$ sigato --help
$ sigato docs`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-7 mb-5 w-[calc(100%-24px)] rounded-[40px] bg-[#101010] px-5 py-6 text-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] md:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-[14px] uppercase tracking-[0.16em] text-white/45">Docs route</p>
            <h2 className="mt-2 font-serif text-[clamp(2.6rem,4vw,4.2rem)] font-normal leading-[0.95] tracking-[-0.05em] text-[#fff2ea]">
              Everything in one place.
            </h2>
          </div>
          <Link className="rounded-full border border-white/15 px-5 py-3 text-[14px] uppercase tracking-[0.16em] text-white/80" href="/">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
