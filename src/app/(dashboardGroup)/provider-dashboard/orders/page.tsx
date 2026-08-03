"use client";

import Loading from "@/components/shared/loading/Loading";
import { useProviderOrders } from "@/hooks/useProviderOrders";
import OrdersTable from "../_components/OrdersTable";

export default function ProviderOrdersPage() {
  const { orders, isLoading } = useProviderOrders();
  console.log(orders);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Rental Orders</h1>

      <OrdersTable orders={orders} />
    </div>
  );
}
