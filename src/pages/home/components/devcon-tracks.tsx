import { Carousel } from "@/components/carousel";
import MarqueeText from "@/components/marqueeText";
import { ArrowRightLongIcon, CardFlip, Flex, Text } from "@/components/ui";
import Badge from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";

const link = [
  {
    title: "Core Protocol",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FCoreProtocol.621206ca.png&w=1920&q=75",
    color: "#f6f2ff",
    tag: ["Layer1", "Staking", "EIP", "SSF", "Consensus"],
    des: "Researchers and developers, for over 10 years, have worked on building and improving Ethereum to be as decentralized, resilient, and secure of a protocol as possible. What are the latest research findings, EIPs slated for implementation, and suggestions for the roadmap?",
  },
  {
    title: "Cypherpunk and Privacy",
    color: "#fff4ff",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FCypherpunk.0ac17186.png&w=1920&q=75",
    tag: ["Censorship Resistance", "Identity", "EIP", "SSF", "FOSS"],
    des: "What are the values that make Ethereum special, why are they important for society, and how are we making it Cypherpunk again?",
  },
  {
    title: "Usability",
    color: "#fff4f4",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FUsability.7a392af4.png&w=1920&q=75",
    tag: ["Layer1", "Staking", "EIP", "SSF", "Consensus"],
    des: "Researchers and developers, for over 10 years, have worked on building and improving Ethereum to be as decentralized, resilient, and secure of a protocol as possible. What are the latest research findings, EIPs slated for implementation, and suggestions for the roadmap?",
  },
  {
    title: "Real World Ethereum",
    color: "#ffeddf",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FRealWorldEthereum.a147d281.png&w=1920&q=75",
    tag: ["Use cases", "Impact", "Regulatory"],
    des: "Ethereum reached a level of maturity that allows us to build concrete applications that can achieve long-term positive impact — what types of applications can we build using Ethereum and what are tips on building them?",
  },
  {
    title: "Usability",
    color: "#fff4f4",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FUsability.7a392af4.png&w=1920&q=75",
    tag: ["Layer1", "Staking", "EIP", "SSF", "Consensus"],
    des: "Researchers and developers, for over 10 years, have worked on building and improving Ethereum to be as decentralized, resilient, and secure of a protocol as possible. What are the latest research findings, EIPs slated for implementation, and suggestions for the roadmap?",
  },
  {
    title: "Core Protocol",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FCoreProtocol.621206ca.png&w=1920&q=75",
    color: "#f6f2ff",
    tag: ["Layer1", "Staking", "EIP", "SSF", "Consensus"],
    des: "Researchers and developers, for over 10 years, have worked on building and improving Ethereum to be as decentralized, resilient, and secure of a protocol as possible. What are the latest research findings, EIPs slated for implementation, and suggestions for the roadmap?",
  },
  {
    title: "Cypherpunk and Privacy",
    color: "#fff4ff",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FCypherpunk.0ac17186.png&w=1920&q=75",
    tag: ["Censorship Resistance", "Identity", "EIP", "SSF", "FOSS"],
    des: "What are the values that make Ethereum special, why are they important for society, and how are we making it Cypherpunk again?",
  },
  {
    title: "Usability",
    color: "#fff4f4",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FUsability.7a392af4.png&w=1920&q=75",
    tag: ["Layer1", "Staking", "EIP", "SSF", "Consensus"],
    des: "Researchers and developers, for over 10 years, have worked on building and improving Ethereum to be as decentralized, resilient, and secure of a protocol as possible. What are the latest research findings, EIPs slated for implementation, and suggestions for the roadmap?",
  },
  {
    title: "Real World Ethereum",
    color: "#ffeddf",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FRealWorldEthereum.a147d281.png&w=1920&q=75",
    tag: ["Use cases", "Impact", "Regulatory"],
    des: "Ethereum reached a level of maturity that allows us to build concrete applications that can achieve long-term positive impact — what types of applications can we build using Ethereum and what are tips on building them?",
  },
];

const blog = [
  {
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_72a7164ea04bf2ed4a68b2259f9d486e.jpg&w=1920&q=75",
    title: "The latest chapter for Ethereum & highlights from Devcon SEA",
    desc: "Devcon has always been a living reflection of Ethereum’s growth, challenges, and community ambitions. It showcases the most pressing topics, the newest innovations, and the people building the future of decentralized technology. As Ethereum grows, so...",
    time: "Dec 4, 2024",
  },
  {
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_7f149ae67e69886d99f7c246d2ceb02d.jpg&w=1920&q=75",
    title: "The Devcon schedule is live!",
    desc: "Hi Ethereum frens,  With just 13 days to go until Devcon, we’re amazed by how huge this year’s event will be! Our expected number of attendees has doubled since last time (12,000 vs. 6,000 in Bogotá), we have more than twice the number of Community H...",
    time: "Dec 4, 2024",
  },
  {
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_f8e27a882f3613d6f6286ba78cd7b888.png&w=1920&q=75",
    title: "Meet the teams at the Devcon Impact Forum",
    desc: "Devcon has always been a living reflection of Ethereum’s growth, challenges, and community ambitions. It showcases the most pressing topics, the newest innovations, and the people building the future of decentralized technology. As Ethereum grows, so...",
    time: "Dec 4, 2024",
  },
  {
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_72a7164ea04bf2ed4a68b2259f9d486e.jpg&w=1920&q=75",
    title: "The latest chapter for Ethereum & highlights from Devcon SEA",
    desc: "Devcon has always been a living reflection of Ethereum’s growth, challenges, and community ambitions. It showcases the most pressing topics, the newest innovations, and the people building the future of decentralized technology. As Ethereum grows, so...",
    time: "Dec 4, 2024",
  },
  {
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_72a7164ea04bf2ed4a68b2259f9d486e.jpg&w=1920&q=75",
    title: "The latest chapter for Ethereum & highlights from Devcon SEA",
    desc: "Devcon has always been a living reflection of Ethereum’s growth, challenges, and community ambitions. It showcases the most pressing topics, the newest innovations, and the people building the future of decentralized technology. As Ethereum grows, so...",
    time: "Dec 4, 2024",
  },
];

const DevconTracks = () => {
  return (
    <Section className="mb-8">
      <div className="relative border-b pb-28" id="devcon-tracks">
        <Carousel
          swiperOptions={{
            spaceBetween: 20,
            loop: true,
            initialSlide: 1,
            breakpoints: {
              320: { slidesPerView: 1.5, slidesPerGroup: 1 },
              1024: { slidesPerView: 3, slidesPerGroup: 1 },
              1280: { slidesPerView: 5.2, slidesPerGroup: 1 },
            },
          }}
          title="Devcon Tracks"
        >
          {link.map((item, index) => (
            <CardFlip
              key={index}
              style={{ background: item.color }}
              frontChildren={
                <Flex direction={"col"} className="p-4" fullHeight>
                  <Text
                    children={item.title}
                    weight={"semibold"}
                    className="mb-3"
                    size="lg"
                  />
                  <div className="relative h-full">
                    <img
                      src={item.img}
                      className="object-contain p-4 select-none absolute size-full inset-0"
                    />
                  </div>
                </Flex>
              }
              backChildren={
                <Flex direction={"col"} className="p-4" fullHeight>
                  <Text
                    children={item.title}
                    weight={"semibold"}
                    className="mb-2"
                    size="lg"
                  />

                  <Text children={item.des} size="sm" className="text-left" />

                  <Flex className="gap-1 mt-auto" wrap={"wrap"}>
                    {item.tag.map((tag, index) => (
                      <Badge
                        size={"sm"}
                        className="!py-0.5 text-[10px] leading-[150%] px-2 bg-transparent border border-[#30354b] text-[#30354b]"
                        key={index}
                        children={tag}
                      />
                    ))}
                  </Flex>
                </Flex>
              }
            />
          ))}
        </Carousel>

        <MarqueeText
          color="#e5d2ff"
          children={["DEVCON ARCHIVE ", "DEVCON ARCHIVE "]}
        />

        <div className="absolute mt-8">
          <Button variant="solid" colorStyle="purple">
            View Full Archive →
          </Button>
        </div>
      </div>

      <div className="relative" id="devcon-blog">
        <MarqueeText
          color="#ffeddf"
          className="top-0"
          maskAngle="180deg"
          children={["DEVCON ARCHIVE ", "DEVCON ARCHIVE ", "DEVCON ARCHIVE "]}
          reverse
        />
        <div className="pt-8">
          <Carousel
            swiperOptions={{
              loop: true,
              spaceBetween: 20,
              breakpoints: {
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                1024: { slidesPerView: 3.1, slidesPerGroup: 1 },
              },
            }}
            title="Devcon Blog"
          >
            {blog.map((item, index) => (
              <Flex
                direction={"col"}
                className="h-full max-w-[550px] rounded-xl overflow-hidden shadow-[0_4px_11px_#0000001a] hover:shadow-[0_4px_11px_#00000033]"
                key={index}
              >
                <div className="w-full relative overflow-hidden">
                  <img
                    src={item.img}
                    alt="img"
                    className="w-full h-[220px] object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                </div>

                <Flex direction={"col"} className="px-4 pt-4">
                  <Text
                    children={item.title}
                    weight={"semibold"}
                    size="md"
                    className="line-clamp-1"
                  />

                  <Text
                    children={item.desc}
                    size="sm"
                    className="line-clamp-4 mt-3"
                  />

                  <div className="flex justify-end flex-col flex-grow mt-6">
                    <div className="flex mt-1 mb-3 gap-1 uppercase leading-[150%] text-[#b5bbca] text-xs">
                      <small>{item.time}</small>
                      <small>Devcon Team</small>
                    </div>

                    <div className="font-semibold border-t py-3 flex items-center justify-between text-[#30354b]">
                      Read more
                      <ArrowRightLongIcon className="size-[14px]" />
                    </div>
                  </div>
                </Flex>
              </Flex>
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  );
};

export { DevconTracks };
