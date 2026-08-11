import { ArrowRight } from "lucide-react";

import LinkButton from "@/components/shared/link-button/LinkButton";
import SectionHeading from "@/components/shared/section/SectionHeading";

import { getGears } from "@/services/gear/getGears";

import GearGrid from "./../gears/GearGrid";

export default async function FeaturedGear() {
  const result = await getGears({
    limit: 6,
    sortBy: "createdAt",
    sortOrder: "desc",
  });

  const gears = result.data;

  return (
    <section className="relative overflow-hidden bg-surface py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-dots opacity-40 mask-fade-b"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="start"
            eyebrow="Featured Gear"
            title="Ready for your next adventure?"
            description="Browse the latest outdoor equipment from trusted providers across Bangladesh."
          />

          <LinkButton href="/gears" tone="outline" className="gap-2">
            View All Gear
            <ArrowRight className="size-4" />
          </LinkButton>
        </div>

        <GearGrid gears={gears} />
      </div>
    </section>
  );
}
