import Grid from "@material-ui/core/Grid";
import project3 from "../../images/javascript-fullstack.jpg";
import project5 from "../../images/react-redux.jpg";
import { SiSocketDotIo, SiMaterialUi } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const styleGrid = {
  boxSizing: "border-box",
  padding: "20px",
};

const fontStyle = {
  letterSpacing: ".05em",
  fontSize: "1.2rem",
  textAlign: "left",
  color: "#000",
};

export const projects = [
  {
    name: "Head Start",
    tools: (
      <>
        <div>
          <span>Front-end:</span>
          <FaReact size="3.5em" />
        </div>
        <div>
          <span>Back-end:</span>
          <FaNodeJs size="3.5em" />
        </div>
        <div>
          <span>UI Framework:</span>
          <SiMaterialUi size="3.5em" />
        </div>
      </>
    ),
    frontEnd: "Front-end: ReactJS, Redux, JWT Authentication, Material-UI",
    backEnd: "Back-end: NodeJS, ExpressJS, PassportJS, MongoDB",
    url: project5,
    width: "50%",
    btnTitle: "Github",
    repo: "https://github.com/Jonathan-Villa/headstart.git",
  },
  {
    name: "E-commerce",
    tools: (
      <>
        <div style={{display:"flex"}}>
          <span>Front-end:</span>
          <FaReact size="3.5em" />
        </div>
        <div>
          <span>UI Framework:</span>
          <SiMaterialUi size="3.5em" />
        </div>
      </>
    ),
    deployed: "Deployed with Azure DevOps",
    width: "50%",
    url: project3,
    demo: "https://jv-ecommerce-v1.azurewebsites.net/",
    repo: "https://github.com/Jonathan-Villa/ecommerce-react-app.git",
    style: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    btnTitle: "Github",
  },
  {
    name: "Live Chat",
    tools: (
      <>
        <div>
          <span>Front-end:</span>
          <FaReact size="3.5em" />
        </div>
        <div>
          <span>Back-end:</span>
          <SiSocketDotIo size="3.5em" />
        </div>
        <div>
          <span>UI Framework:</span>
          <SiMaterialUi size="3.5em" />
        </div>
      </>
    ),
    url: project3,
    width: "50%",
    btnTitle: "Github",
    repo: "https://github.com/Jonathan-Villa/livechat-react-app.git",
  },
];
