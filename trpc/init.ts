import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { cache } from 'react';
import { initTRPC, TRPCError } from '@trpc/server';
export const createContext = cache(async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return { auth: session };
});
export type Context = Awaited<ReturnType<typeof createContext>>;

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create({
    /**
     * @see https://trpc.io/docs/server/data-transformers
     */
    // transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
    if (!ctx.auth?.session.token) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return next({ ctx: { ...ctx, auth: ctx.auth } });
});