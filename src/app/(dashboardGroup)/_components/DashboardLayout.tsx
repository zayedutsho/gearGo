import { ReactNode } from "react";

import DashboardSidebar from "./DashboardSidebar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-[#F8FAF7]">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}
