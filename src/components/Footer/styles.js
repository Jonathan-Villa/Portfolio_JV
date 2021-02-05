import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    height: "auto",
    width: "100%",
    position: "relative",
    paddingTop: "1.5em",
    paddingBottom: "1.5em",
    flexDirection: "column",
  },
  subWrapper: {
    display: "flex",
    boxSizing: "border-box",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  footerTopWrapper: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor:"#caf0f8"
  },
  footerBottomWrapper: {
    padding: "10px 0px",
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
  },
  listWrapper: {
    width: "100% ",
    gridColumn: "2",
    display: "flex",
  },
  list: {
    display: "flex",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  link: {
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    textAlign: "center",
    width: "100%",
    fontSize: "1em",
    color: "#000",
  },

  btnIconList: {
    paddingTop: "0px",
    paddingBottom: "0px",
  },
  btnIcons: {
    padding: "0px 6px",

    "&:hover": {
      transition: ".4s ease",
      backgroundColor: "transparent",
    },
  },

  verticalDividerWrapper: {
    paddingRight: "20px",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    boxSizing: "border-box",
    height: "auto",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  dividerDiv: {
    height: "100%",
  },

  divider: {
    height: "100%",
  },
}));
