import LogoutButton from "./logout-button";
import { requireLoggedIn } from "@/lib/auth-utils";
import { notFound } from "next/navigation";

export default async function Home() {
  const session = await requireLoggedIn();
  if (!session) {
    return notFound();
  }
  return (
    <div>
      <h1>{session?.user.name}</h1>
      <LogoutButton />
    </div>
  );
}
