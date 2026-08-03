export type UserRole = "ADMIN" | "PROVIDER" | "CUSTOMER";

export type UserStatus = "ACTIVE" | "INACTIVE" | "SUSPENDED";

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

export interface User extends IUser {
  status: UserStatus;
  createdAt: string;
  updatedAt: string;
  profile: UserProfile | null;
}
