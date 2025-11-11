import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { cn } from "@/shared/utils";
import { forwardRef } from "react";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  border?: boolean;
  title?: string;
  hovered?: boolean;
  item: { title: string; desc: string; img?: string };
}

interface CardEventFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardEvent = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, children, title, item, hovered, ...rest } = props;

  return (
    <Flex
      direction="col"
      fullHeight
      ref={ref}
      className={cn(
        "shadow-[0_4px_11px_#0000001a] bg-[#f8f9fe] rounded-xl",
        hovered && "hover:shadow-[0_4px_11px_#00000033]",
        className
      )}
      {...rest}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={item.img}
          alt="img-event"
          className="object-cover h-[200px] w-full object-top"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 40%",
          }}
        />
      </div>
      <Flex direction="col" className="px-4 py-2.5">
        <Text
          children={item.title}
          weight="semibold"
          size="lg"
          className="mb-2"
        />
        <div>
          <Text children={item.desc} size="sm" />
        </div>
        {children}
      </Flex>
    </Flex>
  );
});

CardEvent.displayName = "CardEvent";

const CardEventFooter = forwardRef<HTMLDivElement, CardEventFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Flex
        direction="col"
        justify="end"
        ref={ref}
        className={cn(className)}
        {...props}
      >
        {children}
      </Flex>
    );
  }
);

CardEventFooter.displayName = "CardEventFooter";

export { CardEvent, CardEventFooter };
