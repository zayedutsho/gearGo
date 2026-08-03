/* eslint-disable @typescript-eslint/no-explicit-any */
import { Boxes, DollarSign, Package } from "lucide-react";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import { getGear } from "@/services/gear/getGear";
import { getOrders } from "@/services/provider/getOrders";

import OrdersTable from "./_components/OrdersTable";

export default async function ProviderDashPage() {
  const [gearResult, orderResult] = await Promise.all([getGear(), getOrders()]);

  const gears = gearResult.data ?? [];
  const orders = orderResult.data ?? [];

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

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Recent Rental Orders</h2>
          <p className="text-sm text-muted-foreground">
            View and manage customer rental requests.
          </p>
        </div>

        <OrdersTable orders={orders} />
      </section>
    </div>
  );
}
