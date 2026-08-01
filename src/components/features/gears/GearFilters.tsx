import { Button } from "@/components/ui/button";

export default function GearFilters() {
  return (
    <aside className="sticky top-24 h-fit rounded-3xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-lg font-semibold">Filters</h3>

      <div className="space-y-6">
        <div>
          <h4 className="mb-3 font-medium">Category</h4>

          <div className="space-y-2 text-sm">
            <p>Camping</p>
            <p>Hiking</p>
            <p>Cycling</p>
            <p>Photography</p>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-medium">Price</h4>

          <p className="text-sm text-muted-foreground">Slider coming next</p>
        </div>

        <Button className="w-full rounded-xl bg-[#123524]">
          Apply Filters
        </Button>
      </div>
    </aside>
  );
}
