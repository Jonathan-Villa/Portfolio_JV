import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Divider from "@material-ui/core/Divider";
import { NavBar } from "./components/Nav/NavBar";
import { Footer } from "./components";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />

    <App />

    <footer>
      <Footer />
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);
