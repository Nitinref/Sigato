const tabs = [
  ["Terminal agent", "Boss & multi-agent", true],
  ["Browser agent", "Shop & book with approval", false],
  ["Workflow", "Plan, act, and hand off", false],
  ["Approvals", "Safe execution gates", false],
  ["Extensions", "MCP & skills", false],
] as const;

export function HomeFeatures() {
  return (
    <section
      id="features"
      className="mx-auto mt-2 w-[calc(100%-24px)] rounded-[40px] bg-[linear-gradient(180deg,#f8d3b1_0%,#f4caa1_100%)] px-0 py-6 shadow-[0_28px_80px_rgba(0,0,0,0.08)]"
    >
      <div className="flex gap-4 overflow-x-auto px-10 pb-5">
        {tabs.map(([title, subtitle, active]) => (
          <button
            key={title}
            type="button"
            className={[
              "min-w-[140px] shrink-0 border-b bg-transparent pb-3 text-left",
              active ? "border-b-2 border-[#171717] text-[#171717]" : "border-b border-black/10 text-black/55",
            ].join(" ")}
          >
            <span className="block text-[18px]">{title}</span>
            <small className="block text-[14px]">{subtitle}</small>
          </button>
        ))}
      </div>

      <div className="grid gap-9 px-6 pb-8 pt-10 lg:grid-cols-[1fr_1.12fr] lg:px-12 lg:pt-14">
        <div className="max-w-[520px] pt-8 lg:pt-10">
          <p className="mb-4 text-[14px] uppercase tracking-[0.12em] text-black/50">
            Sigato terminal agent
          </p>
          <h3 className="font-serif text-[clamp(3.2rem,4.3vw,5.8rem)] font-normal leading-[0.95] tracking-[-0.05em]">
            Delegate exploration, implementation, and shell work.
          </h3>
          <p className="mt-7 text-[20px] leading-[1.45] text-[#40281b]/72 lg:text-[24px]">
            Sigato helps you run through plans in parallel, keep approvals visible,
            and move from prompt to output without context switching.
          </p>
        </div>

        <div className="overflow-hidden rounded-[28px] border-[8px] border-[#ff8a3d]/80 bg-gradient-to-b from-white/12 to-white/0 shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
          <div className="grid grid-cols-[auto_auto_auto_1fr_auto] items-center gap-2 border-b border-white/10 bg-[#1a1716] px-4 py-4 text-white/70">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="justify-self-center text-[14px]">~/projects/sigato - Sigato</span>
            <span className="font-bold text-[#ffb05c]">BOSS - Build</span>
          </div>

          <pre className="m-0 whitespace-pre-wrap bg-[#121212] px-5 pb-7 pt-4 font-mono text-[16px] leading-[1.6] text-[#f7f1ea]">
{`$ sigato --boss
sigato free/llama-3.3-70b - BOSS

add refresh token rotation to the auth API

sigato planning refresh token rotation
1. read src/auth/refresh.ts + token store
2. rotate refresh tokens in Redis
3. add integration tests
4. run npm test

approve? execute plan with implement worker`}
          </pre>
        </div>
      </div>
    </section>
  );
}
