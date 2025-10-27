import { RegisterForm } from "@/components/auth/register-form";
import { requireLoggedOut } from "@/lib/auth-utils";

export default async function Page() {
  await requireLoggedOut();
  return <RegisterForm />;
}
