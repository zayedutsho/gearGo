import SectionHeading from "@/components/shared/section/SectionHeading";

import BenefitCard from "./BenefitCard";
import { benefits } from "./benefits";

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        {/* Split layout: the pitch holds still while the proof points scroll by */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              align="start"
              eyebrow="Why Choose GearGo"
              title="Built for outdoor enthusiasts"
              description="Everything you need for a smooth, reliable and affordable rental experience."
            />

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t pt-8">
              {[
                { value: "10K+", label: "Adventurers" },
                { value: "500+", label: "Gear items" },
                { value: "4.8", label: "Avg. rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-bold tracking-tight text-brand-ink">
                    {stat.value}
                  </dt>

                  <dd className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
