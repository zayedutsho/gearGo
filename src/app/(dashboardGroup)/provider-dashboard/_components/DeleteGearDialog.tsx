"use client";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useDeleteGear } from "@/hooks/useDeleteGear";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  gear: {
    id: string;
    title: string;
  } | null;
};

export default function DeleteGearDialog({ open, onOpenChange, gear }: Props) {
  const deleteMutation = useDeleteGear();

  const handleDelete = async () => {
    if (!gear) return;

    const result = await deleteMutation.mutateAsync(gear.id);

    if (!result.success) {
      toast.error(result.message);

      return;
    }

    toast.success(result.message);

    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete "{gear?.title}"?</AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone. This gear listing will be permanently
            removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={deleteMutation.isPending}>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={(e) => {
              e.preventDefault();
              handleDelete();
            }}
            disabled={deleteMutation.isPending}
            className="bg-red-600 hover:bg-red-700"
          >
            {deleteMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
