import { LoginForm } from "@/components/auth/login-form";
import { requireLoggedOut } from "@/lib/auth-utils";

export default async function Page() {
  await requireLoggedOut();
  return <LoginForm />;
}
