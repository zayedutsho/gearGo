"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { updateOrder } from "@/services/provider/updateOrder";

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateOrder,

    onSuccess: async (response) => {
      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);

      await queryClient.invalidateQueries({
        queryKey: ["provider-orders"],
      });
    },

    onError: (error) => {
      toast.error(error.message || "Something went wrong.");
    },
  });

  return {
    updateOrder: mutation.mutate,
    updateOrderAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
}
