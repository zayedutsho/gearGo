"use server";

import axios from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import axiosInstance from "@/lib/axios";

export type LoginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
    user: {
      id: string;
      email: string;
      name: string;
      role: "CUSTOMER" | "PROVIDER" | "ADMIN";
    };
  };
  errorDetails?: unknown[];
};

export const loginAction = async (
  redirectTo: string,
  prevState: LoginState | null,
  formData: FormData,
): Promise<LoginState> => {
  /**
   * Read form values.
   */
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };

  /**
   * Call backend.
   */
  let data: LoginState;

  try {
    const response = await axiosInstance.post("/api/auth/login", payload);
    data = response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: error.response?.data?.success ?? false,
        statusCode: error.response?.data?.statusCode ?? 500,
        message: error.response?.data?.message ?? "Unexpected server error.",
        data: error.response?.data?.data,
        errorDetails: error.response?.data?.errorDetails ?? [],
      };
    }

    return {
      success: false,
      statusCode: 500,
      message: "Something went wrong. Please try again.",
      data: undefined,
      errorDetails: [],
    };
  }

  /**
   * Save cookies.
   */
  const cookieStore = await cookies();

  cookieStore.set("accessToken", data.data!.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  cookieStore.set("refreshToken", data.data!.refreshToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  /**
   * Decode token.
   */
  const decoded = jwt.decode(data.data!.accessToken) as JwtPayload;

  /**
   * Redirect to originally requested page.
   */
  if (
    redirectTo &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
  ) {
    redirect(redirectTo);
  }

  /**
   * Redirect by role.
   */
  switch (decoded.role) {
    case "ADMIN":
      redirect("/admin-dashboard");

    case "PROVIDER":
      redirect("/provider-dashboard");

    default:
      redirect("/dashboard");
  }
};
