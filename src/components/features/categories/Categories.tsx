import { getCategories } from "@/services/getCategories";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
  const result = await getCategories({
    limit: 6,
  });

  const categories = result.data.data;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#123524]">
            Top Categories
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Find the gear for every adventure
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Explore premium outdoor equipment from trusted providers.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="-mx-6 flex gap-5 overflow-x-auto px-6 md:hidden">
          {categories.map((category) => (
            <div key={category.id} className="min-w-[280px]">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
