import { Carousel } from "@/components/carousel";
import { Card, Text } from "@/components/ui";
import { CardEvent } from "@/components/ui/card-event";
import { Grid } from "@/components/ui/grid";

const items = [
  {
    title: "Learn how to build on Ethereum",
    desc: "This Community-led Session is designed for developers who want to learn how to build on Ethereum. You'll gain hands-on experience in building decentralized applications and writing smart contracts. You'll also develop practical skills, receive mentorship, network with other developers, and participate in a fun and challenging Capture the Flag game to test your Solidity skills.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2FBG-social-card.png&w=384&q=75",
  },
  {
    title:
      "MUD: autonomous worlds, onchain games, and non-financial applications",
    desc: "This Community-led Session is for everyone interested in onchain games, autonomous worlds, and other complex Ethereum applications. MUD is an open-source Ethereum framework that has built many novel Dapps, from CCP Games’ upcoming EVE Frontier, to indie projects such as Primodium, This Cursed Machine, Sky Strife, OPCraft, Biomes, and more.",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcity-guide.634d5e09.png&w=384&q=75",
  },
  {
    title: "d/acc Discovery Day: Building towards a resilient Utopia",
    desc: "This Community-led Session is designed for developers who want to learn how to build on Ethereum. You'll gain hands-on experience in building decentralized applications and writing smart contracts. You'll also develop practical skills, receive mentorship, network with other developers, and participate in a fun and challenging Capture the Flag game to test your Solidity skills.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fdaccgraphic.png&w=384&q=75",
  },
  {
    title: "Learn how to build on Ethereum",
    desc: "This Community-led Session is designed for developers who want to learn how to build on Ethereum. You'll gain hands-on experience in building decentralized applications and writing smart contracts. You'll also develop practical skills, receive mentorship, network with other developers, and participate in a fun and challenging Capture the Flag game to test your Solidity skills.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2FBG-social-card.png&w=384&q=75",
  },
  {
    title:
      "MUD: autonomous worlds, onchain games, and non-financial applications",
    desc: "This Community-led Session is for everyone interested in onchain games, autonomous worlds, and other complex Ethereum applications. MUD is an open-source Ethereum framework that has built many novel Dapps, from CCP Games’ upcoming EVE Frontier, to indie projects such as Primodium, This Cursed Machine, Sky Strife, OPCraft, Biomes, and more.",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcity-guide.634d5e09.png&w=384&q=75",
  },
  {
    title: "d/acc Discovery Day: Building towards a resilient Utopia",
    desc: "This Community-led Session is designed for developers who want to learn how to build on Ethereum. You'll gain hands-on experience in building decentralized applications and writing smart contracts. You'll also develop practical skills, receive mentorship, network with other developers, and participate in a fun and challenging Capture the Flag game to test your Solidity skills.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fdaccgraphic.png&w=384&q=75",
  },
  {
    title: "Learn how to build on Ethereum",
    desc: "This Community-led Session is designed for developers who want to learn how to build on Ethereum. You'll gain hands-on experience in building decentralized applications and writing smart contracts. You'll also develop practical skills, receive mentorship, network with other developers, and participate in a fun and challenging Capture the Flag game to test your Solidity skills.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2FBG-social-card.png&w=384&q=75",
  },
  {
    title:
      "MUD: autonomous worlds, onchain games, and non-financial applications",
    desc: "This Community-led Session is for everyone interested in onchain games, autonomous worlds, and other complex Ethereum applications. MUD is an open-source Ethereum framework that has built many novel Dapps, from CCP Games’ upcoming EVE Frontier, to indie projects such as Primodium, This Cursed Machine, Sky Strife, OPCraft, Biomes, and more.",
    img: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcity-guide.634d5e09.png&w=384&q=75",
  },
  {
    title: "d/acc Discovery Day: Building towards a resilient Utopia",
    desc: "This Community-led Session is designed for developers who want to learn how to build on Ethereum. You'll gain hands-on experience in building decentralized applications and writing smart contracts. You'll also develop practical skills, receive mentorship, network with other developers, and participate in a fun and challenging Capture the Flag game to test your Solidity skills.",
    img: "https://devcon.org/_next/image/?url=https%3A%2F%2Fassets.tina.io%2F649ba43e-3f04-41ce-a5a0-1c80907807bd%2Fdaccgraphic.png&w=384&q=75",
  },
];

const LedSessionsSection = () => {
  return (
    <div className="relative pt-8 border-t" id="led-sesstions">
      <Text size="title" children={"Community-Led Sessions"} />

      <Card title="CLS">
        <Card.Header border>
          <Text
            size="xl"
            children="Community-led Sessions (CLS) are focused mini-events designed to make Devcon truly special by bringing together diverse fields and fostering interdisciplinary conversations. These sessions focus on topics that matter not just to Ethereum but to society as a whole."
          />

          <Grid fullWidth cols={2} className="mt-4" gap="8">
            <div className="colums-left space-y-4">
              <Text>
                <strong>Led by experts:</strong>
                Curated by experts from the community, offering in-depth
                insights.
              </Text>

              <Text>
                <strong>Format:</strong>
                Half-day or full-day sessions in a dedicated room at the Devcon
                venue.
              </Text>
            </div>
            <div className="colums-right space-y-4">
              <Text>
                <strong>Interdisciplinary focus:</strong>
                Explore the intersection of technology, society, AI, and more.
              </Text>

              <Text>
                <strong>Accessible with your Devcon ticket:</strong>
                Included in the main programming of Devcon.
              </Text>
            </div>
          </Grid>
        </Card.Header>

        <Card.Body>
          <div className="flex flex-col relative w-full h-full">
            <Carousel
              swiperOptions={{
                loop: true,
                spaceBetween: 20,
                breakpoints: {
                  320: { slidesPerView: 1, slidesPerGroup: 1 },
                  1024: { slidesPerView: 3, slidesPerGroup: 1 },
                },
              }}
              title="Featured Sessions"
            >
              {items.map((item, index) => (
                <CardEvent hovered key={index} item={item} />
              ))}
            </Carousel>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LedSessionsSection;
