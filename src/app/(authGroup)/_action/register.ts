"use server";

import axios from "axios";

import axiosInstance from "@/lib/axios";

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
  formData: FormData,
): Promise<RegisterState> => {
  /**
   * Read form values.
   */
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    name,
    email,
    password,
  };

  try {
    /**
     * Send registration request
     * to backend.
     */
    const { data } = await axiosInstance.post("/api/auth/register", payload);

    /**
     * Return backend response.
     */
    return data;
  } catch (error) {
    /**
     * Backend validation errors.
     */
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

    /**
     * Unexpected errors.
     */
    return {
      success: false,
      statusCode: 500,
      message: "Something went wrong. Please try again.",
      data: null,
    };
  }
};
