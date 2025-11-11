import { Flex } from "@/components/ui/flex";
import { Text } from "@/components/ui/text";
import { cn } from "@/shared/utils";

interface Props {
  className?: string;
  img: string;
  name: string;
  sub?: string;
}
const Avatar: React.FC<Props> = (props) => {
  const { className, img, name, sub } = props;
  return (
    <div className={cn("flex-1 p-3 flex items-center", className)}>
      <img
        src={img}
        alt="sada"
        className="rounded-full w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mr-4 object-cover shrink-0"
      />
      <Flex
        direction={"col"}
        justify={"between"}
        className="lg:flex-row lg:items-center "
        fullWidth
      >
        <Text
          children={name}
          className="text-[#706ABD] font-semibold lg:font-normal text-xl lg:text-4xl transition-all duration-300 ease-in-out transform lg:group-hover:scale-105 lg:group-hover:translate-x-[10px]"
        />
        {sub && (
          <Text
            children={sub}
            className="text-[#706ABD] text-base lg:text-xl lg:text-right"
            weight={"semibold"}
            size={"xl"}
          />
        )}
      </Flex>
    </div>
  );
};

export default Avatar;
