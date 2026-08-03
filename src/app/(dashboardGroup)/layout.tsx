import { ReactNode } from "react";

import { getMe } from "@/services/getMe";
import DashboardHeader from "./_components/DashboardHeader";
import DashboardSidebar from "./_components/DashboardSidebar";

type Props = {
  children: ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
  const me = await getMe();

  const user = me?.data?.profile ?? null;

  return (
    <div className="flex min-h-screen bg-[#F8FAF7]">
      {/* Desktop */}
      <div className="hidden lg:block">
        <DashboardSidebar user={user} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Mobile */}
        <DashboardHeader user={user} />

        <main className="flex-1 overflow-y-auto px-4 py-5 lg:px-8 lg:py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
