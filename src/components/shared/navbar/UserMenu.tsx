"use client";

import { IUser } from "@/types/user";

import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

type Props = {
  user: IUser | null;
};

export default function UserMenu({ user }: Props) {
  if (!user) {
    return <LoggedOutMenu />;
  }

  return <LoggedInMenu user={user} />;
}
