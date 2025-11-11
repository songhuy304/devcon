import ImageReveal2 from "@/components/image-reveal2";
import MarqueeText from "@/components/marqueeText";
import { Text } from "@/components/ui";
import Section from "@/components/ui/section";
import LedSessionsSection from "@/pages/home/components/led-sessions";

const FeatureSpeakers = () => {
  return (
    <Section>
      <div className="relative border-t pb-4" id="featured-speakers">
        <MarqueeText
          color="#e5d2ff"
          maskAngle="180deg"
          reverse
          className="top-0 text-[175px]"
          children={["FEATURED SPEAKERS ", "FEATURED SPEAKERS "]}
        />
        <div className="mt-8 mb-4">
          <Text size="title" children={"Featured Speakers"} />

          <ImageReveal2 />
        </div>
      </div>

      <LedSessionsSection />
    </Section>
  );
};

export default FeatureSpeakers;
