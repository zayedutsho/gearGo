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
    <div className="mt-8 rounded-2xl border border-brand-ink/15 bg-brand-ink/5 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <KeyRound className="h-4 w-4 text-brand-ink" />

        <p className="text-sm font-semibold text-brand-ink">Demo accounts</p>

        <span className="ml-auto rounded-full bg-card px-2.5 py-1 font-mono text-xs text-muted-foreground ring-1 ring-border">
          {DEMO_PASSWORD}
        </span>
      </div>

      <p className="mt-2 text-xs leading-5 text-muted-foreground">
        Pick a role to fill the form instantly, then select Sign in.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {DEMO_ACCOUNTS.map((account) => {
          const Icon = account.icon;

          return (
            <button
              key={account.email}
              type="button"
              onClick={() => onSelect(account.email)}
              className="flex flex-col gap-1 rounded-xl border border-border bg-card px-3 py-2.5 text-left outline-none transition hover:border-brand-ink/30 hover:shadow-sm focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <Icon className="h-3.5 w-3.5 text-brand-ink" />
                {account.role}
              </span>

              <span className="truncate text-xs text-muted-foreground">
                {account.email}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
