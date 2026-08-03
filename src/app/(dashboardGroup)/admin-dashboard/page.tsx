import { Boxes, ShieldCheck, User, Users } from "lucide-react";

import DashboardStatCard from "@/components/dashboard/DashboardStatCard";

import { getRentals } from "@/services/admin/getRentals";
import { getUsers } from "@/services/admin/getUsers";
import { IUser } from "@/types/user";

export default async function AdminDashboardPage() {
  const [usersResult, rentalsResult] = await Promise.all([
    getUsers(),
    getRentals(),
  ]);

  const users: IUser[] = usersResult.data ?? [];
  const rentals: IUser[] = rentalsResult.data ?? [];
  console.log(users.length, rentals.length);

  const totalUsers = users.length;

  const totalProviders = users.filter(
    (user) => user.role === "PROVIDER",
  ).length;

  const totalCustomers = users.filter(
    (user) => user.role === "CUSTOMER",
  ).length;

  const totalRentals = rentals.length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-muted-foreground">
          Manage users, providers and rentals.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <DashboardStatCard
          title="Total Users"
          value={totalUsers}
          icon={Users}
        />

        <DashboardStatCard
          title="Providers"
          value={totalProviders}
          icon={ShieldCheck}
        />

        <DashboardStatCard
          title="Customers"
          value={totalCustomers}
          icon={User}
        />

        <DashboardStatCard title="Rentals" value={totalRentals} icon={Boxes} />
      </div>
    </div>
  );
}
