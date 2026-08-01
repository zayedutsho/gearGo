export type UserRole = "ADMIN" | "PROVIDER" | "CUSTOMER";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: UserRole;
  image?: string;
}
