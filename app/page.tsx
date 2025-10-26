import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { ClientGreeting } from "./client-greeting";
import { Suspense } from "react";
export default async function Home() {
  prefetch(trpc.getUsers.queryOptions());
  return (
    <HydrateClient>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientGreeting />
      </Suspense>
    </HydrateClient>
  );
}
