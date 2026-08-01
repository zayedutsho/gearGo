import { Search, SlidersHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function GearToolbar() {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl border bg-white p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          placeholder="Search gears..."
          className="h-11 rounded-xl pl-11"
        />
      </div>

      <div className="flex gap-3">
        <Button variant="outline" className="rounded-xl">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>

        <Button variant="outline" className="rounded-xl bg-transparent">
          Newest
        </Button>
      </div>
    </div>
  );
}
