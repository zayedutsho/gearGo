import axiosInstance from "@/lib/axios";
import { LoginFormData } from "@/schemas/auth.schema";

export const loginAction = async (payload: LoginFormData) => {
  const { data } = await axiosInstance.post("/auth/login", payload);

  return data;
};
