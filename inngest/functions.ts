import { inngest } from "./client";
import { createAgent, gemini } from '@inngest/agent-kit';
import * as Sentry from "@sentry/nextjs";

export const helloWorld = inngest.createFunction(
    { id: "hello-world" },
    { event: "test/hello.world" },
    async ({ event, step }) => {
        await step.sleep("wait-a-moment", "1s");
        return { message: `Hello ${event.data.email}!` };
    },
);

export const testAi = inngest.createFunction(
    { id: "test-ai" },
    { event: "test/ai" },
    async ({ step }) => {
        const mathsAgent = createAgent({
            name: "Maths Agent",
            system: " You are a maths agent that can solve maths problems.",
            model: gemini({
                model: "gemini-2.5-flash",
                apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
            }),
        })
        await step.sleep("wait-a-moment", "5s");
        console.log('User triggered test log', { log_source: 'sentry_test' })
        const response = await Sentry.startSpan({
            op: "maths-agent",
            name: "gemini-2.5-flash",
            attributes: {
                "agent": "maths-agent",
                "model": "gemini-2.5-flash",
            },
        }, async (span) => {
            const response = await mathsAgent.run("What is 2 + 2?");
            span.setAttribute("response", JSON.stringify(response));
            return response;
        });
        // const response = await mathsAgent.run("What is 2 + 2?");
        return response;
    }
)