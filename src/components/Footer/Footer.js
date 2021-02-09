import React from "react";
import { Container } from "@material-ui/core";
import { Context } from "../../store/Store";
import ContactForm from "./ContactForm";
import { nav, icons } from "./listItems";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const classes = useStyles();
  const [state, dispatch] = React.useContext(Context);
  const linkRefs = React.useRef([]);

  React.useEffect(() => {
    gsap.fromTo(
      linkRefs.current,
      { y: 400, ease: "power", opacity: 1 },
      {
        opacity: 1,
        y: 0,
        duration: 0.1,

        scrollTrigger: {
          id: "linksFooterWrapper",
          start: "85% 85%",

          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  const handleRefs = (e) => {
    if (e && !linkRefs.current.includes(e)) {
      linkRefs.current.push(e);
    }
  };

  return (
    <Container className={classes.footerParentWrapper} maxWidth="lg">
      <Paper
        id="linksFooterWrapper"
        ref={handleRefs}
        elevation={4}
        className={classes.mainContainer}
      >
        {state.isMessageLoading === true ? (
          <div className={classes.linearProgressWrapper}>
            <LinearProgress color="primary" variant="indeterminate" />
          </div>
        ) : null}

        <div className={classes.headingWrapper}>
          <h3>Contact Me</h3>
        </div>

        <Container className={classes.innerWrapper}>
          <ContactForm />
          <Grid
            className={classes.footerLeftWrapper}
            item
            xs={12}
            sm={12}
            md={5}
            lg={4}
          >
            <div className={classes.list}>
              {icons.map((m, key) => (
                <div className={classes.liSpanWrapper} key={key}>
                  {m.link ? (
                    <div className={classes.liSpan}>
                      <a className="footerSpan" href={m.link}>
                        {m.icon}
                      </a>
                      <span className="footerSpan footerSpanInfo">
                        {m.info}
                      </span>
                    </div>
                  ) : (
                    <div className={classes.liSpan}>
                      <span className="footerSpan">{m.icon}</span>
                      <span className="footerSpan footerSpanInfo">
                        {" "}
                        {m.info}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Grid>
        </Container>

        <div className={classes.footerBottomWrapper}>
          <span
            style={{
              width: "100%",
              fontSize: ".75rem",
              color: "#000",
              textAlign: "left",
            }}
          >
            @ 2021 Jonathan Villa. All Rights Reserved.
          </span>
        </div>
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  footerParentWrapper: {
    boxSizing: "border-box",
    paddingTop: "80px",
    overflow: "hidden",
  },
  mainContainer: {
    transition: ".6s",
    overflowY: "hidden",
    position: "relative",
    overflowX: "hidden",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    backgroundColor: "#ffffff",
    display: "flex",
    height: "auto",
    width: "100%",
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingTop: "1.4em",
    paddingBottom: "1.4em",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  innerWrapper: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerLeftWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100% ",
  },
  footerBottomWrapper: {
    paddingTop: "15px",
    height: "fit-content",
    width: "100%",
    display: "flex",
    paddingLeft: "24px",
    paddingRight: "24px",

    justifyContent: "flex-start",

    [theme.breakpoints.down("xs")]: {
      paddingRight: "20px",
      paddingLeft: "20px",
    },
  },

  link: {
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    textAlign: "center",
    fontSize: "1em",
    color: "#000",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "100%",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "15px",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
  },

  liSpanWrapper: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    marginTop: "10px",
    marginBottom: "10px",
    transition: ".6s",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  liSpan: {
    textAlign: "center",
    height: "auto",
    width: "100%",
    fontSize: ".98em",
    display: "flex",
    marginRight: "20px",
    wordWrap: "break-word",

    [theme.breakpoints.down("md")]: {
      fontSize: ".90em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".80em",
      margin: "0px",
      display: "flex",
      flex: 1,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8em",
    },
  },

  headingWrapper: {
    width: "100%",
    fontSize: "1.5em",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "24px",
    paddingRight: "24px",

    [theme.breakpoints.down("xs")]: {
      paddingRight: "20px",
      paddingLeft: "20px",
    },
  },

  linearProgressWrapper: {
    position: "absolute",
    width: "100%",
    right: "0",
    top: "0",
  },
}));

export { Footer };
