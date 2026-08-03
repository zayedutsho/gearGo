"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";
import { GearFormValues } from "@/schemas/gear.schema";

export async function updateGear(id: string, payload: GearFormValues) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.patch(
      `/api/provider/gear/${id}`,
      payload,
      {
        headers: {
          Cookie: `accessToken=${accessToken}`,
        },
      },
    );

    return {
      success: true,
      data: data.data,
      message: data.message,
    };
  } catch (error: any) {
    return {
      success: false,
      status: error.response?.status,
      message: error.response?.data?.message ?? "Failed to update gear.",
    };
  }
}
