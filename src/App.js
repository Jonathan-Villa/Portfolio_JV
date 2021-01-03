import React from "react";
import { Container } from "@material-ui/core";
import { NavBar } from "./components/Nav/NavBar";
import { Canvas } from "react-three-fiber";
import { Text } from "./components";

import "./App.css";
import { Contact, Home, Portfolio, Resume } from "./components";
function App() {
  return (
    <Container disableGutters maxWidth="md">
      <Home />
      <Portfolio/>

      

    </Container>
  );
}

export default App;
