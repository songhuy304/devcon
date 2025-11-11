import { DevconArchive } from "@/pages/home/components/devcon-archive";
import { DevconTracks } from "@/pages/home/components/devcon-tracks";
import EventSection from "@/pages/home/components/event";
import FeatureSpeakers from "@/pages/home/components/feature-speakers";
import HeroSection from "@/pages/home/components/hero";
import Recap from "@/pages/home/components/recap";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-white z-10 overflow-hidden w-full relative">
        <Recap />
        <EventSection />
        <FeatureSpeakers />
        <DevconArchive />
        <DevconTracks />
      </div>
    </>
  );
};

export { HomePage };
