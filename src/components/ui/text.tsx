import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils";

const textVariants = cva("inline-flex items-center gap-2", {
  variants: {
    variant: {
      default: "text-black",
      white: "text-white",
      muted: "text-muted-foreground",
      primary: "text-primary",
      destructive: "text-destructive",
      success: "text-green-600 dark:text-green-500",
    },
    size: {
      title: "text-2xl",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-sm lg:text-base",
      lg: "text-base lg:text-lg",
      xl: "text-lg lg:text-xl",
      "2xl": "text-2xl ",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    weight: "normal",
  },
  compoundVariants: [
    {
      size: "title",
      weight: "normal",
      className: "font-semibold leading-[120%] mb-6",
    },
  ],
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "span" | "p";
  startIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  endIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
  iconClassName?: string;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      as = "p",
      variant,
      size,
      weight,
      startIcon: StartIcon,
      endIcon: EndIcon,
      iconClassName,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, size, weight }), className)}
        {...props}
      >
        {StartIcon && <StartIcon className={cn("h-4 w-4", iconClassName)} />}
        {children}
        {EndIcon && <EndIcon className={cn("h-4 w-4", iconClassName)} />}
      </Component>
    );
  }
);
Text.displayName = "Text";

export { Text, textVariants };
