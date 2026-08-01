import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { getGears } from "@/services/gear/getGears";

import GearGrid from "./GearGrid";

export default async function FeaturedGear() {
  const result = await getGears({
    limit: 6,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  const gears = result.data;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#123524]">
              Featured Gear
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Ready for your next adventure?
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Browse the latest outdoor equipment from trusted providers across
              Bangladesh.
            </p>
          </div>

          <Button variant="outline" className="rounded-xl bg-transparent">
            <Link href="/gears">
              View All Gear
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <GearGrid gears={gears} />
      </div>
    </section>
  );
}
