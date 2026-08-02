"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export async function getGear() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.get("/api/gear", {
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
        error.response?.data?.message ?? "Failed to fetch provider gears.",
    };
  }
}
