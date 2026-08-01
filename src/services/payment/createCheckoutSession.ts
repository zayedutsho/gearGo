"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

export async function createCheckoutSession(rentalOrderId: string) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const { data } = await axiosInstance.post(
    "/api/payments/create-session",
    {
      rentalOrderId,
    },
    {
      headers: {
        Cookie: `accessToken=${accessToken}`,
      },
    },
  );

  return data;
}
