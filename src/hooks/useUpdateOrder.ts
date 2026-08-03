"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateOrder } from "@/services/provider/updateOrder";

export function useUpdateOrder() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: updateOrder,

    onSuccess: (response) => {
      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);

      router.refresh();
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
