import React from "react";
import { useStyles } from "./styles";
import { Typography, Container, Grid } from "@material-ui/core";
import "./styles.css";

const styleFontMainHead = {
  fontSize: "3.7rem",
  fontFamily: "Merriweather, serif",
  fontFamily: "Noto Sans SC, sans-serif",
};
const styleFontSubHead = {
  fontFamily: "Merriweather, serif",
  fontFamily: "Noto Sans SC, sans-serif",
  fontSize: "2.5rem",
};

const Home = () => {
  const classes = useStyles();

  return (
    <Container id="home" maxWidth="lg" className={classes.root}>
      <Grid item xs={12} lg={8} className={classes.headingWrap}>
        <Grid item xs className={classes.heading}>
          <span className="txtHeadingName" style={styleFontMainHead}>
            <h2>Jonathan Villa</h2>
            
          </span>
          <Typography
            className={classes.txtHeading}
            style={styleFontSubHead}
            variant="h4"
          >
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Home };
