"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { navLinks } from "./nav-links";

type Props = {
  mobile?: boolean;
};

export default function NavLinks({ mobile = false }: Props) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        mobile ? "flex flex-col gap-5" : "hidden items-center gap-8 lg:flex",
      )}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "transition-colors",
              mobile
                ? "rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
                : "text-sm font-medium",
              isActive
                ? "text-[#123524]"
                : "text-muted-foreground hover:text-[#123524]",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
