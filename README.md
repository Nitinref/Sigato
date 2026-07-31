<div align="center">

<img src="frontend/public/sigato-logo.svg" width="120" alt="Sigato logo" />

# Sigato

### A CLI agent that gets things done — with your permission at every step

by [@Nitinref](https://github.com/Nitinref)

![test](https://img.shields.io/badge/test-passing-brightgreen)
![license](https://img.shields.io/badge/license-not%20specified-lightgrey)
![npm](https://img.shields.io/badge/npm-v0.1.0-blue)
![downloads](https://img.shields.io/badge/downloads-0%2Fweek-brightgreen)
![stars](https://img.shields.io/github/stars/Nitinref/sigato?style=social)

[GitHub](https://github.com/Nitinref/sigato) • [npm](#) • [Website](#)

</div>

---

Sigato is a terminal-based AI agent that can plan and execute multi-step tasks by calling tools directly from your command line — reading files, running shell commands, browsing the web, and hitting APIs — all **with your explicit approval** before anything sensitive happens. Think of it as a lightweight, transparent alternative to tools like OpenClaw, built for developers who want an agent that works *with* them, not behind their back.

## Highlights

- 🧠 **Multi-step task execution** — describe a goal in plain language, Sigato breaks it down and executes it step by step
- 🔧 **Tool calling from the CLI** — read/write files, run shell & git commands, hit HTTP APIs, and more
- ✅ **Permission-first design** — Sigato asks before running anything that touches your filesystem, shell, or network
- 🔌 **Extensible tools** — plug in new capabilities without touching the core agent loop
- ⚡ **Built on Bun** — fast startup, fast execution
- 🖥️ **Clean terminal UI** — see exactly what the agent is thinking and doing, step by step

## Quick start

### Global install

```bash
bun install -g sigato
sigato
```

### From source

```bash
git clone https://github.com/Nitinref/sigato.git
cd sigato
bun install
bun run index.ts
```

This project was created using `bun init` in bun v1.2.17. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## How it works

1. You give Sigato a task in natural language.
2. Sigato plans the steps needed and picks the tools required for each one.
3. Before executing anything that reads, writes, or runs something on your system, Sigato **asks for your approval**.
4. Once approved, it executes the step, shows you the result, and moves to the next one — until the task is done.

## Available tools

| Tool | Description |
|---|---|
| `fs` | Read, write, and search files in your project |
| `shell` | Run shell / git commands (approval required) |
| `web` | Search and fetch content from the web |
| `http` | Call external APIs |

*(More tools coming — see [Roadmap](#roadmap).)*

## Roadmap

- [ ] MCP server support
- [ ] Scheduled / recurring tasks
- [ ] Multi-agent orchestration for parallel work
- [ ] Chat gateways (Telegram / Discord / WhatsApp)

## Navbar logo

The landing-page navbar uses the Sigato logo image asset from the frontend public folder.

![Sigato logo](frontend/public/sigato-logo.svg)

Relevant frontend files:
- `frontend/public/sigato-logo.svg`
- `frontend/components/ui/resizable-navbar.tsx`
- `frontend/components/resizable-navbar-demo.tsx`

## Contributing

Issues and PRs are welcome. If you hit a bug or have an idea for a new tool, open an issue on [GitHub](https://github.com/Nitinref/sigato).

## License

Not specified yet.
