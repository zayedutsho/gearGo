// src/hooks/useProviderOrders.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { getOrders } from "@/services/provider/getOrders";

export function useProviderOrders() {
  const { data, isLoading, isFetching, error, refetch } = useQuery({
    queryKey: ["provider-orders"],
    queryFn: getOrders,
  });

  return {
    orders: data?.data ?? [],
    isLoading,
    isFetching,
    error,
    refetch,
  };
}
