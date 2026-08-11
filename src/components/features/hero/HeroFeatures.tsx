import { heroFeatures } from "./hero-data";

export default function HeroFeatures() {
  return (
    <div className="grid gap-3 border-t border-brand-ink/10 pt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
      {heroFeatures.map((feature) => {
        const Icon = feature.icon;

        return (
          <div
            key={feature.id}
            className="group flex items-start gap-4 rounded-2xl border border-transparent bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-brand-ink/15 hover:bg-card hover:shadow-md hover:shadow-brand/5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-ink/10 text-brand-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
              <Icon className="size-5" />
            </span>

            <div className="min-w-0">
              <h3 className="font-semibold tracking-tight">{feature.title}</h3>

              <p className="mt-0.5 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
