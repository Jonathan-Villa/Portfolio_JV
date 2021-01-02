import React from "react";
import {Contact} from "../Footer/Footer"
import { useStyles } from "./styles";
import { Portfolio} from "../Portfolio/Portfolio"

const Home = () => {
  const classes = useStyles();

  return (
    <div id="home" className={classes.root}>
      <div className={classes.titlesContainer}>
        <div className={classes.title}>
          <h1>Jonathan Villa</h1>
        </div>

       
      </div>



    </div>
  );
};

export { Home };
