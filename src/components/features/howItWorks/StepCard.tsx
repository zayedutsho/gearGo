type Props = {
  step: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
  };
};

export default function StepCard({ step }: Props) {
  const Icon = step.icon;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.11]">
      {/* Accent bar wipes across on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="flex items-center justify-between">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10 transition-colors duration-300 group-hover:bg-brand-accent group-hover:text-brand">
          <Icon className="size-7" />
        </span>

        <span className="text-5xl font-bold leading-none text-white/10 transition-colors duration-300 group-hover:text-white/20">
          {String(step.id).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
        {step.title}
      </h3>

      <p className="mt-3 leading-7 text-white/65">{step.description}</p>
    </div>
  );
}
