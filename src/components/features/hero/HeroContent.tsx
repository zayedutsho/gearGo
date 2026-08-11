import { ArrowRight, Star } from "lucide-react";

import LinkButton from "@/components/shared/link-button/LinkButton";

export default function HeroContent() {
  return (
    <div className="space-y-9">
      {/* Eyebrow */}
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-ink/15 bg-brand-ink/5 py-1.5 pl-2 pr-4 text-sm font-medium text-brand-ink">
        <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-xs font-semibold text-brand-foreground">
          <Star className="size-3 fill-current" />
          4.8
        </span>
        Trusted by 10K+ adventurers
      </span>

      <div className="space-y-6">
        <h1 className="max-w-xl text-pretty text-[2.75rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Gear Go.
          <br />
          <span className="relative inline-block text-brand-ink">
            Adventure Out.
            {/* Hand-drawn underline keeps the display type from feeling flat */}
            <svg
              aria-hidden
              viewBox="0 0 300 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-0 h-2.5 w-full text-brand-accent"
            >
              <path
                d="M2 8.5C48 3.5 104 2.5 150 4.5c46 2 98 3.5 148 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="max-w-lg text-pretty text-lg leading-8 text-muted-foreground">
          Rent premium outdoor equipment for your next adventure. Lightweight on
          you, heavy on experience.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <LinkButton href="/gears" size="lg" className="gap-2">
          Browse Gear
          <ArrowRight className="size-5" />
        </LinkButton>

        <LinkButton href="#categories" tone="outline" size="lg">
          Explore Categories
        </LinkButton>
      </div>
    </div>
  );
}
