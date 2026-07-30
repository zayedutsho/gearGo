"use client";

import { ReactNode } from "react";

import QueryProvider from "./query-provider";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return <QueryProvider>{children}</QueryProvider>;
}
