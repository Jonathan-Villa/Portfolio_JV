import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NavBar from "./components/Nav/NavBar";
import { Footer } from "./components";
import Store from "./store/Store";
ReactDOM.render(
  <Store>
    <NavBar />
    <App />

    <footer>
      <Footer />
    </footer>
  </Store>,
  document.getElementById("root")
);
