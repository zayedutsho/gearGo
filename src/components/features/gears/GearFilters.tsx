import { getCategories } from "@/services/getCategories";
import Link from "next/link";

type Props = {
  selectedCategory?: string;
};

export default async function GearFilters({ selectedCategory }: Props) {
  const result = await getCategories({
    limit: 50,
  });

  const categories = result.data.data;

  return (
    <aside className="h-fit lg:sticky lg:top-24 rounded-3xl border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-semibold">Filters</h2>

      <div>
        <h3 className="mb-4 font-medium">Categories</h3>

        <div className="space-y-2">
          <Link
            href="/gears"
            aria-current={!selectedCategory ? "true" : undefined}
            className={`flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink ${
              !selectedCategory ? "bg-brand text-brand-foreground" : "hover:bg-muted"
            }`}
          >
            <span>All Categories</span>
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              aria-current={selectedCategory === category.id ? "true" : undefined}
              href={`/gears?categoryId=${category.id}`}
              className={`flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink ${
                selectedCategory === category.id
                  ? "bg-brand text-brand-foreground"
                  : "hover:bg-muted"
              }`}
            >
              <span>{category.name}</span>

              <span>{category._count.gearItems}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
