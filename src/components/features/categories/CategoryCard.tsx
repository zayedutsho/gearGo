import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  category: {
    id: number;
    name: string;
    image: string;
    totalGear: number;
    slug: string;
    icon: React.ElementType;
  };
};

export default function CategoryCard({ category }: Props) {
  const Icon = category.icon;

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#123524]/20 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex items-center justify-between p-5">
        <div className="flex gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#123524]/10">
            <Icon className="h-5 w-5 text-[#123524]" />
          </div>

          <div>
            <h3 className="font-semibold">{category.name}</h3>

            <p className="text-sm text-muted-foreground">
              {category.totalGear}+ Items
            </p>
          </div>
        </div>

        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
