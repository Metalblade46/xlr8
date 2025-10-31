import { requireLoggedIn } from "@/lib/auth-utils";

type PageProps = {
  params: Promise<{
    executionId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { executionId } = await params;
  await requireLoggedIn();
  return (
    <div>
      <h1>Execution: {executionId}</h1>
    </div>
  );
}
