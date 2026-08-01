import StepCard from "./StepCard";
import { steps } from "./steps";

export default function HowItWorks() {
  return (
    <section className="bg-[#123524] py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-[0.25em] text-emerald-300">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
            Renting outdoor gear has never been easier
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/70">
            Reserve high-quality equipment in just a few simple steps and focus
            on enjoying your adventure.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
