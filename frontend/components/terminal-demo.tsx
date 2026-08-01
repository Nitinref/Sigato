"use client";

import { Terminal } from "@/components/ui/terminal";

export default function TerminalDemo() {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="mx-auto w-[calc(100%-24px)] rounded-[40px] bg-[#0a0a0a] px-4 py-4 shadow-[0_28px_80px_rgba(0,0,0,0.18)] md:px-6 md:py-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 rounded-[18px] bg-white/5 p-2 text-sm text-white/80">
          <button className="rounded-[12px] bg-white/15 px-4 py-2 font-semibold text-white">
            Preview
          </button>
          <button className="rounded-[12px] px-4 py-2 text-white/55">Code</button>
          <div className="ml-auto flex items-center gap-2">
            <div className="hidden rounded-[12px] border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/55 lg:flex">
              @aceternity/terminal-demo
            </div>
            <button className="rounded-[12px] bg-white px-4 py-2 font-semibold text-[#111]">
              Copy prompt
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#0d0d0d] p-4 md:p-5">
          <Terminal
            commands={["scrpy wakeup"]}
            outputs={{
              0: [
                "SIGATO",
                "",
                "o Which option you want to go further .....",
                "|  CLI",
                "",
                "o Choose CLI sub-mode",
                "|  Agent Mode",
                "",
                "AI Agent Mode",
                "",
                "* What would you like the agent to do?",
                "| Concrete task for this codebase...",
              ],
            }}
            typingSpeed={55}
            delayBetweenCommands={1000}
            promptText="C:\\Users\\DELL>"
          />
        </div>
      </div>
    </section>
  );
}
