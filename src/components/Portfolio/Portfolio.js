import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Button } from "@material-ui/core/";
import { projects } from "./portfolioList";
import Grid from "@material-ui/core/Grid";
import { DialogComponent } from "../Dialog/dialog";
import { makeStyles } from "@material-ui/core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
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
        xPercent: -105,
        ease: "power1",
        opacity:0
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 0.8,
        stagger: {
          from: "start",
          amount: 0.5,
        },
        scrollTrigger: {
          id: "cards",
          start: "10% top",
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
      disableGutters
      maxWidth="xl"
      id="portfolio"
      className={classes.root}
      component="section"
    >
      <Container
        disableGutters
        maxWidth="xl"
        className={classes.gridContainerWrapper}
      >
        {projects.map((m, key) => (
          <Container
            maxWidth="xl"
            disableGutters
            key={key}
            className={classes.gridItemWrapper}
          >
            {key === 1 || key === 2 ? null : (
              <Divider
                style={{ position: "absolute", width: "100%", top: 0, left: 0 }}
              />
            )}

            <Container
              id="cards"
              ref={handleRefs}
              className={classes.gridContentWrapper}
            >
              <div className={classes.imgWrapper}>
                <img src={m.url} className={classes.img} />
                <span className={classes.imgBackDrop} />
              </div>
            </Container>

            <Divider
              style={{
                position: "absolute",
                width: "100%",
                bottom: 0,
                left: 0,
              }}
            />
          </Container>
        ))}
      </Container>
      <DialogComponent open={open} closeDialog={handleClose} src={url} />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    position: "relative",
    marginBottom: "80px",
  },

  gridContainerWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    margin: "auto",
    position: "relative",
  },

  gridContentWrapper: {
    margin: "auto",
    maxWidth: "1280px",
  },
  gridItemWrapper: {
    boxSizing: "border-box",
    padding: "80px 80px",
    display: "flex",
    position: "relative",
  },
  imgWrapper: {
    position: "relative",
    height: "100%",
    maxWidth: "400px",
    overflow: "hidden",
    left: "0",
  },
  img: {
    objectFit:"contain",
    width: "100%",
    height: "100%",
    position: "relative",
    display: "block",

  },

  imgBackDrop: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    left: "0",
    right: "0",
    transition: ".2s ease-out",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    zIndex: "1",

    "&:hover": {
      transition: ".2s ease-in",
      background: "rgba(0, 0, 0, 0.5)",
    },
  },

  btnRepo: {
    zIndex: "9999",
    height: "100%",
    width: "100%",
    transition: ".3s ease",
  },
}));

export { Portfolio };
