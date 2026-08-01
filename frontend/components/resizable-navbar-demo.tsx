"use client";

import { useEffect, useState } from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const githubUrl = "https://github.com/Nitinref/Sigato";
const githubApiUrl = "https://api.github.com/repos/Nitinref/Sigato";

function formatCompactCount(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export default function NavbarDemo() {
  const navItems = [
    { name: "Overview", link: "/#overview" },
    { name: "Features", link: "/#features" },
    { name: "Docs", link: "/docs" },
    { name: "Coming soon", link: "/coming-soon" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState<number | null>(null);

  useEffect(() => {
    let isActive = true;

    const loadStars = async () => {
      try {
        const response = await fetch(githubApiUrl, {
          headers: {
            Accept: "application/vnd.github+json",
          },
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { stargazers_count?: number };
        if (isActive && typeof data.stargazers_count === "number") {
          setStarCount(data.stargazers_count);
        }
      } catch {
        // Keep the button usable even if GitHub is unavailable.
      }
    };

    void loadStars();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="relative w-full">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex shrink-0 items-center gap-2">
            <NavbarButton
              variant="secondary"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 text-[13px] xl:px-4 xl:py-2.5 xl:text-[14px]"
            >
              <IconBrandGithub className="h-4 w-4" />
              <span>GitHub</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[12px] font-semibold text-white/75">
                {starCount === null ? "Stars" : formatCompactCount(starCount)}
              </span>
            </NavbarButton>
            <NavbarButton
              variant="secondary"
              href="/docs"
              className="px-3 py-2 text-[13px] xl:px-4 xl:py-2.5 xl:text-[14px]"
            >
              Docs
            </NavbarButton>
            <NavbarButton
              variant="primary"
              href="/#install"
              className="px-3 py-2 text-[13px] xl:px-4 xl:py-2.5 xl:text-[14px]"
            >
              Join waitlist
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center gap-3 rounded-[16px] border border-white/15 bg-white/5 px-4 py-3 text-white"
            >
              <IconBrandGithub className="h-5 w-5" />
              <span className="flex flex-col">
                <span className="text-[15px] font-semibold">GitHub</span>
                <span className="text-[12px] text-white/60">Live repository</span>
              </span>
              <span className="ml-auto rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[12px] font-semibold text-white/80">
                {starCount === null ? "Stars" : formatCompactCount(starCount)}
              </span>
            </a>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white/75"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="secondary"
                className="w-full"
                href="/docs"
              >
                Docs
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/#install"
              >
                Join waitlist
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
