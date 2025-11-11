import MarqueeText from "@/components/marqueeText";
import { Flex, Text } from "@/components/ui";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import HeroSectionAbout from "@/pages/about/components/hero-section";

const Items = [
  {
    title: "Devcon SEA",
    des: "With 12,500 attendees, the numbers have doubled since the previous Devcon two years ago. 60% of Devcon SEA's attendees experienced their first-ever Devcon, and participants represented 135 countries, making this the most global and diverse Devcon to date. The involvement of the Ethereum community was stronger than ever before, with 17 Community Hubs, 70 Impact Spaces, 19 accepted DIPs, 6 Community-Led Sessions, and 300+ hours of content in total.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fprogramming.jpg&w=1920&q=75",
  },
  {
    title: "Devcon VI",
    des: "After a three-year-long pause, we emerged from the pandemic stronger than before and reunited in Bogotá for the largest and some would say, “best Devcon yet.” One of its most powerful aspects was the impact on the regional community and the involvement of the flourishing Latin American Ethereum community, which had organized 14 community events around the region leading up to Devcon.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fpast-events%2FBogota.png&w=1920&q=75",
  },
  {
    title: "Devcon V",
    des: "Devcon 5 brought the Ethereum ecosystem together in Japan in October of 2019 for an event that featured more content and attendees than ever before. In addition to the conference talks, Devcon featured the event's first community run outdoor stage and experiential Park area, a powerful open from the City of Osaka, a celebrity appearance by the world’s most well-known dog, Kabosu (the original “Doge”) and so much more.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fpast-events%2FOsaka.png&w=1920&q=75",
  },
  {
    title: "Devcon iv",
    des: "Devcon 4 brought Ethereum's ecosystem and family back to Europe with a 2018 event at the Prague Convention Center in the Czech Republic (Czechia). With 3,000 strong in attendance, Devcon was filled with talks, experiences, teams from a matured application ecosystem, and more enterprise support than ever before.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fprogramming.jpg&w=1920&q=75",
  },
];

const PastEventPage = () => {
  return (
    <div className="relative">
      <HeroSectionAbout
        meta={{
          title: "Past Events",
          links: [
            {
              label: "Devcon SEA",
              to: "devconsea",
            },
            {
              label: "DEVCON VI",
              to: "devconvi",
            },
            {
              label: "DEVCON V",
              to: "devconv",
            },
            {
              label: "DEVCON IV",
              to: "devconiv",
            },
            {
              label: "DEVCON THREE",
              to: "devconthree",
            },
            {
              label: "DEVCON TWO",
              to: "devcontwo",
            },
            {
              label: "DEVCON 1",
              to: "devconone",
            },
          ],
        }}
      />

      <Section className="relative" id="devcon">
        <Flex direction="col" className="lg:flex-row space-y-8 pb-6 border-b">
          <div className="grow-0 basis-[calc(50%_-_24px)] flex flex-col gap-4">
            <Text children="Devcon Editions" size="title" />
            <Text
              children="Everything began in Berlin Kreuzberg in 2014 when the co-founders and earliest builders of Ethereum came together for a meet-up they named Devcon 0. Since then, Devcon has rotated the world. The journey went from Berlin to London, Shanghai, Cancún, Prague, Osaka, Bogotá and Bangkok. Each location brings something unique to the developer conference."
              size="xl"
            />
            <Text
              size="sm"
              children="You might want to check out some details about Devcon’s history. Read on below for summaries of past editions, or head to the Devcon Archive to watch round-up videos, talks, and presentations."
            />

            <div>
              <Button colorStyle="green" children="View Archive" />
            </div>
          </div>
          <div className="grow-0 basis-[calc(50%_-_24px)] lg:ml-[120px]">
            <Text children="Past Events Locations" size="title" />

            <div className="block mt-4">
              <img
                src="https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fevent-locations.8a6e238c.png&w=1080&q=75"
                className="w-full object-cover"
              />
            </div>
          </div>
        </Flex>
        <MarqueeText children={["Past Events Locations"]} color="#bde48a" />
      </Section>

      <Section className="relative py-8" id="devcon">
        <Text
          size="title"
          children="Past Events Past Devcons"
          className="border-b pb-8 mb-0"
        />

        <Flex direction="col">
          {Items.map((item, index) => (
            <Flex
              key={index}
              direction="col"
              align="center"
              justify="center"
              className="lg:flex-row py-6 border-b"
            >
              <div className="relative basis-[40%] flex-shrink-0">
                <img src={item.img} className="w-full h-auto " />
              </div>

              <Flex
                direction="col"
                className="space-y-4 mt-4 lg:mt-0 lg:pl-[158px]"
              >
                <Text children={item.title} size="title" weight="bold" />
                <Text size="md" children={item.des} />
                <div>
                  <Button colorStyle="green" children="Watch" />
                </div>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Section>
    </div>
  );
};

export default PastEventPage;
