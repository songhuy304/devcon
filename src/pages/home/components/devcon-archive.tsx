import { Flex, Text } from "@/components/ui";
import Section from "@/components/ui/section";

const link = [
  {
    title: "This Year in Ethereum",
    path: "",
    subTitle: "DEVCON 7",
    des: "Josh Stark",
  },
  {
    title: "Redefining boundaries in the Infinite Garden",
    path: "",
    subTitle: "DEVCON 7",
    des: "Aya Miyaguchi",
  },
  {
    title: "Ethereum in 30 minutes",
    path: "",
    subTitle: "DEVCON 7",
    des: "Vitalik Buterin",
  },
  {
    title: "Keynote: 🖖 Infinite Diversity in Infinite Combinations",
    path: "",
    subTitle: "DEVCON 7",
    des: "Audrey Tang",
  },
  {
    title: "Keynote: Glass Houses and Tornados",
    path: "",
    subTitle: "DEVCON 7",
    des: "Peter Van Valkenburgh",
  },
  {
    title: "Devcon VI Bogota Recap Video",
    path: "",
    subTitle: "DEVCON 6",
    des: "",
  },
  {
    title: "Devcon VI Bogota Recap Video",
    path: "",
    subTitle: "DEVCON 6",
    des: "",
  },
  {
    title: "Devcon VI Bogota Recap Video",
    path: "",
    subTitle: "DEVCON 6",
    des: "",
  },
  {
    title: "Devcon VI Bogota Recap Video",
    path: "",
    subTitle: "DEVCON 6",
    des: "",
  },
];

const DevconArchive = () => {
  return (
    <Section>
      <div className="relative pb-4" id="featured-speakers">
        <div className="mt-8 mb-4">
          <Text size="title" children={"Devcon Archive"} />

          <Flex direction={"col"} className="lg:flex-row" gap="4">
            <div className="lg:basis-1/2 h-[480px]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YyK8i2-0aPk"
                className="rounded-xl h-full"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="h-[30vh] lg:h-auto relative grow shrink-0 border-solid border border-[#E2E3FF] bg-[#F8F9FE] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute top-0 w-full h-full opacity-15 flex justify-end">
                <img
                  src="https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Farchive-logo.b5a2f8df.png&w=640&q=75"
                  className="h-[120%] object-cover"
                />
              </div>
              <div className="absolute top-0 w-full h-full flex flex-col overflow-auto no-scrollbar">
                <Flex
                  direction={"col"}
                  className="overflow-x-hidden no-scrollbar bg-gradient-to-b from-transparent to-[rgba(200,163,255,0.141)]"
                >
                  {link.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col first:mt-2 mb-2 mx-4 py-2 border-[#E2E3FF] shrink-0 border-solid border-b last:border-none cursor-pointer w-full"
                    >
                      <Text
                        children={item.subTitle}
                        size={"xs"}
                        weight={"bold"}
                      />
                      <Text
                        children={item.title}
                        weight={"bold"}
                        className="hover:underline"
                      />
                      <Text
                        children={item.subTitle}
                        size={"xs"}
                        className="opacity-50"
                      />
                    </div>
                  ))}
                </Flex>
              </div>
            </div>
          </Flex>

          <Text size={"md"} className="mt-4">
            Devcon is geared toward Ethereum's builders, creators, and thinkers
            who wish to improve this world. Programming at Devcon takes a
            holistic approach and aims to engage all attendees through talks,
            panels, workshops, lightning talks, and freeform learning sessions.
          </Text>
        </div>
      </div>
    </Section>
  );
};

export { DevconArchive };
