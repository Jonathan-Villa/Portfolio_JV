import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "static",
    textAlign: "center",
    height: "30vh",
    width:"100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 1,
  },

  title: {
    color: "black",
  },
  subtitle: {
    color: "black",
    textTransform: "uppercase",
  },
}));
