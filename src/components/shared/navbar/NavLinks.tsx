import Link from "next/link";

import { navLinks } from "./nav-links";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#123524]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
