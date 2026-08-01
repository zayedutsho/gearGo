import { Tent } from "lucide-react";
import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#123524] text-white">
        <Tent className="h-5 w-5" />
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight">GearUp</span>

        <span className="text-xs text-muted-foreground">
          Adventure Starts Here
        </span>
      </div>
    </Link>
  );
}
