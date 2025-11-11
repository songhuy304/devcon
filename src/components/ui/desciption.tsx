import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { cn } from "@/shared/utils";
import React, { forwardRef, ReactNode } from "react";

interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  isBorder?: boolean;
  description: ReactNode;
  className?: string;
  descriptionClassName?: string;
}

const Description = forwardRef<HTMLDivElement, DescriptionProps>(
  (props, ref) => {
    const {
      children,
      icon: Icon,
      isBorder,
      description,
      className,
      descriptionClassName,
    } = props;

    return (
      <Flex ref={ref} direction="col" className={cn(className)}>
        <Flex
          align="center"
          justify="between"
          className={cn(
            "py-[14px] px-2",
            isBorder && "border-b border-[#000]",
            className
          )}
        >
          <Flex align="center" justify="start">
            <Icon className="size-[20px] mr-3" />
            <Text
              weight="bold"
              size="md"
              className="uppercase"
              children={children}
            />
          </Flex>

          <Text
            className={cn(descriptionClassName)}
            children={description}
            size="md"
            weight={"bold"}
          />
        </Flex>
      </Flex>
    );
  }
);

export { Description };
