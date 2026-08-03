import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { RentalOrder } from "@/types/order";

import RentalTableRow from "./RentalTableRow";

type Props = {
  rentals: RentalOrder[];
};

export default function RentalsTable({ rentals }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Gear</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Rental Status</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead>Rental Period</TableHead>
            <TableHead className="w-[90px] text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rentals.map((rental) => (
            <RentalTableRow key={rental.id} rental={rental} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
