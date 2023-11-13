import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <main className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className) }>
      {children}
    </main>
  )
}

export default MaxWidthWrapper;