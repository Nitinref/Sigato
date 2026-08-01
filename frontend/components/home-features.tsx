import { Terminal } from "./ui/terminal";

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
      className="mx-auto mt-2 w-[calc(100%-24px)] rounded-[40px] px-0 py-6 shadow-[0_28px_80px_rgba(0,0,0,0.08)]"
      style={{ background: "var(--features-bg)" }}
    >
      <div className="flex gap-4 overflow-x-auto px-10 pb-5">
        {tabs.map(([title, subtitle, active]) => (
          <button
            key={title}
            type="button"
            className={[
              "min-w-[140px] shrink-0 border-b bg-transparent pb-3 text-left",
              active
                ? "border-b-2 border-[var(--page-fg)] text-[var(--page-fg)]"
                : "border-b border-[var(--border-soft)] text-[var(--muted-fg)]",
            ].join(" ")}
          >
            <span className="block text-[18px]">{title}</span>
            <small className="block text-[14px]">{subtitle}</small>
          </button>
        ))}
      </div>

      <div className="grid gap-9 px-6 pb-8 pt-10 lg:grid-cols-[1.05fr_0.85fr] lg:items-start lg:px-12 lg:pt-14">
        <div className="max-w-[520px] pt-8 lg:pt-10">
          <p className="mb-4 text-[14px] uppercase tracking-[0.12em] text-[var(--muted-fg)]">
            Sigato terminal agent
          </p>
          <h3 className="font-serif text-[clamp(3.2rem,4.3vw,5.8rem)] font-normal leading-[0.95] tracking-[-0.05em] text-[var(--page-fg)]">
            Delegate exploration, implementation, and shell work.
          </h3>
          <p className="mt-7 text-[20px] leading-[1.45] text-[var(--muted-fg)] lg:text-[24px]">
            Sigato helps you run through plans in parallel, keep approvals visible,
            and move from prompt to output without context switching.
          </p>
        </div>

        <div className="ml-auto w-full max-w-[760px] self-start overflow-hidden rounded-[28px] bg-[var(--surface-3)] shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
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
            className="w-full max-w-none"
            viewportClassName="h-[300px] px-5 py-5 text-[13px] leading-6 md:h-[360px] md:px-6 md:py-6"
          />
        </div>
      </div>
    </section>
  );
}
