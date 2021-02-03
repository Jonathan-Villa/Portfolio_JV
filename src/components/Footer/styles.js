import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme) => ({
  subContainer: {
    display: "flex",
    height: "30vh",
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
  },
  footerTopWrapper: {
    marginBottom: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  footerBottomWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },

  list: {
    display: "flex",
  },
  link: {
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    textAlign: "left",
    width: "100%",
    fontSize: "13px",
    color: "#000",
    "&:hover": {
      color: "#adb5bd",
    },
  },

  btnIconList: {
    padding: "0px",
  },
  btnIcons: {
    margin: "0px 8px",
    padding: "0px",
  },
}));
