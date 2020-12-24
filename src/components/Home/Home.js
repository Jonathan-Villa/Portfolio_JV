import React from "react";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useStyles } from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root}>
      <Typography className={classes.title} variant="h1">
        Jonathan Villa
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        Full Stack Developer
      </Typography>

      <div>
        <div>
          <IconButton>
            <AiFillGithub fill="#343a40" />
          </IconButton>

          <IconButton>
            <AiFillLinkedin fill="#0e76a8" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export { Home };
