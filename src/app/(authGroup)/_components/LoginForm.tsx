"use client";

import { useActionState, useEffect } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { toast } from "sonner";

import { loginAction } from "../_action/login";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  /**
   * Read redirect URL added
   * by middleware.
   */
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  /**
   * useActionState
   * ----------------
   * state   -> response from server action
   * action  -> passed directly to <form action={}>
   * pending -> submission state
   */
  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo),
    null,
  );

  /**
   * Only failed logins reach here.
   *
   * Successful login redirects
   * from the server action.
   */
  useEffect(() => {
    if (!state || state.success) return;

    toast.error(state.message || "Login failed");
  }, [state]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <form
          action={action}
          className="space-y-6 rounded-2xl border bg-background p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>

            <p className="text-sm text-muted-foreground">
              Sign in to your GearUp account.
            </p>
          </div>

          <FieldGroup className="space-y-5">
            {/* ---------------- Email ---------------- */}

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="h-11"
                required
              />

              <FieldError errors={[]} />
            </Field>

            {/* ---------------- Password ---------------- */}

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="h-11"
                required
              />

              <FieldError errors={[]} />
            </Field>
          </FieldGroup>

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Signing in..." : "Login"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Dont have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-foreground hover:underline"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
