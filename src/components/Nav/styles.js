import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
    backgroundColor: "#212529",
    height: "80px",
    display: "flex",
    justifyContent: "center",
  },
  topNavBar: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    height: "fit-content",
    alignItems: "center",
  },
  list: {
    display: "flex",
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
  topNavBarLogoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "24px",
    height: "100%",
    alignItems: "center",
  },
  topNavLogo: {
    height: "100%",
    color: "#ffff",
    textDecoration: "none",
    fontSize: "1.2rem",
    cursor: "pointer",

    "&:hover": {
      color: "#adb5bd",
    },
  },
}));
