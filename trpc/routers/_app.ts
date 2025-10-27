import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/prisma';
export const appRouter = createTRPCRouter({
    getMyUser: protectedProcedure
        .query(({ ctx }) => prisma.user.findFirst({ where: { id: ctx.auth.user.id } })),
});
// export type definition of API
export type AppRouter = typeof appRouter;