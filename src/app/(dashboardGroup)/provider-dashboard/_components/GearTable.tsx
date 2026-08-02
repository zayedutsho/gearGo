"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import GearTableRow from "./GearTableRow";

type Props = {
  gears: any[];
};

export default function GearTable({ gears }: Props) {
  return (
    <div className="rounded-xl border bg-background">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Brand</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {gears.map((gear) => (
            <GearTableRow key={gear.id} gear={gear} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
