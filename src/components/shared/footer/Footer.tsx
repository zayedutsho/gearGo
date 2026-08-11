import { CalendarDays, Package, Truck } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Choose Gear",
    description: "Browse and select the perfect gear.",
  },
  {
    icon: CalendarDays,
    title: "Book & Pay",
    description: "Pick your dates and complete booking.",
  },
  {
    icon: Truck,
    title: "Gear at Your Door",
    description: "Get your gear delivered or pick it up.",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      {/* Top Banner */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0D3B2E] via-[#0B3328] to-[#0A2A21] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-contour-invert"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[320px_1fr] lg:items-center">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold leading-tight tracking-tight">
                Adventure
                <br />
                made simple
              </h2>

              <p className="mt-4 text-white/65">
                Rent quality gear in 3 easy steps
              </p>
            </div>

            {/* Right */}
            <div className="grid gap-8 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="group relative flex items-center gap-5"
                  >
                    {index !== 0 && (
                      <div className="absolute -left-4 hidden h-16 w-px bg-white/10 md:block" />
                    )}

                    <div className="flex size-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors duration-300 group-hover:border-brand-accent/40 group-hover:bg-white/10">
                      <Icon className="size-7 text-white transition-colors duration-300 group-hover:text-brand-accent" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        <span className="text-brand-accent">{index + 1}.</span>{" "}
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/65">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className="border-t bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} GearGo. All rights reserved.</p>

          <p>Built for every adventure.</p>
        </div>
      </section>
    </footer>
  );
}
