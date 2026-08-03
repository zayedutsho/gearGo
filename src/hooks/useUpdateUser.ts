"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { updateUser } from "@/services/admin/updateUser";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: updateUser,

    onSuccess: (response) => {
      if (!response.success) {
        toast.error(response.message);
        return;
      }

      toast.success(response.message);

      queryClient.invalidateQueries({
        queryKey: ["admin", "users"],
      });

      router.refresh();
    },

    onError: () => {
      toast.error("Something went wrong.");
    },
  });

  return {
    updateUser: mutation.mutate,
    updateUserAsync: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
}
