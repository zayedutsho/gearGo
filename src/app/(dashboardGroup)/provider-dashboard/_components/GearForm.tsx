"use client";

import { GearFormValues, gearSchema } from "@/schemas/gear.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  mode: "create" | "edit";
};

export default function GearForm({ mode }: Props) {
  const form = useForm<GearFormValues>({
    resolver: zodResolver(gearSchema),

    defaultValues: {
      title: "",
      description: "",
      brand: "",
      categoryId: "",
      imageUrl: "",
      pricePerDay: 0,
      stock: 1,
    },
  });

  return <div>Form Coming...</div>;
}
