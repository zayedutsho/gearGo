"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GearSort() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const value =
    searchParams.get("sortBy") === "pricePerDay"
      ? searchParams.get("sortOrder") === "asc"
        ? "price-low"
        : "price-high"
      : "newest";

  const handleChange = (value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    switch (value) {
      case "price-low":
        params.set("sortBy", "pricePerDay");
        params.set("sortOrder", "asc");
        break;

      case "price-high":
        params.set("sortBy", "pricePerDay");
        params.set("sortOrder", "desc");
        break;

      default:
        params.set("sortBy", "createdAt");
        params.set("sortOrder", "desc");
    }

    params.set("page", "1");

    router.push(`/gears?${params.toString()}`);
  };

  return (
    <div className="w-full sm:w-56 sm:shrink-0">
      <span id="gear-sort-label" className="mb-2 block text-sm font-medium">Sort by</span>
      <Select value={value} onValueChange={handleChange}>
        <SelectTrigger aria-labelledby="gear-sort-label" className="h-12 w-full rounded-xl">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="newest">Newest</SelectItem>

          <SelectItem value="price-low">Price: Low to High</SelectItem>

          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
