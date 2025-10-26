"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function LogoutButton() {
  const router = useRouter();
  const onSubmit = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
        onError: (error) => {
          toast.error(error.error.message);
        },
      },
    });
  };
  return <Button onClick={onSubmit}>Sign Out</Button>;
}
