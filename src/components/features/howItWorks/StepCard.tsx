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
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>

      <p className="leading-7 text-white/70">{step.description}</p>

      <div className="absolute right-6 top-6 text-6xl font-bold text-white/5">
        {step.id}
      </div>
    </div>
  );
}
