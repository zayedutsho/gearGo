import SectionHeading from "@/components/shared/section/SectionHeading";

import StepCard from "./StepCard";
import { steps } from "./steps";

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 lg:py-28">
      {/* Same contour motif as the hero, inverted for the dark surface */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-contour-invert"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-brand-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <SectionHeading
          className="mb-16"
          tone="dark"
          eyebrow="How It Works"
          title="Renting outdoor gear has never been easier"
          description="Reserve high-quality equipment in just a few simple steps and focus on enjoying your adventure."
        />

        <div className="relative">
          {/* Dashed rail tying the four steps together on wide screens */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden border-t border-dashed border-white/15 xl:block"
          />

          <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
