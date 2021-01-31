import React from "react";
import { useStyles } from "./styles";
import WebSvg from "../../images/Web_design_SVG.svg";
import { Typography, Container, Grid } from "@material-ui/core";

const styleFontH2={
    fontSize:"6rem",
}

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" disableGutters className={classes.root}>
      <Grid item xs={12} lg={8} className={classes.headingWrap}>
        <Grid item xs className={classes.heading}>
          <Typography className={classes.txtHeading} style={styleFontH2} variant="h2">
            Jonathan Villa
          </Typography>
          <Typography className={classes.txtHeading} variant="h4">
            Full-Stack Developer
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Home };
