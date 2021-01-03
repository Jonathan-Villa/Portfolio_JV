import React from "react";
import { useStyles } from "./styles";
import WebSvg from "../../images/Web_design_SVG.svg";
import { Typography, Container, Grid } from "@material-ui/core";

const Home = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" id="home" className={classes.root}>
      <Grid className={classes.headingWrap}>
        
        <Grid item xs className={classes.heading}>
          <Typography
            style={{ fontFamily: "Varela Round, san serif" }}
            variant="h2"
          >
            Jonathan Villa
          </Typography>
          <Typography
            style={{ fontFamily: "Varela Round, san serif" }}
            variant="h4"
          >
            Full-Stack Developer
          </Typography>
        </Grid>

        <Grid item xs className={classes.imgSvgWrapper}>
          <img className={classes.svg} src={WebSvg} alt="Web design" />
        </Grid>
      </Grid>
    </Container>
  );
};

export { Home };
