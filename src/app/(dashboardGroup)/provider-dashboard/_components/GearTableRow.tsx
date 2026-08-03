"use client";

import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

type Gear = {
  id: string;
  title: string;
  description: string;
  brand: string;
  categoryId: string;
  imageUrl: string;
  pricePerDay: number;
  stock: number;
};

type Props = {
  gear: Gear;
  onEdit: (gear: Gear) => void;
  onDelete: (gear: Gear) => void;
};

export default function GearTableRow({ gear, onEdit, onDelete }: Props) {
  return (
    <TableRow>
      <TableCell>
        <div className="relative h-14 w-14 overflow-hidden rounded-lg border">
          <Image
            src={gear.imageUrl}
            alt={gear.title}
            fill
            className="object-cover"
          />
        </div>
      </TableCell>

      <TableCell className="font-medium">{gear.title}</TableCell>

      <TableCell>{gear.brand}</TableCell>

      <TableCell>${gear.pricePerDay}</TableCell>

      <TableCell>{gear.stock}</TableCell>

      <TableCell>
        <div className="flex justify-end gap-2">
          {}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              console.log(gear);
              onEdit(gear);
            }}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            variant="destructive"
            size="icon"
            onClick={() => onDelete(gear)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
}
