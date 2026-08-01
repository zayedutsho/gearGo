"use client";

import ErrorState from "@/components/shared/error/ErrorState";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <ErrorState description="An unexpected error occurred." onRetry={reset} />
  );
}
