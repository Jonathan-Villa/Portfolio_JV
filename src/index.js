import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import {NavBar} from "../src/components/Nav/NavBar"
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header>
          <NavBar/>
      </header>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
