"use client";

import { KeyRound, ShieldCheck, Store, User } from "lucide-react";

export const DEMO_PASSWORD = "password123";

export const DEMO_ACCOUNTS = [
  { role: "Admin", email: "zayed@gmail.com", icon: ShieldCheck },
  { role: "Provider", email: "fahim@gmail.com", icon: Store },
  { role: "Customer", email: "zayed9@gmail.com", icon: User },
];

type Props = {
  onSelect: (email: string) => void;
};

/**
 * Reviewer shortcut: one click fills the sign-in form with a seeded account for
 * each role, so the dashboards can be explored without asking for credentials.
 */
export default function DemoCredentials({ onSelect }: Props) {
  return (
    <div className="mt-8 rounded-2xl border border-[#123524]/15 bg-[#123524]/[0.04] p-5">
      <div className="flex flex-wrap items-center gap-2">
        <KeyRound className="h-4 w-4 text-[#123524]" />

        <p className="text-sm font-semibold text-[#123524]">Demo accounts</p>

        <span className="ml-auto rounded-full bg-white px-2.5 py-1 font-mono text-xs text-slate-600 ring-1 ring-slate-200">
          {DEMO_PASSWORD}
        </span>
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        Pick a role to fill the form instantly, then press Continue.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {DEMO_ACCOUNTS.map((account) => {
          const Icon = account.icon;

          return (
            <button
              key={account.email}
              type="button"
              onClick={() => onSelect(account.email)}
              className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left outline-none transition hover:border-[#123524]/30 hover:shadow-sm focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-900">
                <Icon className="h-3.5 w-3.5 text-[#123524]" />
                {account.role}
              </span>

              <span className="truncate text-xs text-slate-500">
                {account.email}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
