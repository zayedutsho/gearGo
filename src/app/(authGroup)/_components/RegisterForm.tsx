"use client";

import { useActionState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { registerAction } from "../_action/register";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  const router = useRouter();

  /**
   * useActionState
   * ----------------
   * state   -> response from server action
   * action  -> passed directly to <form action={}>
   * pending -> form submission state
   */
  const [state, action, pending] = useActionState(registerAction, null);

  /**
   * Runs whenever the server action returns.
   */
  useEffect(() => {
    if (!state) return;

    // Registration failed
    if (!state.success) {
      toast.error(state.message);
      return;
    }

    // Registration succeeded
    toast.success(state.message);

    /**
     * Redirect user to login page.
     */
    router.push("/login");
  }, [state, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <form
          action={action}
          className="space-y-6 rounded-2xl border bg-background p-6 shadow-sm sm:p-8"
        >
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create your account
            </h1>

            <p className="text-sm text-muted-foreground">
              Sign up to start using GearUp.
            </p>
          </div>

          <FieldGroup className="space-y-5">
            {/* ---------------- Name ---------------- */}

            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>

              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                className="h-11"
                required
              />

              <FieldError errors={[]} />
            </Field>

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

            {/* ---------------- Confirm Password ---------------- */}

            <Field>
              <FieldLabel htmlFor="confirmPassword">
                Confirm Password
              </FieldLabel>

              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                className="h-11"
                required
              />

              <FieldError errors={[]} />
            </Field>
          </FieldGroup>

          <Button type="submit" disabled={pending} className="w-full">
            {pending ? "Registering..." : "Register"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
