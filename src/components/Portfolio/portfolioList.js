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
    name: "Live Demo",
    description: `The purpose of this application was to allow 
      the Head Start organization, at Dominican University, 
      to create their time logs and reports in a more efficient matter – 
      time logs and reports were done manually on paper. 
      `,
    frontEnd: "Front-end: ReactJS, Redux, JWT Authentication, Material-UI",
    backEnd: "Back-end: NodeJS, ExpressJS, PassportJS, MongoDB",
    url: project5,
    width: "50%",
    btnTitle: "Github",
    github: "https://github.com/Jonathan-Villa/headstart.git",
    grid: (
      <Grid item xs lg={7} style={styleGrid}>
        <h3 style={fontStyle}>
          The purpose of this application was to allow the Head Start
          organization, at Dominican University, to create their time logs and
          reports in a more efficient matter – time logs and reports were done
          manually on paper.
        </h3>
      </Grid>
    ),
  },
  {
    name: "Live Demo",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
      consequatur magni quod nesciunt necessitatibus molestiae non\
      eligendi, magnam est aliquam recusandae? Magnam soluta minus\
      iste alias sunt veritatis nisi dolores!`,
    width: "50%",
    url: project3,
    demo: "https://jv-ecommerce-v1.azurewebsites.net/",
    style: {
      display: "flex",
      flexDirection: "row-reverse",
    },
    btnTitle: "Github",
    grid: (
      <Grid item xs lg={6} style={styleGrid}>
        <h3 style={fontStyle}>E-commerce</h3>
      </Grid>
    ),
  },
  {
    name: "Live Demo",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
      consequatur magni quod nesciunt necessitatibus molestiae non\
      eligendi, magnam est aliquam recusandae? Magnam soluta minus\
      iste alias sunt veritatis nisi dolores!`,
    url: project3,
    width: "50%",
    btnTitle: "Github",
    grid: (
      <Grid item xs lg={6} style={styleGrid}>
        <h3 style={fontStyle}>LiveChat</h3>
      </Grid>
    ),
  },
];
