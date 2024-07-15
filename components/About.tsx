import React from "react";
import Image from "next/image";
import profilepfp from "@/public/IMG_20240118_182622.jpg";
const About = () => {
  return (
    <div className="px-24 py-5 pt-28">
      <div className="border-2 border-custom-teal p-5 flex rounded-2xl pl-9 bg-custom-sage/30 shadow-md shadow-custom-teal">
      <div className="flex items-center gap-3">
          <Image src={profilepfp} style={{width:"440px" , height:"170px"}} alt="profile" className=" rounded-2xl border-2 my-3 mt-4 border-custom-teal shadow-lg shadow-custom-sage"/>
          <div style={{maxWidth:"auto"}}className="">
          <p className="text-3xl font-bold text-custom-teal text-shadow-DEFAULT shadow-custom-sage pl-10 ">
          Hey,I am Piyush Mishra, a 20-year-old B.Tech sophomore from India. I&apos;m
          a full-stack developer passionate about exploring new technologies and
          contributing to open source projects.
        </p>
        </div>
        </div>
        </div>
      </div>
  );
};

export default About;
