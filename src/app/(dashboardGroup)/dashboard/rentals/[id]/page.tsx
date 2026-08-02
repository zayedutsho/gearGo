"use client";

import { useParams } from "next/navigation";

import { useSingleRental } from "@/hooks/useSingleRental";

export default function RentalDetailsPage() {
  const params = useParams();

  const { data: rental, isLoading } = useSingleRental(params.id as string);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!rental) {
    return <p>Rental not found.</p>;
  }

  return <pre>{JSON.stringify(rental, null, 2)}</pre>;
}
