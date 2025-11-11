"use client";

import { Flex } from "@/components/ui";
import Avatar from "@/components/ui/avatar";
import { cn } from "@/shared/utils";
import { motion, useSpring } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";

const Person = [
  {
    name: "Aya",
    role: "Executive Director @ Ethereum Foundation",
    ava: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FAya-Miyaguchi.702ccbbf.png&w=96&q=75",
  },
  {
    name: "Vitalik Buterin",
    role: "Co-founder @ Ethereum",
    ava: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fvitalik.c74d14ae.png&w=96&q=75",
  },
  {
    name: "Roger Dingledine",
    role: "Co-founder @ Tor Project",
    ava: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FRoger-Dingledine.937d1753.png&w=96&q=75",
  },
  {
    name: "Bruno Macaes",
    role: "Political Scientist, Author, and former Secretary of State",
    ava: "https://devcon.org/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbruno.d467476f.png&w=96&q=75",
  },
];

const ImageReveal2 = () => {
  const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>(
    {
      src: "",
      alt: "",
      opacity: 0,
    }
  );

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const spring = {
    stiffness: 250,
    damping: 15,
    mass: 0.1,
  };

  const imagePos = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
    rotate: useSpring(0, spring),
    scale: useSpring(0.8, spring),
  };

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    const relativeX = clientX - containerRect.left;
    const relativeY = clientY - containerRect.top - 80;

    imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
    imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);

    const angle = Math.atan2(relativeY, relativeX) * (180 / Math.PI);
    imagePos.rotate.set(angle / 5);
  };

  const handleImageInteraction = (img: string, opacity: number) => {
    setImg({ src: img, alt: "ss", opacity });
    imagePos.scale.set(opacity === 1 ? 1.2 : 0.8);
  };

  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: -50,
      transition: {
        delay: index * 0.1,
      },
    }),
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="" ref={containerRef} onMouseMove={handleMove}>
      <Flex direction={"col"} className="w-full my-2">
        {Person.map((item, index) => (
          <>
            <motion.div
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              key={item.name}
              className="w-full hover:bg-indigo-100 hover:bg-opacity-60 cursor-pointer rounded-lg"
              onMouseEnter={() => handleImageInteraction(item.ava, 1)}
              onMouseMove={() => handleImageInteraction(item.ava, 1)}
              onMouseLeave={() => handleImageInteraction(item.ava, 0)}
            >
              <Avatar img={item.ava} name={item.name} sub={item.role} />
            </motion.div>
            <div
              className={cn(
                "border-t-2 border-gray-100 w-full",
                index === Person.length - 1 && "hidden"
              )}
            />
          </>
        ))}

        <motion.img
          ref={imageRef}
          src={img.src}
          alt={img.alt}
          initial={{ scale: 0.3 }}
          animate={{
            scale: img.opacity === 1 ? 1 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            mass: 0.5,
          }}
          key={img.src}
          className="w-[300px] h-[400px] rounded-lg object-cover absolute top-0 z-10 left-0 transition-opacity duration-200 ease-in-out pointer-events-none"
          style={{
            x: imagePos.x,
            y: imagePos.y,
            opacity: img.opacity,
            rotate: imagePos.rotate,
          }}
        />
      </Flex>
    </div>
  );
};

export default ImageReveal2;
