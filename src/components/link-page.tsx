import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface LinkPageProps extends LinkProps {
  children: ReactNode;
}

export function LinkPage({ children, ...rest }: LinkPageProps) {
  return (
    <Link
      className="text-base text-BASIC_ONYX dark:text-BASIC_LIGHT_GRAY"
      {...rest}
    >
      {children}
    </Link>
  );
}
