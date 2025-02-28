/**
 * This file contains the tRPC http response handler and context creation for Next.js
 */
import { createRouter } from '../trpc';
import { postsRouter } from './posts';
// Infers the context returned from `createContext`

/**
 * Create your application's root router
 * If you want to use SSG, you need export this
 * @link https://trpc.io/docs/ssg
 * @link https://trpc.io/docs/router
 */
export const appRouter = createRouter()
  /**
   * Add data transformers
   * @link https://trpc.io/docs/data-transformers
   */
  // .transformer(superjson)
  /**
   * Optionally do custom error (type safe!) formatting
   * @link https://trpc.io/docs/error-formatting
   */
  // .formatError(({ shape, error }) => { })
  .merge('posts.', postsRouter);

export type AppRouter = typeof appRouter;
