import * as React from "react";
import { Link } from "./Link";
import Icon from "./Icon/Icon";

export const outlinePrimaryButtonLinkClass =
  "inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-9 md:h-11 t box-border px-8 rounded bg-transparent " +
  "text-white border-current hover:border-blue-brand focus:outline-none focus:ring-2 focus:ring-offset-2 " +
  "focus:ring-offset-transparent focus:ring-blue-200 focus:ring-opacity-80 font-semibold border-2";

export const outlineSecondaryButtonLinkClass =
  "inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-9 md:h-11 t box-border px-8 rounded bg-transparent " +
  "text-white border-current hover:border-pink-brand focus:outline-none focus:ring-2 focus:ring-offset-2 " +
  "focus:ring-offset-transparent focus:ring-blue-200 focus:ring-opacity-80 font-semibold border-2";

export function OutlineButtonLink({
  to,
  children,
  className,
  prefetch = "intent",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: "intent" | "render";
}) {
  return (
    <Link
      to={to}
      prefetch={prefetch}
      x-comp="OutlineButtonLink"
      className={`${outlinePrimaryButtonLinkClass} ${className}`}
      children={children}
    />
  );
}

export const baseButtonLinkClass =
  "relative inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-12 md:h-[3.25rem] box-border rounded-full " +
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-semibold";

export const primaryButtonLinkClass = `${baseButtonLinkClass} bg-blue-brand text-white 
hover:brightness-[1.08] focus:brightness-[1.08] active:brightness-[1] transition-[filter] 
focus:ring-blue-200`;

export const secondaryButtonLinkClass = `${baseButtonLinkClass} bg-black text-white 
hover:brightness-[1.08] focus:brightness-[1.08] active:brightness-[1] transition-[filter] 
focus:ring-blue-200`;

export const whiteButtonLinkClass = `${baseButtonLinkClass} bg-white text-gray-900 
hover:brightness-[1.08] focus:brightness-[1.08] active:brightness-[1] transition-[filter] 
focus:ring-blue-200`;

export function PrimaryButtonLink({
  to,
  children,
  className,
  icon,
  prefetch = "intent",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  prefetch?: "intent" | "render";
}) {
  return (
    <Link
      x-comp="PrimaryButtonLink"
      to={to}
      prefetch={prefetch}
      className={`${primaryButtonLinkClass} ${className} ${icon ? "pl-[1.625rem] pr-16" : "px-pl-[1.625rem] md:px-8"}`}
    >
      {children}{" "}
      {icon && (
        <Icon
          id="arrow-long-right"
          width={40}
          height={40}
          className="absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-white bg-opacity-35 fill-white p-[0.6rem]"
        />
      )}
    </Link>
  );
}

export function WhiteButtonLink({
  to,
  children,
  className,
  icon,
  prefetch = "intent",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  prefetch?: "intent" | "render";
}) {
  return (
    <Link
      x-comp="PrimaryButtonLink"
      to={to}
      prefetch={prefetch}
      className={`${whiteButtonLinkClass} ${className} ${icon ? "pl-6 pr-16" : "px-6 md:px-8"}`}
    >
      {children}{" "}
      {icon && (
        <Icon
          id="arrow-long-right"
          width={50}
          height={50}
          className="absolute right-0 m-[0.438rem] h-[2.5rem] w-[2.5rem] rounded-full bg-blue-brand fill-white p-[0.6rem]"
        />
      )}
    </Link>
  );
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithRef<"button">
>(({ className, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      x-comp="Button"
      className={
        "box-border inline-flex items-center justify-center rounded bg-blue-brand px-8 py-4 font-semibold text-white transition-[filter] hover:brightness-[1.08] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:brightness-[1.08] active:brightness-[1] " +
        className
      }
      type={props.type}
      {...props}
    >
      {children}
    </button>
  );
});
Button.displayName = "Button";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input">
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      x-comp="Input"
      className={
        "box-border inline-block rounded border border-solid border-gray-300 bg-white px-5 py-4 text-gray-900 dark:border-none dark:bg-gray-800 dark:text-white " +
        className
      }
      title={props.title}
      {...props}
    />
  );
});
Input.displayName = "Input";
