import GearGrid from "@/components/features/gears/GearGrid";
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

        <GearGrid gears={result.data} />
      </div>
    </main>
  );
}
