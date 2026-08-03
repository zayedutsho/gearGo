import { Boxes, DollarSign, Package } from "lucide-react";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";
import { getGear } from "@/services/gear/getGear";

export default async function ProviderDashPage() {
  const result = await getGear();

  const gears = result.data ?? [];

  const totalGears = gears.length;

  const totalStock = gears.reduce(
    (sum: number, gear: any) => sum + gear.stock,
    0,
  );

  const inventoryValue = gears.reduce(
    (sum: number, gear: any) => sum + gear.stock * gear.pricePerDay,
    0,
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Provider Dashboard</h1>

        <p className="text-muted-foreground">
          Manage your gear inventory and rental business.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <DashboardStatCard
          title="Total Gears"
          value={totalGears}
          icon={Package}
        />

        <DashboardStatCard
          title="Total Stock"
          value={totalStock}
          icon={Boxes}
        />

        <DashboardStatCard
          title="Inventory Value"
          value={`$${inventoryValue}`}
          icon={DollarSign}
        />
      </div>
    </div>
  );
}
