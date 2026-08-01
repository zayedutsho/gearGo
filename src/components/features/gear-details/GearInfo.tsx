import { BadgeCheck, Box, Star, Tag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

export default function GearInfo({ gear }: Props) {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {gear.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}

            <span className="ml-2 text-sm text-muted-foreground">
              4.9 (24 reviews)
            </span>
          </div>

          <Badge className="rounded-full bg-[#123524]/10 px-4 py-1 text-[#123524] hover:bg-[#123524]/10">
            {gear.category.name}
          </Badge>
        </div>
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center gap-3">
          <Tag className="h-5 w-5 text-[#123524]" />

          <div>
            <p className="text-xs text-muted-foreground">Brand</p>

            <p className="font-medium">{gear.brand}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Box className="h-5 w-5 text-[#123524]" />

          <div>
            <p className="text-xs text-muted-foreground">Stock</p>

            <p className="font-medium">{gear.stock} Available</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="leading-8 text-muted-foreground">{gear.description}</p>

      {/* Price */}
      <div>
        <h2 className="text-5xl font-bold text-[#123524]">
          ${gear.pricePerDay}
          <span className="ml-2 text-xl font-medium text-muted-foreground">
            / day
          </span>
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Security deposit may apply.
        </p>
      </div>

      {/* Feature Chips */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
          <BadgeCheck className="h-4 w-4" />
          Available for Rent
        </div>

        <div className="rounded-full border px-4 py-2 text-sm">
          Verified Provider
        </div>

        <div className="rounded-full border px-4 py-2 text-sm">
          Instant Booking
        </div>
      </div>
    </div>
  );
}
