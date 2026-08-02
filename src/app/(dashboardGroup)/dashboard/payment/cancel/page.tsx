import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CircleAlert } from "lucide-react";

export default function PaymentCancelPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border bg-white p-10 text-center shadow-sm">
        <CircleAlert className="mx-auto h-20 w-20 text-yellow-500" />

        <h1 className="mt-6 text-4xl font-bold">Payment Cancelled</h1>

        <p className="mt-4 text-muted-foreground">
          No worries. Your rental has not been completed.
        </p>

        <div className="mt-8">
          <Button>
            <Link href="/gears">Browse Gear Again</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
