import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";
import { GapClasses } from "@/components/ui/_variables";

const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      7: "grid-cols-7",
      8: "grid-cols-8",
      9: "grid-cols-9",
      10: "grid-cols-10",
      11: "grid-cols-11",
      12: "grid-cols-12",
      none: "grid-cols-none",
    },
    rows: {
      1: "grid-rows-1",
      2: "grid-rows-2",
      3: "grid-rows-3",
      4: "grid-rows-4",
      5: "grid-rows-5",
      6: "grid-rows-6",
      auto: "grid-rows-auto",
      none: "grid-rows-none",
    },
    flow: {
      row: "grid-flow-row",
      col: "grid-flow-col",
      dense: "grid-flow-dense",
      "row-dense": "grid-flow-row-dense",
      "col-dense": "grid-flow-col-dense",
    },
    placeItems: {
      start: "place-items-start",
      center: "place-items-center",
      end: "place-items-end",
      stretch: "place-items-stretch",
    },
    placeContent: {
      start: "place-content-start",
      center: "place-content-center",
      end: "place-content-end",
      between: "place-content-between",
      around: "place-content-around",
      evenly: "place-content-evenly",
      stretch: "place-content-stretch",
    },
    gap: GapClasses,
    autoColumns: {
      auto: "auto-cols-auto",
      min: "auto-cols-min",
      max: "auto-cols-max",
      fr: "auto-cols-fr",
    },
    autoRows: {
      auto: "auto-rows-auto",
      min: "auto-rows-min",
      max: "auto-rows-max",
      fr: "auto-rows-fr",
    },
  },
  defaultVariants: {
    cols: 1,
    placeItems: "start",
    placeContent: "start",
    flow: "row",
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  fullHeight?: boolean;
  fullWidth?: boolean;
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, fullHeight, fullWidth, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          gridVariants(props),
          "relative",
          fullHeight && "h-full",
          fullWidth && "w-full",
          className
        )}
        {...props}
      />
    );
  }
);

Grid.displayName = "Grid";

export const GridCenter = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    return (
      <Grid placeItems="center" placeContent="center" {...props} ref={ref} />
    );
  }
);

GridCenter.displayName = "GridCenter";

export { Grid, gridVariants };
