import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    height: "4.25rem",
    display: "flex",
    zIndex: "99999999",
    alignItems: "center",
    justifyContent:"space-between",
    boxShadow: "none",
    width: "100%",
    backgroundColor: "#223843",
    [theme.breakpoints.down("md")]: {
      alignItems: "flex-start",
    },
  },
  desktopNavBar: {
    color: "#ffffff",
    width: "85%",
    display: "flex",
    
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
    height: "3rem",
    position: "relative",
    color: "#eff1f3",
    letterSpacing: ".04rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",

    "&after:": {
      content: "''",
      marginTop: "30px",
      width: "0%",
      bottom: "0",
      left: "0",
      right: "0",
      position: "absolute",
      backgroundColor: "#ccc",
      transition: "1s ease",
    },
    "&:hover:after": {
      content: "''",
      height: ".2rem",

      animation: "$hoverLink .3s ease",
      width: "0px",
      bottom: "0",
      left: "0",
      animationFillMode: "forwards",
      right: "0",
      position: "absolute",
      animationTimingFunction: "linear",
      animationDirection: "alternate",
      backgroundColor: "#0094d8",
      display: "block",
      transition: "1s ease",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginRight: "0",
      color: "#000000",
      padding: "0.75rem",

      justifyContent: "flex-start",

      "&:hover:after": {
        display: "none",
      },

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
    width: "fit-content",
    alignItems: "center",
    position: "relative",
    height: "2rem",
    margin: "0px 2rem",

    "&:hover:after": {
      content: "''",
      height: ".18rem",
      animation: "$hoverLink .3s ease",
      width: "0px",
      bottom: "0",
      left: "0",
      animationFillMode: "forwards",
      right: "0",
      position: "absolute",
      backgroundColor: "#0094d8",
      display: "block",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  topNavLogo: {
    textDecoration: "none",
    fontSize: "1.1rem",
    cursor: "pointer",
    display: "block",
    letterSpacing: ".1rem",
    color: "#eff1f3",

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
      backgroundColor: "#223843",
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

  "@keyframes hoverLink": {
    "0%": {
      paddingRight: "0%",
    },
    "100%": {
      paddingRight: "100%",
    },
  },
}));
