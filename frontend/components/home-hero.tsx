import { SiteHeader } from "./site-header";

const capabilities = [
  { name: "Terminal", color: "#ff8a3d" },
  { name: "Browser", color: "#ffb05c" },
  { name: "Approvals", color: "#ff7f66" },
  { name: "MCP & Skills", color: "#ff9955" },
  { name: "Workflow", color: "#ff6f3f" },
];

export function HomeHero() {
  return (
    <>
      <section className="mx-auto mt-3 w-[calc(100%-24px)] overflow-hidden rounded-[44px] shadow-[0_28px_80px_rgba(0,0,0,0.08)]">
        <div
          className="relative min-h-[900px] overflow-hidden"
          style={{ background: "var(--hero-bg)" }}
        >
          <SiteHeader />

          <div className="relative z-10 mx-auto max-w-[1060px] px-8 pb-[220px] pt-[188px] text-center">
            <h1 className="font-serif text-[clamp(4rem,6.8vw,7.4rem)] font-normal leading-[0.94] tracking-[-0.05em] text-[var(--page-fg)]">
              Autopilot for your terminal workflow.
              <br />
              Build with Sigato.
            </h1>
            <p className="mx-auto mt-9 max-w-[790px] text-[clamp(1.15rem,2vw,1.8rem)] leading-[1.55] text-[var(--muted-fg)]">
              <strong className="text-[var(--page-fg)]">Sigato</strong> reads and edits
              code, runs shell commands with approval, and helps you move from
              idea to implementation without leaving the terminal.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4" id="install">
              <div className="inline-flex min-h-[54px] items-center overflow-hidden rounded-[16px] border border-[var(--border-soft)] bg-[var(--surface-4)] text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
                <span className="px-4 text-[18px] text-white/90">$</span>
                <code className="px-6 text-[16px] text-white/85">npm i -g sigato</code>
                <button
                  className="min-h-[54px] border-l border-white/10 bg-[var(--surface-5)] px-5 text-[14px] font-bold uppercase tracking-[0.08em] text-white/90"
                  type="button"
                >
                  Copy
                </button>
              </div>

              <a
                className="inline-flex min-h-[54px] items-center gap-3 rounded-[16px] border border-[#ff8a3d]/30 bg-[var(--surface-1)] px-4 pr-5 text-[#ff8a3d] shadow-[0_14px_34px_rgba(255,138,61,0.12)]"
                href="/#coming-soon"
              >
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#ff8a3d] font-bold text-white">
                  S
                </span>
                <span className="flex flex-col items-start leading-none">
                  <small className="text-[10px] uppercase tracking-[0.12em]">
                    Launch status
                  </small>
                  <strong className="text-[22px] font-extrabold leading-none">
                    Coming soon
                  </strong>
                </span>
                <span className="ml-1 flex flex-col items-center leading-none font-bold">
                  <span className="text-[14px]">^</span>
                  <span className="text-[14px]">1</span>
                </span>
              </a>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-[120px] bg-[radial-gradient(120%_180%_at_0%_100%,#d97a1d_0_24%,transparent_25%),radial-gradient(140%_180%_at_18%_100%,#f09b3c_0_28%,transparent_29%),radial-gradient(160%_180%_at_46%_100%,#e58224_0_24%,transparent_25%),radial-gradient(150%_180%_at_72%_100%,#ffb15f_0_26%,transparent_27%),radial-gradient(120%_180%_at_100%_100%,#cf6c16_0_22%,transparent_23%)]"
          />
        </div>
      </section>

      <section id="overview" className="mx-auto w-[calc(100%-24px)] px-4 pb-10 pt-16 text-center">
        <h2 className="font-serif text-[clamp(3.2rem,4.5vw,6rem)] font-normal leading-[0.98] tracking-[-0.05em] text-[var(--page-fg)]">
          A warm, focused workspace for
          <br />
          autonomous development.
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
          {capabilities.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-[22px] font-bold"
              style={{ color: item.color }}
            >
              <span className="h-[34px] w-[34px]" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="3" opacity="0.2" />
                  <path
                    d="M20 7c7 0 13 6 13 13s-6 13-13 13S7 27 7 20s6-13 13-13Z"
                    stroke="currentColor"
                    strokeWidth="3"
                    opacity="0.7"
                  />
                </svg>
              </span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
