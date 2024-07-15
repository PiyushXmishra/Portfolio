import React from "react";
import Image from "next/image";
import Lines from "@/public/Lines2.png";
import { LangAndTools } from "./LangAndTools";
const Skills = () => {
  return (
    <div id="Skills">
        <div className="absolute w-max" style={{ right:"40px"}}>
          <Image
            style={{ borderRadius: "2rem" }}
            className="scale-125"
            src={Lines}
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </div>
      <div className="flex justify-center text-3xl font-bold text-custom-teal pt-28 pb-5">
        <p
          className="text-shadow-DEFAULT shadow-custom-sage"
          style={{ fontSize: "2em" }}
        >
          Skills
        </p>
        
      </div>
<LangAndTools/>
    </div>
  );
};

export default Skills;
