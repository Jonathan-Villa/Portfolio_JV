import React from "react";
import { Container } from "@material-ui/core";
import { NavBar } from "./components/Nav/NavBar";
import { Text } from "./components";

import "./App.css";
import { Contact, Home, Portfolio, Resume } from "./components";
function App() {
  return (
    <Container maxWidth='xl' disableGutters style={{width:"100%",}}>
      <Home />
      <Portfolio/>

      

    </Container>
  );
}

export default App;
