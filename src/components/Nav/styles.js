import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    height: "80px",
    display: "flex",
    position: "fixed",
    justifyContent: "center",
    boxShadow:"none",
    backgroundColor: "#ffffff",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
      boxShadow:"0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      backgroundColor:"#ffffff"
    },
  },
  desktopNavBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    position: "relative",
    backgroundColor: "transparent",
    transition: ".2s ease",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    width: "auto",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  link: {
    marginRight: "10px",
    width: "auto",
    position: "relative",
    color: "#000000",
    cursor: "pointer",
    "&:hover": {
      color: "#adb5bd",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: "0px ",

      "&:hover": {
        backgroundColor: "#adb5bd",
        color: "#000000",
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
    fontSize: "1.2rem",
    cursor: "pointer",
    display: "block",
    color: "#000000",
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
    },
  },

  mobileDrawer: {
    display:"none",
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
