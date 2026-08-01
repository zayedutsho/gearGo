import { IUser } from "@/types/user";

import { getMe } from "@/services/getMe";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default async function Navbar() {
  const me = await getMe();

  const user: IUser | null = me?.success ? me.data.profile : null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <DesktopNav user={user} />
      <MobileNav user={user} />
    </header>
  );
}
