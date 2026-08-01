export interface CreateRentalPayload {
  startDate: string;
  endDate: string;

  items: {
    gearId: string;
    quantity: number;
  }[];
}

export interface Rental {
  id: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
}
