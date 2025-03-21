// data/skills.js
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaFigma,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiVercel,
  SiNetlify,
  SiSupabase,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = {
  frontend: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React.js", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux", icon: SiRedux },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Firebase", icon: SiFirebase },
    { name: "MongoDB", icon: SiMongodb },
    { name: "RESTful API", icon: TbApi },
    { name: "Supabase", icon: SiSupabase },
  ],
  tools: [
    { name: "Git", icon: FaGit },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: null },
    { name: "Vercel", icon: SiVercel },
    { name: "Figma", icon: FaFigma },
    { name: "Netlify", icon: SiNetlify },
  ],
};

export default skills;
