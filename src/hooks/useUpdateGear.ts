"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { updateGear } from "@/services/gear/updateGear";

export function useUpdateGear() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: any }) =>
      updateGear(id, payload),

    onSuccess: (result) => {
      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      queryClient.invalidateQueries({
        queryKey: ["provider-gears"],
      });
    },
  });
}
