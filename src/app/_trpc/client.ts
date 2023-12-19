import { AppRouter } from "@/server";
import { createTRPCReact } from "@trpc/react-query";
import { cache } from "react";


export const trpc = createTRPCReact<AppRouter>({});