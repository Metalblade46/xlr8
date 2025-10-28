import LogoutButton from "../components/auth/logout-button";
import { requireLoggedIn } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { notFound } from "next/navigation";

export default async function Home() {
  const session = await requireLoggedIn();
  if (!session) {
    return notFound();
  }
  const workflows = await caller.getWorkflows();

  return (
    <div>
      <h1>{JSON.stringify(workflows)}</h1>
      <LogoutButton />
    </div>
  );
}
