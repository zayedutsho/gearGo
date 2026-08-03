export type UserRole = "ADMIN" | "PROVIDER" | "CUSTOMER";

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: UserRole;
  image?: string;
}
export interface UserProfile {
  id: string;
  avatar: string | null;
  bio: string | null;
  address: string | null;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;

  role: "ADMIN" | "PROVIDER" | "CUSTOMER";

  status: "ACTIVE" | "INACTIVE" | "SUSPENDED";

  createdAt: string;
  updatedAt: string;

  profile: UserProfile | null;
}
