"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export async function getSingleRental(id: string) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.get(`/api/rentals/${id}`, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    return {
      success: true,
      data: data.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        error.response?.data?.message ?? "Failed to fetch rental details.",
    };
  }
}
