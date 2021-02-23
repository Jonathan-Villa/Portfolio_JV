import React from "react";
import { Container, Divider } from "@material-ui/core";
import { Context } from "../../store/Store";
import ContactForm from "./ContactForm";
import { nav, icons } from "./listItems";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Paper from "@material-ui/core/Paper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Link } from "react-scroll";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import "./style.css";

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
          start: "92% 87%",
          toggleActions: "play none none reset",
        },
      }
    );
  }, []);

  return (
    <Container
      id="contact"
      className={classes.footerParentWrapper}
      maxWidth="md"
    >
      <Paper
        id="linksFooterWrapper"
        ref={linkRefs}
        elevation={4}
        className={classes.mainContainer}
      >
        <ThemeProvider theme={theme}>
          {state.isMessageLoading === true ? (
            <div className={classes.linearProgressWrapper}>
              <LinearProgress color="primary" variant="indeterminate" />
            </div>
          ) : null}

          <div className={classes.headingWrapper}>
            <h3>Contact Me</h3>

            <div className={classes.linkfooterWrapper}>
              {nav.map((m, key) => (
                <div key={key} className="linkBtn">
                  <Link
                    style={{ width: "2rem" }}
                    to={m.to}
                    smooth={true}
                    duration={1000}
                  >
                    {m.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Container className={classes.innerWrapper}>
            <ContactForm />
          </Container>

          <div className={classes.footerBottomWrapper}>
            <div className={classes.footerBottomCPWrapper}>
              <span> @ 2021 Jonathan Villa. All Rights Reserved.</span>
            </div>
            <div className={classes.footerContactListWrapper}>
              {icons.map((m, key) => (
                <div className={classes.liSpanWrapper} key={key}>
                  {m.link ? (
                    <div className={classes.liSpan}>
                      <a className="footerSpan" href={m.link}>
                        {m.icon}
                      </a>
                    </div>
                  ) : (
                    <div className={classes.liSpan}>
                      <a className="footerSpan">{m.icon}</a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ThemeProvider>
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  footerParentWrapper: {
    boxSizing: "border-box",
    paddingTop: "0px",
    overflow: "hidden",
    display: "block",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },
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

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
    },

    [theme.breakpoints.down("xs")]: {
      borderRadius: "0px",
    },
  },
  innerWrapper: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    position: "relative",
    boxSizing: "border-box",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerLeftWrapper: {
    position: "static",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    boxSizing: "border-box",
    paddingBottom: "15px",
    alignItems: "flex-start",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  footerBottomWrapper: {
    paddingTop: "15px",
    height: "fit-content",
    width: "100%",
    display: "flex",
    paddingLeft: "24px",
    paddingRight: "24px",

    [theme.breakpoints.down("xs")]: {
      paddingRight: "20px",
      paddingLeft: "20px",
    },
  },

  footerBottomCPWrapper: {
    width: "100%",
    fontSize: ".75rem",
    color: "#000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  footerContactListWrapper: {
    width: "auto",
    display: "flex",
    justifyContent: "flex-end",
  },

  link: {
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    textAlign: "center",
    fontSize: "1em",
    color: "#000",
  },

  liSpanWrapper: {
    maxHeight: "inherit",
    width: "auto",
    boxSizing: "border-box",
    whiteSpace: "pre-wrap",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  liSpan: {
    textAlign: "center",
    height: "fit-content",
    width: "auto",
    fontSize: ".98em",
    display: "flex",

    [theme.breakpoints.down("md")]: {
      fontSize: ".87em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".82em",
      margin: "0px",
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
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      paddingRight: "20px",
      paddingLeft: "20px",
      flexDirection: "column",
    },
  },

  linearProgressWrapper: {
    position: "absolute",
    width: "100%",
    right: "0",
    top: "0",
  },

  linkfooterWrapper: {
    display: "flex",
    width: "auto",
    height: "auto",
    fontSize: "1rem",
    position: "relative",
    boxSizing: "border-box",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0094d8",
    },
    secondary: {
      main: "#f79824",
    },
  },
});

export { Footer };
