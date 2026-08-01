import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import GearCard from "./GearCard";
import { featuredGears } from "./gear-data";

export default function FeaturedGear() {
  return (
    <section className="bg-[#F8FAF8] py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-semibold uppercase tracking-widest text-[#123524]">
              Featured Gear
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Ready for your next adventure
            </h2>
          </div>

          <Button variant="ghost" asChild className="hidden md:flex">
            <Link href="/gears">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredGears.map((gear) => (
            <GearCard key={gear.id} gear={gear} />
          ))}
        </div>
      </div>
    </section>
  );
}
