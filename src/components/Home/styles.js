import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  rootContainer: {
    position: "relative",
    marginTop: "60px",
    backgroundColor: "transparent",
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
    overflow:"hidden",

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  heading: {
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      top: "15%",
      left: "10%",
    },
  },
  headingWrap: {
    top: "-4em",
    position: "relative",
    width: "100%",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    paddingRight: "20px",

    [theme.breakpoints.down("xs")]: {
      top: "0%",
    },
  },

  txtHeading: {
    fontSize: "4.8em",
    width: "100%",
    height: "auto",

    [theme.breakpoints.down("md")]: {
      fontSize: "4.3em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.0em",
    },
  },

  txtSubHeading: {
    width: "100%",
    overflow: "hidden",
    maxHeight: "auto",
    fontSize: "2.2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },

    "&::after": {
      display: "block",
      content: '""',
      position: "relative",
      top: "0",
      left: "0",
      right: "0",
      width: "9.7em",
      height: "5px",
      backgroundColor: "#f79824",
      animation: "$subHeadPsuedo 1.2s ease",
    },
  },
  imgSvgWrapper: {
    height: "400px",
    width: "400px",
    display: "flex",
    justifyContent: "center",
  },
  svg: {
    width: "100%",
    height: "100%",
  },

  "@keyframes subHeadPsuedo": {
    "0%": {
      transform: "translateX(-400px)",
    },
    "100%": {
      transform: "translateX(0px)",
    },
  },
}));
