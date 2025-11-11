import { cn } from "@/shared/utils";

interface CardFlipProps {
  wrapperClassName?: string;
  className?: string;
  frontChildren?: React.ReactNode;
  backChildren?: React.ReactNode;
  style?: React.CSSProperties;
}

const CardFlip: React.FC<CardFlipProps> = ({
  frontChildren,
  backChildren,
  className,
  wrapperClassName,
  style,
}) => {
  return (
    <div className={cn("card-flip", wrapperClassName)}>
      <div className={cn("card-flip--content", className)} style={style}>
        <div className="card-flip--front">{frontChildren}</div>
        <div className="card-flip--back">{backChildren}</div>
      </div>
    </div>
  );
};

export { CardFlip };
