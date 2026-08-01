import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";

import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

export default function GearGallery({ gear }: Props) {
  return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border bg-white shadow-sm">
        <Image
          src={gear.imageUrl}
          alt={gear.title}
          fill
          priority
          className="object-cover"
        />

        {/* Availability */}
        <div className="absolute left-5 top-5 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Available
        </div>

        {/* Wishlist */}
        <button className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105">
          <Heart className="h-5 w-5" />
        </button>

        {/* Prev */}
        <button className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105">
          <ChevronLeft />
        </button>

        {/* Next */}
        <button className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105">
          <ChevronRight />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-2xl border bg-white"
          >
            <Image
              src={gear.imageUrl}
              alt={gear.title}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
