"use server";

import axiosInstance from "@/lib/axios";

import { GetCategoriesParams, GetCategoriesResponse } from "@/types/category";

export const getCategories = async (
  params?: GetCategoriesParams,
): Promise<GetCategoriesResponse> => {
  try {
    const { data } = await axiosInstance.get("/api/categories", {
      params,
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);

    return {
      success: false,
      statusCode: 500,
      message: "Failed to fetch categories",
      data: {
        meta: {
          page: 1,
          limit: 0,
          total: 0,
        },
        data: [],
      },
    };
  }
};
