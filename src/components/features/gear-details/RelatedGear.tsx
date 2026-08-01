import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Gear } from "@/types/gear";

import { getRelatedGears } from "@/services/gear/getRelatedGears";

import GearGrid from "../gears/GearGrid";

type Props = {
  gear: Gear;
};

export default async function RelatedGear({ gear }: Props) {
  const result = await getRelatedGears({
    categoryId: gear.category.id,
    gearId: gear.id,
  });

  if (!result.data.length) return null;

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Similar Gear</h2>

          <p className="mt-2 text-muted-foreground">
            Explore more equipment from this category.
          </p>
        </div>

        <Button variant="outline">
          <Link href="/gears">
            View All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <GearGrid gears={result.data} />
    </section>
  );
}
