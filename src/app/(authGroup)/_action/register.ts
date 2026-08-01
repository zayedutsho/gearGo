"use server";

import axiosInstance from "@/lib/axios";
import axios from "axios";

export type RegisterState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    user: {
      id: string;
      name: string;
      email: string;
      phone: string | null;
      role: "CUSTOMER" | "PROVIDER" | "ADMIN";
      status: "ACTIVE" | "BLOCKED";
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        userId: string;
        avatar: string | null;
        bio: string | null;
        address: string | null;
        createdAt: string;
        updatedAt: string;
      };
    };
  } | null;
};

/**
 * Server Action
 * ----------------
 * Responsible for:
 * - Reading form values
 * - Calling backend API
 * - Returning backend response
 */
export const registerAction = async (
  prevState: RegisterState | null,
  formData: FormData,
): Promise<RegisterState> => {
  /**
   * Read form values.
   */
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  /**
   * Client-side safety check.
   */
  if (password !== confirmPassword) {
    return {
      success: false,
      statusCode: 400,
      message: "Passwords do not match.",
      data: null,
    };
  }

  const payload = {
    name,
    email,
    password,
    confirmPassword,
  };

  try {
    /**
     * Send registration request
     * to backend.
     */
    const { data } = await axiosInstance.post("/api/auth/register", payload);

    return data;
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
};
