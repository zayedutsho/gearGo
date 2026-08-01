import { IUser } from "@/types/user";

import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";

type Props = {
  user: IUser | null;
};

export default function DesktopNav({ user }: Props) {
  return (
    <div className="mx-auto hidden h-[72px] max-w-[1440px] items-center justify-between px-8 lg:flex">
      <div className="flex items-center gap-12">
        <NavLogo />
        <NavLinks />
      </div>

      <div className="flex items-center gap-4">
        <SearchBar />

        {/* Future */}
        {/* Wishlist */}
        {/* Cart */}

        <UserMenu user={user} />
      </div>
    </div>
  );
}
