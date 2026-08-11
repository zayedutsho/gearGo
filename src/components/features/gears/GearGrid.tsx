import { PackageSearch } from "lucide-react";

import { Gear } from "@/types/gear";

import GearCard from "./GearCard";

type Props = {
  gears: Gear[];
};

export default function GearGrid({ gears }: Props) {
  if (!gears.length) {
    return (
      <div className="flex min-h-80 items-center justify-center rounded-3xl border border-dashed bg-card/50 p-10">
        <div className="max-w-sm text-center">
          <span className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-brand-ink/10 text-brand-ink">
            <PackageSearch className="size-7" />
          </span>

          <h3 className="text-xl font-semibold tracking-tight">
            No gear found
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Try changing your filters or search keywords.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {gears.map((gear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
}
