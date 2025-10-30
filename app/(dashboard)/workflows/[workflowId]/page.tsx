type PageProps = {
    params: Promise<{
        workflowId: string;
    }>;
};

export default async function Page({ params }: PageProps) {
    const { workflowId } = await params;
    return (
        <div>
            <h1>Workflow: {workflowId}</h1>
        </div>
    )
}