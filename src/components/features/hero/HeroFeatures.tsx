import { heroFeatures } from "./hero-data";

export default function HeroFeatures() {
  return (
    <div className="grid grid-cols-2 gap-5 border-t pt-8 md:grid-cols-4">
      {heroFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <div key={feature.id} className="flex items-start gap-3">
            <div className="rounded-xl bg-[#123524]/10 p-2">
              <Icon className="h-5 w-5 text-[#123524]" />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">{feature.title}</h3>

              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
