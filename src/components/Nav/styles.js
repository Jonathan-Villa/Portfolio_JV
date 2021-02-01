import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    backgroundColor: "#212529",
    height: "80px",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  desktopNavBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    alignItems: "center",
    position: "static",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    width: "auto",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  link: {
    marginRight: "10px",
    color: "#ffff",
    width: "auto",
    cursor: "pointer",
    "&:hover": {
      color: "#adb5bd",
    },
  },
  desktopLogoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "24px",
    height: "100%",
    alignItems: "center",
    position: "static",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  topNavLogo: {
    height: "100%",
    color: "#ffff",
    textDecoration: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    display: "block",
    "&:hover": {
      color: "#adb5bd",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  btnMobileMenu: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "100%",
      height: "fit-content",
      paddingBottom: "13px",
      paddingTop: "13px",
      boxSizing: "border-box",
    },
  },

  mobileDisableWrapper: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      position: "relative",
      height: "fit-content",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      boxSizing: "border-box",
      padding: "10px",
    },
  },

  mobileDrawer: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#212529",
      height: "100vh",
      width: "200px",
      justifyContent: "flex-start",
      backgroundColor: "grey",
      alignItems: "flex-start",
      position: "absolute",
      top: "0%",
      left: "0%",
      zIndex: "10000",
    },
  },

  // backDrop: {
  //   display: "none",

  //   [theme.breakpoints.down("md")]: {
  //     display: "block",
  //     position: "absolute",
  //     zIndex:"-1px",
  //     opacity: ".4",
  //     backgroundColor: "black",
  //     width:"100% ",
  //     height:"100vh",
  //     top:"0%",
  //     left:"0% "
  //   },
  // },
}));
