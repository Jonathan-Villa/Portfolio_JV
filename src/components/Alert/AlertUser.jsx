import React from "react";
import SnackBar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

function AlertUser({ open = false, message = "", severity = "", handleClose }) {
  return (
    <div>
      <SnackBar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          variant="filled"
          elevation={6}
          onClose={(e, reason) => handleClose(e, reason)}
          severity={severity}
        >
          {message}
        </Alert>
      </SnackBar>
    </div>
  );
}

export default AlertUser;
