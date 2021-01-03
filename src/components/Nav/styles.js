import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Tabs } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  appBar: {
    width:"100%",
    backgroundColor: "#0f4c75",
    height:"68px",
    display:"flex",
   alignItems:"center",
    justifyContent:"center"
  },
  topNavBar:{
    maxWidth:"960px",
    width:"100%", 
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },
  list: {

    display:"flex",
  },
  link: {
    marginRight:"10px",
    color: "#ffff",
    width: "auto",
    cursor:"pointer",
    "&:hover":{
      color:"#3282b8",
    }
  },
  hr:{
    height:".25em",
    width:"25%",
    margin: "0",
    background:"tomato",
    transition:".3s ease-in-out"
  },
  topNavLogo:{

    color:"#ffff",
    textDecoration:"none",
    fontSize:"15px",
    cursor:"pointer",
    "&:hover":{
      color:"#3282b8",
    }
  }
}));

