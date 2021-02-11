import project3 from "../../images/javascript-fullstack.jpg";
import project5 from "../../images/react-redux.jpg";
import { SiSocketDotIo, SiMaterialUi } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const projects = [
  {
    name: "Head Start",
    tools: (
      <>
        <div>
          <div>Front-end</div>
          <FaReact size="3.5em" />
        </div>
        <div>
          <div>Back-end</div>
          <FaNodeJs size="3.5em" />
        </div>
        <div>
          <div>UI Framework</div>
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
        <div>
          <div>Front-end</div>
          <FaReact size="3.5em" />
        </div>
        <div>
          <div>UI Framework</div>
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
          <div>Front-end</div>
          <FaReact size="3.5em" />
        </div>
        <div>
          <div>Back-end</div>
          <SiSocketDotIo size="3.5em" />
        </div>
        <div>
          <div>UI Framework</div>
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

export default projects;
