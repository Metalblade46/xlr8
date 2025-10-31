import { requireLoggedIn } from "@/lib/auth-utils";

export default async function Page() {
  await requireLoggedIn();
  return (
    <div>
      <h1>Credentials</h1>
    </div>
  );
}
