"use client"

import { trpc } from "@/app/_trpc/client";
import { AppRouter } from "@/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, loggerLink, unstable_httpBatchStreamLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { PropsWithChildren, useState } from "react";


export const api = createTRPCReact<AppRouter>();



const Providers = (props: { children: React.ReactNode, cookies: string }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() => api.createClient({
      links: [
        loggerLink({
          enabled: (op) => 
            process.env.NODE_ENV === "development" || (op.direction === "down" && op.result instanceof Error),
        }),
        unstable_httpBatchStreamLink({
          url: "http://localhost:3000/api/trpc",
          headers() {
            return {
              cookie: props.cookies,
              "x-trpc-source": "react"
            }
          },
        }),
    ]
    }));

  return (
      <QueryClientProvider client={queryClient}>
        <api.Provider client={trpcClient} queryClient={queryClient} >
        {props.children}
        </api.Provider>
      </QueryClientProvider>
  )
}

export default Providers;