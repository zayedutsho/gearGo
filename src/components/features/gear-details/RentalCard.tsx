"use client";

import { CalendarDays, Heart } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { createCheckoutSession } from "@/services/payment/createCheckoutSession";
import { createRental } from "@/services/rental/createRental";
import { Gear } from "@/types/gear";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  gear: Gear;
};

export default function RentalCard({ gear }: Props) {
  const router = useRouter();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const rentalDays = useMemo(() => {
    if (!startDate || !endDate) return 0;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diff = end.getTime() - start.getTime();

    if (diff <= 0) return 0;

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, [startDate, endDate]);

  const total = rentalDays * gear.pricePerDay * quantity;

  // const handleRent = async () => {
  //   if (!startDate || !endDate) return;

  //   if (rentalDays <= 0) {
  //     alert("End date must be after the start date.");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //     // 1. Create Rental
  //     const rental = await createRental({
  //       startDate: new Date(startDate).toISOString(),
  //       endDate: new Date(endDate).toISOString(),
  //       items: [
  //         {
  //           gearId: gear.id,
  //           quantity,
  //         },
  //       ],
  //     });

  //     console.log("Rental:", rental);

  //     // 2. Create Checkout Session
  //     const payment = await createCheckoutSession(rental.data.id);

  //     console.log("Payment:", payment);

  //     // 3. Redirect to Stripe
  //     window.location.assign(payment.data.checkoutUrl);
  //   } catch (error: any) {
  //     console.error(error);
  //     console.error(error?.response?.data);

  //     alert(
  //       error?.response?.data?.message ??
  //         "Something went wrong. Please try again.",
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleRent = async () => {
    if (!startDate || !endDate) {
      toast.error("Please select rental dates.");
      return;
    }

    if (rentalDays <= 0) {
      toast.error("End date must be after the start date.");
      return;
    }

    try {
      setLoading(true);

      // 1. Create Rental
      const rental = await createRental({
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        items: [
          {
            gearId: gear.id,
            quantity,
          },
        ],
      });
      console.log(JSON.stringify(rental, null, 2)); // Rental failed
      if (!rental.success) {
        if (rental.status === 401) {
          toast.error("Please login to rent this gear.");

          router.push(`/login?redirectTo=/gears/${gear.id}`);
          return;
        }

        toast.error(rental.message);
        return;
      }

      // 2. Create Checkout Session
      const payment = await createCheckoutSession(rental.data.id);

      // Payment failed
      if (!payment.success) {
        toast.error(payment.message ?? "Unable to start checkout.");
        return;
      }

      // 3. Redirect to Stripe
      window.location.assign(payment.data.checkoutUrl);
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sticky top-24 rounded-3xl border bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-2xl font-bold">Select Rental Dates</h3>

      {/* Dates */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Start Date</label>

          <Input
            type="date"
            min={today}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">End Date</label>

          <Input
            type="date"
            min={startDate || today}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Quantity */}
      <div className="my-6 flex items-center justify-between rounded-2xl border p-4">
        <span className="font-medium">Quantity</span>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            size="icon"
            disabled={quantity <= 1}
            onClick={() => setQuantity((prev) => prev - 1)}
          >
            -
          </Button>

          <span className="w-6 text-center font-semibold">{quantity}</span>

          <Button
            type="button"
            variant="outline"
            size="icon"
            disabled={quantity >= gear.stock}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6 space-y-4 rounded-2xl bg-muted/40 p-4">
        <div className="flex justify-between text-sm">
          <span>Duration</span>

          <span>{rentalDays > 0 ? `${rentalDays} day(s)` : "-"}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Quantity</span>

          <span>{quantity}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Price / Day</span>

          <span>${gear.pricePerDay}</span>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>${total}</span>
          </div>
        </div>
      </div>

      <Button
        onClick={handleRent}
        disabled={!startDate || !endDate || rentalDays <= 0 || loading}
        className="h-12 w-full rounded-xl bg-[#123524] text-base hover:bg-[#0f2d1f]"
      >
        <CalendarDays className="mr-2 h-5 w-5" />

        {loading ? "Processing..." : "Rent Now"}
      </Button>

      <Button variant="outline" className="mt-4 h-12 w-full rounded-xl">
        <Heart className="mr-2 h-5 w-5" />
        Add to Wishlist
      </Button>
    </div>
  );
}
