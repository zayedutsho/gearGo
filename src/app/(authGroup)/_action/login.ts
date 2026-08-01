"use server";

import axios from "axios";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import axiosInstance from "@/lib/axios";

type LoginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    user: {
      role: string;
    };
  };
};

/**
 * Server Action
 * ----------------
 * Responsible for:
 * - Reading form data
 * - Calling backend API
 * - Saving authentication cookies
 * - Redirecting user after successful login
 */
export const loginAction = async (
  redirectTo: string,
  prevState: LoginState | null,
  formData: FormData,
) => {
  /**
   * Read form values.
   */
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };

  let responseData;

  try {
    /**
     * Send credentials to backend.
    
     */
    const { data } = await axiosInstance.post("/api/auth/login", payload);
    responseData = data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (
        error.response?.data ?? {
          success: false,
          statusCode: 500,
          message: "Unexpected server error.",
          data: null,
        }
      );
    }

    return {
      success: false,
      statusCode: 500,
      message: "Something went wrong. Please try again.",
      data: null,
    };
  }

  /**
   * Store authentication cookies.
   */
  if (responseData.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", responseData.data.accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", responseData.data.refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    /**
     * Decode access token
     * to determine user role.
     */
    const decodedToken = jwt.decode(
      responseData.data.accessToken,
    ) as JwtPayload;

    /**
     * If middleware stored
     * the original route,
     * redirect there first.
     */
    if (
      redirectTo &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }

    /**
     * Otherwise redirect
     * based on role.
     */
    switch (decodedToken.role) {
      case "ADMIN":
        redirect("/admin-dashboard");
        break;

      case "PROVIDER":
        redirect("/provider-dashboard");
        break;

      default:
        redirect("/dashboard");
        break;
    }
  }

  return responseData;
};
