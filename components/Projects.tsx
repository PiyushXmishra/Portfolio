import { HoverEffect } from "./ui/card-hover-effect";

export function Projects() {
  return (
    <>
    <div id="Projects" className="flex justify-center text-3xl font-bold text-custom-teal pt-28 mb-20">
        <p
          className="text-shadow-DEFAULT shadow-custom-sage"
          style={{ fontSize: "2em" }}
        >
          Projects
        </p>
        
      </div>
    <div className="max-w-5xl mx-auto pr-8">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    image:"/images/melosynthia.png",
    event:"HackaTron S5",
    description:
      "Discover the power of AI led music generation.",
    Weblink: "https://melosynthiaai.vercel.app/",
    GithubLink:"https://github.com/AYUSHMAN0503/MeloSynthiaAI"
  },
  {
    image:"/images/youtube.png",
    title:"YTDL",
    event:"PiyushXmishra",
    description:
      "Not Your Another Youtube Downloader.",
    Weblink: "http://34.27.210.129/",
    GithubLink:""
  },
  
];
