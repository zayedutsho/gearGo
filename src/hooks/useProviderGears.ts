"use client";

import { useQuery } from "@tanstack/react-query";

import { getGear } from "@/services/gear/getGear";

export function useProviderGears() {
  return useQuery({
    queryKey: ["provider-gears"],
    queryFn: getGear,
  });
}
