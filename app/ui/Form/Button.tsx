import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@remix-run/react"; // Import RemixLink directly from Remix
import Icon from "../Icon/Icon";
import type { LinkProps } from "@remix-run/react"; // Import types from Remix
import { twMerge } from "tailwind-merge";

// Define button variants
const button = cva(
  "tracking-[0.04rem] leading-none relative inline-flex items-center justify-center leading-relaxed xl:text-[1.125rem] h-12 md:h-[3.25rem] box-border rounded-full " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-medium duration-300 hover:translate-y-[-2px] " +
    "focus:translate-y-[-2px] hover:shadow-lg focus:shadow-lg transition-all hover:brightness-[1.08] focus:brightness-[1.08] active:brightness-[1] focus:ring-blue-200 max-xs:text-[14px] max-xs:pr-[3.45rem]",
  {
    variants: {
      variant: {
        primary: ["bg-blue-brand", "text-white"],
        secondary: ["bg-black", "text-white"],
        white: ["bg-white", "text-gray-900"],
        outline: [
          "border",
          "border-blue-brand",
          "bg-blue-brand/10",
          "text-gray-900",
        ],
      },
      size: {
        default: ["text-lg", "py-3", "px-6"],
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
    },
    compoundVariants: [
      // { variant: "primary", size: "medium", class: "uppercase" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

// Define the props for the LinkButton component
export interface LinkButtonProps
  extends Omit<LinkProps, "prefetch">, // Omit prefetch to redefine it with the correct type
    VariantProps<typeof button> {
  to: string; // Define `to` as a required string
  icon?: boolean;
  prefetch?: "intent" | "render";
  intent?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  icon,
  prefetch = "intent",
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <Link
      to={to}
      prefetch={prefetch}
      className={twMerge(
        button({ variant, size, className }),
        icon ? "pl-[1.625rem] pr-[3.7rem]" : "pl-[1.625rem] md:px-8",
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

// Define the type for the icon prop
interface ButtonProps
  extends React.ComponentPropsWithRef<"button">,
    VariantProps<typeof button> {
  icon?: React.ReactNode; // Optional icon prop
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, icon, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        x-comp="Button"
        className={twMerge(
          button({ variant, size, className }),
          icon ? "pl-[1.625rem] pr-[3.7rem]" : "pl-[1.625rem] md:px-8",
        )}
        type={props.type}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";
