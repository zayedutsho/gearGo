"use client";

import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@/services/admin/getUsers";

export function useUsers() {
  return useQuery({
    queryKey: ["admin", "users"],
    queryFn: getUsers,
  });
}
