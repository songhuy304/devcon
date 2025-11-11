import { cn } from "@/shared/utils";
import { forwardRef } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  isCenter?: boolean;
}

const Section = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { isCenter = true, className, children, ...others } = props;
  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-full grid",
        "grid-cols-[minmax(16px,1fr)_minmax(0,1680px)_minmax(16px,1fr)]",
        "md:grid-cols-[minmax(64px,1fr)_minmax(0,1680px)_minmax(64px,1fr)]",
        isCenter && "[&>*]:col-start-2",
        "[&>.expand]:col-[1/4]",
        className
      )}
      {...others}
    >
      {children}
    </div>
  );
});

export default Section;
