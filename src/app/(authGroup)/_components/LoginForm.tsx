"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { LoginFormData, loginSchema } from "@/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { loginAction } from "../_action/login";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo");

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = useMutation({
    mutationFn: loginAction,
    onSuccess: (result) => {
      toast.success(result.message);

      if (redirectTo) {
        router.push(redirectTo);
        return;
      }

      switch (result.data.user.role) {
        case "ADMIN":
          router.push("/admin-dashboard");
          break;

        case "PROVIDER":
          router.push("/provider-dashboard");
          break;

        default:
          router.push("/dashboard");
      }
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    loginMutation.mutate(data);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="w-full max-w-md">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
              <Field data-invalid={!!form.formState.errors.email}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-11"
                  {...form.register("email")}
                  aria-invalid={!!form.formState.errors.email}
                />
                {form.formState.errors.email && (
                  <FieldError errors={[form.formState.errors.email]} />
                )}
              </Field>

              <Field data-invalid={!!form.formState.errors.password}>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-11"
                  {...form.register("password")}
                  aria-invalid={!!form.formState.errors.password}
                />
                {form.formState.errors.password && (
                  <FieldError errors={[form.formState.errors.password]} />
                )}
              </Field>
            </FieldGroup>

            <Button type="submit" disabled={loginMutation.isPending}>
              {loginMutation.isPending ? "Signing in..." : "Login"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register">
                <span className="font-medium text-foreground hover:underline cursor-pointer">
                  Register
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
