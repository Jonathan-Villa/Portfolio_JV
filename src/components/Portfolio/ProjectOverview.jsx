import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { default as projects } from "./portfolioList";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { FaArrowCircleDown } from "react-icons/fa";
import ProjectInfo from "./ProjectInfo";

import "./styles.scss";
gsap.registerPlugin(ScrollTrigger);

function ProjectOverview() {
  const classes = useStyles();
  const ref = React.useRef([]);
  const refBtn = React.useRef();
  const [openDropDown, setDropDown] = React.useState(false);

  React.useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        xPercent: -80,
        ease: "ease-in",
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        xPercent: 0,
        stagger: {
          from: "start",
          amount: 1,
        },
        scrollTrigger: {
          scrub: 1.5,
          id: "cards",
          start: "500rem 450rem",
          end: "center 100rem",
          toggleActions: "play none none none",
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
    <>
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
            maxWidth="xl"
            id="cards"
            ref={handleRefs}
            className={classes.gridContentWrapper}
          >
            <div className={classes.imgWrapper}>
              <img src={m.url} className={classes.img} />
              <div className={classes.imgBackDrop} />
            </div>

            <ProjectInfo name={m.name} tools={m.tools} />
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
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  gridItemWrapper: {
    boxSizing: "border-box",
    paddingTop: "5rem",
    paddingBottom: "5rem",
    display: "flex",
    maxWidth: "100%",
    position: "relative",
    height: "90vh",
    display: "flex",
    justifyContent: "flex-start",

    [theme.breakpoints.down("sm")]: {},
  },
  gridContentWrapper: {
    height: "100%",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  imgWrapper: {
    left: "0rem",
    position: "relative",
    height: "auto ",
    width: "40rem",
    overflow: "hidden",
    border: "1px solid #000000",
    // boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",

    [theme.breakpoints.down("md")]: {
      width: "30rem",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  img: {
    width: "100%",
    margin: "auto",
    height: "100%",
    display: "block",
  },

  imgBackDrop: {
    position: "absolute",
    height: "100%",
    maxWidth: "100%",
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
  desktopInfo: {
    width: "50%",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  dropDown: {
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
    marginTop: "0.9375rem",
    marginBottom: "0.9375rem",
  },

  arrowIconActive: {
    transform: "rotate(0deg)",
    transition: ".3s ease",
  },
}));

export default ProjectOverview;
