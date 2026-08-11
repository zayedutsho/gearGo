import SectionHeading from "@/components/shared/section/SectionHeading";

import { getCategories } from "@/services/getCategories";
import CategoryCard from "./CategoryCard";

export default async function Categories() {
  const result = await getCategories({
    limit: 6,
  });

  const categories = result.data.data;

  return (
    <section id="categories" className="scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          className="mb-14"
          eyebrow="Top Categories"
          title="Find the gear for every adventure"
          description="Explore premium outdoor equipment from trusted providers."
        />

        {/* Desktop Grid */}
        <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <div
              key={category.id}
              className="min-w-[280px] snap-start first:pl-0"
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
