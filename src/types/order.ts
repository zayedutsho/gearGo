export interface Gear {
  id: string;
  title: string;
  imageUrl: string;
  pricePerDay: number;
}

export interface RentalItem {
  id: string;
  gearId: string;
  quantity: number;
  pricePerDay: number;
  gear: Gear;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
}

export interface RentalOrder {
  id: string;
  customerId: string;
  providerId: string;
  startDate: string;
  endDate: string;
  totalAmount: number;
  status: "PENDING" | "CONFIRMED" | "ACTIVE" | "COMPLETED" | "CANCELLED";
  paymentStatus: "PAID" | "UNPAID";
  createdAt: string;
  updatedAt: string;

  customer: Customer;
  rentalItems: RentalItem[];
}
