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
      <section className="bg-gradient-to-r from-[#0D3B2E] to-[#0B3328] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
            {/* Left */}
            <div>
              <h2 className="text-4xl font-bold leading-tight">
                Adventure
                <br />
                made simple
              </h2>

              <p className="mt-3 text-white/70">
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
                    className="relative flex items-center gap-5"
                  >
                    {index !== 0 && (
                      <div className="absolute -left-4 hidden h-16 w-px bg-white/10 md:block" />
                    )}

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5">
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {index + 1}. {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-white/70">
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GearUp. All rights reserved.</p>

          <p>Built for every adventure.</p>
        </div>
      </section>
    </footer>
  );
}
