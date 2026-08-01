import { Terminal } from "./ui/terminal";

export function HomeShowcase() {
  return (
    <section className="mx-auto mt-10 w-[calc(100%-24px)] overflow-hidden rounded-[40px] shadow-[0_28px_80px_rgba(0,0,0,0.08)]">
      <div
        className="relative overflow-hidden px-6 py-8 md:px-10 md:py-10"
        style={{ background: "var(--showcase-bg)" }}
      >
        <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[radial-gradient(120%_120%_at_0%_100%,#e67d23_0_20%,transparent_21%),radial-gradient(140%_120%_at_24%_100%,#f39a35_0_23%,transparent_24%),radial-gradient(160%_120%_at_52%_100%,#e68427_0_24%,transparent_25%),radial-gradient(140%_120%_at_78%_100%,#f0b25f_0_23%,transparent_24%),radial-gradient(120%_120%_at_100%_100%,#c95f14_0_20%,transparent_21%)]" />

        <div className="relative z-10 grid min-h-[360px] gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
          <div className="max-w-[820px]">
            <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-[var(--muted-fg)]">
              Sigato for terminal-first teams
            </p>
            <h2 className="font-serif text-[clamp(3.2rem,6vw,5.8rem)] font-normal leading-[0.92] tracking-[-0.06em] text-[var(--page-fg)]">
              Stop context-switching,
              <br />
              Start shipping.
            </h2>
            <p className="mt-6 max-w-[650px] text-[18px] leading-[1.55] text-[var(--muted-fg)] md:text-[20px]">
              Sigato reads your codebase, runs safe terminal actions, and keeps
              the entire workflow inside one focused interface.
            </p>
          </div>

          <div className="ml-auto w-full max-w-[560px]">
            <div className="rounded-[32px] border border-[var(--border-soft)] bg-[var(--surface-3)] p-3 shadow-[0_20px_48px_rgba(0,0,0,0.18)] md:p-4">
              <div className="mb-3 flex items-center gap-3 rounded-[18px] bg-white/5 p-2 text-sm text-[var(--page-fg)]">
                <button className="rounded-[12px] bg-white/12 px-4 py-2 font-semibold text-[var(--page-fg)]">
                  Preview
                </button>
                <button className="rounded-[12px] px-4 py-2 text-[var(--muted-fg)]">
                  Code
                </button>
                <div className="ml-auto hidden rounded-[12px] border border-[var(--border-soft)] bg-white/5 px-3 py-2 text-xs text-[var(--muted-fg)] sm:block">
                  CLI demo
                </div>
                <button className="rounded-[12px] bg-white px-4 py-2 font-semibold text-[#111]">
                  Copy prompt
                </button>
              </div>

              <div className="overflow-hidden rounded-[26px] border border-[var(--border-soft)] bg-[var(--surface-3)]">
                <div className="flex items-center justify-between border-b border-[var(--border-soft)] px-4 py-3 text-[12px] uppercase tracking-[0.08em] text-[var(--muted-fg)]">
                  <span>Sigato - bash</span>
                  <span className="text-[#ff9a42]">BOSS - Build</span>
                </div>
                <Terminal
                  commands={["sigato --boss"]}
                  outputs={{
                    0: [
                      "sigato free/llama-3.3-70b - BOSS",
                      "",
                      "add refresh token rotation to the auth API",
                      "",
                      "sigato planning refresh token rotation",
                      "1. read src/auth/refresh.ts + token store",
                      "2. rotate refresh tokens in Redis",
                      "3. add integration tests",
                      "4. run npm test",
                      "",
                      "approve? execute plan with implement worker",
                    ],
                  }}
                  username="Sigato"
                  promptText="C:\\Users\\DELL>"
                  typingSpeed={35}
                  delayBetweenCommands={800}
                  initialDelay={150}
                  className="max-w-none"
                  viewportClassName="h-[260px] px-5 py-5 text-[13px] leading-6 text-[var(--page-fg)] md:h-[320px] md:px-6 md:py-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
