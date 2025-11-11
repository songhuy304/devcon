import MarqueeText from "@/components/marqueeText";
import {
  ClockIcon,
  Description,
  EditionsIcon,
  Flex,
  GlobeIcon,
  SnapIcon,
  Text,
  YoutubeIcon,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import HeroSectionAbout from "@/pages/about/components/hero-section";
import Marquee from "react-fast-marquee";

const Items = [
  {
    title: "The Web We Want",
    author: "Brewster Kahle",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FrkdFko6wNuc%2Fhqdefault.jpg&w=1920&q=75",
    desc: "Brewster Kahle discusses the Internet Archive's history & attempt at decentralization, the technology that's currently in place, and what's needed from the community. He also discusses the benefits of decentralization, the steps that will need to be taken to get there, and the challenges we'll need to overcome on the way. The presentation is followed by a Q&A session.",
  },

  {
    title: "Ethereum Foundation Values",
    author: "Aya",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fimg.youtube.com%2Fvi%2FR7FjX0GEiAM%2Fhqdefault.jpg&w=1920&q=75",
    desc: "Brewster Kahle discusses the Internet Archive's history & attempt at decentralization, the technology that's currently in place, and what's needed from the community. He also discusses the benefits of decentralization, the steps that will need to be taken to get there, and the challenges we'll need to overcome on the way. The presentation is followed by a Q&A session.",
  },
];

const ItemsMar = [
  "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-1.ac86f326.jpg&w=1920&q=75",
  "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-2.98cb4634.jpg&w=1920&q=75",
  "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-1.ac86f326.jpg&w=1920&q=75",
  "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fabout-3.4bf67bff.jpg&w=1920&q=75",
];

const Card = (props: (typeof Items)[0]) => {
  return (
    <div className="max-w-96 w-full flex flex-col hover:cursor-pointer">
      <div className="w-full max-h-[210px]">
        <img className="w-full h-full object-cover" src={props.img} />
      </div>
      <div className="p-4 border flex flex-col group">
        <Text
          children={props.title}
          size="lg"
          weight="semibold"
          className="group-hover:underline"
        />

        <Text
          children={props.desc}
          size="md"
          className="mt-2 mb-3 line-clamp-3"
        />

        <Text children={props.author} size="xs" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="relative">
      <HeroSectionAbout
        meta={{
          title: "About",
          links: [
            {
              label: "Devcon",
              to: "devcon",
            },
            {
              label: "For Builders",
              to: "forbuilders",
            },
            {
              label: "Communities",
              to: "communities",
            },
            {
              label: "Get Involved",
              to: "getinvolved",
            },
          ],
        }}
      />

      <Section className="pb-8 relative" id="devcon">
        <Flex direction="col" className="lg:flex-row space-y-8 pb-8">
          <div className="grow-0 basis-[calc(50%_-_24px)] flex flex-col">
            <Text children="What is Devcon" size="title" />
            <Text
              children="Devcon is an intensive introduction for new Ethereum explorers, a global family reunion for those already a part of our ecosystem, and a source of energy and creativity for all."
              size="xl"
              className="mb-2"
            />
            <Text
              size="sm"
              className="mb-2"
              children="We host Devcon to educate and empower the community to build and use decentralized systems. It is a conference for builders of all kinds."
            />
            <Text
              size="sm"
              className="mb-2"
              children="Our goal is to push the boundaries of possibility in our mission to bring decentralized protocols, tools, and culture to the world. Programming covers content ranging from the deeply technical to the profoundly human."
            />

            <div>
              <Button colorStyle="green" children="View Past Events" />
            </div>
          </div>
          <div className="grow-0 basis-[calc(50%_-_24px)] lg:ml-[120px]">
            <Text children="Devcon by Numbers" size="title" />

            <Description
              icon={ClockIcon}
              children="Devcon 0"
              description="2014"
              isBorder
              descriptionClassName="text-[#88c43f]"
            />

            <Description
              icon={SnapIcon}
              children="Devcon 7"
              description="2014"
              isBorder
              descriptionClassName="text-[#88c43f]"
            />

            <Description
              icon={EditionsIcon}
              children="Past Editions"
              description="2014"
              isBorder
              descriptionClassName="text-[#88c43f]"
            />

            <Description
              icon={GlobeIcon}
              children="Continents Travelled"
              description="8"
              isBorder
              descriptionClassName="text-[#88c43f]"
            />

            <Description
              icon={YoutubeIcon}
              children="Archived Videos"
              description="3"
              isBorder
              descriptionClassName="text-[#88c43f]"
            />
          </div>
        </Flex>
        <MarqueeText
          children={["Devcon", "Devcon", "Devcon"]}
          color="#bde48a"
        />
      </Section>

      <Section className="py-8 relative" id="forbuilders">
        <Flex direction="col" className="py-8 lg:flex-row space-y-8 border-b">
          <div className="grow-0 basis-[calc(50%_-_24px)] flex flex-col">
            <Text children="Devcon is for builders of all kind" size="title" />
            <Text
              children="Devcon always had a heavy technical focus to it, and this will remain true this year and into the future (it’s the DEVelopers CONference after all!). Though Ethereum is a technological breakthrough in its own right, its applications reach much further, into digital economy, research, community, art, and beyond."
              size="sm"
              className="my-6"
            />
            <Text children="Devcon is not only for developers, it is for builders of all kinds: engineers, designers, researchers, infrastructure operators, community organizers, social economists, artists, and more. So we want to invite everyone who is looking to build and create to improve our existing world using Ethereum and decentralized systems." />
          </div>
          <div className="grow-0 basis-[calc(50%_-_24px)] lg:ml-[120px]">
            <Flex gap="4">
              {Items.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </Flex>
          </div>
        </Flex>
      </Section>
      <Section className="py-8 relative" id="communities">
        <Text
          children="Growing Global Communities"
          size="title"
          className="mb-8"
        />

        <div className="relative w-full expand">
          <div className="absolute w-full z-[2] h-full inset-0">
            <Section>
              <div className="flex items-center">
                <Text
                  children="Creating Global Communities"
                  className="text-[5rem] lg:text-[9rem] text-white leading-none max-w-[768px] drop-shadow-2xl"
                />
              </div>
            </Section>
          </div>
          <Marquee speed={10}>
            {ItemsMar.map((item, index) => (
              <div key={index} className="mr-10 flex-shrink-0 h-[38rem]">
                <img
                  src={item}
                  className="w-full h-full object-cover"
                  alt={`item-${index}`}
                />
              </div>
            ))}
          </Marquee>
        </div>

        <Flex direction="col" className="lg:flex-row py-6 gap-8">
          <div className="basis-1/2 space-y-3">
            <Text
              weight="medium"
              size="lg"
              children="Communities
About 1About 2About 3About 4About 1About 2About 3About 4
We could host Devcon in the same place every year, sure! But we’re working toward achieving a goal of bringing Ethereum to communities around the world, and to places where it can have real impact today."
            />

            <Text
              size="sm"
              children="“The difference between Argentina and some of the wealthier countries is that in wealthier places, there are people who are excited about crypto ideas and theory, but people here deeply understand that crypto is solving real problems.” — Vitalik Buterin"
            />

            <div>
              <Button children="Devcon Archive" colorStyle="green" />
            </div>
          </div>
          <div className="grow-0 basis-[calc(50%_-_24px)] lg:ml-[120px]">
            <Flex gap="4">
              {Items.map((item, index) => (
                <Card key={index} {...item} />
              ))}
            </Flex>
          </div>
        </Flex>
      </Section>
    </div>
  );
};

export default About;
