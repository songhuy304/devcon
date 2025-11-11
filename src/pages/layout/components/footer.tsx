import { ArrowLeftLongIcon, Flex, FlexCenter, Text } from "@/components/ui";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import { Link } from "react-router-dom";

const LogoFooter = () => {
  return (
    <div className="pr-[64px] leading-[150%] basis-[24%]">
      <div className="w-full max-w-[350px] lg:max-w-[225px] h-[150px]">
        <Link to="/" className="">
          <img
            className="w-full h-full object-contain"
            src="https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Flogo-flowers.ab3bbdc0.png&w=1080&q=75"
          />
        </Link>
        <FlexCenter className="mt-4" gap="4">
          <a
            href="https://twitter.com/efdevcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 46 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M36.18.967h7.028L27.854 18.516l18.063 23.88H31.773L20.696 27.913 8.02 42.396H.988l16.423-18.77L.083.965h14.503l10.013 13.239L36.179.967Zm-2.467 37.222h3.895L12.47 4.952H8.29L33.714 38.19Z"
                fill="#000"
              ></path>
            </svg>
          </a>

          <a
            href="https://hey.xyz/u/devcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 18 20"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.392 3.98c.737-.611 1.56-.844 2.35-.785.842.063 1.621.454 2.203 1.024.582.569.982 1.33 1.046 2.152.065.83-.215 1.698-.952 2.46A10.69 10.69 0 0 1 15.702 10c.385.284.764.603 1.13.961v.001c.07.068.138.137.205.206.739.762 1.018 1.63.954 2.46-.064.821-.463 1.583-1.045 2.152-.582.57-1.361.962-2.203 1.025-.79.059-1.613-.174-2.351-.784-.08.942-.493 1.675-1.093 2.18-.64.537-1.475.799-2.299.799-.824 0-1.658-.262-2.298-.8-.6-.504-1.014-1.238-1.094-2.18-.737.611-1.56.844-2.35.785-.842-.063-1.621-.454-2.203-1.024-.582-.569-.982-1.33-1.046-2.152-.065-.83.215-1.698.952-2.46A10.69 10.69 0 0 1 2.298 10a10.69 10.69 0 0 1-1.13-.962c-.07-.068-.138-.137-.205-.206-.739-.762-1.018-1.63-.954-2.46.064-.821.463-1.583 1.045-2.152.582-.57 1.361-.962 2.203-1.025.79-.059 1.613.174 2.351.784.08-.942.493-1.675 1.093-2.18C7.341 1.263 8.176 1 9 1c.824 0 1.658.262 2.298.8.6.504 1.014 1.237 1.094 2.18ZM6.267 9.2a.533.533 0 0 0-.534.533V11A.533.533 0 0 0 6.8 11V9.733a.533.533 0 0 0-.533-.533Zm5.466 0a.533.533 0 0 0-.533.533V11a.533.533 0 0 0 1.067 0V9.733a.533.533 0 0 0-.534-.533Zm-1.4 1.5a.534.534 0 0 1-.315.685 2.93 2.93 0 0 1-2.037 0 .533.533 0 0 1 .37-1 1.86 1.86 0 0 0 1.297 0 .533.533 0 0 1 .686.315Z"
              ></path>
            </svg>
          </a>

          <a
            href="https://github.com/efdevcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.2-.7 0-.7 0-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.6 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3Z"
                fill="#000"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/c/EthereumFoundation/search?query=devcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M23.8 4.2s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1C17 .6 12 .6 12 .6s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 6.1 0 8.1v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9V8c0-1.9-.2-3.8-.2-3.8ZM9.5 12.1V5.4L16 8.8l-6.5 3.3Z"
                fill="#000"
              ></path>
            </svg>
          </a>
        </FlexCenter>
      </div>
    </div>
  );
};

const Footer = () => {
  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <div className="relative bg-[#f4f6ff] border-t border-b">
        <Section>
          <Flex className="py-8" justify="between" wrap={"wrap"}>
            <LogoFooter />

            <div className="pr-[64px] basis-[24%]">
              <Text children="About Devcon —" weight="bold" className="mb-2" />
              <Text
                children="Devcon is the Ethereum conference for developers, researchers, thinkers, and makers."
                className="mb-2"
              />
              <Text
                children="An intensive introduction for new Ethereum explorers, a global family reunion for those already a part of our ecosystem, and a source of energy and creativity for all."
                className="mb-2"
              />
            </div>

            <div className="pr-[64px] basis-[24%] flex gap-12 xl:gap-8 2xl:gap-20 ">
              <ul className="space-y-2 text-sm ">
                <li className="font-bold">Devcon</li>
                <li>About</li>
                <li>FAQ</li>
                <li>Blog</li>
                <li>Past Events</li>
                <li>Archive</li>
              </ul>

              <ul className="space-y-2 text-sm">
                <li className="font-bold">Community</li>
                <li>RTD</li>
                <li>DIPs</li>
                <li>Forum</li>
                <li>Github</li>
                <li>Devconnect</li>
              </ul>
            </div>

            <div className="basis-[24%] leading-[150%] text-[14px] flex flex-col">
              <Text children="Get in touch" size="sm" weight="semibold" />
              <Text children="support@devcon.org" size="sm" className="mb-8" />

              <Text
                children="Subscribe to our newsletter"
                size="sm"
                weight="semibold"
              />
              <Text
                children="Stay up to date on the latest devcon news and updates."
                size="sm"
                className="mb-2"
              />

              <Flex direction="col" gap="2" fullWidth>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-full p-2.5 px-5 border-solid border border-slate-300"
                />

                <Button
                  colorStyle="black"
                  children="Subscribe to Newsletter"
                  className="justify-start text-sm"
                />
              </Flex>
            </div>

            <div>
              <Button
                className="px-0 py-0 border-2 size-[44px]"
                colorStyle="grey"
                variant="outline"
                radius="full"
                onClick={handleToTop}
              >
                <ArrowLeftLongIcon
                  color="#9FA1B7"
                  className="size-[14px] rotate-90"
                />
              </Button>
            </div>
          </Flex>
        </Section>
      </div>
    </div>
  );
};

export default Footer;
