"use server";

import axiosInstance from "@/lib/axios";

import { GetGearsParams, GetGearsResponse } from "@/types/gear";

export const getGears = async (
  params?: GetGearsParams,
): Promise<GetGearsResponse> => {
  try {
    const { data } = await axiosInstance.get("/api/gear", {
      params,
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch gears:", error);

    return {
      success: false,
      statusCode: 500,
      message: "Failed to fetch gears",
      data: [],
      meta: {
        page: 1,
        limit: 0,
        total: 0,
      },
    };
  }
};
