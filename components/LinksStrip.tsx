import { Github, Linkedin, Mail, Twitter, Me } from "@/components/icons/icons"; // replace with actual path
import { AnimatedTooltip } from "./ui/animated-tooltip";

const links = [
  { href: "https://github.com/PiyushXmishra", icon: <Github />,id:1, tooltip:"Github" },
  { href: "https://in.linkedin.com/in/piyush-mishra-5b6aa129a", icon: <Linkedin /> ,id:2, tooltip:"Linkedin"},
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=piyushbhp83@gmail.com", icon: <Mail /> ,id:3, tooltip:"Gmail"},
  { href: "https://x.com/Piyuxh1501", icon: <Twitter />,id:4, tooltip:"Twitter" },
  { href: "", icon: <Me />,id:5, tooltip:"it's Me" },
];

const LinkStrip = () => {
  return (
  <div className="flex flex-row items-center justify-center mb-10 w-full ">
  <AnimatedTooltip links={links}/>
</div>
)
};

export default LinkStrip;
