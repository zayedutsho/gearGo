export interface GearCategory {
  id: string;
  name: string;
  description: string | null;
}

export interface Gear {
  id: string;
  title: string;
  description: string;
  brand: string;
  pricePerDay: number;
  stock: number;
  imageUrl: string;
  providerId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;

  category: GearCategory;
}

export interface GearMeta {
  page: number;
  limit: number;
  total: number;
}

export interface GetGearsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Gear[];
  meta: GearMeta;
}

export interface GetGearResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Gear;
}

export type GetGearsParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  categoryId?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "createdAt" | "pricePerDay";
  sortOrder?: "asc" | "desc";
};
