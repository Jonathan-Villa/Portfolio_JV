import React from "react";
import {
  Button,
  Toolbar,
  Dialog,
  AppBar,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { AiOutlineClose } from "react-icons/ai";

const useStyle = makeStyles(() => ({
  iframe: {
    boxSizing: "border-box",
    overflow: "hidden",
    height: "90vh",
    width: "100%",
  },
}));

function DialogComponent({ open, src, closeDialog }) {
  const classes = useStyle();

  const handleClose = () => {
    closeDialog(open);
  };

  return (
    <Dialog maxWidth="lg" fullWidth onClose={handleClose} open={open}>
      <AppBar elevation={1} style={{ position: "relative", backgroundColor:"#ffff" }} >
        <Toolbar>
          <IconButton onClick={handleClose}>
            <AiOutlineClose size="25px" fill="#000" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <iframe className={classes.iframe} src={src} />
    </Dialog>
  );
}

export { DialogComponent };
