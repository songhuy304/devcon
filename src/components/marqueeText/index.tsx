import { cn } from "@/shared/utils";
import { motion } from "framer-motion";
interface Props {
  children: string[];
  reverse?: boolean;
  color?: string;
  speed?: number;
  className?: string;
  maskAngle?: "0deg" | "180deg";
}

const MarqueeText: React.FC<Props> = (props) => {
  const {
    children,
    reverse,
    color,
    className,
    maskAngle = "0deg",
    speed = 120,
  } = props;

  const actualDuration = reverse ? speed * 2 : speed;

  return (
    <div
      className={cn(
        "h-fit text-[220px] z-[-1] w-full bottom-0 absolute mask-image-marquee",
        className
      )}
    >
      <div className={cn("relative")}>
        <div
          style={{
            backgroundColor: color,
            maskImage: `linear-gradient(${maskAngle}, #000, transparent)`,
          }}
          className="absolute bottom-0 w-full h-full  [-webkit-mask-image:linear-gradient(0deg,#000,transparent)]"
        />
        <div className="relative w-full">
          <motion.div
            className="flex flex-nowrap w-max"
            animate={{
              x: reverse ? ["-50%", "50%"] : ["0%", "-50%"],
            }}
            transition={{
              ease: "linear",
              duration: actualDuration,
              repeat: Infinity,
            }}
          >
            {[...children, ...children].map((child, index) => (
              <div
                key={index}
                style={{
                  maskImage: `linear-gradient(${maskAngle},#000,30%,transparent)`,
                }}
                className="leading-none font-semibold opacity-15"
              >
                <p className="mr-2 uppercase">{child}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
