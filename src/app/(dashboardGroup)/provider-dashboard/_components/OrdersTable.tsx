// _components/OrdersTable.tsx

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { RentalOrder } from "@/types/order";

import OrderTableRow from "./OrderTableRow";

type Props = {
  orders: RentalOrder[];
};

export default function OrdersTable({ orders }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/40 hover:bg-muted/40">
            <TableHead className="w-[240px]">Customer</TableHead>

            <TableHead className="min-w-[220px]">Gear</TableHead>

            <TableHead className="text-center">Qty</TableHead>

            <TableHead>Total</TableHead>

            <TableHead>Rental Period</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Payment</TableHead>

            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <OrderTableRow key={order.id} order={order} />
            ))
          ) : (
            <TableRow>
              <td
                colSpan={8}
                className="h-32 text-center text-muted-foreground"
              >
                No rental orders found.
              </td>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
