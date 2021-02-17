import React from "react";
import { Container } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import "./styles.css";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import BgImg from "../../images/landPageSVG.svg";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { Link } from "react-scroll";
const Home = () => {
  const classes = useStyles();

  return (
    <Container
      disableGutters
      id="home"
      maxWidth="xl"
      className={classes.rootContainer}
    >
      <ThemeProvider theme={theme}>
        <Container className={classes.subContainer}>
          <Paper elevation={13} className={classes.headingWrapper}>
            <div className={classes.headingInnerWrapper}>
              <div>
                <h1 className={classes.txtHeading}>
                  Hello, I'm{" "}
                  <span className={classes.mainHeadingName}>
                    {" "}
                    Jonathan Villa!
                  </span>
                </h1>
              </div>
              <div className={classes.subHeadingWrapper}>
                <h2 className={classes.txtSubHeading}>
                  <span style={{ borderBottom: "3px solid #0094d8" }}>
                    Full-stack developer{" "}
                  </span>
                  seeking a challenging opportunity to develop responsive,
                  tangible, and accessible software.
                </h2>
              </div>

              <div className={classes.headingBtnWrapper}>
                <Button
                  className={classes.btnProjects}
                  color="primary"
                  variant="contained"
                >
                  <Link to="projects" smooth={true} duration={1000}>
                    Projects
                  </Link>
                </Button>
              </div>
            </div>
          </Paper>

          <div className="bg-imgWrapper">
            <img className="bg-img" src={BgImg} />
          </div>
        </Container>
      </ThemeProvider>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  rootContainer: {
    height: "60.5rem",
    maxWidth: "100%",
    display: "flex",
    zIndex: 1,
  },
  subContainer: {
    marginTop: "4.25rem",
    maxWidth: "85%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "auto",

    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
      paddingLeft: "0px",
      paddingRight: "0px",
      justifyContent: "center",
      alignItems: "flex-start",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      paddingLeft: "0px",
      paddingRight: "0px",
    },
  },

  headingWrapper: {
    position: "relative",
    backgroundColor: "#223843",
    top: "-3.5rem",
    padding: "40px",
    boxSizing: "border-box",
    height: "38rem",
    maxWidth: "70rem",
    textAlign: "left",
    letterSpacing: ".1rem",

    [theme.breakpoints.down("md")]: {
      top: "0%",
      height: "100%",
      maxWidth: "100%",
      borderRadius: "0px",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "24px",
      display: "flex",
    },
  },

  headingInnerWrapper: {
    height: "100%",
    maxWidth: "100%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      height: "60%",
      margin: "auto",
      justifyContent: "center",
    },
  },

  txtHeading: {
    color: "#eff1f3",
    fontSize: "3.7rem",
    width: "100%",
    backgroundColor: "transparent",
    outline: "none",
    height: "auto",
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      fontSize: "3.2rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.8rem",
    },

    "@media(max-width:485px)": {
      fontSize: "2.4rem",
    },
  },

  mainHeadingName: {},

  subHeadingWrapper: {
    maxWidth: "80%",

    [theme.breakpoints.down("md")]: {
      maxWidth: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "95%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  txtSubHeading: {
    maxWidth: "100%",
    color: "#eff1f3",
    overflow: "hidden",
    height: "100%",
    display: "block",
    marginTop: "1em",
    marginBottom: "1em",
    textJustify: "inherit",
    wordWrap: "break-word",
    fontSize: "1.4rem",
    lineHeight: "2rem",

    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
      lineHeight: "1.8rem",
    },

    "@media(max-width:485px)": {
      fontSize: "1rem",
    },
  },
  imgSvgWrapper: {
    height: "400px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
  },
  headingBtnWrapper: {
    height: "auto",
    maxWidth: "100%",
    marginTop: "40px",
  },

  btnProjects: {
    fontWeight: "600",
    zIndex: 999,
    letterSpacing: ".1rem",
    color: "#eff1f3",
    fontSize: ".85rem",

    [theme.breakpoints.down("md")]: {
      fontSize: ".96rem",
    },

    [theme.breakpoints.down("xs")]: {},

    "@media(max-width:485px)": {
      fontSize: ".9rem",
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
export { Home };

{
  /* 
          <div className="thinkBoxWrapper">
            <div className="thinkBoxTxtWrapper">
              <span className="txtInBox">Think</span>
              <span className="txtInBox">Outside</span>
              <span className="txtInBox">The</span>
              <span className="txtBox">Box</span>
            </div>
          </div> */
}
