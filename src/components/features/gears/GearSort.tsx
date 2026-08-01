import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function GearSort() {
  return (
    <Select defaultValue="newest">
      <SelectTrigger className="h-12 w-[220px] rounded-xl bg-white shadow-sm">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>

        <SelectItem value="price-low">Price: Low to High</SelectItem>

        <SelectItem value="price-high">Price: High to Low</SelectItem>
      </SelectContent>
    </Select>
  );
}
