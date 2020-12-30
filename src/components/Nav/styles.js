import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "#ffff",
    height: "68px",
    width:"100%",
    display: "flex",
    justifyContent: "center",
  },
  list: {
    margin: "0px",
    padding: "0px",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "16px",
  },
  link: {
    paddingRight:"10px",
    borderRadius: "10px",
    color:"black",
    width: "auto",
  },
}));
