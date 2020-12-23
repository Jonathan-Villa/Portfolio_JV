import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/Home";
import Resume from "./components/Resume";
import TabBar from "./components/TabBar/TabBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <TabBar />
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
