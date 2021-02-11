import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { default as projects } from "./portfolioList";
gsap.registerPlugin(ScrollTrigger);

function ProjectOverview() {
  const classes = useStyles();
  const ref = React.useRef([]);

  React.useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        xPercent: -80,
        ease: "circ",
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
          scrub: 1.2,
          id: "#cards",
          start: "20% 50%",
          end: "center 10%",
          toggleActions: "play pause none reset",
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
            id="cards"
            ref={handleRefs}
            className={classes.gridContentWrapper}
          >
            <Grid item sm={12} md={12} lg={12} className={classes.imgWrapper}>
              <div>
                <img src={m.url} className={classes.img} />
                <span className={classes.imgBackDrop} />
              </div>
            </Grid>

            <Grid item xs={12} className={classes.projectInfoWrapper}>
              <div className={classes.projectInfoInnerWrapper}>
                <div className={classes.headingWrapper}>
                  <h2>{m.name}</h2>
                </div>
                <div className={classes.projectInnerDescWrapper}>
                  <div className={classes.projectInnerIconsWrapper}>
                    {m.tools}
                  </div>
                  <div className={classes.projectInnerTextWrapper}>
                    <p>Describe</p>
                  </div>
                </div>
              </div>
            </Grid>
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
  main: {
    width: "100% ",
    height: "100%",
    textAlign: "center",
    maxHeight: "100%",
    display: "block",
  },
  gridContentWrapper: {
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  gridItemWrapper: {
    boxSizing: "border-box",
    paddingTop: "80px",
    paddingBottom: "80px",
    display: "flex",
    maxWidth: "100%",
    position: "relative",

    [theme.breakpoints.down("sm")]: {},
  },

  imgWrapper: {
    position: "relative",
    maxWidth: "fit-content",
    height: "100%",
    overflow: "hidden",
    border: "1px solid #000000",

    [theme.breakpoints.down("sm")]: {
      maxHeight: "100%",
    },
  },
  img: {
    objectFit: "contain",
    maxWidth: "100%",
    maxHeight: "100%",
    height: "auto",
    display: "flex",
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

  projectInfoWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: "100%",
  },

  headingWrapper: {
    fontSize: "1.2em",
    paddingBottom: "15px",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.0em",
    },

    [theme.breakpoints.down("sm")]: {
      fontSize: ".98em",
    },
  },

  projectInfoInnerWrapper: {
    width: "100% ",
    height: "100%",
    textAlign: "center",
    maxHeight: "100%",
    display: "block",
  },

  projectInnerDescWrapper: {
    width: "100%",
    maxHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  projectInnerIconsWrapper: {
    display: "flex",
    margin: "15px 15px 0px 15px",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  projectInnerTextWrapper: {
    maxHeight: "100%",
    flex: 1,
  },
}));

export default ProjectOverview;
