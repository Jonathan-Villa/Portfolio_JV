import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import imagePDF from "../images/JonathanVilla_Resume.pdf";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#ffff",
    marginLeft: "240px",
    height:"92vh",
    position:"static",
    width:"auto"

  },
  embed: {
    width:"100%",
    height:"100%"
  }
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <iframe className={classes.embed} style= {{width:'90%', height:'90%'}} src={imagePDF} />
    </div>
  );
};

export default Resume;
