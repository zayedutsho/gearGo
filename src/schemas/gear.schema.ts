import { z } from "zod";

export const gearSchema = z.object({
  title: z.string().min(3, "Title is required"),

  description: z.string().min(10),

  brand: z.string().min(2),

  categoryId: z.string().min(1),

  imageUrl: z.string().url(),

  pricePerDay: z.coerce.number().positive(),

  stock: z.coerce.number().int().min(1),
});

export type GearFormValues = z.input<typeof gearSchema>;
