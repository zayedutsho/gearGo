"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";
import { CreateRentalPayload } from "@/types/rental";

export async function createRental(payload: CreateRentalPayload) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const response = await axiosInstance.post("/api/rentals", payload, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    return {
      success: true,
      data: response.data.data, // ✅ Return only the rental object
      message: response.data.message,
    };
  } catch (error: any) {
    return {
      success: false,
      status: error.response?.status,
      message: error.response?.data?.message ?? "Failed to create rental.",
    };
  }
}
