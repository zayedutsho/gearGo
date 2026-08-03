"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { deleteGear } from "@/services/gear/deleteGear";

export function useDeleteGear() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteGear,

    onSuccess: () => {
      toast.success("Gear deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider-gears"],
      });
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(
        error?.message ??
          error?.response?.data?.message ??
          "Failed to delete gear.",
      );
    },
  });
}
