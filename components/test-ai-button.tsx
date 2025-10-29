"use client";

import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { toast } from "sonner";

export default function TestAIButton() {
  const trpc = useTRPC();
  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("AI test sent");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }),
  );
  return (
    <Button
      onClick={() => {
        testAi.mutate();
      }}
      disabled={testAi.isPending}
    >
      Test AI
    </Button>
  );
}
