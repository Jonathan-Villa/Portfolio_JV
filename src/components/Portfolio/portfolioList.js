import Grid from "@material-ui/core/Grid";
import project3 from "../../images/javascript-fullstack.jpg";
import project5 from "../../images/react-redux.jpg";
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
    tools: " React.js, Redux, Node.js, Express.js, JWT",
    frontEnd: "Front-end: ReactJS, Redux, JWT Authentication, Material-UI",
    backEnd: "Back-end: NodeJS, ExpressJS, PassportJS, MongoDB",
    url: project5,
    width: "50%",
    btnTitle: "Github",
    repo: "https://github.com/Jonathan-Villa/headstart.git",
  },
  {
    name: "E-commerce",
    tools: " React.js",
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
    tools: "React.js, Socket.io",
    url: project3,
    width: "50%",
    btnTitle: "Github",
    repo: "https://github.com/Jonathan-Villa/livechat-react-app.git",
  },
];
