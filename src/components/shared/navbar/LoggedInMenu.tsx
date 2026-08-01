"use client";

import { ChevronDown, LayoutDashboard, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuLinkItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { logout } from "@/services/logout";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = {
  user: {
    id: string;
    name: string;
    email: string;
    image?: string;
    role: "ADMIN" | "PROVIDER" | "CUSTOMER";
  };
};

export default function LoggedInMenu({ user }: Props) {
  const router = useRouter();

  const dashboardRoute =
    user.role === "ADMIN"
      ? "/admin-dashboard"
      : user.role === "PROVIDER"
        ? "/provider-dashboard"
        : "/dashboard";

  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const handleUserMenuAction = async (action: string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none">
        <Avatar className="h-10 w-10">
          <AvatarImage src={user.image} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>

        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-64 rounded-xl">
        <DropdownMenuLabel>
          <p className="font-semibold">{user.name}</p>
          <p className="text-xs text-muted-foreground">{user.email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuLinkItem href={dashboardRoute}>
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </DropdownMenuLinkItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          className="cursor-pointer"
          onClick={async () => {
            await handleUserMenuAction("logout");
          }}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
