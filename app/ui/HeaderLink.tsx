import { NavLink } from "@remix-run/react";
import cx from "clsx";

export default function HeaderLink({
  to,
  children,
  className = "",
  prefetch = "none",
  target,
  rel,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: "none" | "intent";
  target?: string;
  rel?: string;
}) {
  return (
    <NavLink
      prefetch={prefetch}
      x-comp="HeaderLink"
      className={cx(
        "flex items-center justify-between border-b border-gray-100 px-8 py-2 leading-relaxed text-gray-900 transition last:mr-0 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-blue-brand md:border-0 md:p-0 md:hover:text-blue-brand md:dark:hover:bg-transparent",
        className,
      )}
      to={to}
      target={target}
      rel={rel}
      children={children}
    />
  );
}
