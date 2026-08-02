"use client";

import { useQuery } from "@tanstack/react-query";

import { getSingleRental } from "@/services/rental/getSingleRental";

export function useSingleRental(id: string) {
  return useQuery({
    queryKey: ["rental", id],
    queryFn: () => getSingleRental(id),
    enabled: !!id,
  });
}
