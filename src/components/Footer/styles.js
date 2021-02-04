import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme) => ({
  subContainer: {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column",

  },
  footerTopWrapper: {
    marginTop:"60px",
    marginBottom: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  footerBottomWrapper: {
    marginTop:"10px",
    marginBottom: "60px",
    display: "flex",
    justifyContent: "space-between",
  },

  list: {
    display: "flex",
  },
  link: {
    fontFamily: "Merriweather, serif",
    fontFamily: "Noto Sans SC, sans-serif",
    textAlign: "center",
    width: "100%",
    fontSize: "13px",
    color: "#000",

  },

  btnIconList: {
    padding: "0px",
  },
  btnIcons: {
    margin: "0px 8px",
    padding: "0px",

    "&:hover":{
      transition:".4s ease",
      backgroundColor:"transparent"
    }
  },
}));
