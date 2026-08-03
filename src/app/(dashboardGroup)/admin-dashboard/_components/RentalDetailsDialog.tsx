"use client";

import { format } from "date-fns";
import { Eye } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

import { RentalOrder } from "@/types/order";

import PaymentStatusBadge from "./PaymentStatusBadge";
import RentalStatusBadge from "./RentalStatusBadge";

type Props = {
  rental: RentalOrder;
};

export default function RentalDetailsDialog({ rental }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={(props) => (
          <Button {...props} variant="outline" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
        )}
      />

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Rental Details</DialogTitle>

          <DialogDescription>Order #{rental.id.slice(0, 8)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer & Provider */}
          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border p-4">
              <h3 className="mb-3 font-semibold">Customer Information</h3>

              <p className="font-medium">{rental.customer.name}</p>

              <p className="text-sm text-muted-foreground">
                {rental.customer.email}
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <h3 className="mb-3 font-semibold">Provider Information</h3>

              <p className="font-medium">{rental.provider.name}</p>

              <p className="text-sm text-muted-foreground">
                {rental.provider.email}
              </p>
            </div>
          </section>

          <Separator />

          {/* Rental Items */}
          <section>
            <h3 className="mb-3 font-semibold">Rental Items</h3>

            <div className="space-y-3">
              {rental.rentalItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div>
                    <p className="font-medium">{item.gear.title}</p>

                    <p className="text-sm text-muted-foreground">
                      ${item.pricePerDay}/day
                    </p>
                  </div>

                  <div className="text-right">
                    <p>Qty: {item.quantity}</p>

                    <p className="font-semibold">
                      ${(item.quantity * item.pricePerDay).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Summary */}
          <section>
            <h3 className="mb-3 font-semibold">Rental Summary</h3>

            <div className="grid grid-cols-2 gap-4 rounded-xl border p-4">
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>

                <p>{format(new Date(rental.startDate), "dd MMM yyyy")}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">End Date</p>

                <p>{format(new Date(rental.endDate), "dd MMM yyyy")}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Rental Status</p>

                <RentalStatusBadge status={rental.status} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Payment Status</p>

                <PaymentStatusBadge status={rental.paymentStatus} />
              </div>

              {rental.payment && (
                <>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Payment Provider
                    </p>

                    <p>{rental.payment.paymentProvider}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Transaction ID
                    </p>

                    <p className="truncate">{rental.payment.transactionId}</p>
                  </div>
                </>
              )}

              <div className="col-span-2 border-t pt-4">
                <p className="text-sm text-muted-foreground">Total Amount</p>

                <p className="text-2xl font-bold">
                  ${rental.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
