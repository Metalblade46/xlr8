import { requireLoggedIn } from "@/lib/auth-utils";

type PageProps = {
  params: Promise<{
    credentialId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { credentialId } = await params;
  await requireLoggedIn();
  return (
    <div>
      <h1>Credential: {credentialId}</h1>
    </div>
  );
}
