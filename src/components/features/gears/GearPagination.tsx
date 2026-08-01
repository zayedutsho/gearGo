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
    <div className="mt-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, index) => {
        const current = index + 1;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", current.toString());

        return (
          <Link
            key={current}
            href={`/gears?${params.toString()}`}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition ${
              page === current
                ? "bg-[#123524] text-white"
                : "bg-white hover:bg-muted"
            }`}
          >
            {current}
          </Link>
        );
      })}
    </div>
  );
}
