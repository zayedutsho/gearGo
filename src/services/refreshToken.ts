"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export const getNewAccessToken = async () => {
  try {
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get("refreshToken")?.value;

    // Guest user
    if (!refreshToken) {
      return null;
    }

    const { data } = await axiosInstance.get("/api/auth/me", {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch current user:", error);

    // Treat any auth failure as logged out.
    return null;
  }
};
