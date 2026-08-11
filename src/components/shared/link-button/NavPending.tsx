"use client";

import { Loader2 } from "lucide-react";
import { useLinkStatus } from "next/link";

import { cn } from "@/lib/utils";

/**
 * Fades the label out and centres a spinner over it while the parent <Link>
 * transition is in flight, so a click always produces feedback instead of
 * looking stuck.
 *
 * The spinner is absolutely positioned and the label keeps its box, so nothing
 * reflows and a very fast navigation only reads as a soft flicker.
 *
 * Must be rendered inside a <Link> — `useLinkStatus` reads from its context.
 */
export function NavPendingContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { pending } = useLinkStatus();

  return (
    <>
      <span
        className={cn(
          "inline-flex items-center justify-center gap-2 transition-opacity duration-200",
          pending ? "opacity-0" : "opacity-100",
          className
        )}
      >
        {children}
      </span>

      <Loader2
        aria-hidden
        className={cn(
          "absolute left-1/2 top-1/2 size-[1.15em] -translate-x-1/2 -translate-y-1/2 animate-spin transition-opacity duration-200",
          pending ? "opacity-100" : "opacity-0"
        )}
      />

      {pending ? (
        <span role="status" className="sr-only">
          Loading
        </span>
      ) : null}
    </>
  );
}

/**
 * Full-bleed tint + centred spinner for links whose entire surface is
 * clickable (cards). Sits inside a `relative` parent and never intercepts
 * pointer events.
 */
export function NavPendingVeil({ className }: { className?: string }) {
  const { pending } = useLinkStatus();

  return (
    <>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-background/55 backdrop-blur-[1px] transition-opacity duration-200",
          pending ? "opacity-100" : "opacity-0",
          className
        )}
      >
        <Loader2 className="size-7 animate-spin text-brand-ink" />
      </span>

      {pending ? (
        <span role="status" className="sr-only">
          Loading
        </span>
      ) : null}
    </>
  );
}
