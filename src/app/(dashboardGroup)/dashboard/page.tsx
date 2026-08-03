/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  ArrowLeft,
  CheckCircle,
  CreditCard,
  Package,
  Wallet,
} from "lucide-react";
import { useMemo } from "react";

import { Button } from "@/components/ui/button";
import { useMyRentals } from "@/hooks/useMyRentals";
import Link from "next/link";
import DashboardStatCard from "../_components/DashboardStatCard";
import RecentRentals from "../_components/RecentRentals";
export default function DashboardPage() {
  const { data: rentals = [], isLoading } = useMyRentals();
  console.log(rentals);

  const stats = useMemo(() => {
    const totalRentals = rentals.length;

    const activeRentals = rentals.filter(
      (r: any) => r.status === "CONFIRMED",
    ).length;

    const completedRentals = rentals.filter(
      (r: any) => r.status === "COMPLETED",
    ).length;

    const totalSpent = rentals.reduce(
      (sum: number, rental: any) => sum + rental.totalAmount,
      0,
    );

    return {
      totalRentals,
      activeRentals,
      completedRentals,
      totalSpent,
    };
  }, [rentals]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <Button variant="ghost" className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Homepage
        </Link>
      </Button>
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="text-muted-foreground">
          Welcome back! Here is an overview of your rentals.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Total Rentals"
          value={stats.totalRentals}
          icon={Package}
        />

        <DashboardStatCard
          title="Active Rentals"
          value={stats.activeRentals}
          icon={CreditCard}
        />

        <DashboardStatCard
          title="Completed"
          value={stats.completedRentals}
          icon={CheckCircle}
        />

        <DashboardStatCard
          title="Total Spending"
          value={`$${stats.totalSpent}`}
          icon={Wallet}
        />
        <RecentRentals rentals={rentals} />
      </div>
    </div>
  );
}
