import { CheckCircle2 } from "lucide-react";

import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

const features = [
  "Premium quality equipment",
  "Well maintained & sanitized",
  "Verified rental provider",
  "Flexible rental duration",
];

export default function GearDescription({ gear }: Props) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">About this Gear</h2>

      <p className="leading-8 text-muted-foreground">{gear.description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-3 rounded-xl bg-muted/40 p-4"
          >
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
