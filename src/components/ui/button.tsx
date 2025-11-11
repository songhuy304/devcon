"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";
import { DisabledClasses } from "@/components/ui/_variables";

const buttonVariants = cva(
  "inline-flex items-center transition-all duration-200 ease-in-out justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",

  {
    variants: {
      variant: {
        solid: "",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      colorStyle: {
        default: "",
        primary: "bg-blue-500 text-white hover:bg-blue-400",
        purple: "bg-purple text-white hover:bg-purple/90",
        black: "text-white bg-[#454545] hover:bg-[#454545]/80",
        grey: "bg-[#9FA1B7] text-white hover:bg-grey-400",
        green: "bg-[#88c43f] text-white hover:bg-[#88c43f]/90",
      },
      size: {
        default:
          "h-[38px] lg:h-11 px-6 py-[10px] lg:py-[14px] text-xs lg:text-base",
        sm: "h-7 px-3 py-1 text-xs md:text-sm",
        lg: "min-h-11 px-4 lg:px-8 text-sm lg:text-base",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        full: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        colorStyle: "primary",
        class:
          "bg-transparent text-primary hover:bg-primary/10 hover:text-primary",
      },

      {
        variant: "outline",
        colorStyle: "grey",
        class:
          "bg-transparent text-[#9FA1B7] border-[#9FA1B7] hover:bg-[#9FA1B7]/10",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "default",
      radius: "full",
      colorStyle: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, colorStyle, size, asChild = false, ...props },
    ref
  ) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, colorStyle }),
          DisabledClasses
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
