import { MapPin, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type Props = {
  gear: any;
};

export default function GearCard({ gear }: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={gear.image}
          alt={gear.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow">
          {gear.category}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{gear.name}</h3>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{gear.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {gear.location}
        </div>

        <div className="flex items-center gap-2 text-sm text-emerald-700">
          <ShieldCheck className="h-4 w-4" />
          Verified Provider
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">${gear.price}</span>
            <span className="text-muted-foreground"> / day</span>
          </div>

          <Button className="rounded-xl bg-[#123524]">
            <Link href={`/gear/${gear.id}`}>Rent Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
