"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { NavPendingContent } from "./NavPending";

/**
 * Link-first button. Base UI's <Button> enforces button semantics and must not
 * wrap an <a>, so anything that navigates is an anchor styled as a button.
 * Being inside <Link> is also what lets the label read the pending state and
 * show a spinner until the destination arrives.
 */
const linkButtonVariants = cva(
  "group/link relative inline-flex shrink-0 select-none items-center justify-center whitespace-nowrap font-medium outline-none transition-all focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px",
  {
    variants: {
      tone: {
        brand:
          "bg-brand text-brand-foreground shadow-lg shadow-brand/20 hover:bg-brand-hover hover:shadow-brand/30",
        outline:
          "border border-border bg-card text-foreground hover:border-brand-ink/30 hover:bg-muted",
        subtle: "bg-brand-ink/10 text-brand-ink hover:bg-brand-ink/15",
        inverse:
          "bg-white text-brand shadow-lg shadow-black/10 hover:bg-white/90",
        ghost: "text-foreground hover:bg-muted",
      },
      size: {
        sm: "h-10 rounded-xl px-4 text-sm",
        md: "h-11 rounded-xl px-5 text-sm",
        lg: "h-14 rounded-2xl px-7 text-base",
      },
    },
    defaultVariants: {
      tone: "brand",
      size: "md",
    },
  }
);

type LinkButtonProps = Omit<React.ComponentProps<typeof Link>, "children"> &
  VariantProps<typeof linkButtonVariants> & {
    children: React.ReactNode;
    /** Renders an inert element instead of a link (e.g. out-of-stock gear). */
    disabled?: boolean;
  };

export default function LinkButton({
  children,
  tone,
  size,
  disabled,
  className,
  ...props
}: LinkButtonProps) {
  const classes = cn(linkButtonVariants({ tone, size }), className);

  if (disabled) {
    return (
      <span
        aria-disabled
        className={cn(classes, "pointer-events-none gap-2 opacity-50")}
      >
        {children}
      </span>
    );
  }

  return (
    <Link {...props} className={classes}>
      <NavPendingContent>{children}</NavPendingContent>
    </Link>
  );
}

export { linkButtonVariants };
