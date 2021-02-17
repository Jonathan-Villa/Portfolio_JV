import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    height: "4.25rem",
    display: "flex",
    zIndex: "99999999",
    justifyContent: "center",
    boxShadow: "none",
    backgroundColor: "transparent",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  desktopNavBar: {
    color: "#ffffff",
    width: "100%",
    display: "flex",
    backgroundColor: "#eff1f3",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
    position: "relative",
    transition: ".2s ease",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    position: "relative",
    height: "100%",
    color: "#000000",
    marginRight: ".625rem",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
      width: "100%",
      marginRight: "0",
    },
  },
  link: {
    fontSize: "1.1rem",
    width: "8rem",
    marginRight: "1rem",
    textAlign: "center",
    height: "auto",
    position: "relative",
    color: "#000000",
    letterSpacing: ".04rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#ccc",

      transition: ".2s ease",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: "0",
      color: "#000000",
      padding: "0.75rem",

      justifyContent: "flex-start",

      "&:hover": {
        backgroundColor: "#ccc",

        transition: ".2s ease",
      },
    },
  },
  desktopLogoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "1.625rem",
    height: "100%",
    width: "8rem",
    alignItems: "center",
    position: "static",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  topNavLogo: {
    height: "100%",
    textDecoration: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
    display: "block",
    letterSpacing: ".1rem",
    color: "#000000",
    "&:hover": {
      color: "#f79824",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  btnMobileMenu: {
    display: "none",
    transition: "1s ease",
  },

  btnActiveMenu: {
    [theme.breakpoints.down("md")]: {
      display: "block",
      width: "auto",
      height: "fit-content",
      boxSizing: "border-box",
      position: "relative",
    },
  },

  mobileDisableWrapper: {
    display: "none",

    [theme.breakpoints.down("md")]: {
      height: "100%",
      width: "100%",
      position: "relative",
      display: "flex",
      overflow: "hidden",
      zIndex: "999999999",
      justifyContent: "space-between",
      boxSizing: "border-box",
      padding: ".625rem 0px",
      backgroundColor: "#0094d8",
    },
  },

  mobileDrawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      position: "fixed",
      display: "block",
      zIndex: "9999",
      width: "200px",
      height: "100vh",
      backgroundColor: "#eff1f3",
      transform: "translateX(-300px)",
      transition: ".4s ease",
      boxShadow: "6px 3px 4px -1px rgba(0,0,0,.2)",
    },
  },
  listMobileWrapper: {
    height: "auto",
    width: "100%",
  },
}));
