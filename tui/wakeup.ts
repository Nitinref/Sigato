import { select, isCancel } from "@clack/prompts"
import chalk from "chalk"
import figlet from "figlet"
import { runclimode } from "../modes/cli";
// coloring the terminal 

const BANNER_FONT = 'ANSI Shadow';
const SHADOW = chalk.hex('#5b4d9e');
const FACE = chalk.hex('#e8dcf8').bold;



function printBannerWithShadow(ascii: string) {

  const bannerLines = ascii.replace(/\s+$/, '').split('\n');
  const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
  const rowWidth = maxLen + 2;

  for (const line of bannerLines) {
    console.log(SHADOW(('  ' + line).padEnd(rowWidth)));
  }
  process.stdout.write(`\x1b[${bannerLines.length}A`);
  for (const line of bannerLines) {
    console.log(FACE(line.padEnd(rowWidth)));
  }
  console.log();
}


export async function runwakeup() {
    let ascii: string;
    try {
        ascii = figlet.textSync("Sigato", { font: BANNER_FONT })
    } catch (e) {

        ascii = figlet.textSync("Sigato", { font: "Standard" })
    }
printBannerWithShadow(ascii)


const mode = await select({
    message:"Which option you want to go further .....",
    options:[
        {value:"cli" , label:"CLI"},
        {value:"telegram" , label:"Telegram"},
        {value:"exit"  , label:"Exit"}
    ]
})

if(isCancel(mode || mode==="exit")){
    console.log(chalk.dim('\n Good Bye \n'))
    return
}

if(mode === "cli"){
    await runclimode()
}else if(mode === "telegram"){
    console.log(chalk.dim("telegram mode runnning ...."))
}

}

