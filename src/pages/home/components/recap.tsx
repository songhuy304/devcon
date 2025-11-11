import MarqueeText from "@/components/marqueeText";
import { Text } from "@/components/ui";
import Section from "@/components/ui/section";
import GravitySection from "@/pages/home/components/gravity";

const Recap = () => {
  return (
    <div className="relative">
      <img
        src="/images/bg-recap.webp"
        className="max-w-[700px] absolute right-[-100px] -top-[350px] rotate-180 -z-10 opacity-10"
      />

      <Section>
        <div className="flex flex-col justify-center border-b mt-8 pb-8 flex-grow">
          <Text
            size="title"
            children={
              "Devcon is the Ethereum conference for developers, thinkers, and makers."
            }
          />

          <Text
            className="mb-4"
            variant={"primary"}
            size={"md"}
            children={
              "Devcon's mission is to bring decentralized protocols, tools, and culture to the people and make Ethereum more accessible around the world."
            }
          />

          <Text variant={"primary"} size={"md"} className="inline-block">
            Devcon is a four-day event that rotates the globe. Devcon SEA just
            concluded in Bangkok, Thailand between 12-15 November 2024. Find the
            recap of the event below.
            <strong> Devcon 8 will take place in 2026, location TBD.</strong>
          </Text>
        </div>
      </Section>

      <Section>
        <div className="relative flex flex-col items-start gap-8 pt-8 pointer-events-none">
          <div className="z-10 bg-[#ffffff33] rounded-2xl backdrop-blur-[5px]">
            <Text as="span" size={"title"}>
              Devcon SEA Recap
            </Text>

            <br />

            <Text as="span" variant={"primary"} size={"xl"}>
              Devcon 7 was held in Bangkok, Thailand, and included the entire
              South-East Asia community
            </Text>
          </div>
        </div>

        <MarqueeText
          color="#e5d2ff"
          children={["Devcon SEA Recap", "Devcon SEA Recap"]}
          className="border-b-2"
        />

        <GravitySection />
      </Section>
    </div>
  );
};

export default Recap;
