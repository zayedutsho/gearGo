/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export async function getRentals() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.get("/api/admin/rentals", {
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
      message: error.response?.data?.message ?? "Failed to fetch rentals.",
    };
  }
}
