/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import GearForm from "./GearForm";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
export default function AddGearDialog({ open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Add New Gear</DialogTitle>
        </DialogHeader>

        <GearForm
          mode="create"
          gear={{} as any}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
