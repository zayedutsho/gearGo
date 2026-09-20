import GearFilters from "@/components/features/gears/GearFilters";
import GearGrid from "@/components/features/gears/GearGrid";
import GearPagination from "@/components/features/gears/GearPagination";
import GearToolbar from "@/components/features/gears/GearToolbar";

import { getGears } from "@/services/gear/getGears";

type SearchParams = {
  page?: string;
  searchTerm?: string;
  categoryId?: string;
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: "createdAt" | "pricePerDay";
  sortOrder?: "asc" | "desc";
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function GearPage({ searchParams }: Props) {
  const params = await searchParams;

  const result = await getGears({
    page: Number(params.page) || 1,
    limit: 12,

    searchTerm: params.searchTerm,
    categoryId: params.categoryId,
    brand: params.brand,

    minPrice: params.minPrice ? Number(params.minPrice) : undefined,

    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,

    sortBy: params.sortBy,
    sortOrder: params.sortOrder,
  });
  console.log(result.meta);

  return (
    <main className="bg-muted/30 py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
            Marketplace
          </span>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Explore Outdoor Gear
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            Discover premium camping, hiking, cycling and outdoor equipment from
            trusted providers.
          </p>
        </div>

        {/* Toolbar */}
        <GearToolbar />

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <GearFilters selectedCategory={params.categoryId} />

          <div className="min-w-0 space-y-6">
            <h2 className="text-lg font-semibold">
              {result.meta.total} {result.meta.total === 1 ? "item" : "items"} found
            </h2>
            <GearGrid gears={result.data} />

            <GearPagination
              page={result.meta.page}
              limit={result.meta.limit}
              total={result.meta.total}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
