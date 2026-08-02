import axiosInstance from "@/lib/axios";

export async function getSingleRental(id: string) {
  const { data } = await axiosInstance.get(`/api/rentals/${id}`);

  return data.data;
}
