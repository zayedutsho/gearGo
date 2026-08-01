import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

export default function GearSpecifications({ gear }: Props) {
  const specifications = [
    {
      label: "Category",
      value: gear.category.name,
    },
    {
      label: "Brand",
      value: gear.brand,
    },
    {
      label: "Price / Day",
      value: `$${gear.pricePerDay}`,
    },
    {
      label: "Available Stock",
      value: gear.stock,
    },
  ];

  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold">Specifications</h2>

      <div className="divide-y">
        {specifications.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between py-5"
          >
            <span className="text-muted-foreground">{item.label}</span>

            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
