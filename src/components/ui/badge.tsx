import { cn } from "@/shared/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const badgeVariants = cva("text-white rounded-full font-semibold ", {
  variants: {
    colorScheme: {
      blue: "bg-blue-500",
      green: "bg-green-500",
      teal: "bg-teal-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
    },

    size: {
      sm: "px-4 py-2 text-sm",
      md: "py-3 px-4 lg:py-6 text-xs lg:text-xl",
      lg: "text-base",
    },
  },
  defaultVariants: {
    colorScheme: "blue",
    size: "md",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ colorScheme = "blue", children, size, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ colorScheme, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
