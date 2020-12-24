import React from "react";
import { useStyles } from "./styles";
import imagePDF from "../../images/JonathanVilla_Resume.pdf";
import { Typography } from "@material-ui/core";

function Resume(props) {
  const { index, value } = props;
  const classes = useStyles();
  return (
    <div id="resume" className={classes.mainContainer}>
      <Typography>
          
      </Typography>
    </div>
  );
}

export { Resume };
