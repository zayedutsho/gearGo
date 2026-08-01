"use server";

import axiosInstance from "@/lib/axios";

type Props = {
  categoryId: string;
  gearId: string;
};

export async function getRelatedGears({ categoryId, gearId }: Props) {
  const { data } = await axiosInstance.get("/api/gear", {
    params: {
      categoryId,
      limit: 4,
    },
  });

  return {
    ...data,
    data: data.data.filter((gear: any) => gear.id !== gearId),
  };
}
