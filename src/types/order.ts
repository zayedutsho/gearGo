import { IUser } from "./user";

export type OrderStatus =
  | "PLACED"
  | "CONFIRMED"
  | "ACTIVE"
  | "RETURNED"
  | "CANCELLED";

export type PaymentStatus = "PAID" | "PENDING";

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

export interface Payment {
  id: string;
  rentalOrderId: string;
  transactionId: string | null;
  amount: number;
  paymentProvider: "STRIPE";
  status: PaymentStatus;
  paidAt: string | null;
  createdAt: string;
  updatedAt: string;
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

  customer: IUser;
  provider: IUser;

  rentalItems: RentalItem[];

  payment: Payment | null;
}

export interface UpdateOrderPayload {
  orderId: string;
  status: OrderStatus;
}
