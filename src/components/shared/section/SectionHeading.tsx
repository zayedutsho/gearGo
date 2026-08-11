import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The landing page's one heading rhythm: a ruled eyebrow, a tight display
 * title, then a calm supporting line. Shared so every section repeats the same
 * motif instead of drifting.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: Props) {
  const centered = align === "center";
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          centered && "justify-center"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "h-px w-8",
            dark ? "bg-brand-accent/50" : "bg-brand-ink/30"
          )}
        />

        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            dark ? "text-brand-accent" : "text-brand-ink"
          )}
        >
          {eyebrow}
        </span>

        <span
          aria-hidden
          className={cn(
            "h-px w-8",
            centered ? "block" : "hidden",
            dark ? "bg-brand-accent/50" : "bg-brand-ink/30"
          )}
        />
      </div>

      <h2
        className={cn(
          "mt-5 text-pretty text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-pretty text-base leading-7 sm:text-lg sm:leading-8",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
