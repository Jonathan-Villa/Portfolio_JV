import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core/";
import { projects } from "./portfolioList";
import { useStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import { DialogComponent } from "../Dialog/dialog";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardAction from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
const fontFamily = {
  fontFamily: "Merriweather, serif",
  fontFamily: "Noto Sans SC, sans-serif",
};

function Portfolio() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [url, setURL] = useState("");
  const ref = useRef([]);

  const handleClick = (URL) => {
    setOpen(!open);
    setURL(URL);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        yPercent: -35,
        ease: "power1",
      },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.1,
        stagger: {
          from: "start",
          amount: 0.5,
        },
        scrollTrigger: {
          id: "cards",
          start: "top+=100",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  const handleRefs = (e) => {
    if (e && !ref.current.includes(e)) {
      ref.current.push(e);
    }
  };

  return (
    <Container
      maxWidth="lg"
      id="portfolio"
      className={classes.root}
      component="section"
    >
      <Grid
        container
        className={classes.gridContainerCardWrapper}
        direction="row"
        justify="center"
      >
        {projects.map((image, key) => (
          <Grid
            xs={12}
            sm={6}
            lg
            item
            key={key}
            className={classes.gridItemCardWrapper}
          >
            <Card
              key={key}
              ref={handleRefs}
              id="cards"
              elevation={3}
              className={classes.cardWrapper}
            >
              <CardMedia image={image.url} className={classes.mediaCard} />

              <CardContent className={classes.cardContentWrapper}>
                <Typography variant="body1" style={fontFamily}>
                  {image.name}
                </Typography>
                <Typography variant="body2" style={fontFamily}>
                  Tools:{image.tools}
                </Typography>
              </CardContent>

              <CardAction className={classes.btnCardWrapper}>
                <Button
                  component="a"
                  href={image.repo}
                  style={fontFamily}
                  color="primary"
                  variant="outlined"
                >
                  Github
                </Button>
                <Button
                  onClick={() => handleClick(image.demo)}
                  style={fontFamily}
                  color="secondary"
                  variant="outlined"
                >
                  Demo
                </Button>
              </CardAction>
            </Card>
          </Grid>
        ))}
      </Grid>
      <DialogComponent open={open} closeDialog={handleClose} src={url} />
    </Container>
  );
}

export { Portfolio };
