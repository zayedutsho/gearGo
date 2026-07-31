"use server";

import axiosInstance from "@/lib/axios";
import { LoginFormData } from "@/schemas/auth.schema";
import axios from "axios";
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }

    return {
      success: false,
      statusCode: 500,
      message: "Something went wrong",
      data: null,
    };
  }
};
