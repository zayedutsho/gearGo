import { TableCell, TableRow } from "@/components/ui/table";
import { RentalOrder } from "@/types/order";
import { format } from "date-fns";
import OrderDetailsDialog from "./OrderDetailsDialog";
import StatusBadge from "./StatusBadge";
type Props = {
  order: RentalOrder;
};

export default function OrderTableRow({ order }: Props) {
  const gearNames = order.rentalItems.map((item) => item.gear.title).join(", ");

  const totalQuantity = order.rentalItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  return (
    <TableRow className="hover:bg-muted/30 transition-colors">
      {/* Customer */}
      <TableCell className="py-5">
        <div className="space-y-1">
          <p className="font-semibold capitalize">{order.customer.name}</p>
          <p className="text-xs text-muted-foreground">
            {order.customer.email}
          </p>
        </div>
      </TableCell>

      {/* Gear */}
      <TableCell className="max-w-[250px] py-5">
        <p className="truncate font-medium" title={gearNames}>
          {gearNames}
        </p>
      </TableCell>

      {/* Quantity */}
      <TableCell className="text-center font-medium">{totalQuantity}</TableCell>

      {/* Total */}
      <TableCell className="font-semibold">
        ${order.totalAmount.toFixed(2)}
      </TableCell>

      {/* Rental Period */}
      <TableCell>
        <div className="space-y-1 text-sm">
          <p>{format(new Date(order.startDate), "dd MMM yyyy")}</p>
          <p className="text-muted-foreground">
            to {format(new Date(order.endDate), "dd MMM yyyy")}
          </p>
        </div>
      </TableCell>

      {/* Rental Status */}
      <TableCell>
        <StatusBadge status={order.status} />
      </TableCell>

      {/* Payment */}
      <TableCell>
        <StatusBadge status={order.paymentStatus} />
      </TableCell>

      {/* Actions */}
      <TableCell className="text-right">
        <OrderDetailsDialog order={order} />
      </TableCell>
    </TableRow>
  );
}
