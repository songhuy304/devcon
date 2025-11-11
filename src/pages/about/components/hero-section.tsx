import { Flex, Text } from "@/components/ui";
import Section from "@/components/ui/section";
import React from "react";

interface Props {
  meta: {
    title: string;
    links: {
      label: string;
      to: string;
    }[];
  };
}

const HeroSectionAbout: React.FC<Props> = ({ meta }) => {
  const handleScroll = (id: string, offset = 0) => {
    const element = document.getElementById(id);

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      const offsetPosition = elementPosition - offset - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full shadow-lg z-20 mb-8 sticky top-[-420.9375px]">
        <Section className="h-[55vh] max-h-[600px] w-full relative z20">
          <div className="absolute w-full h-full inset-0 -left-[8%]">
            <div className="relative w-[110%] h-full mask-gradient ">
              <img
                src="https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout.87590984.jpg&w=3840&q=75"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <Flex className="h-[calc(100%_-_50px)] items-center">
            <Text
              children={meta.title}
              className="!text-[7rem] font-extrabold leading-none uppercase"
            />
          </Flex>
        </Section>

        <div className="absolute bottom-0 w-full py-4 bg-[#fff3] backdrop-blur-[5px] border border-[#ffffff4d]">
          <Section>
            <div className="flex space-x-6">
              {meta.links.map((item, index) => (
                <span
                  onClick={() => handleScroll(item.to)}
                  key={index}
                  className="text-xs font-bold text-uppercase hover:underline cursor-pointer"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default HeroSectionAbout;
