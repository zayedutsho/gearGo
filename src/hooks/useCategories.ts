"use client";

import { useQuery } from "@tanstack/react-query";

import { getCategories } from "@/services/getCategories";

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(), // 👈 wrap it
  });
}
