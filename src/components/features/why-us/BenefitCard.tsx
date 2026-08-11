import { benefits } from "./benefits";

type Props = {
  benefit: (typeof benefits)[number];
};

export default function BenefitCard({ benefit }: Props) {
  const Icon = benefit.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-ink/25 hover:shadow-xl hover:shadow-brand/10">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-brand-ink/[0.07] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <span className="relative flex size-12 items-center justify-center rounded-2xl bg-brand-ink/10 text-brand-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
        <Icon className="size-6" />
      </span>

      <h3 className="relative mt-6 text-lg font-semibold tracking-tight">
        {benefit.title}
      </h3>

      <p className="relative mt-2.5 text-sm leading-7 text-muted-foreground">
        {benefit.description}
      </p>
    </div>
  );
}
