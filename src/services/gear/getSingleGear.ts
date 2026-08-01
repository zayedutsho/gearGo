"use server";

import axiosInstance from "@/lib/axios";
export async function getSingleGear(id: string) {
  const { data } = await axiosInstance.get(`/api/gear/${id}`);

  return data;
}
