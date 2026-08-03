/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

type UpdateOrderPayload = {
  orderId: string;
  status: string;
};

export async function updateOrder({ orderId, status }: UpdateOrderPayload) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.patch(
      `/api/provider/orders/${orderId}`,
      { status },
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
      message: error.response?.data?.message ?? "Failed to update order.",
    };
  }
}
