import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Category } from "@/types/category";

type Props = {
  category: Category;
};

export default function CategoryCard({ category }: Props) {
  console.log("CategoryCard category:", category); // Debugging line
  return (
    <Link
      href={`/gears?category=${category.id}`}
      className="group flex h-full flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#123524]/20 hover:shadow-xl"
    >
      {/* Icon */}
      {/* <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123524]/10">
        <FolderKanban className="h-7 w-7 text-[#123524]" />
      </div> */}

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold">{category.name}</h3>

        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {category.description ?? "Explore premium outdoor gear."}
        </p>

        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-sm font-medium text-muted-foreground">
            Total Gears:{category._count.gearItems}
          </span>

          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
