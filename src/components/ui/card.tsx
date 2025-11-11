import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { cn } from "@/shared/utils";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  title?: string;
}
interface CardHeaderProps extends CardProps {}
interface CardBodyProps extends CardHeaderProps {}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, children, title, ...rest } = props;

  return (
    <div className="relative flex flex-col items-start">
      <div
        ref={ref}
        className={cn(
          "border border-solid border-[#E2E3FF] rounded-2xl flex flex-col gap-2 max-w-full overflow-hidden pb-2",
          className
        )}
        {...rest}
      >
        {title && (
          <Text
            children={title}
            className="lg:text-[100px] leading-[0.8em] font-bold text-[#EFEFFE] mt-5 mx-4"
          />
        )}
        <Flex direction={"col"}>{children}</Flex>
      </div>
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, border, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("p-4", border && "border-b border-[#E2E3FF]", className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "Card.Header";

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, border, children, ...rest }, ref) => {
    return (
      <div ref={ref} className={cn("m-4 relative grow-0", className)} {...rest}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = "Card.body";

const CardWithSubComponents = Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
});

export { CardWithSubComponents as Card };
