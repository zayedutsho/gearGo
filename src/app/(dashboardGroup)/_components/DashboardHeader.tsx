"use client";

import { Tent } from "lucide-react";
import Link from "next/link";

import { IUser } from "@/types/user";

import DashboardMobileSidebar from "./DashboardMobileSidebar";

type Props = {
  user: IUser | null;
};

export default function DashboardHeader({ user }: Props) {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-4 lg:hidden">
      <DashboardMobileSidebar user={user} />

      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#143D2C] text-white">
          <Tent className="h-5 w-5" />
        </div>

        <span className="text-lg font-bold">GearUp</span>
      </Link>

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#143D2C] text-sm font-semibold text-white">
        {user?.name?.charAt(0).toUpperCase() ?? "U"}
      </div>
    </header>
  );
}
