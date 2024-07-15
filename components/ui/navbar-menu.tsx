"use client";
import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export const MenuItem = ({
  item,
  to,
}: {
  item: string;
  to: string;
}) => {
  return (
    <div className="">
      <ScrollLink
        to={to}
        smooth={true}
        duration={500}
        className="cursor-pointer text-custom-teal font-bold text-2xl text-shadow"
      >
        {item}
      </ScrollLink>
    </div>
  );
};

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav className="bg-custom-mist rounded-full border-transparent shadow-input flex justify-around gap-x-8 sm:gap-x-28 md:gap-x-36 lg:gap-x-48 px-20 py-8 border border-1 border-white drop-shadow-lg">
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className="text-neutral-700 dark:text-neutral-200 hover:text-black">
      {children}
    </Link>
  );
};
