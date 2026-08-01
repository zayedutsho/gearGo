"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";
import { CreateRentalPayload } from "@/types/rental";

export async function createRental(payload: CreateRentalPayload) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  console.log("Rental Payload:", payload);

  try {
    const { data } = await axiosInstance.post("/api/rentals", payload, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    return data;
  } catch (error: any) {
    console.error("Rental Error:", error.response?.data);

    throw error;
  }
}
