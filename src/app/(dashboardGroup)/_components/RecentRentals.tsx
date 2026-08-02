import Link from "next/link";

type Props = {
  rentals: any[];
};

export default function RecentRentals({ rentals }: Props) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-xl font-semibold">Recent Rentals</h2>

        <Link
          href="/dashboard/rentals"
          className="text-sm font-medium text-[#123524]"
        >
          View All
        </Link>
      </div>

      <div className="divide-y">
        {rentals.slice(0, 5).map((rental) => (
          <div
            key={rental.id}
            className="flex items-center justify-between p-6"
          >
            <div>
              <h3 className="font-semibold">
                {rental.rentalItems[0]?.gear.title}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                {new Date(rental.startDate).toLocaleDateString()} -{" "}
                {new Date(rental.endDate).toLocaleDateString()}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold">${rental.totalAmount}</p>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  rental.paymentStatus === "PAID"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {rental.paymentStatus}
              </span>
            </div>
          </div>
        ))}

        {rentals.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">
            No rentals found.
          </div>
        )}
      </div>
    </div>
  );
}
