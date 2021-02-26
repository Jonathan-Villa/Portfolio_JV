import {
  AiOutlineGithub,
  AiFillLinkedin,
} from "react-icons/ai";

import "./style.css";

export const nav = [
  { to: "home", label: "Home" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export const icons = [
  {
    icon: (
      <AiOutlineGithub className="svg iconGitHub" size="1.7em" fill="#000" />
    ),
    info: "/Jonathan-Villa",
    link: "https://github.com/Jonathan-Villa",
  },
  {
    icon: (
      <AiFillLinkedin className="svg iconLinkedIn" size="1.7em" fill="#000" />
    ),
    info: "/jonathan-villa-553897193",
    link: "https://www.linkedin.com/in/jonathan-villa-553897193/",
  },
];
