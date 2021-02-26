import React from "react";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
function ProjectInfo({ name, tools, description, open }) {
  const classes = useStyles();

  return (
    <Paper
      className={
        open ? classes.disableDropDown : classes.projectInfoInnerWrapper
      }
    >
      <div className={classes.headingWrapper}>
        <h2>{name}</h2>
      </div>
      <div className={classes.projectInnerDescWrapper}>
        <div className={classes.projectInnerTextWrapper}>
          <p>Describe</p>
        </div>
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  projectInfoInnerWrapper: {
    zIndex: "-1",
    position: "relative",
    maxWidth: "100%",
    height: "28rem",
    width: "50%",
    textAlign: "center",
    display: "block",
    left: "-.7rem",
    boxSizing: "border-box",
    padding: "1rem",

    [theme.breakpoints.down("md")]: {
      height: "23rem",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      left: "0",
    },
  },
  headingWrapper: {
    fontSize: "1.2em",
    paddingBottom: "15px",
    position: "relative",
    maxHeight: "100%",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.0em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".98em",
    },
  },

  projectInnerDescWrapper: {
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  projectInnerIconsWrapper: {
    display: "flex",
    margin: "15px 15px 0px 15px",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  projectInnerTextWrapper: {
    maxHeight: "100%",
    flex: 1,
  },

  disableDropDown: {
    transform: "",
  },
}));

export default ProjectInfo;
