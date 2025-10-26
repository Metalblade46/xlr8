"use client";
// <-- hooks can only be used in client components
import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
export function ClientGreeting() {
  const trpc = useTRPC();
  const greeting = useSuspenseQuery(trpc.getUsers.queryOptions());
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.map((user) => user.name).join(", ")}</div>;
}
