import React from "react";
import { useStyles } from "./styles";
import { Typography, Container, Grid } from "@material-ui/core";
import "./styles.css";

const Home = () => {
  const classes = useStyles();

  return (
    <Container id="home" maxWidth="lg" className={classes.rootContainer}>
      <Grid item xs={12} lg className={classes.heading}>
        <h2 className={classes.txtHeading}>Jonathan Villa</h2>
        <h4 className={classes.txtSubHeading}>Full-Stack Developer</h4>
        <span className="bg" />
      </Grid>

      <div className="thinkBoxWrapper">
        <div className="thinkBoxTxtWrapper">
          <span className="txtInBox">Think</span>
          <span className="txtInBox">Outside</span>
          <span className="txtInBox">The</span>
          <span className="txtBox">Box</span>
        </div>
      </div>
    </Container>
  );
};

export { Home };
