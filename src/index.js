import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavBar } from "./components/Nav/NavBar";
import { Footer } from "./components";
import Store from "./store/Store";
import Divider from "@material-ui/core/Divider"

ReactDOM.render(
  <Store>
    <NavBar />

    <App />

    <footer>
      <Divider/>
      <Footer />
    </footer>
  </Store>,
  document.getElementById("root")
);
