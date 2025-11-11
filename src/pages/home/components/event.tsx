import { Flex, Text } from "@/components/ui";
import Section from "@/components/ui/section";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const array = [
  "เอเชียตะวันออกเฉียงใต้",
  "Timog-silangang Asya",
  "អាស៊ី​អា​គ្នេ​យ៏",
  "Sudeste da Ásia",
  "Việt Nam",
  "Đông Nam Á",
];

const EventSection = () => {
  const [index, setIndex] = useState(0);
  const textState = array[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section className="mt-8 pb-8">
      <div className="relative flex flex-col items-start pb-8 gap-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
          <Flex direction={"col"} justify={"center"} grow>
            <Text size="title" children={"Devcon Satellite Events"} />

            <Text
              className="mb-4"
              variant={"primary"}
              size={"md"}
              children={
                "The Ethereum community is organizing Devcon Satellite Events to watch the highlights of Devcon SEA talks in their cities around the world."
              }
            />

            <Text variant={"primary"} size={"md"} className="inline-block">
              Join the Devcon Satellite event near you, or apply to organize
              your meetup.
            </Text>
          </Flex>

          <Flex
            direction={"col"}
            justify={"center"}
            align={"center"}
            className="lg:items-end"
            grow
          >
            <Flex direction={"col"} justify={"center"} align={"center"}>
              <img
                src="https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo-flowers.ab3bbdc0.png&w=1080&q=75"
                alt="alt"
                className="w-[85%] max-w-[250px] lg:w-auto lg:max-w-[315px]"
              />

              <motion.span
                key={textState}
                initial={{ opacity: 0, filter: "blur(25px)", scale: 0.8 }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                }}
                exit={{ opacity: 0, filter: "blur(25px)", scale: 0.8 }}
                className="text-gradient-morph"
                id="text1"
              >
                {textState}
              </motion.span>
            </Flex>
          </Flex>
        </div>
      </div>
    </Section>
  );
};

export default EventSection;
