type PageProps = {
  params: Promise<{
    credentialId: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { credentialId } = await params;
  return (
    <div>
      <h1>Credential: {credentialId}</h1>
    </div>
  )
}
