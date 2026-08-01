export interface Category {
  id: string;
  name: string;
  description: string | null;
  gearCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryMeta {
  page: number;
  limit: number;
  total: number;
}

export interface GetCategoriesResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    meta: CategoryMeta;
    data: Category[];
  };
}

export interface GetCategoryResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Category;
}

export type GetCategoriesParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  sortBy?: "name" | "createdAt";
  sortOrder?: "asc" | "desc";
};
