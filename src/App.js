import React from "react";
import "./App.css";
import { Home, Portfolio } from "./components";
import AlertUser from "./components/Alert/AlertUser";
import { Context } from "./store/Store";


function App() {
  const [state, dispatch] = React.useContext(Context);

  const handleClose = (e, reason) => {
    console.log(e, reason);
    if (reason === "clickaway") {
      return dispatch({ type: "CLOSE_ALERT", closeAlert: false });
    }
    dispatch({ type: "CLOSE_ALERT", closeAlert: false });
  };

  return (
    <main>
      <AlertUser
        handleClose={handleClose}
        open={state.open}
        message={state.message}
        severity={state.severity}
      />
      <Home />
      <Portfolio />
    </main>
  );
}

export default App;
