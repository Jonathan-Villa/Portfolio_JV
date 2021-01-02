import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NavBar } from "./components/Nav/NavBar";
import { Contact, Home, Portfolio, Resume } from "./components";
import {Footer} from "./components"


ReactDOM.render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>
    <App />

    <footer>
      <Footer/>
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);
