import { ButterflyAnimation } from "@/components/butter-flies";
import FirefliesCanvas from "@/components/fire-flies";
import Floating, { FloatingElement } from "@/components/parallax-floating";
import { Flex, ScrollIndicartorIcon, Text } from "@/components/ui";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-end text-white overflow-hidden flex-grow relative min-h-screen w-full bg-gradient-to-br from-[#bf0bbc] via-[#5c7093] to-[rgba(0,2,128,0.839)]">
      <Floating>
        <div className="fixed inset-0">
          <FloatingElement
            depth={1}
            className="absolute h-full w-full flex items-center justify-center"
          >
            <motion.img
              initial={{ scale: 1.5 }}
              animate={{
                scale: 1,
                transition: { duration: 2.5, ease: "easeOut" },
              }}
              src="/images/hero1.webp"
              className="absolute h-[105%] object-[center_55%] object-cover w-full"
            />
            <div className="absolute bottom-0 w-full h-full">
              <FirefliesCanvas radius={3.5} className="w-full h-full" />
            </div>
          </FloatingElement>

          <motion.img
            src="/images/hero1.webp"
            className="block xl:hidden absolute h-[105%] object-[center_55%] object-cover w-full"
          />

          <FloatingElement
            depth={0.5}
            className="absolute h-full w-full hidden xl:flex items-center justify-center"
          >
            <motion.img
              initial={{ scale: 0.9, left: "-100px", width: "50%" }}
              animate={{
                scale: 1.15,
                left: "0",
                width: "auto",
                transition: { duration: 3 },
              }}
              src="/images/hero2.webp"
              className="absolute h-full object-cover"
            />
          </FloatingElement>
          <FloatingElement
            depth={0.5}
            className="absolute h-full w-full hidden xl:flex items-center justify-center"
          >
            <motion.img
              initial={{ scale: 0.9, width: "50%", right: "-100px" }}
              animate={{
                scale: 1.15,
                width: "auto",
                right: "0",
                transition: { duration: 3 },
              }}
              src="/images/hero3.webp"
              className="absolute h-full object-cover"
            />
          </FloatingElement>
        </div>

        <div className="absolute flex justify-between w-full h-full pb-8 before:absolute before:inset-0 before:content-[''] before:pointer-events-none before:bg-radial-overlay">
          <Section>
            <Flex
              fullWidth
              fullHeight
              align={"start"}
              direction="col"
              className="lg:flex-row lg:items-end gap-8"
              justify={"between"}
            >
              <Flex
                fullWidth
                fullHeight
                direction={"col"}
                justify={"between"}
                className="flex-1"
              >
                <div className="mt-20 lg:mt-[150px]">
                  <img
                    src="/images/logo-hero.webp"
                    className="w-[72px] lg:w-[125px]"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/images/logo-hero2.webp"
                    className="w-1/3 lg:w-[400px] h-auto text-transparent drop-shadow-[0_1px_4px_#000000] object-cover"
                  />
                  <ButterflyAnimation className="left-0 bottom-0" />
                </div>
              </Flex>
              <Flex>
                <div className="relative">
                  <ButterflyAnimation right className="top-[-50px]" />
                  <Button
                    size={"lg"}
                    colorStyle={"primary"}
                    className="py-3.5 shadow-[black_0px_0px_25px_0px]"
                  >
                    <div className="flex flex-col items-end">
                      <div className="">Check out Devconnect 2025</div>
                      <div className="text-[9px] leading-none opacity-50 uppercase">
                        → Click to Learn More
                      </div>
                    </div>
                  </Button>
                </div>
              </Flex>
            </Flex>
          </Section>
        </div>
        <div className="absolute w-full bottom-8 justify-center hidden xl:flex">
          <ScrollIndicartorIcon />
        </div>
        <div className="absolute hidden lg:flex top-0 right-0 justify-end items-center h-full">
          <Text
            size={"xs"}
            weight={"semibold"}
            variant={"white"}
            className="uppercase mr-5 [writing-mode:vertical-rl]"
          >
            Road TO SOUTH EAST ASIA 2024
          </Text>
        </div>
        <div className="absolute hidden lg:flex top-0 left-0 justify-end items-center h-full">
          <Text
            size={"xs"}
            weight={"semibold"}
            variant={"white"}
            className="uppercase ml-5 [writing-mode:vertical-lr] rotate-180"
          >
            Devcon 2024
          </Text>
        </div>
      </Floating>
    </div>
  );
};

export default HeroSection;
