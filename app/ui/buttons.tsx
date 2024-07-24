import * as React from "react";
import { Link } from "./link";

export const outlinePrimaryButtonLinkClass =
  "inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-9 md:h-11 t box-border px-8 rounded bg-transparent "+
  "text-white border-current hover:border-blue-brand focus:outline-none focus:ring-2 focus:ring-offset-2 "+
  "focus:ring-offset-transparent focus:ring-blue-200 focus:ring-opacity-80 font-semibold border-2";

export const outlineSecondaryButtonLinkClass =
  "inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-9 md:h-11 t box-border px-8 rounded bg-transparent "+
  "text-white border-current hover:border-pink-brand focus:outline-none focus:ring-2 focus:ring-offset-2 "+
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
  "inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-9 md:h-11 box-border px-5 md:px-8 rounded-full "+
  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-semibold";

export const primaryButtonLinkClass = `${baseButtonLinkClass} bg-blue-brand text-white 
hover:brightness-[1.08] focus:brightness-[1.08] active:brightness-[1] transition-[filter] 
focus:ring-blue-200`;

export const secondaryButtonLinkClass = `${baseButtonLinkClass} bg-black text-white 
hover:brightness-[1.08] focus:brightness-[1.08] active:brightness-[1] transition-[filter] 
focus:ring-blue-200`;

export function PrimaryButtonLink({
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
      x-comp="PrimaryButtonLink"
      to={to}
      prefetch={prefetch}
      className={`${primaryButtonLinkClass} ${className}`}
      children={children}
    />
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
        "box-border inline-flex items-center justify-center rounded bg-blue-brand px-8 py-4 font-semibold text-white hover:brightness-[1.08] focus:outline-none focus:ring-2 focus:brightness-[1.08] active:brightness-[1] focus:ring-offset-2 focus:ring-offset-transparent transition-[filter] " +
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
