import {
  ClipboardList,
  LayoutDashboard,
  Package,
  User,
  Users,
} from "lucide-react";

export const dashboardNavItems = {
  CUSTOMER: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Rentals",
      href: "/dashboard/rentals",
      icon: ClipboardList,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ],

  PROVIDER: [
    {
      title: "Dashboard",
      href: "/provider-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Gears",
      href: "/provider-dashboard/gears",
      icon: Package,
    },
    {
      title: "Orders",
      href: "/provider-dashboard/orders",
      icon: ClipboardList,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
  ],

  ADMIN: [
    {
      title: "Dashboard",
      href: "/admin-dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/admin-dashboard/users",
      icon: Users,
    },
    {
      title: "Rentals",
      href: "/admin-dashboard/rentals",
      icon: ClipboardList,
    },
  ],
};
