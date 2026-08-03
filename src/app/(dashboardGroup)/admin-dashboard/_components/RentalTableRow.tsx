import { format } from "date-fns";

import { TableCell, TableRow } from "@/components/ui/table";

import { RentalOrder } from "@/types/order";

import PaymentStatusBadge from "./PaymentStatusBadge";
import RentalDetailsDialog from "./RentalDetailsDialog";
import RentalStatusBadge from "./RentalStatusBadge";

type Props = {
  rental: RentalOrder;
};

export default function RentalTableRow({ rental }: Props) {
  const gearNames = rental.rentalItems
    .map((item) => item.gear.title)
    .join(", ");

  return (
    <TableRow className="transition-colors hover:bg-muted/30">
      {/* Customer */}
      <TableCell className="py-5">
        <div>
          <p className="font-semibold">{rental.customer.name}</p>
          <p className="text-xs text-muted-foreground">
            {rental.customer.email}
          </p>
        </div>
      </TableCell>

      {/* Provider */}
      <TableCell>
        <div>
          <p className="font-semibold">{rental.provider.name}</p>
          <p className="text-xs text-muted-foreground">
            {rental.provider.email}
          </p>
        </div>
      </TableCell>

      {/* Gear */}
      <TableCell className="max-w-[220px]">
        <p className="truncate font-medium" title={gearNames}>
          {gearNames}
        </p>
      </TableCell>

      {/* Total */}
      <TableCell className="font-semibold">
        ${rental.totalAmount.toFixed(2)}
      </TableCell>

      {/* Rental Status */}
      <TableCell>
        <RentalStatusBadge status={rental.status} />
      </TableCell>

      {/* Payment */}
      <TableCell>
        <PaymentStatusBadge status={rental.paymentStatus} />
      </TableCell>

      {/* Period */}
      <TableCell>
        <div className="space-y-1 text-sm">
          <p>{format(new Date(rental.startDate), "dd MMM yyyy")}</p>
          <p className="text-muted-foreground">
            to {format(new Date(rental.endDate), "dd MMM yyyy")}
          </p>
        </div>
      </TableCell>

      {/* Actions */}
      <TableCell className="text-right">
        <RentalDetailsDialog rental={rental} />
      </TableCell>
    </TableRow>
  );
}
