import { HomeComingSoon } from "@/components/home-coming-soon";
import { HomeFeatures } from "@/components/home-features";
import { HomeFooter } from "@/components/home-footer";
import { HomeHero } from "@/components/home-hero";
import { HomeShowcase } from "@/components/home-showcase";
import { HomeQuickStart } from "@/components/home-quick-start";

export default function HomePage() {
  return (
    <main className="bg-[var(--page-bg)] text-[var(--page-fg)]">
      <HomeHero />
      <HomeFeatures />
      <HomeComingSoon />
      <HomeQuickStart />
      <HomeShowcase />
      <HomeFooter />
    </main>
  );
}
