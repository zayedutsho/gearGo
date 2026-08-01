type Props = {
  benefit: any;
};

export default function BenefitCard({ benefit }: Props) {
  const Icon = benefit.icon;

  return (
    <div className="rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#123524]/10">
        <Icon className="h-7 w-7 text-[#123524]" />
      </div>

      <h3 className="mb-3 text-xl font-semibold">{benefit.title}</h3>

      <p className="leading-7 text-muted-foreground">{benefit.description}</p>
    </div>
  );
}
