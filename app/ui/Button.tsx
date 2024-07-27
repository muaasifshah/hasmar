import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "@remix-run/react"; // Import RemixLink directly from Remix
import Icon from "./Icon/Icon";
import type { LinkProps } from "@remix-run/react"; // Import types from Remix
import { twMerge } from "tailwind-merge";

// Define button variants
const button = cva(
  "tracking-[0.04rem] relative inline-flex items-center justify-center leading-relaxed xl:text-[16px] h-12 md:h-[3.25rem] box-border rounded-full " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-medium",
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-brand",
          "text-white",
          "hover:brightness-[1.08]",
          "focus:brightness-[1.08]",
          "active:brightness-[1]",
          "transition-[filter]",
          "focus:ring-blue-200",
        ],
        secondary: [
          "bg-black",
          "text-white",
          "hover:brightness-[1.08]",
          "focus:brightness-[1.08]",
          "active:brightness-[1]",
          "transition-[filter]",
          "focus:ring-blue-200",
        ],
        white: [
          "bg-white",
          "text-gray-900",
          "hover:brightness-[1.08]",
          "focus:brightness-[1.08]",
          "active:brightness-[1]",
          "transition-[filter]",
          "focus:ring-blue-200",
        ],
        outline: [
          "border",
          "border-blue-brand",
          "bg-blue-brand/20",
          "text-gray-900",
          "hover:brightness-[1.08]",
          "focus:brightness-[1.08]",
          "active:brightness-[1]",
          "transition-[filter]",
          "focus:ring-blue-200",
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

// Define the props for the Button component
export interface ButtonProps
  extends Omit<LinkProps, "prefetch">, // Omit prefetch to redefine it with the correct type
    VariantProps<typeof button> {
  to: string; // Define `to` as a required string
  icon?: boolean;
  prefetch?: "intent" | "render";
  intent?: string;
}

export const Button: React.FC<ButtonProps> = ({
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
        icon ? "pl-[1.625rem] pr-16" : "pl-[1.625rem] md:px-8",
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
