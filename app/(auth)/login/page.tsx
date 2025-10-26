import { LoginForm } from "@/components/auth/login-form";
import { requireLoggedOut } from "@/lib/auth-utils";

export default async function Page() {
  await requireLoggedOut();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4">
        <LoginForm />
      </div>
    </div>
  );
}
