type PageProps = {
    params: Promise<{
        executionId: string;
    }>;
};

export default async function Page({ params }: PageProps) {
    const { executionId } = await params;
    return (
        <div>
            <h1>Execution: {executionId}</h1>
        </div>
    )
}