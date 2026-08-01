import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function GearSearch() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

      <Input
        placeholder="Search tents, bikes, backpacks..."
        className="h-12 rounded-xl border-0 bg-white pl-12 shadow-sm"
      />
    </div>
  );
}
