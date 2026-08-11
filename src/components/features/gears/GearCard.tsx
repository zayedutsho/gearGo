import Image from "next/image";

import { ArrowRight, Heart, Package } from "lucide-react";

import LinkButton from "@/components/shared/link-button/LinkButton";

import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

export default function GearCard({ gear }: Props) {
  const available = gear.stock > 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-ink/25 hover:shadow-xl hover:shadow-brand/10">
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <Image
          src={gear.imageUrl}
          alt={gear.title}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition duration-700 group-hover:scale-[1.06]"
        />

        {/* Scrim keeps the overlaid chips readable on busy photography */}
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/5 to-transparent" />

        {/* Availability */}
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur ${
            available ? "bg-emerald-600/90" : "bg-red-500/90"
          }`}
        >
          <span className="size-1.5 rounded-full bg-white/90" />
          {available ? "Available" : "Out of Stock"}
        </span>

        {/* Wishlist */}
        <button
          aria-label="Save to wishlist"
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/85 text-brand shadow-sm backdrop-blur transition hover:scale-105 hover:bg-white"
        >
          <Heart className="size-4.5" />
        </button>

        {/* Category */}
        <span className="absolute bottom-4 left-4 inline-flex rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {gear.category.name}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 p-6">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
            {gear.title}
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">{gear.brand}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
          {gear.description}
        </p>

        {/* Price + Stock */}
        <div className="mt-auto flex items-end justify-between border-t pt-5">
          <div>
            <span className="text-[1.75rem] font-bold leading-none tracking-tight text-brand-ink">
              ${gear.pricePerDay}
            </span>

            <span className="ml-1 text-sm text-muted-foreground">/ day</span>
          </div>

          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Package className="size-4" />
            {gear.stock} left
          </span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <LinkButton
            href={`/gears/${gear.id}`}
            tone="outline"
            className="w-full"
          >
            View Details
          </LinkButton>

          <LinkButton
            href={`/gears/${gear.id}`}
            className="w-full gap-2"
            disabled={!available}
          >
            Rent Now
            <ArrowRight className="size-4" />
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
