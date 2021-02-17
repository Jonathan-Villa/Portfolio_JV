import React from "react";
import Container from "@material-ui/core/Container";
import { DialogComponent } from "../Dialog/dialog";
import { makeStyles } from "@material-ui/core";
import ProjectOverview from "./ProjectOverview";

function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [url, setURL] = React.useState("");

  const handleClick = (URL) => {
    setOpen(!open);
    setURL(URL);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Container
      id="projects"
      disableGutters
      maxWidth="xl"
      className={classes.mainContainer}
    >
      <ProjectOverview />

      <DialogComponent open={open} closeDialog={handleClose} src={url} />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    maxWidth: "100%",
    height: "auto",
    marginTop:"5rem",
    marginBottom: "5rem",
  },
}));

export { Portfolio };
