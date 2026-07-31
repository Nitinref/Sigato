"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

type TerminalLine = {
  kind: "command" | "output";
  text: string;
};

export interface TerminalProps {
  commands: string[];
  outputs?: Record<number, string[]>;
  username?: string;
  promptText?: string;
  className?: string;
  viewportClassName?: string;
  typingSpeed?: number;
  delayBetweenCommands?: number;
  initialDelay?: number;
}

export function Terminal({
  commands,
  outputs = {},
  username = "Sigato",
  promptText,
  className,
  viewportClassName,
  typingSpeed = 45,
  delayBetweenCommands = 1000,
  initialDelay = 500,
}: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [commandIdx, setCommandIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [outputIdx, setOutputIdx] = useState(-1);
  const [phase, setPhase] = useState<
    "idle" | "typing" | "executing" | "outputting" | "pausing" | "done"
  >("idle");
  const [cursorVisible, setCursorVisible] = useState(true);

  const currentCommand = commands[commandIdx] || "";
  const currentOutputs = useMemo(
    () => outputs[commandIdx] || [],
    [outputs, commandIdx],
  );
  const isLastCommand = commandIdx === commands.length - 1;

  useEffect(() => {
    const start = setTimeout(() => setPhase("typing"), initialDelay);
    return () => clearTimeout(start);
  }, [initialDelay]);

  useEffect(() => {
    if (phase !== "typing") return;

    if (charIdx < currentCommand.length) {
      const t = setTimeout(() => {
        setCurrentText(currentCommand.slice(0, charIdx + 1));
        setCharIdx((value) => value + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setPhase("executing"), 120);
    return () => clearTimeout(t);
  }, [phase, charIdx, currentCommand, typingSpeed]);

  useEffect(() => {
    if (phase !== "executing") return;

    setLines((prev) => [...prev, { kind: "command", text: currentCommand }]);
    setCurrentText("");

    if (currentOutputs.length > 0) {
      setOutputIdx(0);
      setPhase("outputting");
      return;
    }

    setPhase(isLastCommand ? "done" : "pausing");
  }, [phase, currentCommand, currentOutputs.length, isLastCommand]);

  useEffect(() => {
    if (phase !== "outputting") return;

    if (outputIdx >= 0 && outputIdx < currentOutputs.length) {
      const t = setTimeout(() => {
        setLines((prev) => [
          ...prev,
          { kind: "output", text: currentOutputs[outputIdx] },
        ]);
        setOutputIdx((value) => value + 1);
      }, 180);

      return () => clearTimeout(t);
    }

    if (outputIdx >= currentOutputs.length) {
      const t = setTimeout(
        () => setPhase(isLastCommand ? "done" : "pausing"),
        300,
      );
      return () => clearTimeout(t);
    }
  }, [phase, outputIdx, currentOutputs, isLastCommand]);

  useEffect(() => {
    if (phase !== "pausing") return;
    const t = setTimeout(() => {
      setCharIdx(0);
      setOutputIdx(-1);
      setCommandIdx((value) => value + 1);
      setPhase("typing");
    }, delayBetweenCommands);
    return () => clearTimeout(t);
  }, [phase, delayBetweenCommands]);

  useEffect(() => {
    const interval = setInterval(() => setCursorVisible((value) => !value), 520);
    return () => clearInterval(interval);
  }, []);

  const prompt = promptText ? (
    <span className="text-white/80">{promptText}</span>
  ) : (
    <span className="text-orange-300">
      <span className="text-white/80">{username}</span>
      <span className="text-orange-400">:$</span>{" "}
    </span>
  );

  return (
    <div className={cn("mx-auto w-full max-w-4xl", className)}>
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
        <div className="flex items-center gap-2 bg-[#232323] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex-1 text-center text-xs text-white/55">
            {username} - bash
          </div>
          <div className="w-12" />
        </div>

        <div
          className={cn(
            "overflow-y-auto px-6 py-5 font-mono text-[14px] leading-7 text-[#f6efe7]",
            viewportClassName || "h-[420px]",
          )}
        >
          {lines.map((line, index) => (
            <div key={`${line.kind}-${index}`} className="whitespace-pre-wrap">
              {line.kind === "command" ? (
                <span>
                  {prompt}
                  <span className="text-orange-200">{line.text}</span>
                </span>
              ) : (
                <span className="text-white/70">{line.text}</span>
              )}
            </div>
          ))}

          {phase === "typing" && (
            <div className="whitespace-pre-wrap">
              {prompt}
              <span className="text-orange-200">{currentText}</span>
              <span
                className={cn(
                  "ml-0.5 inline-block h-4 w-2 bg-white align-middle transition-opacity",
                  !cursorVisible && "opacity-0",
                )}
              />
            </div>
          )}

          {(phase === "done" || phase === "outputting" || phase === "pausing") && (
            <div className="whitespace-pre-wrap">
              {prompt}
              <span
                className={cn(
                  "inline-block h-4 w-2 bg-white align-middle transition-opacity",
                  !cursorVisible && "opacity-0",
                )}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
