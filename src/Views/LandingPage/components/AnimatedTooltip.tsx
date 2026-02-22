"use client";

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
    href?: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const activeIndex = hoveredIndex;

  return (
    <div className="grid grid-cols-3 md:flex md:flex-row items-center justify-center gap-4 md:gap-6">
      {items.map((item) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {activeIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: 0,
                  rotate: 0,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 md:-left-1/2 md:translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-xl bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          {item.href ? (
            <Link href={item.href} aria-label={`View ${item.name} details`}>
              <Image
                onMouseMove={handleMouseMove}
                height={120}
                width={120}
                src={item.image}
                alt={item.name}
                className="object-cover !m-0 !p-0 object-top rounded-full h-20 w-20 md:h-28 md:w-28 border-4 border-white group-hover:scale-110 group-hover:z-30 group-hover:border-primary-500 active:scale-105 relative transition duration-500 shadow-lg cursor-pointer"
              />
            </Link>
          ) : (
            <Image
              onMouseMove={handleMouseMove}
              height={120}
              width={120}
              src={item.image}
              alt={item.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-20 w-20 md:h-28 md:w-28 border-4 border-white group-hover:scale-110 group-hover:z-30 group-hover:border-primary-500 active:scale-105 relative transition duration-500 shadow-lg cursor-pointer"
            />
          )}
        </div>
      ))}
    </div>
  );
};
