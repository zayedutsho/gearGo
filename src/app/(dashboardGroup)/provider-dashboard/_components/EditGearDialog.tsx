"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import GearForm from "./GearForm";

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
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gear: Gear | null;
};

export default function EditGearDialog({ open, onOpenChange, gear }: Props) {
  if (!gear) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Gear</DialogTitle>

          <DialogDescription>Update your gear information.</DialogDescription>
        </DialogHeader>

        <GearForm
          mode="edit"
          gear={gear}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
