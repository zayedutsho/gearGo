/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";
import { UserStatus } from "@/types/user";

type UpdateUserPayload = {
  userId: string;
  status: UserStatus;
};

export async function updateUser({ userId, status }: UpdateUserPayload) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const { data } = await axiosInstance.patch(
      `/api/admin/users/${userId}`,
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
      message: error.response?.data?.message ?? "Failed to update user.",
    };
  }
}
