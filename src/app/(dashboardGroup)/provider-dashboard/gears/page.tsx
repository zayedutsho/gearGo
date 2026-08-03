"use client";

import { useState } from "react";

import Loading from "@/components/shared/loading/Loading";
import { Button } from "@/components/ui/button";

import { useProviderGears } from "@/hooks/useProviderGears";

import AddGearDialog from "../_components/AddGearDialog";
import DeleteGearDialog from "../_components/DeleteGearDialog";
import EditGearDialog from "../_components/EditGearDialog";
import GearTable from "../_components/GearTable";

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

export default function ProviderGearsPage() {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedGear, setSelectedGear] = useState<Gear | null>(null);

  const { data, isLoading } = useProviderGears();

  if (isLoading) return <Loading />;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Gear Listings</h1>

          <p className="text-muted-foreground">
            Manage all of your rental listings.
          </p>
        </div>

        <Button
          onClick={() => {
            setSelectedGear(null);
            setAddOpen(true);
          }}
        >
          Add Gear
        </Button>
      </div>

      <GearTable
        gears={data?.data ?? []}
        onEdit={(gear) => {
          setSelectedGear(gear);
          setEditOpen(true);
        }}
        onDelete={(gear) => {
          setSelectedGear(gear);
          setDeleteOpen(true);
        }}
      />

      <AddGearDialog open={addOpen} onOpenChange={setAddOpen} />

      <EditGearDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        gear={selectedGear}
      />

      <DeleteGearDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        gear={selectedGear}
      />
    </div>
  );
}
