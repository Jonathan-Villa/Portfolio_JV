import React from "react";
import { Container } from "@material-ui/core";
import { Home } from "./components/Home/Home";
import { Resume } from "./components/Resume/Resume";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Contact } from "./components/Contact/Contact";

import "./App.css";

function App() {
  return (
    <div className="app-Container" >
      <div className="home-Container">
        <Home />
      </div>
      <Container>
        <div className="porfolio-Container">
          <Portfolio />
        </div>
        <div className="resume-Container">
          <Resume />
        </div>
        <div className="contact-Container">
          <Contact />
        </div>
      </Container>
    </div>
  );
}

export default App;
