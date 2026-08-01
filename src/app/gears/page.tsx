import GearFilters from "@/components/features/gears/GearFilters";
import GearGrid from "@/components/features/gears/GearGrid";
import GearSearch from "@/components/features/gears/GearSearch";
import GearSort from "@/components/features/gears/GearSort";
import { getGears } from "@/services/gear/getGears";
export default async function GearPage() {
  const result = await getGears({
    page: 1,
    limit: 12,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  return (
    <main className="bg-muted/30 py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#123524]">
            Marketplace
          </span>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Explore Outdoor Gear
          </h1>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            Discover premium camping, hiking, cycling and outdoor equipment from
            trusted providers.
          </p>
        </div>
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <GearSearch />

          <GearSort />
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <GearFilters />

          <GearGrid gears={result.data} />
        </div>
      </div>
    </main>
  );
}
