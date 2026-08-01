import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CheckCircle2 } from "lucide-react";

export default function PaymentSuccessPage() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="w-full max-w-xl rounded-3xl border bg-white p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-20 w-20 text-green-600" />

        <h1 className="mt-6 text-4xl font-bold">Payment Successful 🎉</h1>

        <p className="mt-4 text-muted-foreground">
          Your rental has been confirmed successfully.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button className="flex-1">
            <Link href="/dashboard/rentals">View My Rentals</Link>
          </Button>

          <Button variant="outline" className="flex-1">
            <Link href="/gears">Continue Browsing</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
