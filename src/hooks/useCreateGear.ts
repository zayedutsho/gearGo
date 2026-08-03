"use client";

import { createGear } from "@/services/gear/createGear";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateGear() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createGear,

    onSuccess: () => {
      toast.success("Gear created successfully.");

      queryClient.invalidateQueries({
        queryKey: ["provider-gears"],
      });
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(
        error?.message ??
          error?.response?.data?.message ??
          "Failed to create gear.",
      );
    },
  });
}
