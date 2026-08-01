import { getMyRentals } from "@/services/rental/getMyRentals";

export default async function RentalsPage() {
  const rentals = await getMyRentals();

  console.log(rentals);

  return (
    <main className="mx-auto max-w-7xl p-10">
      <h1 className="mb-8 text-4xl font-bold">My Rentals</h1>

      {/* We'll build RentalList next */}
    </main>
  );
}
