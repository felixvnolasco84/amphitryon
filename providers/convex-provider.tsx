"use client";

import { ConvexProvider } from "convex/react";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import Spinner from "@/components/spinner";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
};
