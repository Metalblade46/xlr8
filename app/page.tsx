import LogoutButton from "./logout-button";
import { requireLoggedIn } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { notFound } from "next/navigation";

export default async function Home() {
  const session = await requireLoggedIn();
  if (!session) {
    return notFound();
  }
  const user = await caller.getMyUser();

  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
      <LogoutButton />
    </div>
  );
}
