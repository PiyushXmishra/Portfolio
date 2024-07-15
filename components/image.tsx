"use client";

import Image from "next/image";
import React from "react";
import cat from "@/public/cat.jpg"
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody >
        <CardItem translateZ="100" className="w-full mt-4 pl-10">
           <Image 
    style={{borderRadius:"50px", borderWidth:"2px" , borderColor:"#183D3D"}}
      src={cat}
      alt="NextUI Album Cover"
      className="m-5  bg-custom-sage"
    />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
