import React from "react";
import { useStyles } from "./styles";
import { Typography, Container, Grid } from "@material-ui/core";

const styleFontMainHead={
    fontSize:"5.2rem",
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
}
const styleFontSubHead = {
  fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    fontSize:"2.5rem",
}

const Home = () => {
  const classes = useStyles();

  return (
    <Container id="home" maxWidth="lg" className={classes.root}>
      <Grid item xs={12} lg={8} className={classes.headingWrap}>
        <Grid item xs className={classes.heading}>
          <Typography className={classes.txtHeading} style={styleFontMainHead} variant="h2">
            Jonathan Villa
          </Typography>
          <Typography className={classes.txtHeading} style={styleFontSubHead} variant="h4">
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Home };
