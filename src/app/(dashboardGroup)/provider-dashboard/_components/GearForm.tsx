"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useCreateGear } from "@/hooks/useCreateGear";
import { useUpdateGear } from "@/hooks/useUpdateGear";
import { GearFormValues, gearSchema } from "@/schemas/gear.schema";
import { Controller } from "react-hook-form";

import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/hooks/useCategories";

type Gear = {
  id: string;
  title: string;
  description: string;
  brand: string;
  categoryId: string;
  imageUrl: string;
  pricePerDay: number;
  stock: number;
};

type Props = {
  mode: "create" | "edit";
  gear: Gear | null;
  onSuccess: () => void;
};

export default function GearForm({ mode, gear, onSuccess }: Props) {
  const { data: categories } = useCategories();
  console.log(categories);
  const createMutation = useCreateGear();
  const updateMutation = useUpdateGear();

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

  useEffect(() => {
    if (mode === "edit" && gear) {
      form.reset({
        title: gear.title,
        description: gear.description,
        brand: gear.brand,
        categoryId: gear.categoryId,
        imageUrl: gear.imageUrl,
        pricePerDay: gear.pricePerDay,
        stock: gear.stock,
      });
    } else {
      form.reset({
        title: "",
        description: "",
        brand: "",
        categoryId: "",
        imageUrl: "",
        pricePerDay: 0,
        stock: 1,
      });
    }
  }, [gear, mode, form]);

  const onSubmit = async (values: GearFormValues) => {
    if (mode === "create") {
      const result = await createMutation.mutateAsync(values);

      if (result.success) {
        onSuccess();
      }
    } else {
      if (!gear) return;

      const result = await updateMutation.mutateAsync({
        id: gear.id,
        payload: values,
      });

      if (result.success) {
        onSuccess();
      }
    }
  };

  const isSubmitting = createMutation.isPending || updateMutation.isPending;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Title</FieldLabel>

              <Input
                {...field}
                placeholder="Mountain Bike"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="brand"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Brand</FieldLabel>

              <Input
                {...field}
                placeholder="Trek"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <Controller
        name="description"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Description</FieldLabel>

            <textarea
              {...field}
              rows={4}
              placeholder="Describe the gear..."
              className="border-input bg-background w-full rounded-md border px-3 py-2 text-sm"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Controller
          name="categoryId"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Category</FieldLabel>

              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>

                <SelectContent>
                  {(categories?.data?.data ?? []).map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="imageUrl"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Image URL</FieldLabel>

              <Input
                {...field}
                placeholder="https://example.com/image.jpg"
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Controller
          name="pricePerDay"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Price / Day</FieldLabel>

              <Input
                type="number"
                min={0}
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="stock"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel>Stock</FieldLabel>

              <Input
                type="number"
                min={0}
                value={field.value}
                onChange={(e) => field.onChange(Number(e.target.value))}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="outline" onClick={onSuccess}>
          Cancel
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Saving..."
            : mode === "create"
              ? "Create Gear"
              : "Update Gear"}
        </Button>
      </div>
    </form>
  );
}
