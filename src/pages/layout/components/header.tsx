import { Logo } from "@/components/logo";
import {
  ArrowDownIcon,
  BgSubMenuIcon,
  CloseMenuIcon,
  DevConAppIcon,
  Flex,
  MenuIcon,
} from "@/components/ui";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import MenuMobile from "@/pages/layout/components/menu-mobile";
import { useMainLayout } from "@/pages/layout/main-layout";
import { cn } from "@/shared/utils";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const links = [
  {
    label: "About Devcon",
    children: [
      {
        title: "Devcon",
        subMenu: [
          {
            title: "About",
            to: "/about",
          },
          {
            title: "Past Events",
            to: "/past-event",
          },
          {
            title: "FAQ",
            to: "/",
          },
          {
            title: "Forum",
            to: "/",
          },
        ],
      },
      {
        title: "Updates",
        subMenu: [
          {
            title: "Blog",
            to: "/",
          },
        ],
      },
    ],
  },
  {
    label: "Get Involved",
    children: [
      {
        title: "Community",
        subMenu: [
          {
            title: "Road to Devcon",
            to: "/",
          },
          {
            title: "DIPs",
            to: "/",
          },
        ],
      },
      {
        title: "Press",
        subMenu: [
          {
            title: "Press Kit",
            to: "/",
          },
        ],
      },
    ],
  },
  {
    label: "Archive",
    to: "/archive",
  },
  {
    label: "Devconnect 2025",
    to: "/devconnect-2025",
  },
];

interface NavItemWithChildrenProps {
  title: string;
  textColor: string;
  children: { title: string; subMenu: { title: string; to: string }[] }[];
}

const NavItem = ({ title, to }: { title: string; to: string }) => {
  return (
    <li className="mr-5 flex items-center">
      <Link className="py-1 font-semibold hover:underline" to={to}>
        {title}
      </Link>
    </li>
  );
};

const NavItemWithChildren: React.FC<NavItemWithChildrenProps> = (props) => {
  const { title, textColor, children } = props;
  return (
    <li className="group relative flex items-center mr-5">
      <button className={cn("flex items-center py-2 font-medium", textColor)}>
        <span>{title}</span>
        <ArrowDownIcon className="w-[10px] h-[5px] m-2" />
      </button>
      <div className="text-start font-normal px-4 pb-4 absolute left-0 top-full w-64 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="absolute inset-0 w-full opacity-5 pointer-events-none flex justify-end overflow-hidden">
          <BgSubMenuIcon className="scale-110 w-auto h-full" />
        </div>

        <ul className="text-sm font-normal">
          {children.map((item) => (
            <>
              <li className="mt-2" key={item.title}>
                <span className="text-[10px] leading-[100%] opacity-50 uppercase">
                  {item.title}
                </span>
              </li>
              {item.subMenu.map((subMenu) => (
                <NavItem to={subMenu.to} title={subMenu.title} />
              ))}
            </>
          ))}
        </ul>
      </div>
    </li>
  );
};

type Props = {};

const Header: React.FC<Props> = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { isOpenMenu, setIsOpenMenu } = useMainLayout();
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    if (isHome) {
      const handleScroll = () => {
        setIsScroll(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScroll(true);
    }
  }, [isHome]);

  const styles = useMemo(
    () => ({
      colorIcon: isScroll ? "text-black" : "text-white",
      logoColor: isScroll ? "text-[#30354b]" : "text-white",
      headerBackgroundColor: isScroll ? "bg-[#fff]" : "bg-transparent",
      headerShadow: isScroll ? "shadow-lg" : "shadow-none",
    }),
    [isScroll]
  );

  return (
    <div className={cn(!isHome && "sticky z-30 top-0")}>
      <header
        className={cn(
          "top-0 z-30 w-full h-[54px] transition-all duration-300 ease-in-out",
          styles.headerBackgroundColor,
          styles.headerShadow,
          isOpenMenu && "shadow-[0_4px_2px_rgba(0,0,0,0.15)] bg-white",
          isHome ? "fixed" : "sticky bg-white"
        )}
      >
        <Section>
          <Flex fullWidth align="center">
            <Link to="/" className="flex-shrink py-2 items-center flex">
              <Logo
                className={cn(
                  "h-[38px] pr-10 block transition-colors",
                  styles.logoColor,
                  isOpenMenu && "text-[#30354b]"
                )}
              />
            </Link>

            <Flex fullWidth fullHeight align="stretch" justify="end">
              <ul
                className={cn(
                  "xl:flex h-full hidden",
                  isOpenMenu && "xl:hidden",
                  styles.colorIcon
                )}
              >
                {links.map((link, index) => {
                  if (link.children) {
                    return (
                      <NavItemWithChildren
                        key={index}
                        textColor={styles.logoColor}
                        title={link.label}
                        children={link.children}
                      />
                    );
                  } else {
                    return (
                      <NavItem key={index} title={link.label} to={link.to} />
                    );
                  }
                })}

                <li className="flex items-center">
                  <Button
                    colorStyle={"purple"}
                    size={"sm"}
                    className="gap-3 text-white"
                  >
                    <DevConAppIcon className="size-5 text-white transform scale-[140%]" />
                    Devcon App
                  </Button>
                </li>
              </ul>

              <Flex align="center" justify={"center"} className="xl:hidden">
                <Button
                  className="px-0 py-0"
                  children={
                    isOpenMenu ? (
                      <CloseMenuIcon className="w-4 text-black" />
                    ) : (
                      <MenuIcon
                        className={cn("size-[22px]", styles.colorIcon)}
                      />
                    )
                  }
                  onClick={
                    isOpenMenu
                      ? () => setIsOpenMenu(false)
                      : () => setIsOpenMenu(true)
                  }
                />
              </Flex>
            </Flex>
          </Flex>
        </Section>
      </header>
      <MenuMobile />
    </div>
  );
};

export { Header };
