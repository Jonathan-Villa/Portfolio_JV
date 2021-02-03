import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    backgroundColor: "#ffff",
    height: "80px",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      backgroundColor: "#212529",
    },
  },
  desktopNavBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    position: "static",
    color: "#000",
    backgroundColor: "#ffff",
    transition: ".2s ease",
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
    width: "auto",
    cursor: "pointer",
    "&:hover": {
      color: "#adb5bd",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: "0px ",

      "&:hover": {
        backgroundColor: "#adb5bd",
        color: "#000",
        transition: ".2s ease",
      },
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
    color: "#000",
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
      height: "100%",
      width: "100%",
      display: "flex",
      backgroundColor: "#ff4646",
      justifyContent: "space-between",
      boxSizing: "border-box",
      padding: "10px",
    },
  },

  mobileDrawer: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "200px",
      justifyContent: "flex-start",
      backgroundColor: "grey",
      alignItems: "flex-start",
      position: "fixed",
      transform: "translateX(-200px)",
      transition: ".4s ease",
      zIndex: "9999",
      backgroundColor: "#ffff",
      boxShadow: "4px 0px 6px -2px rgba(0,0,0,.2)",
    },
  },
  listMobileWrapper: {
    width: "100%",
    height: "100%",
  },
}));
