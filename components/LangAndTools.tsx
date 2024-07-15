"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
export function LangAndTools() {
  return (
    <>
    <div className="mt-20 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
    <div className="mt-20 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
    </>
  );
}
 
const testimonials = [
  {
   tool:"JavaScript",
   image:"/images/javascript.png"
  },
  {
   tool:"TypeScript",
   image:"/images/typescript.png"
  },
  {
   tool:"github",
   image:"/images/github.png"
  },
  {
   tool:"nodejs",
   image:"/images/nodejs.png"
  },
  {
   tool:"express",
   image:"/images/expressjs.png"
  },
  {
   tool:"Docker",
   image:"/images/docker.png"
  },
  {
   tool:"React",
   image:"/images/react.png"
  },
  {
   tool:"NextJs",
   image:"/images/nextjs.png"
  },
  {
   tool:"MongoDB",
   image:"/images/mongodb.png"
  },
  {
   tool:"GCP",
   image:"/images/gcp.png"
  },
  {
   tool:"Git",
   image:"/images/git.png"
  },
  {
   tool:"&more",
   image:"/images/smiley.png"
  },
  
 
];