"use client";

import { useActionState, useEffect, useRef } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { toast } from "sonner";

import { loginAction } from "../_action/login";

import DemoCredentials, { DEMO_PASSWORD } from "./DemoCredentials";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail, Tent } from "lucide-react";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const formRef = useRef<HTMLFormElement>(null);

  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo),
    null,
  );

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Action completed successfully");
    } else {
      toast.error(state.message || "Something went wrong");
    }
  }, [state]);

  // Writes straight to the uncontrolled inputs so the form stays untouched.
  const fillDemoAccount = (email: string) => {
    const form = formRef.current;

    if (!form) return;

    const emailField = form.elements.namedItem("email");
    const passwordField = form.elements.namedItem("password");

    if (emailField instanceof HTMLInputElement) {
      emailField.value = email;
    }

    if (passwordField instanceof HTMLInputElement) {
      passwordField.value = DEMO_PASSWORD;
    }

    toast.success("Demo credentials filled. Select Sign in to continue.");
  };

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <Link href="/" className="mb-8 inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
          <Tent aria-hidden className="h-5 w-5 text-emerald-700" />
        </div>
        <span className="text-2xl font-bold">GearUp</span>
      </Link>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Welcome back</h1>
        <p className="text-muted-foreground leading-7">
          Sign in to continue your next adventure.
        </p>
      </div>

      {/* Form */}
      <form ref={formRef} action={action} aria-busy={pending}>
        <FieldGroup className="mt-8 gap-6">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="login-email">Email</FieldLabel>
            <div className="relative mt-2">
              <Mail aria-hidden className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                placeholder="john@example.com"
                className="h-14 rounded-2xl border-input bg-muted/40 pl-12 transition-all focus-visible:bg-background"
              />
            </div>
          </Field>

          {/* Password */}
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel htmlFor="login-password">Password</FieldLabel>
            </div>
            <div className="relative mt-2">
              <LockKeyhole aria-hidden className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="password"
                id="login-password"
                name="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="h-14 rounded-2xl border-input bg-muted/40 pl-12 transition-all focus-visible:bg-background"
              />
            </div>
          </Field>
        </FieldGroup>

        <DemoCredentials onSelect={fillDemoAccount} />

        <Button
          type="submit"
          disabled={pending}
          className="mt-8 h-14 w-full rounded-2xl bg-brand text-base font-semibold text-brand-foreground transition-colors duration-200 active:translate-y-px motion-reduce:transition-none hover:bg-brand-hover hover:shadow-lg disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? "Signing in..." : "Sign in"}
        </Button>
        <p role="status" aria-live="polite" className="mt-4 text-sm leading-6 text-muted-foreground">
          {pending ? "Signing in, please wait..." : state?.message}
        </p>
      </form>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        New to GearUp?{" "}
        <Link href="/register" className="rounded-sm font-semibold text-brand-ink underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-ink">
          Create an account →
        </Link>
      </p>
    </div>
  );
}
