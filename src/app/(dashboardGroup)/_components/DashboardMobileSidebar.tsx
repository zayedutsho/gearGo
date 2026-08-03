"use client";

import { ChevronRight, LogOut, Menu, Tent } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { logout } from "@/services/logout";
import { IUser } from "@/types/user";

import { dashboardNavItems } from "./dashboardNavItems";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Props = {
  user: IUser | null;
};

export default function DashboardMobileSidebar({ user }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const role = user?.role ?? "CUSTOMER";

  const navItems = dashboardNavItems[role];

  function handleLogout() {
    startTransition(async () => {
      await logout();

      toast.success("Logged out successfully.");

      setOpen(false);

      router.replace("/login");
      router.refresh();
    });
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-72 p-0">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b px-6 py-7">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setOpen(false)}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#143D2C] text-white">
                <Tent className="h-6 w-6" />
              </div>

              <div>
                <h2 className="text-xl font-bold">GearUp</h2>

                <p className="text-xs text-muted-foreground">
                  Adventure Starts Here
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2 px-4 py-6">
            {navItems.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                    active
                      ? "bg-[#143D2C] text-white shadow-lg ring-1 ring-[#143D2C]/20"
                      : "text-slate-600 hover:bg-[#143D2C]/5 hover:text-[#143D2C]",
                  )}
                >
                  <Icon className="h-5 w-5" />

                  <span>{item.title}</span>

                  <ChevronRight
                    className={cn(
                      "ml-auto h-4 w-4 transition",
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="space-y-4 border-t p-4">
            <div className="flex items-center gap-3 rounded-xl border bg-slate-50 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#143D2C] text-sm font-semibold text-white">
                {user?.name?.charAt(0).toUpperCase() ?? "U"}
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {user?.name ?? "Guest"}
                </p>

                <p className="text-xs text-muted-foreground capitalize">
                  {role.toLowerCase()}
                </p>
              </div>
            </div>

            <Button
              variant="ghost"
              className="w-full justify-start text-slate-600 hover:bg-red-50 hover:text-red-600"
              disabled={isPending}
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-5 w-5" />

              {isPending ? "Logging out..." : "Logout"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
