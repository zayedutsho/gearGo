"use client";

import { ChevronDown, LogIn, UserPlus } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLinkItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LoggedOutMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-full outline-none">
        <Avatar className="h-10 w-10">
          <AvatarFallback>G</AvatarFallback>
        </Avatar>

        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 rounded-xl">
        <DropdownMenuLinkItem href="/login">
          <LogIn className="mr-2 h-4 w-4" />
          Login
        </DropdownMenuLinkItem>

        <DropdownMenuLinkItem href="/register">
          <UserPlus className="mr-2 h-4 w-4" />
          Create Account
        </DropdownMenuLinkItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
