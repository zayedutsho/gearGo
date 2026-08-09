"use server";

import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

export const getMe = async () => {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    // Guest user → return null
    if (!accessToken) {
      return null;
    }

    const { data } = await axiosInstance.get("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    return null; // never crash SSR
  }
};

// "use server";

// import { cookies } from "next/headers";

// import axiosInstance from "@/lib/axios";

// export const getMe = async () => {
//   try {
//     const cookieStore = await cookies();

//     const accessToken = cookieStore.get("accessToken")?.value;

//     // Guest user
//     if (!accessToken) {
//       return null;
//     }

//     const { data } = await axiosInstance.get("/api/auth/me", {
//       headers: {
//         Cookie: `accessToken=${accessToken}`,
//       },
//     });

//     return data;
//   } catch (error) {
//     console.error("Failed to fetch current user:", error);

//     // Treat any auth failure as logged out.
//     return null;
//   }
// };
