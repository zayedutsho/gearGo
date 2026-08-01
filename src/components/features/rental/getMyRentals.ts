"use server";

import { cookies } from "next/headers";

import axiosInstance from "@/lib/axios";

export async function getMyRentals() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const { data } = await axiosInstance.get("/api/rentals", {
    headers: {
      Cookie: `accessToken=${accessToken}`,
    },
  });

  return data;
}
