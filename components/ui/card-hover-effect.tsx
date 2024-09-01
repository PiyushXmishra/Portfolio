"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {Github2} from "@/components/icons/icons"
import { Globe } from "@/components/icons/icons";
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title?: string;
    image: string;
    description: string;
    event: string;
    Weblink: string;
    GithubLink: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-x-20 py-10  ",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          key={idx}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-custom-teal dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            event={item.event}
            Weblink={item.Weblink}
            GithubLink={item.GithubLink}
          />
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  title,
  image,
  description,
  event,
  Weblink,
  GithubLink,
  className,
}: {
  title?: string;
  image: string;
  description: string;
  event: string;
  Weblink: string;
  GithubLink: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid rounded-2xl h-full w-full overflow-hidden bg-custom-card border-2 border-custom-teal group-hover:border-slate-700 relative z-20 ",
        className
      )}
    >
      <div className="bg-custom-teal justify-self-end p-2 h-max ">
        <p className="text-xl font-bold text-white">{event}</p>
      </div>
      <div>
        <div className="flex items-center pt-4 pl-5 z-50 ">
          <Image
            src={image}
            alt={""}
            fill
            className="!h-10 !w-min !static "
          />
          <div className="ml-5 ">
            <CardTitle>{title}</CardTitle>
          </div>
        </div> 
        <div className="pl-6 pt-2 ">
          <CardDescription>{description}</CardDescription>
        </div>
      </div>
      <div className="flex space-x-4 justify-end items-end p-4">
            <Link href={GithubLink} target="_blank" passHref>
              <Github2/>
            </Link>
            <Link href={Weblink} target="_blank" passHref>
             <Globe/>
            </Link>
          </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn("!text-custom-teal text-shadow-sm shadow-custom-sage font-semibold tracking-wide text-2xl", className)}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        " text-custom-teal tracking-wide leading-relaxed text-lg font-bold",

        className
      )}
    >
      {children}
    </p>
  );
};
