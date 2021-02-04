import React from "react";
import { useStyles } from "./styles";
import { Typography, Container, Grid } from "@material-ui/core";
import "./styles.css";

const Home = () => {
  const classes = useStyles();

  return (
    <Container id="home" maxWidth="lg" className={classes.rootContainer}>
      <Grid item xs className={classes.heading}>
        <h2 className={classes.txtHeading}>Jonathan Villa</h2>
        <h4 className={classes.txtSubHeading}>Full-Stack Developer</h4>
      </Grid>

      <div className="thinkBoxWrapper">
        <div className="thinkBoxTxtWrapper">
          <span className="txtThink">Think</span>
          <span className="txtOutside">Outside</span>
          <span className="txtOutside">The</span>
          <span className="txtBox">Box</span>
        </div>
      </div>
    </Container>
  );
};

export { Home };
