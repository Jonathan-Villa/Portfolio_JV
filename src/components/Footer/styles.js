import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
      backgroundColor:' #343a40',
      height: "30vh",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center"
    },
    subContainer:{
      display:"flex",
      height:"100%",
      width:"100%",
      justifyContent:"center",
      flexDirection:"column",


    },
    footerTopWrapper:{
      marginBottom:"10px",
      width:"100%",
      display:"flex",
      flexDirection:"column",
      alignItems:"flex-end"
    },
    footerBottomWrapper:{
  
      display:"flex",
      justifyContent:"space-between"
    },

    list: {
     display:"flex",
    },
    link:{
      fontFamily: "Merriweather, serif",
      fontFamily: "Noto Sans SC, sans-serif",
      textAlign:"left",
      width:"100%",
      fontSize:"13px",
      color:"#ffff",
      "&:hover":{
        color:"#adb5bd",
      }
    },

    btnIconList:{
      padding:"0px"
    }, 
    btnIcons:{
      padding:"0px 8px",
    }
  }));
  