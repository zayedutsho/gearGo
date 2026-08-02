"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useMyRentals } from "@/hooks/useMyRentals";
import { ArrowLeft } from "lucide-react";

export default function RentalsPage() {
  const { data: rentals = [], isLoading } = useMyRentals();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <Button variant="ghost" className="mb-8">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">My Rentals</h1>

        <p className="text-muted-foreground">
          View and manage all your rental orders.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border bg-white">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-6 py-4 text-left">Gear</th>
              <th className="px-6 py-4 text-left">Dates</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Payment</th>
              <th className="px-6 py-4 text-left">Amount</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {rentals.map((rental: any) => (
              <tr key={rental.id} className="border-t">
                <td className="px-6 py-5 font-medium">
                  {rental.rentalItems[0]?.gear.title}
                </td>

                <td className="px-6 py-5">
                  {new Date(rental.startDate).toLocaleDateString()} -{" "}
                  {new Date(rental.endDate).toLocaleDateString()}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {rental.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      rental.paymentStatus === "PAID"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {rental.paymentStatus}
                  </span>
                </td>

                <td className="px-6 py-5 font-semibold">
                  ${rental.totalAmount}
                </td>

                <td className="px-6 py-5 text-right">
                  <Link
                    href={`/dashboard/rentals/${rental.id}`}
                    className="rounded-lg bg-[#123524] px-4 py-2 text-sm text-white transition hover:bg-[#0d271b]"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

            {rentals.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-muted-foreground"
                >
                  No rentals found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
