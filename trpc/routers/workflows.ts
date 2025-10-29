
import z from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";
import { inngest } from "@/inngest/client";

export const workflowsRouter = createTRPCRouter({
    getWorkflows: protectedProcedure.query(({ ctx }) => prisma.workflow.findMany({ where: { createdBy: ctx.auth.user.id } })),
    createWorkflow: protectedProcedure.input(
        z.object({ name: z.string(), description: z.string().optional() }))
        .mutation(({ ctx, input }) =>
            prisma.workflow.create({
                data: { name: input.name, description: input.description, createdBy: ctx.auth.user.id }
            })),
    testAi: protectedProcedure.mutation(async ({ ctx }) => {
        await inngest.send({
            name: "test/ai",
        })
        return { message: "AI test sent" }
    }),
});

export type WorkflowsRouter = typeof workflowsRouter;