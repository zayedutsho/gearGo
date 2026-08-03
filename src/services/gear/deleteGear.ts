"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export async function deleteGear(id: string) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.delete(`/api/provider/gear/${id}`, {
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
      message: error.response?.data?.message ?? "Failed to delete gear.",
    };
  }
}
