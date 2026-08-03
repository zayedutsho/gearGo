import { getRentals } from "@/services/admin/getRentals";
import RentalsTable from "../_components/RentalsTable";

export default async function RentalsPage() {
  const result = await getRentals();

  const rentals = result.data ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Rentals</h1>

        <p className="text-muted-foreground">
          View and monitor all rental orders.
        </p>
      </div>

      <RentalsTable rentals={rentals} />
    </div>
  );
}
