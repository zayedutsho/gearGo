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
    <aside className="sticky top-24 h-fit rounded-3xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold">Filters</h3>

      <div>
        <h4 className="mb-4 font-medium">Categories</h4>

        <div className="space-y-2">
          <Link
            href="/gears"
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
              !selectedCategory ? "bg-[#123524] text-white" : "hover:bg-muted"
            }`}
          >
            <span>All Categories</span>
          </Link>

          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/gears?categoryId=${category.id}`}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                selectedCategory === category.id
                  ? "bg-[#123524] text-white"
                  : "hover:bg-muted"
              }`}
            >
              <span>{category.name}</span>

              <span>{category.gearCount}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
