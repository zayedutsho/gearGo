import { Gear } from "@/types/gear";

import GearCard from "./GearCard";

type Props = {
  gears: Gear[];
};

export default function GearGrid({ gears }: Props) {
  if (!gears.length) {
    return (
      <div className="flex h-80 items-center justify-center rounded-3xl border border-dashed">
        <div className="text-center">
          <h3 className="text-xl font-semibold">No gear found</h3>

          <p className="mt-2 text-muted-foreground">
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
