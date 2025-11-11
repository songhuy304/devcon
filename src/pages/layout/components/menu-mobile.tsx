import { ArrowDownIcon, Flex } from "@/components/ui";
import { links } from "@/pages/layout/components/header";
import { useMainLayout } from "@/pages/layout/main-layout";
import { useWindowSize } from "@/shared/hooks";
import { cn } from "@/shared/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const variant = {
  open: {
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  closed: {
    y: "-100vh",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const NavItem = ({
  to,
  label,
  className,
  hasChildren = false,
}: {
  to: string;
  label: string;
  className?: string;
  hasChildren?: boolean;
}) => {
  const { setIsOpenMenu } = useMainLayout();

  return (
    <Link
      to={to || ""}
      onClick={() => {
        if (!hasChildren) setIsOpenMenu(false);
      }}
      children={label}
      className={cn(
        "text-primary font-semibold text-lg py-4 block uppercase",
        className
      )}
    />
  );
};

const MenuMobile = () => {
  const { isOpenMenu, setIsOpenMenu } = useMainLayout();
  const { width } = useWindowSize();

  const [open, setOpen] = useState("");

  useEffect(() => {
    if (width > 1280) setIsOpenMenu(false);
  }, [width]);

  return (
    <AnimatePresence>
      {isOpenMenu && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variant}
          className={cn(
            "fixed top-0 left-0 bottom-0 w-full flex flex-col pt-[58px] bg-white z-[19]"
          )}
        >
          <div>
            <ul className="text-sm">
              {links &&
                links.map((link, index) => {
                  if (link.children)
                    return (
                      <li
                        className={cn(
                          "border-b border-[#0000001a] cursor-pointer px-[64px]",
                          open === link.label && "bg-[#f8f8f8]"
                        )}
                        key={index}
                        onClick={() =>
                          setOpen(link.label === open ? "" : link.label)
                        }
                      >
                        <Flex justify={"between"} align={"center"}>
                          <NavItem
                            label={link.label}
                            to={link.to || ""}
                            hasChildren
                          />
                          <ArrowDownIcon className="text-primary" />
                        </Flex>

                        <AnimatePresence>
                          {open === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: open === link.label ? "auto" : 0,
                                opacity: open === link.label ? 1 : 0,
                              }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              {link.children.map((item) => (
                                <ul>
                                  <li>
                                    <span className="text-[12px] font-semibold leading-[100%] opacity-50 uppercase">
                                      {item.title}
                                    </span>
                                  </li>
                                  {item.subMenu.map((subMenu) => (
                                    <li className="border-b border-[#0000001a] hover:underline ]">
                                      <NavItem
                                        to={subMenu.to}
                                        label={subMenu.title}
                                        className="text-sm py-4 w-full"
                                      />
                                    </li>
                                  ))}
                                </ul>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    );

                  return (
                    <li
                      className="border-b border-[#0000001a] px-[64px]"
                      key={index}
                    >
                      <NavItem label={link.label} to={link.to || ""} />
                    </li>
                  );
                })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuMobile;
