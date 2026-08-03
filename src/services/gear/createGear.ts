"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";
import { GearFormValues } from "@/schemas/gear.schema";

export async function createGear(payload: GearFormValues) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.post("/api/provider/gear", payload, {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    });

    return {
      success: true,
      data: data.data,
      message: data.message,
    };
  } catch (error: any) {
    return {
      success: false,
      status: error.response?.status,
      message: error.response?.data?.message ?? "Failed to create gear.",
    };
  }
}
