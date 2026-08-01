"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

export default function GearSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchParams.get("searchTerm") ?? "");
  }, [searchParams]);

  const handleChange = (newValue: string) => {
    setValue(newValue);

    const params = new URLSearchParams(searchParams.toString());

    if (newValue) {
      params.set("searchTerm", newValue);
    } else {
      params.delete("searchTerm");
    }

    params.set("page", "1");

    router.push(`/gears?${params.toString()}`);
  };

  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <Input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search gears..."
        className="h-12 rounded-xl pl-12"
      />
    </div>
  );
}
