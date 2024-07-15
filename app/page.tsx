import { NavbarDemo } from "@/components/navbar";
import Image from "next/image";
import Lines from "@/public/Lines2.png";
import Hero from "@/components/hero";
import LinksStrip from "@/components/LinksStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <NavbarDemo />
      <Hero />
      <LinksStrip />
      <About />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}
