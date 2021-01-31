import React from "react";
import { Button, Dialog, DialogActions, makeStyles } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  root: {},
}));

function DialogComponent({ open, onClose, click, src }) {
  const styles = useStyle();

  const handleClose = () => {
    onClose(click);
  };

  return (
    <Dialog maxWidth="lg" fullWidth onClose={handleClose} open={open}>
      <embed
        style={{ width: "100vw", height: "100vh", margin: "10px" }}
        src={src}
      />
    </Dialog>
  );
}

export { DialogComponent };
