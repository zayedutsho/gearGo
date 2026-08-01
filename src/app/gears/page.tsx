import GearFilters from "@/components/features/gears/GearFilters";
import GearGrid from "@/components/features/gears/GearGrid";
import GearPagination from "@/components/features/gears/GearPagination";
import GearSearch from "@/components/features/gears/GearSearch";
import GearSort from "@/components/features/gears/GearSort";

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

        {/* Toolbar */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <GearSearch />

          <GearSort />
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <GearFilters selectedCategory={params.categoryId} />

          <div className="space-y-10">
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
