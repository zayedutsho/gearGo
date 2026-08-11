"use client";

import {
  ArrowUpRight,
  Bike,
  Compass,
  Mountain,
  PersonStanding,
  Snowflake,
  Tent,
  Waves,
} from "lucide-react";
import Link from "next/link";

import { NavPendingVeil } from "@/components/shared/link-button/NavPending";

import { Category } from "@/types/category";

type Props = {
  category: Category;
};

/**
 * Categories come from the API, so the icon is a purely cosmetic keyword match
 * with a neutral fallback — never a hard dependency on a specific name.
 */
const CATEGORY_KINDS: Array<[RegExp, string]> = [
  [/camp|tent|shelter/i, "camping"],
  [/hik|trek|trail|walk/i, "hiking"],
  [/cycl|bike|bicycle/i, "cycling"],
  [/climb|mountain|alpin|rock/i, "climbing"],
  [/winter|ski|snow/i, "winter"],
  [/water|kayak|surf|dive|raft|swim/i, "water"],
];

function CategoryIcon({ name }: { name: string }) {
  const kind = CATEGORY_KINDS.find(([pattern]) => pattern.test(name))?.[1];

  switch (kind) {
    case "camping":
      return <Tent className="size-6" />;
    case "hiking":
      return <PersonStanding className="size-6" />;
    case "cycling":
      return <Bike className="size-6" />;
    case "climbing":
      return <Mountain className="size-6" />;
    case "winter":
      return <Snowflake className="size-6" />;
    case "water":
      return <Waves className="size-6" />;
    default:
      return <Compass className="size-6" />;
  }
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/gears?category=${category.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-7 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-brand-ink/25 hover:shadow-xl hover:shadow-brand/10 focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {/* Brand wash that blooms in on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand-ink/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-ink/10 text-brand-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
          <CategoryIcon name={category.name} />
        </span>

        <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-ink" />
      </div>

      <div className="relative mt-6 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold tracking-tight">
          {category.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
          {category.description ?? "Explore premium outdoor gear."}
        </p>

        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand-ink/50" />
          {category._count.gearItems} gears
        </span>
      </div>

      <NavPendingVeil />
    </Link>
  );
}
