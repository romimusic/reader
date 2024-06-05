import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server';
import { NextRequest } from 'next/server';
import path from 'path';
import { env } from 'process';


const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => ({}),
    onError: 
      env.NODE_ENV === 'development'
        ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
        }
        : undefined,
  });

export { handler as GET, handler as POST };