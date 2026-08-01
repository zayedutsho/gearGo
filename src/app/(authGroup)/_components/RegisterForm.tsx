"use client";

import { useActionState, useEffect } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { registerAction } from "../_action/register";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail, Tent } from "lucide-react";

const RegisterForm = () => {
  const router = useRouter();

  const [state, action, pending] = useActionState(registerAction, null);

  useEffect(() => {
    if (!state) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    toast.success(state.message);
    router.push("/login");
  }, [state, router]);

  return (
    <div className="w-full max-w-md">
      {/* Logo */}
      <Link href="/" className="mb-14 inline-flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
          <Tent className="h-5 w-5 text-emerald-700" />
        </div>
        <span className="text-2xl font-bold">GearUp</span>
      </Link>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          Create your account
        </h1>
        <p className="text-muted-foreground leading-7">
          Sign up to start using GearUp.
        </p>
      </div>

      {/* Form */}
      <form action={action}>
        <FieldGroup className="mt-10 space-y-6">
          {/* Name */}
          <Field>
            <FieldLabel>Name</FieldLabel>
            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="h-14 rounded-2xl border-slate-200 bg-slate-50 pl-12 transition-all focus-visible:bg-white"
                required
              />
            </div>
          </Field>

          {/* Email */}
          <Field>
            <FieldLabel>Email</FieldLabel>
            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                name="email"
                type="email"
                placeholder="john@example.com"
                className="h-14 rounded-2xl border-slate-200 bg-slate-50 pl-12 transition-all focus-visible:bg-white"
                required
              />
            </div>
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel>Password</FieldLabel>
            <div className="relative mt-2">
              <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                className="h-14 rounded-2xl border-slate-200 bg-slate-50 pl-12 transition-all focus-visible:bg-white"
                required
              />
            </div>
          </Field>

          {/* Confirm Password */}
          <Field>
            <FieldLabel>Confirm Password</FieldLabel>
            <div className="relative mt-2">
              <LockKeyhole className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter your password"
                className="h-14 rounded-2xl border-slate-200 bg-slate-50 pl-12 transition-all focus-visible:bg-white"
                required
              />
            </div>
          </Field>
        </FieldGroup>

        <Button
          type="submit"
          disabled={pending}
          className="mt-8 h-14 w-full rounded-2xl bg-[#123524] text-base font-semibold transition-all duration-200 hover:bg-[#1A4D3A] hover:shadow-lg disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? "Registering..." : "Register"}
        </Button>
      </form>

      <p className="mt-10 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[#123524]">
          Login →
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
