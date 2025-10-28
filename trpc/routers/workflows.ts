
import z from "zod";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/prisma";

export const workflowsRouter = createTRPCRouter({
    getWorkflows: protectedProcedure.query(({ ctx }) => prisma.workflow.findMany({ where: { createdBy: ctx.auth.user.id } })),
    createWorkflow: protectedProcedure.input(
        z.object({ name: z.string(), description: z.string().optional() }))
        .mutation(({ ctx, input }) =>
            prisma.workflow.create({
                data: { name: input.name, description: input.description, createdBy: ctx.auth.user.id }
            })),
});

export type WorkflowsRouter = typeof workflowsRouter;