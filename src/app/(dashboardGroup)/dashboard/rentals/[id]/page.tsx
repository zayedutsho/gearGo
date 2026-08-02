import { ArrowLeft, CalendarDays, DollarSign, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { getSingleRental } from "@/services/rental/getSingleRental";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RentalDetailsPage({ params }: Props) {
  const { id } = await params;

  const result = await getSingleRental(id);

  if (!result.success) {
    return (
      <p className="py-20 text-center text-muted-foreground">
        Rental not found.
      </p>
    );
  }

  const rental = result.data;
  const item = rental.rentalItems[0];
  const gear = item.gear;

  return (
    <main className="bg-muted/30 min-h-screen py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Button variant="ghost" className="mb-8">
          <Link href="/dashboard/rentals">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Rentals
          </Link>
        </Button>

        <Card className="overflow-hidden rounded-3xl shadow-lg">
          <div className="grid lg:grid-cols-2">
            {/* Image */}
            <div className="relative h-[500px]">
              <Image
                src={gear.imageUrl}
                alt={gear.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#123524]">
                  Rental Details
                </p>

                <h1 className="mt-2 text-4xl font-bold">{gear.title}</h1>

                <p className="mt-2 text-muted-foreground">{gear.brand}</p>

                <div className="mt-6 flex gap-3">
                  <Badge
                    className={
                      rental.status === "CONFIRMED"
                        ? "bg-green-600"
                        : "bg-gray-600"
                    }
                  >
                    {rental.status}
                  </Badge>

                  <Badge
                    variant={
                      rental.paymentStatus === "PAID"
                        ? "default"
                        : "destructive"
                    }
                  >
                    {rental.paymentStatus}
                  </Badge>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-5">
                  <div className="rounded-2xl border p-5">
                    <CalendarDays className="mb-3 h-5 w-5 text-[#123524]" />

                    <p className="text-sm text-muted-foreground">Start Date</p>

                    <p className="mt-1 font-semibold">
                      {new Date(rental.startDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <CalendarDays className="mb-3 h-5 w-5 text-[#123524]" />

                    <p className="text-sm text-muted-foreground">End Date</p>

                    <p className="mt-1 font-semibold">
                      {new Date(rental.endDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <Package className="mb-3 h-5 w-5 text-[#123524]" />

                    <p className="text-sm text-muted-foreground">Quantity</p>

                    <p className="mt-1 font-semibold">{item.quantity}</p>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <DollarSign className="mb-3 h-5 w-5 text-[#123524]" />

                    <p className="text-sm text-muted-foreground">Total Paid</p>

                    <p className="mt-1 text-2xl font-bold text-[#123524]">
                      ${rental.totalAmount}
                    </p>
                  </div>
                </div>
              </div>

              {/* <Button
                size="lg"
                className="mt-10 h-12 rounded-xl bg-[#123524] hover:bg-[#0f2d1f]"
              >
                <Link href={`/gears/${gear.id}`}>View Gear Details</Link>
              </Button> */}
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
