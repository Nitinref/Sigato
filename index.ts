#!/usr/bin/env bun

import { Command } from "commander";
import { runwakeup } from "./tui/wakeup";
const program = new Command();

program
.name("Scrapy")
.description("Scrapy Cli")
.version("0.0.1")


program
.command("wakeup")
.description("Show the banner cli or telegram  mode")
.action(
    async()=>{
        await runwakeup();
    }
)
await program.parseAsync(process.argv)