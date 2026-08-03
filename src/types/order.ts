export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "ACTIVE"
  | "RETURNED"
  | "CANCELLED";

export type PaymentStatus = "PAID" | "UNPAID";

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
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  createdAt: string;
  updatedAt: string;

  customer: Customer;
  rentalItems: RentalItem[];
}

export interface UpdateOrderPayload {
  orderId: string;
  status: OrderStatus;
}
