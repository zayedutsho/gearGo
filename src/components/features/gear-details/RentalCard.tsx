import { CalendarDays, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Gear } from "@/types/gear";

type Props = {
  gear: Gear;
};

export default function RentalCard({ gear }: Props) {
  return (
    <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-2xl font-bold">Select Rental Dates</h3>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Start Date</label>

          <Input type="date" />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">End Date</label>

          <Input type="date" />
        </div>
      </div>

      <div className="my-6 space-y-4 rounded-2xl bg-muted/40 p-4">
        <div className="flex justify-between text-sm">
          <span>Duration</span>

          <span>-</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Price / Day</span>

          <span>${gear.pricePerDay}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>$0</span>
          </div>
        </div>
      </div>

      <Button className="h-12 w-full rounded-xl bg-[#123524] text-base hover:bg-[#0f2d1f]">
        <CalendarDays className="mr-2 h-5 w-5" />
        Rent Now
      </Button>

      <Button variant="outline" className="mt-4 h-12 w-full rounded-xl">
        <Heart className="mr-2 h-5 w-5" />
        Add to Wishlist
      </Button>
    </div>
  );
}
