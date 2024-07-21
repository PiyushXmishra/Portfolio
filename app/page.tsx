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
      <div className="hidden md:block">
      <NavbarDemo />
      <Hero />
      <LinksStrip />
      <About />
      <Skills />
      <Projects />
      <Footer/>
      </div>
      <div className="md:hidden flex items-center justify-center h-screen text-custom-teal font-bold text-sm sm:text-xl">
  <p>For a better experience, please use a larger screen.</p>
</div>
    </div>
  );
}
