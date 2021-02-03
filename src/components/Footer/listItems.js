import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "./style.css";


export const icons = [
  {
    icon: <AiOutlineGithub className="svg iconGitHub" size="1.2em" fill="#000"/>,
    title: "GitHub",
    link: "https://github.com/Jonathan-Villa",
  },
  {
    icon: <AiFillLinkedin className="svg iconLinkedIn" size="1.2em"  fill="#000"/>,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jonathan-villa-553897193/",
  },
];

export const nav = [
  { to: "home", title: "Home" },
  { to: "portfolio", title: "Portfolio" },
  { to: "resume", title: "Resume" },
];
