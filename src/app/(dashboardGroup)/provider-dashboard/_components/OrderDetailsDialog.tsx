"use client";

import { format } from "date-fns";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { RentalOrder } from "@/types/order";

import StatusBadge from "./StatusBadge";

type Props = {
  order: RentalOrder;
};

export default function OrderDetailsDialog({ order }: Props) {
  return (
    <Dialog>
      <DialogTrigger
        render={(props) => (
          <Button {...props} variant="outline" size="icon">
            <Eye className="h-4 w-4" />
          </Button>
        )}
      />

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Order Details</DialogTitle>
          <DialogDescription>Order #{order.id.slice(0, 8)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Customer Information
            </h3>

            <div className="rounded-xl border p-4">
              <h4 className="font-semibold">{order.customer.name}</h4>
              <p className="text-sm text-muted-foreground">
                {order.customer.email}
              </p>
            </div>
          </section>

          <Separator />

          {/* Rental Items */}
          <section>
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Rental Items
            </h3>

            <div className="space-y-3">
              {order.rentalItems.map((item) => (
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
                    <p className="text-sm">
                      Qty <span className="font-semibold">{item.quantity}</span>
                    </p>

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
            <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              Rental Summary
            </h3>

            <div className="grid grid-cols-2 gap-5 rounded-xl border p-4">
              <div>
                <p className="text-xs text-muted-foreground">Start Date</p>

                <p className="font-medium">
                  {format(new Date(order.startDate), "dd MMM yyyy")}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">End Date</p>

                <p className="font-medium">
                  {format(new Date(order.endDate), "dd MMM yyyy")}
                </p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Rental Status</p>

                <StatusBadge status={order.status} />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Payment Status</p>

                <StatusBadge status={order.paymentStatus} />
              </div>

              <div className="col-span-2 border-t pt-4">
                <p className="text-xs text-muted-foreground">Total Amount</p>

                <p className="text-2xl font-bold">
                  ${order.totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </section>
        </div>

        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
