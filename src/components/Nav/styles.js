import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  appBar: {
    backgroundColor: "#0f4c75",
    height:"68px",
    display:"flex",
    justifyContent:"center"
  },
  list: {
    marginLeft:"16px",
    display:"flex"
  },
  link: {
    marginRight:"10px",
    color: "#ffff",
    width: "auto",

    "&:hover":{
      backgroundColor:"#3282b8",
      
    }
  },
}));

