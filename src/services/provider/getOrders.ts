/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export async function getOrders() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.get("/api/provider/orders", {
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
        error.response?.data?.message ?? "Failed to fetch provider Orders.",
    };
  }
}
