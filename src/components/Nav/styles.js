import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    height: "60px",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    boxShadow: "none",
    background: "transparent",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  desktopNavBar: {
    color: "#000000",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#2176ff",
    transition: ".2s ease",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    width: "auto",
    position: "relative",
    height: "100%",
    color: "#000000",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  link: {
    fontSize: "1.1em",
    marginRight: "10px",
    width: "auto",
    height: "auto",
    position: "relative",
    color: "#ffffff",

    cursor: "pointer",
    "&:hover": {
      color: "#caf0f8",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: "0px ",
      color: "#000000",

      "&:hover": {
        backgroundColor: "#f79824",
        color: "#ffffff",
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
    textDecoration: "none",
    fontSize: "1.1em",
    cursor: "pointer",
    display: "block",
    color: "#ffffff",
    "&:hover": {
      color: "#f79824",
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
      position: "relative",
    },
  },

  mobileDisableWrapper: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      position: "relative",
      height: "100%",
      width: "100%",
      display: "flex",
      backgroundColor: "#",
      justifyContent: "space-between",
      boxSizing: "border-box",
      padding: "10px",
      backgroundColor: "#2176ff",
    },
  },

  mobileDrawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "200px",
      justifyContent: "flex-start",
      backgroundColor: "grey",
      alignItems: "flex-start",
      position: "fixed",
      transform: "translateX(-300px)",
      transition: ".4s ease",
      zIndex: "9999",
      backgroundColor: "#ffff",
      boxShadow: "6px 3px 4px -1px rgba(0,0,0,.2)",
    },
  },
  listMobileWrapper: {
    width: "100%",
    height: "100%",
  },
}));
