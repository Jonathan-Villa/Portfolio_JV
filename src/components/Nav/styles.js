import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ffff",
    height: "68px",
    display: "flex",
    justifyContent: "center",
  },
  list: {
    margin: "0px",
    padding: "0px",
    display: "flex",
    justifyContent: "flex-end",

    marginRight: "16px",
  },
  listItem: {
    borderRadius: "10px",
    color:"black",
    width: "auto",
  },
  linkTxt: {
    color: "black",

  },
}));
