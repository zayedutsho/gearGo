"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Props = {
  page: number;
  total: number;
  limit: number;
};

export default function GearPagination({ page, total, limit }: Props) {
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Gear results pages" className="mt-8 flex flex-wrap justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => {
        const current = index + 1;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", current.toString());

        return (
          <Link
            key={current}
            aria-label={`Page ${current}`}
            aria-current={page === current ? "page" : undefined}
            href={`/gears?${params.toString()}`}
            className={`flex h-11 min-w-11 shrink-0 px-3 items-center justify-center rounded-xl border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink active:translate-y-px ${
              page === current
                ? "bg-brand text-brand-foreground"
                : "bg-card hover:bg-muted"
            }`}
          >
            {current}
          </Link>
        );
      })}
    </nav>
  );
}
