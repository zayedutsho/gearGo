"use client";

import { TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  title?: string;
  description?: string;
  onRetry?: () => void;
};

export default function ErrorState({
  title = "Something went wrong",
  description = "Please try again.",
  onRetry,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <TriangleAlert className="mb-5 h-12 w-12 text-red-500" />

      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-2 max-w-md text-muted-foreground">{description}</p>

      {onRetry && (
        <Button onClick={onRetry} className="mt-6">
          Try Again
        </Button>
      )}
    </div>
  );
}
