import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme) => ({
    mainContainer: {
      backgroundColor:' #1b262c',
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
      fontFamily:"Varela Round, san serif",
      textAlign:"left",
      width:"100%",
      fontSize:"13px",
      color:"#ffff",
      "&:hover":{
        color:"#3282b8",
      }
    },

    btnIconList:{
      padding:"0px"
    }, 
    btnIcons:{
      padding:"0px 8px",
    }
  }));
  