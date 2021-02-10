import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";

import "./style.css";

export const nav = [
  { to: "home", label: "Home" },
  { to: "projects", label: "Projects" },
  { to: "contact", label: "Contact" },
];

export const icons = [
  {
    icon: <AiFillPhone id="footerIcons" size="1.7em" />,
    info: "(815) 666 - 0808",
  },
  {
    icon: <AiOutlineMail className="footerIcons" size="1.7em" />,
    info: "Jonathanvilla03@gmail.com",
  },
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
