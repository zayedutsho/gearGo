import BenefitCard from "./BenefitCard";
import { benefits } from "./benefits";

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-[#123524]">
            Why Choose GearUp
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Built for outdoor enthusiasts
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need for a smooth, reliable and affordable rental
            experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
