"use client";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({
  links,
}: {
  links: {
    href: string;
    icon: JSX.Element;
    id: number;
    tooltip: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex gap-x-24">
      {links.map((link) => (
        <div
          className="relative group "
          key={link.id}
          onMouseEnter={() => setHoveredIndex(link.id)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <AnimatePresence>
            {hoveredIndex === link.id && (
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
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-10  transform -translate-x-1/2 text-xs flex flex-col items-center justify-center rounded-md bg-custom-teal z-50 shadow-lg px-4 py-2"
              >
                <div className="font-bold text-white">
                  {link.tooltip}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            <div className="rounded-full h-14 w-14 group-hover:scale-110 group-hover:z-30 relative transition duration-500">
              {link.icon}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
