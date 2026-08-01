import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Heart, Package } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

export default function GearCard({ gear }: Props) {
  const available = gear.stock > 0;

  return (
    <div className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#123524]/20 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={gear.imageUrl}
          alt={gear.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Availability */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
              available ? "bg-emerald-600" : "bg-red-500"
            }`}
          >
            {available ? "Available" : "Out of Stock"}
          </span>
        </div>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur transition hover:bg-white">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Body */}
      <div className="space-y-5 p-6">
        {/* Category */}
        <span className="inline-flex rounded-full bg-[#123524]/10 px-3 py-1 text-xs font-medium text-[#123524]">
          {gear.category.name}
        </span>

        {/* Title */}
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">{gear.title}</h3>

          <p className="mt-1 text-sm text-muted-foreground">{gear.brand}</p>
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
          {gear.description}
        </p>

        {/* Price + Stock */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-[#123524]">
              ${gear.pricePerDay}
            </p>

            <p className="text-sm text-muted-foreground">per day</p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2">
            <Package className="h-4 w-4" />

            <span className="text-sm font-medium">{gear.stock} left</span>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="h-11 rounded-xl bg-transparent">
            <Link href={`/gears/${gear.id}`}>View Details</Link>
          </Button>

          <Button
            className="h-11 rounded-xl bg-[#123524] hover:bg-[#1b4b36]"
            disabled={!available}
          >
            Rent Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
