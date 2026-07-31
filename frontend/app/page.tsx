import { HomeComingSoon } from "@/components/home-coming-soon";
import { HomeFeatures } from "@/components/home-features";
import { HomeFooter } from "@/components/home-footer";
import { HomeHero } from "@/components/home-hero";
import { HomeShowcase } from "@/components/home-showcase";
import { HomeQuickStart } from "@/components/home-quick-start";
import TerminalDemo from "@/components/terminal-demo";

export default function HomePage() {
  return (
    <main className="bg-[#f6efe8] text-[#151515]">
      <HomeHero />
      <HomeFeatures />
      <HomeComingSoon />
      <HomeQuickStart />
      <HomeShowcase />
      <TerminalDemo />
      <HomeFooter />
    </main>
  );
}
