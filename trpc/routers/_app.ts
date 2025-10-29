import { mergeRouters } from '../init';
import { workflowsRouter } from './workflows';
export const appRouter = mergeRouters(
    workflowsRouter,
);

export type AppRouter = typeof appRouter;