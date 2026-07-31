"use server";

import axiosInstance from "@/lib/axios";
import { LoginFormData } from "@/schemas/auth.schema";
import { cookies } from "next/headers";

export const loginAction = async (payload: LoginFormData) => {
  try {
    // 1. Call backend API
    const { data } = await axiosInstance.post("api/auth/login", payload);

    console.log("Login response:", data);

    // 2. If login successful, set cookies
    if (data.success) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", data.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: "lax",
      });

      cookieStore.set("refreshToken", data.data.refreshToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days
        sameSite: "lax",
      });
    }

    // 3. Return result back to client
    return data;
  } catch (error: unknown) {
    console.error("Login failed:", error);
    return {
      success: false,
      statusCode: 500,
      message: "Login request failed",
      data: null,
    };
  }
};
