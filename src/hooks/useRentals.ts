"use client";

import { useQuery } from "@tanstack/react-query";

import { getRentals } from "@/services/admin/getRentals";

export function useRentals() {
  return useQuery({
    queryKey: ["admin", "rentals"],
    queryFn: getRentals,
  });
}
