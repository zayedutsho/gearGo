import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: number | string;
  icon: LucideIcon;
};

export default function DashboardStatCard({ title, value, icon: Icon }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h3 className="mt-2 text-3xl font-bold">{value}</h3>
        </div>

        <div className="rounded-xl bg-[#123524]/10 p-3">
          <Icon className="h-6 w-6 text-[#123524]" />
        </div>
      </div>
    </div>
  );
}
