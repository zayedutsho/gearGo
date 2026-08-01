"use client";

import { Menu } from "lucide-react";

import { IUser } from "@/types/user";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import UserMenu from "./UserMenu";

type Props = {
  user: IUser | null;
};

export default function MobileNav({ user }: Props) {
  return (
    <div className="flex h-[72px] items-center justify-between px-6 lg:hidden">
      <NavLogo />

      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetContent side="left">
          <div className="mt-8 space-y-8">
            <NavLogo />

            <NavLinks mobile />

            <UserMenu user={user} />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
