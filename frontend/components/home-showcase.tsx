export function HomeShowcase() {
  return (
    <section className="mx-auto mt-10 w-[calc(100%-24px)] overflow-hidden rounded-[40px] bg-[#f7dcc1] shadow-[0_28px_80px_rgba(0,0,0,0.08)]">
      <div className="relative min-h-[420px] overflow-hidden bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,0.7),rgba(255,255,255,0)_22%),linear-gradient(180deg,#ffd7ad_0%,#ffbe82_32%,#ffefdf_78%,#f7dcc1_100%)] px-6 py-8 md:px-10 md:py-10">
        <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[radial-gradient(120%_120%_at_0%_100%,#e67d23_0_20%,transparent_21%),radial-gradient(140%_120%_at_24%_100%,#f39a35_0_23%,transparent_24%),radial-gradient(160%_120%_at_52%_100%,#e68427_0_24%,transparent_25%),radial-gradient(140%_120%_at_78%_100%,#f0b25f_0_23%,transparent_24%),radial-gradient(120%_120%_at_100%_100%,#c95f14_0_20%,transparent_21%)]" />

        <div className="relative z-10 flex min-h-[360px] flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="max-w-[820px]">
            <p className="mb-5 text-[14px] uppercase tracking-[0.16em] text-black/45">
              Sigato for terminal-first teams
            </p>
            <h2 className="font-serif text-[clamp(3.2rem,6vw,5.8rem)] font-normal leading-[0.92] tracking-[-0.06em] text-[#181818]">
              Stop context-switching,
              <br />
              Start shipping.
            </h2>
            <p className="mt-6 max-w-[650px] text-[18px] leading-[1.55] text-black/70 md:text-[20px]">
              Sigato reads your codebase, runs safe terminal actions, and keeps
              the entire workflow inside one focused interface.
            </p>
          </div>

          <div className="ml-auto w-full max-w-[420px]">
            <div className="inline-flex min-h-[54px] w-full items-center overflow-hidden rounded-[18px] border border-black/15 bg-[#1d1816] text-white shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
              <span className="px-4 text-[18px]">$</span>
              <code className="flex-1 px-4 text-[15px] md:px-6 md:text-[16px]">
                npm i -g sigato
              </code>
              <button
                className="min-h-[54px] border-l border-white/10 bg-[#2d2521] px-5 text-[14px] font-bold uppercase tracking-[0.08em]"
                type="button"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
